import Image from "next/image";
import { getSiteUrl } from "./site-config";
import { MotionEnhancer } from "./motion-enhancer";
import lokaSajiPhoto from "../public/images/loka-saji.jpg";
import savoraPhoto from "../public/images/savora.jpg";
import coffeePhoto from "../public/images/one-million-coffee.jpg";

const studies = [
  {
    id: "loka-saji",
    number: "01",
    category: "MANUFACTURING / COST CONTROL",
    company: "PT Loka Saji Group",
    title: "The cost of making it elsewhere.",
    teaser: "Best-sellers, 80% cost of goods. One move to in-house production cut it to 40–45%.",
    question: "What would change if we made them ourselves?",
    what: "Four best-selling snacks, one hidden problem. At a 30-person manufacturer, making them cost about 80% of sales.",
    soWhat: "Strong demand was masking a cost-structure problem. The brief ruled out raising prices or cutting quality, so the real lever was who made the product.",
    nowWhat: "Move the four products from the contract manufacturer to in-house production. Then line up purchasing, output targets, stock, quality checks, and labor behind the new model.",
    result: "In nine months, COGS fell to 40–45% of sales, all production costs included. Ramadan revenue tripled and net profit rose almost fourfold year over year.",
    figure: "40–45%",
    figureLabel: "COGS after the shift",
    photo: { src: lokaSajiPhoto, alt: "Gloved hands filling food trays along an in-house production line", position: "50% 50%" },
  },
  {
    id: "savora",
    number: "02",
    category: "FOUNDER / SUPPLY CHAIN",
    company: "Savora Nusantara Indonesia",
    title: "A reliable business starts behind the scenes.",
    teaser: "Frozen food runs on trust. Systems built behind the scenes won 10+ B2B clients.",
    question: "How do you earn repeat orders from day one?",
    what: "A frozen food business serving cafés, caterers, and individual customers. A small team had to balance fresh stock, delivery, quality, and cash flow.",
    soWhat: "Repeat orders are earned long before checkout. They depend on supplier reliability, clean records, and deliveries that arrive when promised.",
    nowWhat: "Build the engine first: supplier sourcing, financial records, SOPs, delivery routes, and a demand planning schedule. Then add two lower-cost suppliers on 30-day payment terms and open Tokopedia and Shopee stores.",
    result: "The business signed more than 10 B2B clients. Tokopedia reached five-star seller status with over 200 positive reviews in 60 days and zero returns.",
    figure: "10+",
    figureLabel: "B2B clients signed",
    photo: { src: savoraPhoto, alt: "Frozen food packs inside a supermarket display freezer", position: "50% 55%" },
  },
  {
    id: "one-million-coffee",
    number: "03",
    category: "FOUNDER / COMMERCIAL ADAPTATION",
    company: "One Million Coffee",
    title: "When the café could no longer rely on the café.",
    teaser: "Road closures emptied the café. A one-liter bottle kept the business running for 6+ months.",
    question: "What could we sell when people stayed home?",
    what: "A Bandung café averaging IDR 30–50 million in monthly revenue lost its dine-in customers to COVID-19 road closures.",
    soWhat: "Dine-in was a channel, not the business. If customers can't come to the coffee, the coffee has to go to them.",
    nowWhat: "Launch a one-liter packaged coffee. Sell it through home delivery and a four-partner reseller network, and keep the existing digital channels running.",
    result: "The new format kept the business operating for more than six months through the disruption and opened a new way to reach customers at home.",
    figure: "6+",
    figureLabel: "months operating through the disruption",
    photo: { src: coffeePhoto, alt: "Cold brew coffee in a glass bottle beside a glass of ice", position: "50% 32%" },
  },
];

const formula = [
  { step: "01", term: "What", hint: "The facts on the table" },
  { step: "02", term: "So what", hint: "Why it matters" },
  { step: "03", term: "Now what", hint: "The move we made" },
];

