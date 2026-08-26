(function () {
  const page = document.body.getAttribute("data-page");
  const C = window.CONTENT;

  function markSvg(color) {
    return (
      '<svg class="lockup-mark" viewBox="0 0 100 112" aria-hidden="true" focusable="false">' +
      '<g fill="none" stroke="' +
      color +
      '" stroke-width="10.5" stroke-linecap="butt">' +
      '<line x1="16" y1="8" x2="46.5" y2="87"/>' +
      '<line x1="84" y1="8" x2="53.5" y2="87"/>' +
      "</g>" +
      '<path fill="#1E6BFF" d="M50,78.5 L52.55,89.45 L63.5,92 L52.55,94.55 L50,105.5 L47.45,94.55 L36.5,92 L47.45,89.45 Z"/>' +
      "</svg>"
    );
  }

  function lockup(href, inverse) {
    const color = inverse ? "#F4F2EC" : "#0B1D36";
    return (
      '<a class="lockup" href="' +
      href +
      '" aria-label="Vorio">' +
      markSvg(color) +
      '<span class="lockup-type">ORIO</span>' +
      "</a>"
    );
  }

  function heroMark() {
    return '<div class="hero-mark" aria-hidden="true">' + markSvg("#0B1D36") + "</div>";
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
      '</h2><div class="split"><div><h3>' +
      h.twoWays.commercial.title +
      "</h3><p>" +
      h.twoWays.commercial.body +
      '</p><a class="text-link" href="' +
      h.twoWays.commercial.href +
      '">' +
      h.twoWays.commercial.link +
      "</a></div><div><h3>" +
      h.twoWays.govcon.title +
      "</h3><p>" +
      h.twoWays.govcon.body +
      '</p><a class="text-link" href="' +
      h.twoWays.govcon.href +
      '">' +
      h.twoWays.govcon.link +
      "</a></div></div></div></section>" +
      '<section class="band band-navy"><div class="wrap"><h2>' +
      h.motion.h2 +
      '</h2><p class="motion-list">' +
      h.motion.list +
      "</p><p>" +
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
      '<section class="page-split"><div class="wrap"><div class="split">' +
      '<div id="' +
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
      "</a></div></div>" +
      '<div id="' +
      w.govcon.id +
      '"><h2>' +
      w.govcon.title +
      "</h2><p>" +
      w.govcon.body +
      "</p>" +
      itemsHtml(w.govcon.items) +
      "</div></div></div></section>";
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
