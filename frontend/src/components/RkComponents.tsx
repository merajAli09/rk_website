import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, Check, Menu, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BRANCHES, INTEREST_OPTIONS } from "@/data/branches";

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
    ["About", "about"], ["Services", "services"], ["Memberships", "memberships"], ["Branches", "branches"],
    ["Trainers", "trainers"], ["Results", "results"], ["Gallery", "gallery"], ["Contact", "contact"],
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
          <Button className="yellow-button header-join" onClick={onJoin} data-testid="navbar-join-button">Join now <ArrowUpRight /></Button>
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
          <Button className="yellow-button mobile-join" onClick={() => { handleNav(); onJoin(); }} data-testid="mobile-join-button">Join now <ArrowUpRight /></Button>
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

type ContactFormProps = { defaultInterest?: string; defaultBranch?: string; onComplete?: () => void };

export function ContactForm({ defaultInterest = "", defaultBranch = "", onComplete }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState(defaultBranch);
  const [interest, setInterest] = useState(defaultInterest);
  const [message, setMessage] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    onComplete?.();
  };

  if (submitted) {
    return (
      <div className="success-state" data-testid="enquiry-success-message">
        <div className="success-icon"><Check /></div>
        <p className="eyebrow" data-testid="success-eyebrow">Enquiry received</p>
        <h3 data-testid="success-heading">Thank you for contacting RK FITNESS.</h3>
        <p data-testid="success-copy">Our team will get in touch with you shortly.</p>
        <button type="button" className="text-link" onClick={() => setSubmitted(false)} data-testid="enquiry-send-another-button">Send another enquiry <ArrowUpRight /></button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="enquiry-form" data-testid="enquiry-form">
      <div className="form-grid">
        <label data-testid="enquiry-name-field">Name<Input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your full name" data-testid="enquiry-name-input" /></label>
        <label data-testid="enquiry-phone-field">Phone number<Input required type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="9998887771" data-testid="enquiry-phone-input" /></label>
        <label data-testid="enquiry-branch-field">Preferred branch<select required value={branch} onChange={(event) => setBranch(event.target.value)} data-testid="enquiry-branch-select"><option value="">Choose a branch</option>{BRANCHES.map((item) => <option key={item.slug} value={item.name}>{item.name}</option>)}</select></label>
        <label data-testid="enquiry-interest-field">Interested in<select required value={interest} onChange={(event) => setInterest(event.target.value)} data-testid="enquiry-interest-select"><option value="">Choose a goal</option>{INTEREST_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
      </div>
      <label data-testid="enquiry-message-field">Message<Textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell us what you want to work towards" data-testid="enquiry-message-input" /></label>
      <Button type="submit" className="yellow-button form-submit" data-testid="enquiry-form-submit">Send enquiry <ArrowUpRight /></Button>
    </form>
  );
}

export function EnquiryModal({ open, onClose, interest = "", branch = "" }: { open: boolean; onClose: () => void; interest?: string; branch?: string }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} data-testid="enquiry-modal-backdrop">
      <div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-modal-title" data-testid="enquiry-modal">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close enquiry form" data-testid="enquiry-modal-close"><X /></button>
        <p className="eyebrow" data-testid="modal-eyebrow">Start your next chapter</p>
        <h2 id="enquiry-modal-title" data-testid="enquiry-modal-title">Join RK FITNESS.</h2>
        <p className="modal-copy" data-testid="enquiry-modal-copy">Leave your details and we will help you choose the right way to train.</p>
        <ContactForm defaultInterest={interest} defaultBranch={branch} />
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer" data-testid="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <RkLogo footer />
          <p data-testid="footer-tagline">BUILD STRONG.<br />BUILD DIFFERENT.</p>
        </div>
        <div className="footer-column" data-testid="footer-quick-links"><p className="footer-label">Explore</p><a href="/#about" data-testid="footer-about-link">About</a><a href="/#services" data-testid="footer-services-link">Services</a><a href="/#memberships" data-testid="footer-memberships-link">Memberships</a><a href="/#gallery" data-testid="footer-gallery-link">Gallery</a></div>
        <div className="footer-column" data-testid="footer-branch-links"><p className="footer-label">Branches</p>{BRANCHES.map((branch) => <Link key={branch.slug} to={`/branches/${branch.slug}`} data-testid={`footer-branch-link-${branch.slug}`}>{branch.name}</Link>)}</div>
        <div className="footer-column footer-contact" data-testid="footer-contact"><p className="footer-label">Contact</p><a href="tel:9998887771" data-testid="footer-phone-link"><Phone /> 9998887771</a><a href="https://instagram.com" target="_blank" rel="noreferrer" data-testid="footer-instagram-link">Instagram <ArrowUpRight /></a><p data-testid="footer-hours">6:00 AM - 12:00 AM<br />Mon - Sun</p></div>
      </div>
      <div className="footer-bottom"><span data-testid="footer-copyright">© 2026 RK FITNESS. All Rights Reserved.</span><span data-testid="footer-location">Hyderabad, Telangana</span></div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="page-shell" data-testid="page-shell">{children}</div>;
}