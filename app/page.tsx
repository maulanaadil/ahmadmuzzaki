import { getSiteUrl } from "./site-config";
import { MotionEnhancer } from "./motion-enhancer";

const studies = [
  {
    id: "loka-saji",
    number: "01",
    category: "MANUFACTURING / COST CONTROL",
    company: "PT Loka Saji Group",
    title: "The cost of making it elsewhere.",
    teaser: "Four best-selling products were selling well, but production costs were swallowing roughly 80% of sales.",
    question: "What would change if we made them ourselves?",
    challenge: "At a 30-person snack manufacturer, four best-selling products carried COGS of about 80% of sales. The business needed better margins without raising prices or sacrificing quality.",
    approach: "I helped move those products from a contract manufacturer to in-house production, then worked across purchasing, output targets, stock, quality checks, and labor to make the new model viable.",
    outcome: "In nine months, COGS fell to 40–45% of sales, including all production costs. Ramadan revenue tripled and net profit rose almost fourfold year over year.",
    figure: "40–45%",
    figureLabel: "COGS after the shift",
    visual: "cost",
  },
  {
    id: "savora",
    number: "02",
    category: "FOUNDER / SUPPLY CHAIN",
    company: "Savora Nusantara Indonesia",
    title: "A reliable business starts behind the scenes.",
    teaser: "A frozen food business built from supplier relationships, delivery routes, records, and a promise to customers.",
    question: "How do you earn repeat orders from day one?",
    challenge: "Serving cafés, caterers, and individual customers meant balancing fresh stock, predictable delivery, quality, and cash flow with a small team.",
    approach: "I built supplier sourcing, financial records, SOPs, delivery routes, and a demand planning schedule. I later added two lower-cost suppliers on 30-day payment terms and opened Tokopedia and Shopee stores.",
    outcome: "The business signed more than 10 B2B clients. Tokopedia reached five-star seller status with over 200 positive reviews in 60 days and zero returns.",
    figure: "10+",
    figureLabel: "B2B clients signed",
    visual: "supply",
  },
  {
    id: "one-million-coffee",
    number: "03",
    category: "FOUNDER / COMMERCIAL ADAPTATION",
    company: "One Million Coffee",
    title: "When the café could no longer rely on the café.",
    teaser: "Road closures changed how people bought coffee. The business had to change how it sold it.",
    question: "What could we sell when people stayed home?",
    challenge: "As co-founder and general manager, I ran a Bandung café with an average monthly revenue of IDR 30–50 million. COVID-19 road closures disrupted dine-in demand.",
    approach: "I introduced a one-liter packaged coffee format and sold through home delivery and a four-partner reseller network, alongside our existing digital channels.",
    outcome: "The new format kept the business operating for more than six months through the disruption and opened a new way to reach customers at home.",
    figure: "6+",
    figureLabel: "months operating through the disruption",
    visual: "coffee",
  },
];