const marquee = ["COST CONTROL", "CASH FLOW", "PRODUCTION PLANNING", "SUPPLY CHAIN", "SOPs", "MARGIN ANALYSIS", "FOUNDER MINDSET"];

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
  return <figure className="name-seal" aria-label="Ahmad Muzzaki Mahmud, finance and operations">
    <svg className="name-seal-ring" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs><path id="name-seal-path" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" /></defs>
      <text textLength="219" lengthAdjust="spacing"><textPath href="#name-seal-path">AHMAD MUZZAKI MAHMUD · FINANCE &amp; OPERATIONS · </textPath></text>
    </svg>
    <span className="name-seal-center" aria-hidden="true">AM<span>↗</span></span>
  </figure>;
}

function StudyVisual({ study }: { study: (typeof studies)[number] }) {
  return <div className="study-visual">
    <Image className="study-photo" src={study.photo.src} alt={study.photo.alt} fill sizes="(max-width: 1000px) 100vw, 33vw" style={{ objectPosition: study.photo.position }} />
    <div className="visual-top"><span>{study.number} / {study.company}</span></div>
    <div className="visual-bottom"><strong>{study.figure}</strong><span>{study.figureLabel}</span></div>
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
    <div className="splash" aria-hidden="true"><div className="splash-inner"><span className="splash-mark">AM<i>↗</i></span><span className="splash-name">Ahmad Muzzaki Mahmud</span><span className="splash-role">[ FINANCE &amp; OPERATIONS ]</span></div><span className="splash-bar"/></div>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" id="top"><div className="frame header-grid"><a className="identity" href="#top" aria-label="Ahmad Muzzaki Mahmud, back to top">Ahmad Muzzaki<span> Mahmud</span></a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a></nav><a className="header-cta" href="#contact">Let&apos;s talk <Arrow /></a></div></header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-bg" aria-hidden="true"><i className="blob blob-one"/><i className="blob blob-two"/><i className="blob blob-three"/></div><div className="frame hero-inner"><div className="hero-top"><span>-6.9175° S, 107.6191° E</span><ul className="chips" aria-label="Focus areas"><li>[ COST CONTROL ]</li><li>[ CASH FLOW ]</li><li>[ PRODUCTION ]</li></ul></div><div className="hero-main"><p className="eyebrow">FINANCE &amp; OPERATIONS MANAGER</p><h1 id="hero-title"><span className="hero-line"><span>The numbers</span></span><span className="hero-line"><span>tell a story.</span></span><span className="hero-line"><span><em>I change what</em></span></span><span className="hero-line"><span><em>happens next.</em></span></span></h1><div className="hero-intro"><p>I work where finance meets the production floor: finding what costs too much, fixing what slows teams down, and building operations that hold up in real life.</p></div></div><aside className="hero-panel" aria-label="Quick facts"><div><span>BASED IN</span><strong>Bandung, Indonesia</strong></div><div><span>TIME ZONE</span><strong>UTC+7</strong></div><div><span>AVAILABILITY</span><strong>Open to remote &amp; international roles</strong></div></aside><div className="hero-bottom"><a className="hero-cta" href="#work">Explore selected work <span aria-hidden="true">↓</span></a><NameSeal /></div></div></section>
      <div className="marquee" aria-hidden="true"><div className="marquee-track">{[0, 1].map((n) => <ul key={n}>{marquee.map((item) => <li key={item}>{item}</li>)}</ul>)}</div></div>
      <section className="work-section" id="work"><div className="frame"><div className="section-heading" data-reveal><div><span className="section-index">01 / SELECTED WORK</span><h2>Some questions are<br/><em>worth following.</em></h2></div><p>Every story follows the same three beats: what the numbers said, why it mattered, and what we did next.</p></div><ol className="formula" data-reveal aria-label="How each story is told">{formula.map((f) => <li key={f.step}><span>{f.step}</span><strong>{f.term}</strong><em>{f.hint}</em></li>)}</ol><div className="study-grid">{studies.map((study) => <article className="study-card" key={study.id} data-reveal><a href={`#${study.id}`} aria-label={`Read ${study.company} case study`}><StudyVisual study={study} /><div className="study-card-meta"><span>{study.category}</span></div><div className="study-card-title"><h3>{study.title}</h3><span aria-hidden="true">↗</span></div><p>{study.teaser}</p><span className="study-card-cta">Read the story <Arrow /></span></a></article>)}</div></div></section>
      <section className="case-section" aria-label="Case studies">{studies.map((study, index) => <article className="case-study" id={study.id} key={study.id}><div className="frame"><div className="case-header" data-reveal><span className="section-index">{study.number} / THE STORY</span><span>{study.company}</span></div><div className="case-title-row" data-reveal><h2>{study.question}</h2><span className="case-number">{study.number}</span></div><div className="case-photo" data-reveal><Image src={study.photo.src} alt={study.photo.alt} fill sizes="(max-width: 1280px) 100vw, 1280px" style={{ objectPosition: study.photo.position }} /><div className="case-photo-figure"><strong>{study.figure}</strong><span>{study.figureLabel}</span></div></div><div className="case-content" data-reveal><div><span>01 · THE WHAT</span><h3>The facts</h3><p>{study.what}</p></div><div><span>02 · THE SO WHAT</span><h3>The insight</h3><p>{study.soWhat}</p></div><div className="now-what"><span>03 · THE NOW WHAT</span><h3>The move</h3><p>{study.nowWhat}</p></div></div><div className="outcome" data-reveal><span>THE RESULT</span><p>{study.result}</p></div><div className="case-next"><a href={index < studies.length - 1 ? `#${studies[index + 1].id}` : "#about"}>{index < studies.length - 1 ? "Next story" : "More about me"} <Arrow /></a><span>{index + 1} / {studies.length}</span></div></div></article>)}</section>
      <section className="about-section frame" id="about"><div className="about-top"><span className="section-index">02 / ABOUT</span><span>THE PERSON BEHIND THE NUMBERS</span></div><div className="about-grid"><h2 data-reveal>Curiosity first.<br/><em>Then the work.</em></h2><div data-reveal><p className="about-lead">I&apos;ve learned that the most useful question is often the one nobody has had time to ask.</p><p>Why does this product cost so much to make? Where does cash get stuck? What would make a customer order again? I bring those questions into the numbers, then take the answers to the people who do the work.</p><p>Across a snack manufacturer, frozen food supply, a perfume brand, and a café, I&apos;ve worked on both sides of the desk—as a manager accountable to an owner and as a founder accountable for every decision.</p><a className="inline-link" href="mailto:ahmadmuzzaki@gmail.com">Let&apos;s talk about your business <Arrow /></a></div></div><div className="principles" data-reveal><div><span>01</span><strong>Follow the real cost.</strong><p>Understand the full picture before changing the number.</p></div><div><span>02</span><strong>Make systems usable.</strong><p>Build processes people can run after the meeting ends.</p></div><div><span>03</span><strong>Keep people in the loop.</strong><p>Good decisions work across finance, operations, and customers.</p></div></div></section>
      <section className="experience-section" id="experience"><div className="frame"><div className="section-heading" data-reveal><div><span className="section-index">03 / EXPERIENCE</span><h2>A practical view<br/><em>of business.</em></h2></div><p>Founder roles ran alongside employed roles. Each added a different perspective on costs, teams, and growth.</p></div><div className="experience-list">{experience.map((role) => <div className="experience-row" key={role[2]} data-reveal><span>{role[0]}</span><strong>{role[1]}</strong><span>{role[2]}</span></div>)}</div><div className="credentials" data-reveal><div><span>EDUCATION</span><p>Bachelor&apos;s in Management, Widyatama University<br/>Cum Laude · GPA 3.92/4.00</p></div><div><span>TOOLS &amp; CREDENTIALS</span><p>Accurate ERP, Excel, Google Sheets, Lark<br/>WPPE-P certificate</p></div></div></div></section>
      <section className="contact-section" id="contact"><div className="frame"><div className="contact-top"><span className="section-index">04 / CONTACT</span><span>BANDUNG, INDONESIA · UTC+7</span></div><div className="contact-content" data-reveal><p>Have a complex problem on your desk?</p><h2>Let&apos;s get to<br/><em>the heart of it.</em></h2><a href="mailto:ahmadmuzzaki@gmail.com" className="contact-button">Start a conversation <Arrow /></a></div><div className="contact-bottom"><span>AHMAD MUZZAKI MAHMUD</span><div><a href="https://www.linkedin.com/in/ahmad-muzzaki-m-05556576/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="mailto:ahmadmuzzaki@gmail.com">EMAIL ↗</a></div><a href="#top">BACK TO TOP ↑</a></div></div></section>
    </main>
  </>;
}
