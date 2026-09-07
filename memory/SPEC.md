# RK FITNESS living spec

## What it does
Premium, mobile-first marketing website for RK FITNESS Hyderabad with a homepage and reusable branch detail pages for six locations.

## Data model
- `frontend/src/data/branches.ts` is the centralized source for ordered branch names, exact addresses, two click-to-call phone numbers per branch, photos, features, map embed URLs, and directions URLs.
- Standard operating hours across all locations are 6:00 AM–12:00 PM and 4:00 PM–11:00 PM.
- Asif Nagar additionally runs a 12:00 PM–4:00 PM ladies-only session with a ladies trainer available.
- Membership pricing is not displayed anywhere on the website.
- Enquiry forms and enquiry modals are not displayed anywhere on the website.

## Key flows
- Homepage sticky navigation → section anchors → primary CTA scrolls to the six branch choices.
- Homepage branch cards are ordered First through Sixth: Mangalhat, Begum Bazar, Asif Nagar, Puranapul, Guddimalkapur, Nampally → `/branches/:slug` reusable branch template.
- Branch pages reset to the top on navigation and show full address, call link, no-key Google Maps embed/share URL, directions link, services, and photos.
- Legacy URLs `/branches/gudimalkapur`, `/branches/afzal-gunj`, and `/branches/puranapool` redirect to the renamed canonical routes.
- The header is fixed while scrolling and every page provides a bottom-left back-to-top control after scrolling.
- Branch gallery images open a lightbox. Homepage gallery photography is intentionally withheld until the client supplies the replacement images.
- Guddimalkapur and Nampally currently use separate, restrained people-free dumbbell-rack images for their cards, heroes, and equipment-only branch galleries.

## Auth / roles
No authentication or gated areas.

## Content rules
Pricing, trainer, results/testimonial, and enquiry-form sections are intentionally omitted. Homepage branch cards show names and short descriptions only; complete addresses appear only on branch pages.