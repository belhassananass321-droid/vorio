// Publish the github-pages artifact without the 10-minute cancel that
// actions/deploy-pages applies. GitHub Pages can sit in updating_pages
// longer than that; cancelling leaves the previous site live forever.
module.exports = async function publishPages({ github, context, core }) {
  const owner = context.repo.owner;
  const repo = context.repo.repo;
  const sha = context.sha;
  const runId = context.runId;
  const pollMs = 10 * 1000;
  const maxWaitMs = 25 * 60 * 1000;
  const pageUrl = `https://${owner}.github.io/${repo}/`;

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

  const idToken = await core.getIDToken();

  let created;
  for (let attempt = 1; attempt <= 6; attempt += 1) {
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
      core.warning(`Create deployment attempt ${attempt} failed (${error.status}): ${message}`);
      if (!retryable || attempt === 6) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 20 * 1000));
    }
  }

  const deploymentId = created.data.id || sha;
  core.info(`Created Pages deployment ${deploymentId}`);
  core.info(JSON.stringify(created.data));
  core.setOutput("page_url", created.data.page_url || pageUrl);

  const started = Date.now();
  while (Date.now() - started < maxWaitMs) {
    await new Promise((resolve) => setTimeout(resolve, pollMs));
    let status = "unknown_status";
    try {
      const current = await github.request(
        "GET /repos/{owner}/{repo}/pages/deployments/{deploymentId}",
        { owner, repo, deploymentId }
      );
      status = current.data.status || "unknown_status";
    } catch (error) {
      core.warning(`Status poll failed (${error.status}): ${error.message}`);
    }

    core.info(`Current status: ${status}`);

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
