(function () {
  const page = document.body.getAttribute("data-page");
  const C = window.CONTENT;

  function lockupSvg(color) {
    // Art-signed emblem: oversized V, small ORIO nested in the valley,
    // star seated in the base notch. viewBox 0 0 900 820 — no bleed rect.
    return (
      '<svg class="lockup-svg" viewBox="0 0 900 820" aria-hidden="true" focusable="false">' +
      '<path fill="' +
      color +
      '" d="M 80.815,74.815 L 185.901,74.815 L 434.664,589.496 L 424.657,634.815 L 371.185,634.815 Z"/>' +
      '<path fill="' +
      color +
      '" d="M 819.185,74.815 L 714.099,74.815 L 465.336,589.496 L 475.343,634.815 L 528.815,634.815 Z"/>' +
      '<path fill="#1E6BFF" d="M 450.000,573.284 L 466.631,648.603 L 524.667,665.235 L 466.631,681.866 L 450.000,757.185 L 433.369,681.866 L 375.333,665.235 L 433.369,648.603 Z"/>' +
      '<g transform="translate(343.335,325.423)">' +
      '<path fill="' +
      color +
      '" d="M33.84 1.12Q27.12 1.12 21.44 -1.04Q15.76 -3.2 11.56 -7.12Q7.36 -11.04 5.04 -16.36Q2.72 -21.68 2.72 -28Q2.72 -34.32 5.04 -39.64Q7.36 -44.96 11.56 -48.88Q15.76 -52.8 21.44 -54.96Q27.12 -57.12 33.84 -57.12Q40.56 -57.12 46.24 -54.96Q51.92 -52.8 56.12 -48.88Q60.32 -44.96 62.64 -39.64Q64.96 -34.32 64.96 -28Q64.96 -21.68 62.64 -16.36Q60.32 -11.04 56.12 -7.12Q51.92 -3.2 46.24 -1.04Q40.56 1.12 33.84 1.12ZM33.84 -12Q38.08 -12 41.52 -13.96Q44.96 -15.92 46.96 -19.52Q48.96 -23.12 48.96 -28Q48.96 -32.88 46.96 -36.48Q44.96 -40.08 41.52 -42.04Q38.08 -44 33.84 -44Q29.6 -44 26.16 -42.04Q22.72 -40.08 20.72 -36.48Q18.72 -32.88 18.72 -28Q18.72 -23.12 20.72 -19.52Q22.72 -15.92 26.16 -13.96Q29.6 -12 33.84 -12Z"/>' +
      '<path fill="' +
      color +
      '" d="M73.28 0V-56H98.32Q110.64 -56 117.2 -50.44Q123.76 -44.88 123.76 -35.28Q123.76 -29.12 120.88 -24.6Q118 -20.08 112.72 -17.6L124.88 0H107.92L97.76 -14.88H89.12V0ZM89.12 -27.12H97.92Q102.88 -27.12 105.32 -29.28Q107.76 -31.44 107.76 -35.28Q107.76 -39.2 105.32 -41.36Q102.88 -43.52 97.92 -43.52H89.12Z"/>' +
      '<path fill="' +
      color +
      '" d="M132.48 0V-56H148.32V0Z"/>' +
      '<path fill="' +
      color +
      '" d="M187.84 1.12Q181.12 1.12 175.44 -1.04Q169.76 -3.2 165.56 -7.12Q161.36 -11.04 159.04 -16.36Q156.72 -21.68 156.72 -28Q156.72 -34.32 159.04 -39.64Q161.36 -44.96 165.56 -48.88Q169.76 -52.8 175.44 -54.96Q181.12 -57.12 187.84 -57.12Q194.56 -57.12 200.24 -54.96Q205.92 -52.8 210.12 -48.88Q214.32 -44.96 216.64 -39.64Q218.96 -34.32 218.96 -28Q218.96 -21.68 216.64 -16.36Q214.32 -11.04 210.12 -7.12Q205.92 -3.2 200.24 -1.04Q194.56 1.12 187.84 1.12ZM187.84 -12Q192.08 -12 195.52 -13.96Q198.96 -15.92 200.96 -19.52Q202.96 -23.12 202.96 -28Q202.96 -32.88 200.96 -36.48Q198.96 -40.08 195.52 -42.04Q192.08 -44 187.84 -44Q183.6 -44 180.16 -42.04Q176.72 -40.08 174.72 -36.48Q172.72 -32.88 172.72 -28Q172.72 -23.12 174.72 -19.52Q176.72 -15.92 180.16 -13.96Q183.6 -12 187.84 -12Z"/>' +
      "</g></svg>"
    );
  }

  function lockup(href, inverse) {
    const color = inverse ? "#F4F2EC" : "#0B1D36";
    return (
      '<a class="lockup" href="' +
      href +
      '" aria-label="Vorio">' +
      lockupSvg(color) +
      "</a>"
    );
  }

  function heroMark() {
    return (
      '<div class="hero-mark" aria-hidden="true">' + lockupSvg("#0B1D36") + "</div>"
    );
  }

  function renderHeader() {
    const links = C.nav
      .map(function (item) {
        const current = item.page === page ? ' aria-current="page"' : "";
        return '<a class="nav-link" href="' + item.href + '"' + current + ">" + item.label + "</a>";
      })
      .join("");
    const contactCurrent = C.contactNav.page === page ? ' aria-current="page"' : "";
    document.getElementById("site-header").innerHTML =
      '<div class="wrap"><div class="site-header-inner">' +
      lockup("index.html", false) +
      '<nav class="nav" aria-label="Primary">' +
      links +
      '<a class="btn" href="' +
      C.contactNav.href +
      '"' +
      contactCurrent +
      ">" +
      C.contactNav.label +
      "</a>" +
      "</nav></div></div>";
  }

  function renderFooter() {
    const links = C.footer.links
      .map(function (item) {
        return '<a href="' + item.href + '">' + item.label + "</a>";
      })
      .join("");
    document.getElementById("site-footer").innerHTML =
      '<div class="wrap"><div class="site-footer-inner">' +
      lockup("index.html", true) +
      '<nav class="footer-nav" aria-label="Footer">' +
      links +
      "</nav></div></div>";
  }

  function renderCloseBand() {
    const el = document.getElementById("close-band");
    if (!el) return;
    const b = C.closeBand;
    el.innerHTML =
      '<div class="wrap"><h2>' +
      b.h2 +
      "</h2><p>" +
      b.body +
      '</p><a class="btn btn-fill-cream" href="' +
      b.href +
      '">' +
      b.button +
      "</a></div>";
  }

  function itemsHtml(items) {
    return (
      '<ul class="practice-items">' +
      items
        .map(function (item) {
          return (
            "<li><span class=\"lead\">" +
            item.lead +
            "</span> " +
            item.rest +
            "</li>"
          );
        })
        .join("") +
      "</ul>"
    );
  }

  function renderHome() {
    const h = C.home;
    const panels =
      '<div class="market-grid">' +
      '<article class="market-panel">' +
      "<h3>" +
      h.twoWays.commercial.title +
      "</h3><p>" +
      h.twoWays.commercial.body +
      '</p><a class="text-link" href="' +
      h.twoWays.commercial.href +
      '">' +
      h.twoWays.commercial.link +
      "</a></article>" +
      '<article class="market-panel">' +
      "<h3>" +
      h.twoWays.govcon.title +
      "</h3><p>" +
      h.twoWays.govcon.body +
      '</p><a class="text-link" href="' +
      h.twoWays.govcon.href +
      '">' +
      h.twoWays.govcon.link +
      "</a></article></div>";
    const process = C.howWeWork.steps
      .map(function (step) {
        return (
          '<div class="process-item"><div class="process-num">' +
          step.num +
          '</div><div class="process-title">' +
          step.title +
          "</div></div>"
        );
      })
      .join("");
    document.getElementById("page").innerHTML =
      '<section class="hero"><div class="wrap"><div class="hero-grid"><div>' +
      "<h1>" +
      h.h1 +
      '</h1><p class="dek">' +
      h.dek +
      '</p><p class="hero-body">' +
      h.body +
      '</p><p class="hero-lockup">' +
      h.lockup +
      '</p><div class="actions"><a class="btn" href="' +
      h.primary.href +
      '">' +
      h.primary.label +
      '</a><a class="btn btn-outline" href="' +
      h.secondary.href +
      '">' +
      h.secondary.label +
      "</a></div></div>" +
      heroMark() +
      "</div></div></section>" +
      '<section class="band band-rule"><div class="wrap"><h2>' +
      h.twoWays.h2 +
      "</h2>" +
      panels +
      "</div></section>" +
      '<section class="band band-navy"><div class="wrap"><h2>' +
      h.motion.h2 +
      '</h2><div class="process-strip">' +
      process +
      "</div><p>" +
      h.motion.body +
      '</p><div class="actions"><a class="btn btn-on-navy" href="' +
      h.motion.href +
      '">' +
      h.motion.button +
      "</a></div></div></section>" +
      '<section class="band"><div class="wrap"><h2>' +
      h.who.h2 +
      "</h2><p>" +
      h.who.body +
      '</p><p class="who-aside">' +
      h.who.aside +
      '</p><a class="text-link" href="' +
      h.who.href +
      '">' +
      h.who.link +
      "</a></div></section>";
  }

  function renderWhatWeDo() {
    const w = C.whatWeDo;
    const jump = w.jump
      .map(function (item, i) {
        const dot = i === 0 ? "" : '<span class="jump-dot" aria-hidden="true">·</span>';
        return dot + '<a href="' + item.href + '">' + item.label + "</a>";
      })
      .join("");
    document.getElementById("page").innerHTML =
      '<section class="page-intro"><div class="wrap"><h1>' +
      w.h1 +
      '</h1><p class="dek">' +
      w.dek +
      '</p><hr class="rule" /><div class="jump">' +
      jump +
      "</div></div></section>" +
      '<section class="page-split"><div class="wrap"><div class="market-grid">' +
      '<article class="market-panel" id="' +
      w.commercial.id +
      '"><h2>' +
      w.commercial.title +
      "</h2><p>" +
      w.commercial.body +
      "</p>" +
      itemsHtml(w.commercial.items) +
      '<div class="actions"><a class="btn btn-outline" href="' +
      w.button.href +
      '">' +
      w.button.label +
      "</a></div></article>" +
      '<article class="market-panel" id="' +
      w.govcon.id +
      '"><h2>' +
      w.govcon.title +
      "</h2><p>" +
      w.govcon.body +
      "</p>" +
      itemsHtml(w.govcon.items) +
      "</article></div></div></section>";
  }

  function renderHowWeWork() {
    const h = C.howWeWork;
    const steps = h.steps
      .map(function (step) {
        return (
          '<div class="step"><div class="step-num">' +
          step.num +
          '</div><div class="step-title">' +
          step.title +
          '</div><p class="step-body">' +
          step.body +
          "</p></div>"
        );
      })
      .join("");
    document.getElementById("page").innerHTML =
      '<section class="page-intro"><div class="wrap"><h1>' +
      h.h1 +
      '</h1><p class="dek">' +
      h.dek +
      '</p></div></section>' +
      '<div class="wrap"><div class="steps">' +
      steps +
      "</div></div>" +
      '<section class="depth"><div class="wrap"><h2>' +
      h.depth.h2 +
      "</h2><p>" +
      h.depth.body +
      "</p></div></section>";
  }

  function renderAbout() {
    const a = C.about;
    const blocks = a.sections
      .map(function (section) {
        return (
          '<section class="about-block"><div class="wrap"><h2>' +
          section.h2 +
          "</h2><p>" +
          section.body +
          "</p></div></section>"
        );
      })
      .join("");
    document.getElementById("page").innerHTML =
      '<section class="page-intro"><div class="wrap"><h1>' +
      a.h1 +
      '</h1><hr class="rule" /><p class="about-intro">' +
      a.intro +
      "</p></div></section>" +
      blocks;
  }

  function bindForm() {
    const form = document.getElementById("contact-form");
    const thanks = document.getElementById("contact-thanks");
    if (!form || !thanks) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      form.hidden = true;
      thanks.hidden = false;
      thanks.focus();
    });
  }

  function renderContact() {
    const c = C.contact;
    const f = c.form;
    const steps = c.next.steps
      .map(function (step) {
        return (
          '<div class="step"><div class="step-num">' +
          step.num +
          '</div><p class="step-body">' +
          step.body +
          "</p></div>"
        );
      })
      .join("");
    const options = f.needOptions
      .map(function (label, i) {
        return (
          '<label class="choice"><input type="radio" name="need" value="' +
          label +
          '" required' +
          (i === 0 ? "" : "") +
          "><span>" +
          label +
          "</span></label>"
        );
      })
      .join("");
    document.getElementById("page").innerHTML =
      '<section class="page-intro"><div class="wrap"><h1>' +
      c.h1 +
      '</h1><p class="dek">' +
      c.dek +
      '</p><hr class="rule" /></div></section>' +
      '<section class="contact-next"><div class="wrap"><h2>' +
      c.next.h2 +
      '</h2><div class="steps contact-steps">' +
      steps +
      "</div></div></section>" +
      '<section class="contact-form-wrap"><div class="wrap">' +
      '<form id="contact-form">' +
      '<div class="field"><label for="name">' +
      f.name +
      '</label><input id="name" name="name" type="text" autocomplete="name" required></div>' +
      '<div class="field"><label for="email">' +
      f.email +
      '</label><input id="email" name="email" type="email" autocomplete="email" required></div>' +
      '<div class="field"><label for="company">' +
      f.company +
      '</label><input id="company" name="company" type="text" autocomplete="organization" required></div>' +
      '<fieldset class="field"><legend class="field-legend">' +
      f.need +
      '</legend><div class="choices">' +
      options +
      '</div><p class="microcopy">' +
      f.needMicrocopy +
      "</p></fieldset>" +
      '<div class="field"><label for="chasing">' +
      f.chasing +
      '</label><textarea id="chasing" name="chasing" required></textarea></div>' +
      '<div class="field"><label for="phone">' +
      f.phone +
      '</label><input id="phone" name="phone" type="tel" autocomplete="tel"></div>' +
      '<div class="form-actions"><button class="btn" type="submit">' +
      f.submit +
      "</button></div></form>" +
      '<p class="thanks" id="contact-thanks" hidden tabindex="-1">' +
      c.thanks +
      "</p></div></section>";
    bindForm();
  }

  const titles = {
    home: C.titles.home,
    "what-we-do": C.titles.whatWeDo,
    "how-we-work": C.titles.howWeWork,
    about: C.titles.about,
    contact: C.titles.contact,
  };
  document.title = titles[page] || C.name;

  renderHeader();
  renderFooter();
  renderCloseBand();

  if (page === "home") renderHome();
  else if (page === "what-we-do") renderWhatWeDo();
  else if (page === "how-we-work") renderHowWeWork();
  else if (page === "about") renderAbout();
  else if (page === "contact") renderContact();

  document.body.classList.add("is-ready");

  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  }
})();
