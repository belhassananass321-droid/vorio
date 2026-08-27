// Publish the github-pages artifact without the 10-minute cancel that
// actions/deploy-pages applies. Also clear a stuck prior Pages deployment
// lock before creating a new one (GitHub returns 400 until that lock drops).
module.exports = async function publishPages({ github, context, core }) {
  const owner = context.repo.owner;
  const repo = context.repo.repo;
  const sha = context.sha;
  const runId = context.runId;
  const pollMs = 10 * 1000;
  const retryMs = 45 * 1000;
  const maxWaitMs = 25 * 60 * 1000;
  const pageUrl = `https://${owner}.github.io/${repo}/`;
  const stuckSha = "c59da0a4d25d1fe7e3f94c9144ab8f3b38d27396";

  async function cancelDeployment(deploymentId) {
    try {
      await github.request("POST /repos/{owner}/{repo}/pages/deployments/{deploymentId}/cancel", {
        owner,
        repo,
        deploymentId
      });
      core.info(`Canceled Pages deployment ${deploymentId}`);
    } catch (error) {
      core.warning(`Cancel ${deploymentId} failed (${error.status}): ${error.message}`);
    }
  }

  async function deploymentStatus(deploymentId) {
    try {
      const current = await github.request(
        "GET /repos/{owner}/{repo}/pages/deployments/{deploymentId}",
        { owner, repo, deploymentId }
      );
      return current.data.status || "";
    } catch (error) {
      core.warning(`Status ${deploymentId} failed (${error.status}): ${error.message}`);
      return "";
    }
  }

  const artifacts = await github.rest.actions.listWorkflowRunArtifacts({
    owner,
    repo,
    run_id: runId,
    per_page: 100
  });
  const artifact = artifacts.data.artifacts.find((item) => item.name === "github-pages");
  if (!artifact) {
    throw new Error(
      `No github-pages artifact in run ${runId}. Artifacts: ${artifacts.data.artifacts
        .map((item) => item.name)
        .join(", ") || "(none)"}`
    );
  }

  core.info(`Using artifact ${artifact.id} (${artifact.size_in_bytes} bytes) for ${sha}`);

  const stuckStatus = await deploymentStatus(stuckSha);
  core.info(`Prior deployment ${stuckSha} status: ${stuckStatus || "(empty)"}`);
  if (stuckStatus && stuckStatus !== "succeed") {
    await cancelDeployment(stuckSha);
  }

  const idToken = await core.getIDToken();
  const started = Date.now();
  let created;

  while (Date.now() - started < maxWaitMs) {
    try {
      created = await github.request("POST /repos/{owner}/{repo}/pages/deployments", {
        owner,
        repo,
        artifact_id: artifact.id,
        pages_build_version: sha,
        oidc_token: idToken
      });
      break;
    } catch (error) {
      const message = error.message || "";
      const retryable =
        error.status === 400 && /in progress deployment|Please cancel/i.test(message);
      core.warning(`Create deployment failed (${error.status}): ${message}`);
      if (!retryable) {
        throw error;
      }
      const match = message.match(/cancel ([0-9a-f]{40}) first/i);
      if (match) {
        await cancelDeployment(match[1]);
      } else {
        await cancelDeployment(stuckSha);
      }
      core.info("Waiting for the stuck Pages lock to clear...");
      await new Promise((resolve) => setTimeout(resolve, retryMs));
    }
  }

  if (!created) {
    throw new Error("Timed out waiting for the previous Pages deployment lock to clear.");
  }

  const deploymentId = created.data.id || sha;
  core.info(`Created Pages deployment ${deploymentId}`);
  core.info(JSON.stringify(created.data));
  core.setOutput("page_url", created.data.page_url || pageUrl);

  while (Date.now() - started < maxWaitMs) {
    await new Promise((resolve) => setTimeout(resolve, pollMs));
    const status = await deploymentStatus(deploymentId);
    core.info(`Current status: ${status || "(empty)"}`);

    if (status === "succeed") {
      core.info("Reported success!");
      core.setOutput("status", "succeed");
      return;
    }

    if (
      status === "deployment_failed" ||
      status === "deployment_content_failed" ||
      status === "deployment_cancelled" ||
      status === "deployment_lost"
    ) {
      throw new Error(`Pages deployment ended with ${status}`);
    }
  }

  // Do not cancel. A slow Pages publish can still go live after this job ends.
  core.warning(
    "Still publishing after 25 minutes; leaving the deployment running so GitHub can finish it."
  );
  core.setOutput("status", "updating_pages");
};
