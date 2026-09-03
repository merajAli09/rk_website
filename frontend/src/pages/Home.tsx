import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, Camera, Dumbbell, MapPin, MoveUpRight, ShieldCheck, Target, Users, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BRANCHES, GALLERY_IMAGES, PRICING, SERVICES, TRAINER_PLACEHOLDERS } from "@/data/branches";
import { ContactForm, EnquiryModal, Footer, PageShell, SectionIntro, SiteHeader } from "@/components/RkComponents";

const whyItems = [
  { title: "Multiple locations", copy: "Find an RK FITNESS gym in a location convenient for you.", icon: MapPin },
  { title: "Professional trainers", copy: "Train with guidance from professional fitness trainers.", icon: Users },
  { title: "Modern equipment", copy: "Train with modern equipment designed for serious workouts.", icon: Dumbbell },
  { title: "Built for results", copy: "Whether you're building muscle, losing weight or improving your fitness, train with purpose.", icon: Target },
];

const navTo = (event: FormEvent<HTMLAnchorElement>, id: string) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, "", `/#${id}`);
};

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openJoin = (interest = "") => { setSelectedInterest(interest); setModalOpen(true); };

  return (
    <PageShell>
      <SiteHeader onJoin={() => openJoin()} />
      <main>
        <section id="home" className="hero-section" data-testid="hero-section">
          <div className="hero-backdrop" aria-hidden="true" /><div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-content page-container"><p className="eyebrow hero-eyebrow" data-testid="hero-eyebrow">Hyderabad's serious training floor</p><h1 data-testid="hero-heading">Build strong.<br /><span>Build different.</span></h1><p className="hero-lead" data-testid="hero-lead">Train harder. Get stronger. Become your best.</p><p className="hero-copy" data-testid="hero-copy">RK FITNESS brings professional training, modern equipment and a serious fitness environment to multiple locations across Hyderabad.</p><div className="hero-actions"><Button className="yellow-button" onClick={() => openJoin()} data-testid="hero-join-button">Join RK Fitness <ArrowUpRight /></Button><a className="outline-button" href="#branches" onClick={(event) => navTo(event, "branches")} data-testid="hero-branches-button">Explore our branches <ArrowDown /></a></div><div className="hero-footer-line"><span data-testid="hero-timing">OPEN DAILY / 6 AM — 12 AM</span><span data-testid="hero-location">HYDERABAD, TELANGANA</span></div></div>
        </section>

        <section id="about" className="about-section section-pad" data-testid="about-section"><div className="page-container about-grid"><SectionIntro eyebrow="01 / The standard" title="More than a gym." copy="RK FITNESS is built for people who are serious about getting stronger, fitter and better. Whether your goal is bodybuilding, weight loss, strength or overall fitness, we give you the environment and equipment to put in the work." /><div className="about-visual" data-testid="about-visual"><img src={GALLERY_IMAGES[1]} alt="Athlete training inside RK Fitness" data-testid="about-image" /><span className="vertical-caption" data-testid="about-image-caption">TRAIN WITH PURPOSE / 001</span></div></div><div className="page-container stats-row" data-testid="stats-row">{[["6", "Locations"], ["6 AM - 12 AM", "Timings"], ["Professional", "Trainers"], ["Modern", "Equipment"]].map(([value, label]) => <div className="stat-item" key={label} data-testid={`stat-${label.toLowerCase().replaceAll(" ", "-")}`}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

        <section className="why-section section-pad" data-testid="why-section"><div className="page-container"><SectionIntro eyebrow="02 / The edge" title="Why RK Fitness?" copy="The right environment changes how you show up. Everything here is designed to keep the work moving." /><div className="why-grid">{whyItems.map(({ title, copy, icon: Icon }, index) => <article className="why-card" key={title} data-testid={`why-card-${index + 1}`}><span className="card-index">0{index + 1}</span><Icon className="why-icon" /><h3 data-testid={`why-card-title-${index + 1}`}>{title}</h3><p data-testid={`why-card-copy-${index + 1}`}>{copy}</p><span className="card-arrow"><ArrowUpRight /></span></article>)}</div></div></section>

        <section id="services" className="services-section section-pad" data-testid="services-section"><div className="page-container"><SectionIntro eyebrow="03 / Train for your goal" title="Train for your goal." /><div className="service-grid">{SERVICES.map((service, index) => <article className="service-card" key={service.title} data-testid={`service-card-${service.title.toLowerCase().replaceAll(" ", "-")}`}><img src={service.image} alt={`${service.title} at RK Fitness`} data-testid={`service-image-${index + 1}`} /><div className="service-overlay" /><div className="service-copy"><span className="card-index">0{index + 1}</span><h3 data-testid={`service-title-${index + 1}`}>{service.title}</h3><p data-testid={`service-copy-${index + 1}`}>{service.copy}</p></div></article>)}</div></div></section>

        <section className="manifesto-section" data-testid="manifesto-section"><div className="manifesto-image" aria-hidden="true" /><div className="page-container manifesto-content"><p className="eyebrow" data-testid="manifesto-eyebrow">The work is the point</p><h2 data-testid="manifesto-heading">Discipline builds<br /><span>what motivation starts.</span></h2><div className="manifesto-lines"><span data-testid="manifesto-line-show-up">Show up.</span><span data-testid="manifesto-line-work">Put in the work.</span><span data-testid="manifesto-line-stronger">Get stronger.</span></div></div></section>

        <section id="memberships" className="membership-section section-pad" data-testid="membership-section"><div className="page-container"><SectionIntro eyebrow="04 / Memberships" title="Choose your commitment." copy="No noise. No shortcuts. Pick the plan that keeps you accountable." /><div className="pricing-grid">{PRICING.map((plan, index) => <article className={`price-card ${plan.badge ? "price-card-featured" : ""}`} key={plan.id} data-testid={`pricing-card-${plan.id}`}>{plan.badge && <span className="price-badge" data-testid={`pricing-badge-${plan.id}`}>{plan.badge}</span>}<span className="price-number">{String(index + 1).padStart(2, "0")}</span><h3 data-testid={`pricing-name-${plan.id}`}>{plan.name}</h3><strong data-testid={`pricing-price-${plan.id}`}>{plan.price}</strong><span data-testid={`pricing-note-${plan.id}`}>{plan.note}</span><button type="button" className="price-cta" onClick={() => openJoin(`${plan.name} Membership`)} data-testid={`pricing-cta-${plan.id}`}>Join now <ArrowUpRight /></button></article>)}</div></div></section>

        <section id="branches" className="branches-section section-pad" data-testid="branches-section"><div className="page-container"><SectionIntro eyebrow="05 / Find your floor" title="Find your RK Fitness." copy="Six locations. One standard. Choose the floor that gets you moving." /><div className="branch-grid">{BRANCHES.map((branch, index) => <article className="branch-card" key={branch.slug} data-testid={`branch-card-${branch.slug}`}><div className="branch-image-wrap"><img src={branch.image} alt={`${branch.name} RK Fitness branch`} data-testid={`branch-image-${branch.slug}`} /><span className="branch-number">0{index + 1}</span></div><div className="branch-card-content"><h3 data-testid={`branch-name-${branch.slug}`}>{branch.name}</h3><p data-testid={`branch-description-${branch.slug}`}>A serious training floor for strength, consistency and progress.</p><Link to={`/branches/${branch.slug}`} className="text-link" data-testid={`branch-view-${branch.slug}`}>View branch <ArrowUpRight /></Link></div></article>)}</div></div></section>

        <section id="results" className="results-section section-pad" data-testid="results-section"><div className="page-container"><SectionIntro eyebrow="06 / Results" title="The work shows." copy="This space is ready for real transformation stories from the RK FITNESS community." /><div className="results-grid">{["Front / transformation placeholder", "Side / transformation placeholder", "Progress / story placeholder"].map((label, index) => <article className="result-placeholder" key={label} data-testid={`result-placeholder-${index + 1}`}><div className="placeholder-cross"><span>IMAGE<br />PLACEHOLDER</span></div><div><span className="eyebrow" data-testid={`result-label-${index + 1}`}>{label}</span><p data-testid={`result-copy-${index + 1}`}>Client name, goal and short story can be added here.</p></div></article>)}</div></div></section>

        <section id="trainers" className="trainers-section section-pad" data-testid="trainers-section"><div className="page-container"><SectionIntro eyebrow="07 / The people" title="Meet the coaches." copy="Real trainer profiles can be added here as the RK FITNESS team is introduced." /><div className="trainer-grid">{TRAINER_PLACEHOLDERS.map((trainer, index) => <article className="trainer-card" key={trainer.label} data-testid={`trainer-card-${index + 1}`}><img src={trainer.image} alt="Trainer profile placeholder" data-testid={`trainer-image-${index + 1}`} /><div className="trainer-overlay" /><div className="trainer-copy"><span className="eyebrow" data-testid={`trainer-role-${index + 1}`}>{trainer.role}</span><h3 data-testid={`trainer-placeholder-${index + 1}`}>{trainer.label}</h3><p data-testid={`trainer-branch-${index + 1}`}>Branch assignment placeholder</p></div></article>)}</div></div></section>

        <section id="gallery" className="gallery-section section-pad" data-testid="gallery-section"><div className="page-container"><div className="gallery-heading"><SectionIntro eyebrow="08 / Inside RK" title="The floor is waiting." /><p data-testid="gallery-copy">Built for early mornings, late nights and every set in between.</p></div><div className="gallery-grid">{GALLERY_IMAGES.map((image, index) => <button type="button" className={`gallery-tile gallery-tile-${index + 1}`} key={image} onClick={() => setLightboxImage(image)} data-testid={`gallery-image-${index + 1}`}><img src={image} alt={`RK Fitness gym atmosphere ${index + 1}`} /><span>View image <MoveUpRight /></span></button>)}</div></div></section>

        <section className="instagram-section section-pad" data-testid="instagram-section"><div className="page-container instagram-panel"><div><p className="eyebrow" data-testid="instagram-eyebrow">09 / Follow the journey</p><h2 data-testid="instagram-heading">Train with us.<br /><span>Follow the journey.</span></h2></div><div className="instagram-copy"><Camera data-testid="instagram-icon" /><p data-testid="instagram-copy">Training floors, real work and the energy of RK FITNESS across Hyderabad.</p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="yellow-button inline-button" data-testid="instagram-follow-button">Follow RK Fitness <ArrowUpRight /></a></div></div></section>

        <section id="contact" className="contact-section section-pad" data-testid="contact-section"><div className="page-container contact-grid"><div><SectionIntro eyebrow="10 / Make a move" title="Ready to put in the work?" copy="Tell us what you want to build. Our team will help you find the right branch and membership." /><div className="contact-note"><ShieldCheck /><span data-testid="contact-note">Prototype enquiry form — your message is not stored.</span></div></div><ContactForm /></div></section>
      </main>
      <Footer /><EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} interest={selectedInterest} />
      {lightboxImage && <div className="lightbox" role="dialog" aria-modal="true" data-testid="gallery-lightbox" onClick={() => setLightboxImage(null)}><button type="button" className="lightbox-close" onClick={() => setLightboxImage(null)} aria-label="Close gallery" data-testid="gallery-lightbox-close"><X /></button><img src={lightboxImage} alt="Expanded RK Fitness gallery" onClick={(event) => event.stopPropagation()} data-testid="gallery-lightbox-image" /></div>}
    </PageShell>
  );
}
