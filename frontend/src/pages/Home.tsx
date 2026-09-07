import { type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, Camera, Dumbbell, MapPin, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BRANCHES, GALLERY_IMAGES, SERVICES } from "@/data/branches";
import { Footer, PageShell, SectionIntro, SiteHeader } from "@/components/RkComponents";

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
  const scrollToBranches = () => {
    document.getElementById("branches")?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", "/#branches");
  };

  return (
    <PageShell>
      <SiteHeader onJoin={scrollToBranches} />
      <main>
        <section id="home" className="hero-section" data-testid="hero-section">
          <div className="hero-backdrop" aria-hidden="true" /><div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-content page-container"><p className="eyebrow hero-eyebrow" data-testid="hero-eyebrow">Hyderabad's serious training floor</p><h1 data-testid="hero-heading">Build strong.<br /><span>Build different.</span></h1><p className="hero-lead" data-testid="hero-lead">Train harder. Get stronger. Become your best.</p><p className="hero-copy" data-testid="hero-copy">RK FITNESS brings professional training, modern equipment and a serious fitness environment to multiple locations across Hyderabad.</p><div className="hero-actions"><Button className="yellow-button" onClick={scrollToBranches} data-testid="hero-join-button">Find your branch <ArrowUpRight /></Button><a className="outline-button" href="#branches" onClick={(event) => navTo(event, "branches")} data-testid="hero-branches-button">Explore our branches <ArrowDown /></a></div><div className="hero-footer-line"><span data-testid="hero-timing">OPEN DAILY / 6 AM — 12 AM</span><span data-testid="hero-location">HYDERABAD, TELANGANA</span></div></div>
        </section>

        <section id="about" className="about-section section-pad" data-testid="about-section"><div className="page-container about-grid"><SectionIntro eyebrow="01 / The standard" title="More than a gym." copy="RK FITNESS is built for people who are serious about getting stronger, fitter and better. Whether your goal is bodybuilding, weight loss, strength or overall fitness, we give you the environment and equipment to put in the work." /><div className="about-visual" data-testid="about-visual"><img src={GALLERY_IMAGES[1]} alt="Athlete training inside RK Fitness" data-testid="about-image" /><span className="vertical-caption" data-testid="about-image-caption">TRAIN WITH PURPOSE / 001</span></div></div><div className="page-container stats-row" data-testid="stats-row">{[["6", "Locations"], ["6 AM - 12 AM", "Timings"], ["Professional", "Trainers"], ["Modern", "Equipment"]].map(([value, label]) => <div className="stat-item" key={label} data-testid={`stat-${label.toLowerCase().replaceAll(" ", "-")}`}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

        <section className="why-section section-pad" data-testid="why-section"><div className="page-container"><SectionIntro eyebrow="02 / The edge" title="Why RK Fitness?" copy="The right environment changes how you show up. Everything here is designed to keep the work moving." /><div className="why-grid">{whyItems.map(({ title, copy, icon: Icon }, index) => <article className="why-card" key={title} data-testid={`why-card-${index + 1}`}><span className="card-index">0{index + 1}</span><Icon className="why-icon" /><h3 data-testid={`why-card-title-${index + 1}`}>{title}</h3><p data-testid={`why-card-copy-${index + 1}`}>{copy}</p><span className="card-arrow"><ArrowUpRight /></span></article>)}</div></div></section>

        <section id="services" className="services-section section-pad" data-testid="services-section"><div className="page-container"><SectionIntro eyebrow="03 / Train for your goal" title="Train for your goal." /><div className="service-grid">{SERVICES.map((service, index) => <article className="service-card" key={service.title} data-testid={`service-card-${service.title.toLowerCase().replaceAll(" ", "-")}`}><img src={service.image} alt={`${service.title} at RK Fitness`} data-testid={`service-image-${index + 1}`} /><div className="service-overlay" /><div className="service-copy"><span className="card-index">0{index + 1}</span><h3 data-testid={`service-title-${index + 1}`}>{service.title}</h3><p data-testid={`service-copy-${index + 1}`}>{service.copy}</p></div></article>)}</div></div></section>

        <section className="manifesto-section" data-testid="manifesto-section"><div className="manifesto-image" aria-hidden="true" /><div className="page-container manifesto-content"><p className="eyebrow" data-testid="manifesto-eyebrow">The work is the point</p><h2 data-testid="manifesto-heading">Discipline builds<br /><span>what motivation starts.</span></h2><div className="manifesto-lines"><span data-testid="manifesto-line-show-up">Show up.</span><span data-testid="manifesto-line-work">Put in the work.</span><span data-testid="manifesto-line-stronger">Get stronger.</span></div></div></section>

        <section id="branches" className="branches-section section-pad" data-testid="branches-section"><div className="page-container"><SectionIntro eyebrow="04 / Find your floor" title="Find your RK Fitness." copy="Six locations. One standard. Choose the floor that gets you moving." /><div className="branch-grid">{BRANCHES.map((branch, index) => <article className="branch-card" key={branch.slug} data-testid={`branch-card-${branch.slug}`}><div className="branch-image-wrap"><img src={branch.image} alt={`${branch.name} RK Fitness branch`} data-testid={`branch-image-${branch.slug}`} /><span className="branch-number">0{index + 1}</span></div><div className="branch-card-content"><span className="branch-order-label" data-testid={`branch-order-${branch.slug}`}>{branch.orderLabel}</span><h3 data-testid={`branch-name-${branch.slug}`}>{branch.name}</h3><p data-testid={`branch-description-${branch.slug}`}>A serious training floor for strength, consistency and progress.</p><Link to={`/branches/${branch.slug}`} className="text-link" data-testid={`branch-view-${branch.slug}`}>View branch <ArrowUpRight /></Link></div></article>)}</div></div></section>

        <section id="gallery" className="gallery-section section-pad" data-testid="gallery-section"><div className="page-container"><div className="gallery-heading"><SectionIntro eyebrow="05 / Inside RK" title="The floor is waiting." /><p data-testid="gallery-copy">Your new RK FITNESS photography will be placed here when it is ready.</p></div></div></section>

        <section className="instagram-section section-pad" data-testid="instagram-section"><div className="page-container instagram-panel"><div><p className="eyebrow" data-testid="instagram-eyebrow">06 / Follow the journey</p><h2 data-testid="instagram-heading">Train with us.<br /><span>Follow the journey.</span></h2></div><div className="instagram-copy"><Camera data-testid="instagram-icon" /><p data-testid="instagram-copy">Training floors, real work and the energy of RK FITNESS across Hyderabad.</p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="yellow-button inline-button" data-testid="instagram-follow-button">Follow RK Fitness <ArrowUpRight /></a></div></div></section>
      </main>
      <Footer />
    </PageShell>
  );
}
