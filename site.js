(function () {
  const page = document.body.getAttribute("data-page");
  const C = window.CONTENT;

  function lockupSvg(color) {
    // Art-signed emblem: oversized open V, outlined ORIO inside the valley,
    // four-point star under the open base. Star does not touch the V.
    // viewBox 0 0 900 820 — full-bleed background rect dropped.
    return (
      '<svg class="lockup-svg" viewBox="0 0 900 820" aria-hidden="true" focusable="false">' +
      '<path fill="' +
      color +
      '" d="M 24.666,62.400 L 117.066,62.400 L 402.400,622.400 L 310.000,622.400 Z"/>' +
      '<path fill="' +
      color +
      '" d="M 782.934,62.400 L 875.334,62.400 L 590.000,622.400 L 497.600,622.400 Z"/>' +
      '<path fill="#1E6BFF" d="M 450.000,588.800 L 470.591,660.609 L 522.800,681.200 L 470.591,701.791 L 450.000,773.600 L 429.409,701.791 L 377.200,681.200 L 429.409,660.609 Z"/>' +
      '<g transform="translate(212.523,265.036)">' +
      '<path fill="' +
      color +
      '" d="M67.68 2.24Q54.24 2.24 42.88 -2.08Q31.52 -6.4 23.12 -14.24Q14.72 -22.08 10.08 -32.72Q5.44 -43.36 5.44 -56Q5.44 -68.64 10.08 -79.28Q14.72 -89.92 23.12 -97.76Q31.52 -105.6 42.88 -109.92Q54.24 -114.24 67.68 -114.24Q81.12 -114.24 92.48 -109.92Q103.84 -105.6 112.24 -97.76Q120.64 -89.92 125.28 -79.28Q129.92 -68.64 129.92 -56Q129.92 -43.36 125.28 -32.72Q120.64 -22.08 112.24 -14.24Q103.84 -6.4 92.48 -2.08Q81.12 2.24 67.68 2.24ZM67.68 -24Q76.16 -24 83.04 -27.92Q89.92 -31.84 93.92 -39.04Q97.92 -46.24 97.92 -56Q97.92 -65.76 93.92 -72.96Q89.92 -80.16 83.04 -84.08Q76.16 -88 67.68 -88Q59.2 -88 52.32 -84.08Q45.44 -80.16 41.44 -72.96Q37.44 -65.76 37.44 -56Q37.44 -46.24 41.44 -39.04Q45.44 -31.84 52.32 -27.92Q59.2 -24 67.68 -24Z"/>' +
      '<path fill="' +
      color +
      '" d="M156.56 0V-112H206.64Q231.28 -112 244.4 -100.88Q257.52 -89.76 257.52 -70.56Q257.52 -58.24 251.76 -49.2Q246 -40.16 235.44 -35.2L259.76 0H225.84L205.52 -29.76H188.24V0ZM188.24 -54.24H205.84Q215.76 -54.24 220.64 -58.56Q225.52 -62.88 225.52 -70.56Q225.52 -78.4 220.64 -82.72Q215.76 -87.04 205.84 -87.04H188.24Z"/>' +
      '<path fill="' +
      color +
      '" d="M284.96 0V-112H316.64V0Z"/>' +
      '<path fill="' +
      color +
      '" d="M405.68 2.24Q392.24 2.24 380.88 -2.08Q369.52 -6.4 361.12 -14.24Q352.72 -22.08 348.08 -32.72Q343.44 -43.36 343.44 -56Q343.44 -68.64 348.08 -79.28Q352.72 -89.92 361.12 -97.76Q369.52 -105.6 380.88 -109.92Q392.24 -114.24 405.68 -114.24Q419.12 -114.24 430.48 -109.92Q441.84 -105.6 450.24 -97.76Q458.64 -89.92 463.28 -79.28Q467.92 -68.64 467.92 -56Q467.92 -43.36 463.28 -32.72Q458.64 -22.08 450.24 -14.24Q441.84 -6.4 430.48 -2.08Q419.12 2.24 405.68 2.24ZM405.68 -24Q414.16 -24 421.04 -27.92Q427.92 -31.84 431.92 -39.04Q435.92 -46.24 435.92 -56Q435.92 -65.76 431.92 -72.96Q427.92 -80.16 421.04 -84.08Q414.16 -88 405.68 -88Q397.2 -88 390.32 -84.08Q383.44 -80.16 379.44 -72.96Q375.44 -65.76 375.44 -56Q375.44 -46.24 379.44 -39.04Q383.44 -31.84 390.32 -27.92Q397.2 -24 405.68 -24Z"/>' +
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