const experience = [
  ["2020 — NOW", "Founder", "Savora Nusantara Indonesia"],
  ["2024 — 2025", "Senior Manager", "PT Loka Saji Group"],
  ["2022 — 2024", "Founder", "SKÄNT House of Perfumery"],
  ["2019 — 2022", "Co-Founder & General Manager", "One Million Coffee"],
  ["2021", "Finance Staff", "PT Pandawa LED"],
  ["2019 — 2020", "Sales & Distribution Staff", "CV Angsana"],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function NameSeal() {
  return <div className="name-seal" role="img" aria-label="Ahmad Muzzaki Mahmud, finance and operations">
    <svg className="name-seal-ring" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs><path id="name-seal-path" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" /></defs>
      <text textLength="219" lengthAdjust="spacing"><textPath href="#name-seal-path">AHMAD MUZZAKI MAHMUD · FINANCE &amp; OPERATIONS · </textPath></text>
    </svg>
    <span className="name-seal-center" aria-hidden="true">AM<span>↗</span></span>
  </div>;
}

function StudyVisual({ kind, figure, label }: { kind: string; figure: string; label: string }) {
  return <div className={`study-visual visual-${kind}`} aria-label={`${figure} ${label}`}>
    <div className="visual-top"><span>AHMAD MUZZAKI / SELECTED WORK</span><span>2020—2025</span></div>
    {kind === "cost" ? <div className="cost-chart" aria-hidden="true"><div><small>BEFORE</small><span className="bar before"/><strong>~80%</strong></div><div><small>AFTER</small><span className="bar after"/><strong>40–45%</strong></div></div> : kind === "supply" ? <div className="supply-graphic" aria-hidden="true"><span className="supply-ring ring-one"/><span className="supply-ring ring-two"/><span className="supply-center">S</span><span className="supply-node node-one"/><span className="supply-node node-two"/><span className="supply-node node-three"/><span className="supply-node node-four"/></div> : <div className="coffee-graphic" aria-hidden="true"><span className="coffee-line line-one"/><span className="coffee-line line-two"/><span className="coffee-line line-three"/><span className="coffee-mark">1L</span></div>}
    <div className="visual-bottom"><strong>{figure}</strong><span>{label}</span></div>
  </div>;
}

export default function Home() {
  const siteUrl = getSiteUrl();
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmad Muzzaki Mahmud",
    jobTitle: "Finance and Operations Manager",
    description: "Finance and operations manager focused on cost control, cash flow, production planning, and business operations.",
    ...(siteUrl ? { url: siteUrl } : {}),
    sameAs: ["https://www.linkedin.com/in/ahmad-muzzaki-m-05556576/"],
    address: { "@type": "PostalAddress", addressLocality: "Bandung", addressCountry: "ID" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Widyatama University" },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
    <MotionEnhancer />
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" id="top"><div className="frame header-grid"><a className="identity" href="#top" aria-label="Ahmad Muzzaki Mahmud, back to top">Ahmad Muzzaki<span> Mahmud</span><i>•</i></a><span className="header-role">FINANCE &amp; OPERATIONS MANAGER</span><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <Arrow /></a></nav></div></header>
    <main id="main">
      <section className="hero frame" aria-labelledby="hero-title"><div className="hero-top"><span>BASED IN BANDUNG, INDONESIA</span><span>OPEN TO REMOTE &amp; INTERNATIONAL ROLES</span></div><div className="hero-main"><p className="eyebrow">AHMAD MUZZAKI MAHMUD · FINANCE &amp; OPERATIONS MANAGER</p><h1 id="hero-title"><span className="hero-line"><span>The numbers</span></span><span className="hero-line"><span>tell a story.</span></span><span className="hero-line"><span><em>I change what</em></span></span><span className="hero-line"><span><em>happens next.</em></span></span></h1><div className="hero-intro"><span className="intro-line"/><p>I work where finance meets the production floor: finding what costs too much, fixing what slows teams down, and building operations that hold up in real life.</p></div></div><div className="hero-bottom"><a href="#work">Explore selected work <span aria-hidden="true">↓</span></a><NameSeal /></div></section>
      <section className="work-section" id="work"><div className="frame"><div className="section-heading" data-reveal><div><span className="section-index">01 / SELECTED WORK</span><h2>Some questions are<br/><em>worth following.</em></h2></div><p>Three moments where looking closer at an operational problem changed the result.</p></div><div className="study-grid">{studies.map((study) => <article className="study-card" key={study.id} data-reveal><a href={`#${study.id}`} aria-label={`Read ${study.company} case study`}><StudyVisual kind={study.visual} figure={study.figure} label={study.figureLabel}/><div className="study-card-meta"><span>{study.number} / {study.category}</span><span>{study.company}</span></div><div className="study-card-title"><h3>{study.title}</h3><span aria-hidden="true">↗</span></div><p>{study.teaser}</p></a></article>)}</div></div></section>
      <section className="case-section" aria-label="Case studies">{studies.map((study, index) => <article className="case-study" id={study.id} key={study.id}><div className="frame"><div className="case-header" data-reveal><span className="section-index">{study.number} / THE STORY</span><span>{study.company}</span></div><div className="case-title-row" data-reveal><h2>{study.question}</h2><span className="case-number">{study.number}</span></div><div className="case-content" data-reveal><div><span>THE SITUATION</span><p>{study.challenge}</p></div><div><span>WHAT I DID</span><p>{study.approach}</p></div><div className="outcome"><span>WHAT CHANGED</span><p>{study.outcome}</p></div></div><div className="case-next"><a href={index < studies.length - 1 ? `#${studies[index + 1].id}` : "#about"}>{index < studies.length - 1 ? "Next story" : "More about me"} <Arrow /></a><span>{index + 1} / {studies.length}</span></div></div></article>)}</section>
      <section className="about-section frame" id="about"><div className="about-top"><span className="section-index">02 / ABOUT</span><span>THE PERSON BEHIND THE NUMBERS</span></div><div className="about-grid"><h2 data-reveal>Curiosity first.<br/><em>Then the work.</em></h2><div data-reveal><p className="about-lead">I&apos;ve learned that the most useful question is often the one nobody has had time to ask.</p><p>Why does this product cost so much to make? Where does cash get stuck? What would make a customer order again? I bring those questions into the numbers, then take the answers to the people who do the work.</p><p>Across a snack manufacturer, frozen food supply, a perfume brand, and a café, I&apos;ve worked on both sides of the desk—as a manager accountable to an owner and as a founder accountable for every decision.</p><a className="inline-link" href="mailto:ahmadmuzzaki@gmail.com">Let&apos;s talk about your business <Arrow /></a></div></div><div className="principles" data-reveal><div><span>01</span><strong>Follow the real cost.</strong><p>Understand the full picture before changing the number.</p></div><div><span>02</span><strong>Make systems usable.</strong><p>Build processes people can run after the meeting ends.</p></div><div><span>03</span><strong>Keep people in the loop.</strong><p>Good decisions work across finance, operations, and customers.</p></div></div></section>
      <section className="experience-section"><div className="frame"><div className="section-heading" data-reveal><div><span className="section-index">03 / EXPERIENCE</span><h2>A practical view<br/><em>of business.</em></h2></div><p>Founder roles ran alongside employed roles. Each added a different perspective on costs, teams, and growth.</p></div><div className="experience-list">{experience.map((role) => <div className="experience-row" key={role[2]} data-reveal><span>{role[0]}</span><strong>{role[1]}</strong><span>{role[2]}</span></div>)}</div><div className="credentials" data-reveal><div><span>EDUCATION</span><p>Bachelor&apos;s in Management, Widyatama University<br/>Cum Laude · GPA 3.92/4.00</p></div><div><span>TOOLS &amp; CREDENTIALS</span><p>Accurate ERP, Excel, Google Sheets, Lark<br/>WPPE-P certificate</p></div></div></div></section>
      <section className="contact-section" id="contact"><div className="frame"><div className="contact-top"><span className="section-index">04 / CONTACT</span><span>BANDUNG, INDONESIA · UTC+7</span></div><div className="contact-content" data-reveal><p>Have a complex problem on your desk?</p><h2>Let&apos;s get to<br/><em>the heart of it.</em></h2><a href="mailto:ahmadmuzzaki@gmail.com" className="contact-button">Start a conversation <Arrow /></a></div><div className="contact-bottom"><span>AHMAD MUZZAKI MAHMUD</span><div><a href="https://www.linkedin.com/in/ahmad-muzzaki-m-05556576/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="mailto:ahmadmuzzaki@gmail.com">EMAIL ↗</a></div><a href="#top">BACK TO TOP ↑</a></div></div></section>
    </main>
  </>;
}
