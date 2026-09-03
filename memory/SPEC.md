# RK FITNESS living spec

## What it does
Premium, mobile-first marketing website for RK FITNESS Hyderabad with a homepage and reusable branch detail pages for six locations.

## Data model
- `frontend/src/data/branches.ts` is the centralized source for branch names, exact addresses, demo phones, photos, features, map embed URLs, and directions URLs.
- Membership prices are centralized in `PRICING` and match the requested values exactly.
- Enquiry forms are prototype-only and show a success state; submissions are not persisted.

## Key flows
- Homepage sticky navigation → section anchors → join CTA opens enquiry modal.
- Homepage branch cards → `/branches/:slug` reusable branch template.
- Branch pages show full address, call link, no-key Google Maps embed/share URL, directions link, photos, pricing, placeholders, and join CTA.
- Gallery images open a lightbox.

## Auth / roles
No authentication or gated areas.

## Content rules
Trainer, result, and testimonial areas are editable placeholders only. Homepage branch cards show names and short descriptions only; complete addresses appear only on branch pages.