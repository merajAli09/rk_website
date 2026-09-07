import { useEffect, useLayoutEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Clock3, MapPin, Phone, X } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BRANCHES, SERVICES } from "@/data/branches";
import { Footer, PageShell, SectionIntro, SiteHeader } from "@/components/RkComponents";

export default function Branch() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const branch = BRANCHES.find((item) => item.slug === slug);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    root.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previousBehavior;
  }, [slug]);

  useEffect(() => {
    if (!branch) return;
    document.title = `${branch.name} Gym Hyderabad | RK FITNESS`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", `Train at RK FITNESS ${branch.name}, Hyderabad. View the full address, timings, services and directions.`);
  }, [branch]);

  if (!branch) {
    return <PageShell><SiteHeader onJoin={() => navigate("/")} /><main className="not-found page-container" data-testid="branch-not-found"><p className="eyebrow">404 / Floor not found</p><h1>That branch is not on the map.</h1><Link to="/" className="yellow-button inline-button" data-testid="branch-not-found-home">Back to home <ArrowLeft /></Link></main><Footer /></PageShell>;
  }

  return (
    <PageShell>
      <SiteHeader onJoin={() => navigate("/#branches")} />
      <main>
        <section className="branch-hero" data-testid={`branch-hero-${branch.slug}`}><div className="branch-hero-image" style={{ backgroundImage: `url(${branch.image})` }} /><div className="branch-hero-content page-container"><Link to="/#branches" className="back-link" data-testid="branch-back-link"><ArrowLeft /> All branches</Link><p className="eyebrow" data-testid="branch-hero-eyebrow">{branch.orderLabel} / RK FITNESS Hyderabad</p><h1 data-testid="branch-hero-heading">{branch.name}<br /><span>branch.</span></h1><p className="branch-hero-copy" data-testid="branch-hero-copy">A serious place to train, build strength and stay consistent.</p><div className="hero-actions">{branch.phones.map((phone, index) => <a key={phone} href={`tel:${phone}`} className={index === 0 ? "yellow-button inline-button" : "outline-button"} data-testid={`branch-hero-call-button-${index + 1}`}><Phone /> Call {phone}</a>)}<a href={branch.directionsUrl} target="_blank" rel="noreferrer" className="outline-button" data-testid="branch-hero-directions-button">Get directions <ArrowUpRight /></a></div></div></section>

        <section className="branch-info-section section-pad" data-testid="branch-info-section"><div className="page-container branch-info-grid"><div><SectionIntro eyebrow="01 / Your training floor" title={`${branch.name} details.`} copy="Everything you need to find the floor, plan the session and get moving." /><div className="branch-detail-list"><div className="detail-row" data-testid="branch-address-detail"><MapPin /><div><span>Address</span><p>{branch.address.map((line) => <span key={line}>{line}<br /></span>)}</p></div></div><div className="detail-row" data-testid="branch-phone-detail"><Phone /><div><span>Phone numbers</span><div className="phone-list">{branch.phones.map((phone, index) => <a key={phone} href={`tel:${phone}`} data-testid={`branch-phone-link-${index + 1}`}>{phone}</a>)}</div></div></div><div className="detail-row" data-testid="branch-hours-detail"><Clock3 /><div><span>General timings</span><p data-testid="branch-hours-values">{branch.timings.join(" / ")}</p></div></div>{branch.ladiesOnly && <div className="detail-row ladies-only-detail" data-testid="asif-nagar-ladies-session"><Clock3 /><div><span data-testid="ladies-session-label">{branch.ladiesOnly.label}</span><p data-testid="ladies-session-time">{branch.ladiesOnly.time}</p><strong data-testid="ladies-trainer-note">{branch.ladiesOnly.trainer}</strong></div></div>}</div></div><div className="map-card" data-testid="branch-map-card"><iframe title={`Map for RK Fitness ${branch.name}`} src={branch.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-testid={`branch-map-iframe-${branch.slug}`} /><div className="map-footer"><span data-testid="branch-map-label">Find us in {branch.name}</span><a href={branch.directionsUrl} target="_blank" rel="noreferrer" className="text-link" data-testid="branch-directions-link">Get directions <ArrowUpRight /></a></div></div></div></section>

        <section className="branch-services-section section-pad" data-testid="branch-services-section"><div className="page-container"><SectionIntro eyebrow="02 / Train here" title="Built for the work." /><div className="feature-list">{branch.features.map((feature, index) => <div className="feature-row" key={feature} data-testid={`branch-feature-${index + 1}`}><span>0{index + 1}</span><strong>{feature}</strong><Check /></div>)}</div><div className="branch-service-strip">{SERVICES.slice(0, 3).map((service, index) => <div key={service.title} data-testid={`branch-service-${index + 1}`}><img src={service.image} alt={service.title} /><span>{service.title}</span></div>)}</div></div></section>

        <section className="branch-gallery-section section-pad" data-testid="branch-gallery-section"><div className="page-container"><SectionIntro eyebrow="03 / Inside the branch" title={`${branch.name}, in focus.`} /><div className="branch-gallery-grid">{branch.gallery.map((image, index) => <button type="button" key={image} onClick={() => setLightboxImage(image)} data-testid={`branch-gallery-image-${index + 1}`}><img src={image} alt={`${branch.name} gym interior ${index + 1}`} /><span>Expand <ArrowUpRight /></span></button>)}</div></div></section>

        <section className="branch-cta-section" data-testid="branch-cta-section"><div className="page-container branch-cta-inner"><div><p className="eyebrow">Your next session starts here</p><h2>Ready to train<br /><span>at {branch.name}?</span></h2></div><div className="branch-cta-actions">{branch.phones.map((phone, index) => <a key={phone} href={`tel:${phone}`} className="yellow-button inline-button" data-testid={`branch-call-now-button-${index + 1}`}><Phone /> {phone}</a>)}<a href={branch.directionsUrl} target="_blank" rel="noreferrer" className="outline-button" data-testid="branch-cta-directions-button">Get directions <ArrowUpRight /></a></div></div></section>
      </main>
      <Footer />
      {lightboxImage && <div className="lightbox" role="dialog" aria-modal="true" data-testid="branch-gallery-lightbox" onClick={() => setLightboxImage(null)}><button type="button" className="lightbox-close" onClick={() => setLightboxImage(null)} aria-label="Close gallery" data-testid="branch-gallery-lightbox-close"><X /></button><img src={lightboxImage} alt={`Expanded ${branch.name} gallery`} onClick={(event) => event.stopPropagation()} /></div>}
    </PageShell>
  );
}