/* Vorio v0 — all site copy lives here. Pages read from this object. */
const CONTENT = {
  name: "Vorio",
  titles: {
    home: "Vorio",
    whatWeDo: "What we do — Vorio",
    howWeWork: "How we work — Vorio",
    about: "About — Vorio",
    contact: "Contact — Vorio",
  },
  nav: [
    { label: "What we do", href: "what-we-do.html", page: "what-we-do" },
    { label: "How we work", href: "how-we-work.html", page: "how-we-work" },
    { label: "About", href: "about.html", page: "about" },
  ],
  contactNav: { label: "Contact", href: "contact.html", page: "contact" },
  closeBand: {
    h2: "You want more work. So do we.",
    body: "The more you grow, we grow.",
    button: "Talk to us",
    href: "contact.html",
  },
  footer: {
    links: [
      { label: "What we do", href: "what-we-do.html" },
      { label: "How we work", href: "how-we-work.html" },
      { label: "About", href: "about.html" },
      { label: "Contact", href: "contact.html" },
    ],
  },
  home: {
    h1: "You need more work.",
    dek: "We get it. Commercial. Government. One firm.",
    body: "Vorio is a BD partner. We exist to put more work on your books.",
    lockup: "The more you grow, we grow.",
    primary: { label: "Talk to us", href: "contact.html" },
    secondary: { label: "What we do", href: "what-we-do.html" },
    twoWays: {
      h2: "Two ways in. Same firm.",
      commercial: {
        title: "Commercial BD",
        body: "Find the accounts. Open the right rooms. Run a pursuit that closes.",
        link: "Commercial BD →",
        href: "what-we-do.html#commercial-bd",
      },
      govcon: {
        title: "GovCon BD",
        body: "Qualify the opportunity. Capture before the RFP. Write to the evaluation.",
        link: "GovCon BD →",
        href: "what-we-do.html#govcon-bd",
      },
    },
    motion: {
      h2: "Same motion. Both markets.",
      list: "Qualify · Position · Pursue · Win",
      body: "We advise. Or we embed.",
      button: "How we work",
      href: "how-we-work.html",
    },
    who: {
      h2: "New firm.",
      body: "The name comes from βόρειος: the north star. We find yours. Then we follow it.",
      aside: "No borrowed pedigree.",
      link: "About →",
      href: "about.html",
    },
  },
  whatWeDo: {
    h1: "What we do",
    dek: "Two practices. One firm. We get you more work.",
    jump: [
      { label: "Commercial BD", href: "#commercial-bd" },
      { label: "GovCon BD", href: "#govcon-bd" },
    ],
    commercial: {
      id: "commercial-bd",
      title: "Commercial BD",
      body: "We put commercial work on your books. The right accounts. The right conversations. A pursuit that closes.",
      items: [
        { lead: "Find accounts.", rest: "Target the ones that fit. Kill the ones that do not." },
        { lead: "Open conversations.", rest: "Get in front of the people who can say yes." },
        { lead: "Run the pursuit.", rest: "Stay in it until it dies or it signs." },
        { lead: "Win commercial work.", rest: "That is the scoreboard." },
      ],
    },
    govcon: {
      id: "govcon-bd",
      title: "GovCon BD",
      body: "We qualify the opportunity. Capture before the RFP. Write the proposal to the evaluation. The job is the award.",
      items: [
        { lead: "Qualify.", rest: "Bid or no-bid. Fast. Honest." },
        { lead: "Capture.", rest: "Shape it while you still can." },
        { lead: "Proposals.", rest: "Write to the evaluation. Cut what does not score." },
        { lead: "The award.", rest: "That is the job." },
      ],
    },
    button: { label: "See how we work", href: "how-we-work.html" },
  },
  howWeWork: {
    h1: "Same motion. Both markets.",
    dek: "We do not drop a deck and leave.",
    steps: [
      {
        num: "01",
        title: "Qualify",
        body: "Is this worth the chase? Fit, timing, capacity, competition. Federal or commercial, it is the same question.",
      },
      {
        num: "02",
        title: "Position",
        body: "Work the problem before the solicitation. Buyers pick the team they already believe. Capture starts here. Relationships, intel, a story they can buy.",
      },
      {
        num: "03",
        title: "Pursue",
        body: "Run it. Capture. Conversations. The proposal. We stay in the work.",
      },
      {
        num: "04",
        title: "Win",
        body: "The job is the contract. Submit is not the finish. Win it. Then point at the next one.",
      },
    ],
    depth: {
      h2: "Sit beside your team.",
      body: "Or be the BD function. Not a menu of SKUs.",
    },
  },
  about: {
    h1: "About Vorio",
    intro:
      "We get clients more work. Commercial. Government. Same firm. The pipeline is the scoreboard. Ours moves when yours does.",
    sections: [
      {
        h2: "The north star.",
        body: "A direction, not a decoration. We find yours. Then we follow it.",
      },
      {
        h2: "The more you grow, we grow.",
        body: "That is the deal.",
      },
    ],
  },
  contact: {
    h1: "Talk to us",
    dek: "Tell us what you need. We answer.",
    next: {
      h2: "What happens next",
      steps: [
        { num: "01", body: "You send this." },
        { num: "02", body: "We read it." },
        { num: "03", body: "We come back with a conversation. Not a forty-slide leave-behind." },
      ],
    },
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      need: "What you need",
      needOptions: ["Commercial BD", "GovCon BD", "Both"],
      needMicrocopy: "This routes the conversation. It does not split the firm.",
      chasing: "What you’re chasing",
      phone: "Phone (optional)",
      submit: "Send it",
    },
    thanks: "We have it. We will come back with a conversation.",
  },
};
