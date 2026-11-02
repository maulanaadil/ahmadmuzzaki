import Image from "next/image";
import { getSiteUrl } from "./site-config";
import { ArrowDown, ArrowUp, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { FanGallery } from "../components/fan-gallery";
import { FractalGlass } from "../components/fractal-glass";
import { MotionEnhancer } from "./motion-enhancer";
import { Nav } from "./nav";
import { TaglineReveal } from "./tagline-reveal";
import lokaSajiPhoto from "../public/images/loka-saji.jpg";
import savoraPhoto from "../public/images/savora.jpg";
import coffeePhoto from "../public/images/one-million-coffee.jpg";

const studies = [
  {
    id: "loka-saji",
    number: "01",
    category: "Manufacturing and cost control",
    company: "PT Loka Saji Group",
    title: "The cost of making it elsewhere.",
    teaser: "Bestsellers cost 80% of sales to make. Moving production in house cut that to 40–45%.",
    question: "What would change if we made them ourselves?",
    what: "Four bestselling snacks, one hidden problem. At a 30 person manufacturer, making them cost about 80% of sales.",
    soWhat: "Strong demand was masking a problem in the cost structure. The brief ruled out raising prices or cutting quality, so the real lever was who made the product.",
    nowWhat: "Move the four products from the contract manufacturer to in house production. Then line up purchasing, output targets, stock, quality checks, and labor behind the new model.",
    result: "In nine months, COGS fell to 40–45% of sales, all production costs included. Ramadan revenue tripled and net profit rose almost fourfold year over year.",
    figure: "40–45%",
    figureLabel: "COGS after the shift",
    photo: { src: lokaSajiPhoto, alt: "Gloved hands filling food trays along an in-house production line", position: "50% 50%" },
  },
  {
    id: "savora",
    number: "02",
    category: "Founder and supply chain",
    company: "Savora Nusantara Indonesia",
    title: "A reliable business starts behind the scenes.",
    teaser: "Frozen food runs on trust. Systems built behind the scenes won more than 10 B2B clients.",
    question: "How do you earn repeat orders from day one?",
    what: "A frozen food business serving cafés, caterers, and individual customers. A small team had to balance fresh stock, delivery, quality, and cash flow.",
    soWhat: "Repeat orders are earned long before checkout. They depend on supplier reliability, clean records, and deliveries that arrive when promised.",
    nowWhat: "Build the engine first: supplier sourcing, financial records, SOPs, delivery routes, and a demand planning schedule. Then add two lower-cost suppliers on 30 day payment terms and open Tokopedia and Shopee stores.",
    result: "The business signed more than 10 B2B clients. Tokopedia reached five star seller status with over 200 positive reviews in 60 days and zero returns.",
    figure: "10+",
    figureLabel: "B2B clients signed",
    photo: { src: savoraPhoto, alt: "Frozen food packs inside a supermarket display freezer", position: "50% 55%" },
  },
  {
    id: "one-million-coffee",
    number: "03",
    category: "Founder and commercial adaptation",
    company: "One Million Coffee",
    title: "When the café could no longer rely on the café.",
    teaser: "Road closures emptied the café. A one liter bottle kept the business running for more than six months.",
    question: "What could we sell when people stayed home?",
    what: "A Bandung café averaging IDR 30–50 million in monthly revenue lost its dine in customers to pandemic road closures.",
    soWhat: "Dine in was a channel, not the business. If customers cannot come to the coffee, the coffee has to go to them.",
    nowWhat: "Launch a one liter packaged coffee. Sell it through home delivery and a four partner reseller network, and keep the existing digital channels running.",
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

const experience = [
  ["2020 to now", "Founder", "Savora Nusantara Indonesia"],
  ["2024 to 2025", "Senior manager", "PT Loka Saji Group"],
  ["2022 to 2024", "Founder", "SKÄNT House of Perfumery"],
  ["2019 to 2022", "Cofounder and general manager", "One Million Coffee"],
  ["2021", "Finance staff", "PT Pandawa LED"],
  ["2019 to 2020", "Sales and distribution staff", "CV Angsana"],
];

const tagline = "Strong demand can hide a weak cost structure. I look past the sales line to find where margin leaks, then build the systems that keep it.";

const fanItems = studies.map((study) => ({ src: study.photo.src.src, alt: `${study.company}: ${study.title}`, href: `#${study.id}` }));

const icon = { size: 16, weight: "bold" as const, "aria-hidden": true };

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
    <div className="splash" aria-hidden="true"><div className="splash-inner"><span className="splash-mark">AM</span><span className="splash-role caption-3">Finance and operations</span></div><span className="splash-bar" /></div>
    <a className="skip-link button-sm" href="#main">Skip to content</a>
    <Nav />
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-bg">
          <FractalGlass src="/images/hero-aurora.jpg" alt="" animateEntrance={true} mode="default" stripes={26} distortion={24} refractionBias={-0.1} blur={20} grain={0.005} smoothness={7.3} textureScale={103} blackPoint={0} whitePoint={232} gamma={0.78} edgeWidth={0} coverage={1} coverageMode="stripes" side="left" direction="vertical" hoverEffect={true} hoverPreset="reveal-on-hover" recoveryDirection="same" hoverAnimation="procedural" hoverDuration={880} hoverRadius={120} hoverFeather={16} transitionBlend={0.5} duration={570} ease="power4.out" disabled={false} height="100%" borderRadius={0} />
        </div>
        <div className="frame hero-inner">
          <div className="hero-panel"><div className="hero-copy">
            <p className="caption-3">Finance and operations manager in Bandung</p>
            <h1 className="heading-1 hero-title" id="hero-title"><span className="hero-line"><span>The numbers tell a story.</span></span><span className="hero-line"><span>I change what happens next.</span></span></h1>
            <p className="hero-sub body-3">I work where finance meets the production floor: finding what costs too much, fixing what slows teams down, and building operations that hold up in real life.</p>
            <div className="hero-actions"><a className="button button-md button-light" href="#work">See selected work <ArrowDown {...icon} /></a><span className="caption-1">Open to remote and international roles</span></div>
          </div>
          <p className="hero-proof body-5"><strong>40–45% of sales, down from 80%.</strong><span>Cost of goods at PT Loka Saji Group after production moved in house, within nine months.</span></p></div>
        </div>
      </section>
      <section className="tagline-section" aria-label="What I do"><div className="frame"><TaglineReveal text={tagline} /></div></section>
      <section className="section section-dark" id="work"><div className="frame">
        <div className="section-heading" data-reveal><div><span className="section-index caption-3">01 / Selected work</span><h2 className="heading-2">Some questions are<br /><span className="muted">worth following.</span></h2></div><p className="body-3">Every story follows the same three beats: what the numbers said, why it mattered, and what we did next.</p></div>
        <ol className="formula" data-reveal aria-label="How each story is told">{formula.map((f) => <li key={f.step}><span className="caption-3">{f.step}</span><strong className="title-1">{f.term}</strong><p className="body-6">{f.hint}</p></li>)}</ol>
        <div className="fan-wrap" data-reveal><FanGallery items={fanItems} ariaLabel="Selected projects" cardWidth={220} aspectRatio={0.8} spacing={0.69} curve={0.14} tilt={14.5} lift={42} spread={0.2} stackFrom="left" speed={0.7} stagger={0.09} bounce={0.35} hoverSpeed={0.28} radius={18} entrance="stack" trigger="scroll" viewportStart={75} once={true} showTitle={false} /></div>
        <ol className="project-list" data-reveal aria-label="Projects">{studies.map((study) => <li key={study.id}><a href={`#${study.id}`}><span className="project-meta caption-4"><span>{study.number} / {study.company}</span><span>{study.category}</span></span><h3 className="heading-6">{study.title}</h3><p className="body-6">{study.teaser}</p><span className="project-cta button-sm">Read the story <ArrowUpRight {...icon} /></span></a></li>)}</ol>
      </div></section>
      <section className="section-light" aria-label="Case studies">{studies.map((study, index) => <article className="case-study" id={study.id} key={study.id}><div className="frame">
        <div className="case-header caption-3" data-reveal><span>{study.number} / The story</span><span>{study.company}</span></div>
        <div className="case-title-row" data-reveal><h2 className="heading-2">{study.question}</h2><span className="case-number" aria-hidden="true">{study.number}</span></div>
        <div className="case-photo" data-reveal><Image src={study.photo.src} alt={study.photo.alt} fill sizes="(max-width: 1280px) 100vw, 1280px" style={{ objectPosition: study.photo.position }} /><div className="case-photo-figure"><strong>{study.figure}</strong><span className="title-4">{study.figureLabel}</span></div></div>
        <div className="case-content" data-reveal>
          <div><span className="caption-3">01 / The what</span><h3 className="heading-5">The facts</h3><p className="body-3">{study.what}</p></div>
          <div><span className="caption-3">02 / The so what</span><h3 className="heading-5">The insight</h3><p className="body-3">{study.soWhat}</p></div>
          <div className="now-what"><span className="caption-3">03 / The now what</span><h3 className="heading-5">The move</h3><p className="body-3">{study.nowWhat}</p></div>
        </div>
        <div className="outcome" data-reveal><span className="caption-3">The result</span><p className="title-1">{study.result}</p></div>
        <div className="case-next"><a className="button button-sm button-dark" href={index < studies.length - 1 ? `#${studies[index + 1].id}` : "#about"}>{index < studies.length - 1 ? "Read the next story" : "More about me"} <ArrowUpRight {...icon} /></a><span className="caption-1">{index + 1} of {studies.length}</span></div>
      </div></article>)}</section>
      <section className="section section-dark-alt" id="about"><div className="frame">
        <div className="about-top caption-3"><span>02 / About</span><span>The person behind the numbers</span></div>
        <div className="about-grid"><h2 className="heading-2" data-reveal>Curiosity first.<br /><span className="muted">Then the work.</span></h2>
          <div className="about-card" data-reveal><p className="about-lead heading-5">I&rsquo;ve learned that the most useful question is often the one nobody has had time to ask.</p><p className="body-3">Why does this product cost so much to make? Where does cash get stuck? What would make a customer order again? I bring those questions into the numbers, then take the answers to the people who do the work.</p><p className="body-3">Across a snack manufacturer, frozen food supply, a perfume brand, and a café, I&rsquo;ve worked on both sides of the desk: as a manager accountable to an owner and as a founder accountable for every decision.</p><a className="inline-link button-md" href="mailto:ahmadmuzzaki@gmail.com">Let&rsquo;s talk about your business <ArrowUpRight {...icon} /></a></div>
        </div>
        <div className="principles" data-reveal><div><span className="caption-3">01</span><strong className="title-1">Follow the real cost.</strong><p className="body-6">Understand the full picture before changing the number.</p></div><div><span className="caption-3">02</span><strong className="title-1">Make systems usable.</strong><p className="body-6">Build processes people can run after the meeting ends.</p></div><div><span className="caption-3">03</span><strong className="title-1">Keep people in the loop.</strong><p className="body-6">Good decisions work across finance, operations, and customers.</p></div></div>
      </div></section>
      <section className="section section-light" id="experience"><div className="frame">
        <div className="section-heading" data-reveal><div><span className="section-index caption-3">03 / Experience</span><h2 className="heading-2">A practical view<br /><span className="muted">of business.</span></h2></div><p className="body-3">Founder roles ran alongside employed roles. Each added a different perspective on costs, teams, and growth.</p></div>
        <div className="experience-list">{experience.map((role) => <div className="experience-row" key={role[2]} data-reveal><span className="caption-3">{role[0]}</span><strong className="title-1">{role[1]}</strong><span className="body-5">{role[2]}</span></div>)}</div>
        <div className="credentials" data-reveal><div><span className="caption-3">Education</span><p className="title-3">Bachelor&rsquo;s in Management, Widyatama University<br />Cum Laude, GPA 3.92 of 4.00</p></div><div><span className="caption-3">Tools and credentials</span><p className="title-3">Accurate ERP, Excel, Google Sheets, Lark<br />WPPE-P certificate</p></div></div>
      </div></section>
      <section className="contact-section" id="contact"><div className="frame">
        <div className="contact-top caption-3"><span>04 / Contact</span><span>Bandung, Indonesia, UTC+7</span></div>
        <div className="contact-content" data-reveal><p className="title-1">Have a complex problem on your desk?</p><h2>Let&rsquo;s get to<br />the heart of it.</h2><a href="mailto:ahmadmuzzaki@gmail.com" className="button button-lg button-light">Start a conversation <ArrowUpRight size={20} weight="bold" aria-hidden /></a><a href="https://wa.me/6285117202105" target="_blank" rel="noopener noreferrer" className="inline-link button-md">Or message on WhatsApp <ArrowUpRight size={16} weight="bold" aria-hidden /></a></div>
        <div className="contact-bottom caption-1"><span>Ahmad Muzzaki Mahmud</span><div><a href="https://www.linkedin.com/in/ahmad-muzzaki-m-05556576/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={12} weight="bold" aria-hidden /></a><a href="mailto:ahmadmuzzaki@gmail.com">Email <ArrowUpRight size={12} weight="bold" aria-hidden /></a><a href="https://wa.me/6285117202105" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={12} weight="bold" aria-hidden /></a></div><a href="#top">Back to top <ArrowUp size={12} weight="bold" aria-hidden /></a></div>
      </div></section>
    </main>
  </>;
}
