import { useEffect, useState, type ReactNode } from "react";
import { ArrowUp, ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BRANCHES } from "@/data/branches";

export function RkLogo({ footer = false }: { footer?: boolean }) {
  return (
    <Link to="/" className="rk-logo" data-testid={footer ? "footer-logo-link" : "navbar-logo-link"} aria-label="RK Fitness home">
      <span className="rk-logo-rk" data-testid={footer ? "footer-logo-rk" : "navbar-logo-rk"}>RK</span>
      <span className="rk-logo-name" data-testid={footer ? "footer-logo-name" : "navbar-logo-name"}>FITNESS</span>
    </Link>
  );
}

export function SiteHeader({ onJoin }: { onJoin: () => void }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "about"], ["Services", "services"], ["Branches", "branches"], ["Gallery", "gallery"],
  ];
  const handleNav = () => setOpen(false);
  return (
    <header className="site-header" data-testid="site-header">
      <div className="site-header-inner">
        <RkLogo />
        <nav className="desktop-nav" aria-label="Primary navigation" data-testid="desktop-navigation">
          {links.map(([label, id]) => (
            <a key={id} href={`/#${id}`} data-testid={`nav-link-${id}`}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <Button className="yellow-button header-join" onClick={onJoin} data-testid="navbar-join-button">Find a branch <ArrowUpRight /></Button>
          <button className="mobile-menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open} data-testid="mobile-menu-toggle">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation" data-testid="mobile-navigation">
          {links.map(([label, id]) => (
            <a key={id} href={`/#${id}`} onClick={handleNav} data-testid={`mobile-nav-link-${id}`}>{label}</a>
          ))}
          <Button className="yellow-button mobile-join" onClick={() => { handleNav(); onJoin(); }} data-testid="mobile-join-button">Find a branch <ArrowUpRight /></Button>
        </nav>
      )}
    </header>
  );
}

export function SectionIntro({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return (
    <div className={`section-intro section-intro-${align}`} data-testid={`section-intro-${eyebrow.toLowerCase().replaceAll(" ", "-")}`}>
      <p className="eyebrow" data-testid={`section-eyebrow-${eyebrow.toLowerCase().replaceAll(" ", "-")}`}>{eyebrow}</p>
      <h2 data-testid={`section-heading-${title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}`}>{title}</h2>
      {copy && <p className="section-copy" data-testid={`section-copy-${eyebrow.toLowerCase().replaceAll(" ", "-")}`}>{copy}</p>}
    </div>
  );
}

export function Footer() {
  const contactNumbers = [...new Set(BRANCHES.flatMap((branch) => branch.phones))];
  return (
    <footer className="site-footer" data-testid="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <RkLogo footer />
          <p data-testid="footer-tagline">BUILD STRONG.<br />BUILD DIFFERENT.</p>
        </div>
        <div className="footer-column" data-testid="footer-quick-links"><p className="footer-label">Explore</p><a href="/#about" data-testid="footer-about-link">About</a><a href="/#services" data-testid="footer-services-link">Services</a><a href="/#branches" data-testid="footer-branches-link">Branches</a><a href="/#gallery" data-testid="footer-gallery-link">Gallery</a></div>
        <div className="footer-column" data-testid="footer-branch-links"><p className="footer-label">Branches</p>{BRANCHES.map((branch) => <Link key={branch.slug} to={`/branches/${branch.slug}`} data-testid={`footer-branch-link-${branch.slug}`}>{branch.name}</Link>)}</div>
        <div className="footer-column footer-contact" data-testid="footer-contact"><p className="footer-label">Contact</p>{contactNumbers.map((phone, index) => <a key={phone} href={`tel:${phone}`} data-testid={`footer-phone-link-${index + 1}`}><Phone /> {phone}</a>)}<a href="https://instagram.com" target="_blank" rel="noreferrer" data-testid="footer-instagram-link">Instagram <ArrowUpRight /></a><p data-testid="footer-hours">6:00 AM - 12:00 PM<br />4:00 PM - 11:00 PM<br />Mon - Sun</p></div>
      </div>
      <div className="footer-bottom"><span data-testid="footer-copyright">© 2026 RK FITNESS. All Rights Reserved.</span><span data-testid="footer-location">Hyderabad, Telangana</span></div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 480);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return <div className="page-shell" data-testid="page-shell">{children}<button type="button" className={`back-to-top ${showBackToTop ? "back-to-top-visible" : ""}`} onClick={scrollToTop} aria-label="Back to top" data-testid="back-to-top-button"><ArrowUp /></button></div>;
}