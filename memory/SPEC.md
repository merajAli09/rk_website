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
- The supplied official yellow-on-black RK FITNESS logo is displayed in the fixed header, directly left of the text name.
- An About Owner section follows the six branches and uses the supplied photo of Vikram Singh, his 2005 career start, WFF India association, and listed 2017/2018/2021 titles.
- The owner photo is shown uncropped so his complete arms and torso remain visible, and the “About Owner” label is intentionally more prominent.
- Branch subpages retain their hero background but intentionally omit every branch-gallery section until real branch photos are supplied. Homepage gallery photography is also intentionally withheld.
- Guddimalkapur and Nampally currently use separate, restrained people-free dumbbell-rack images for their cards, heroes, and equipment-only branch galleries.
- The homepage “Build Strong. Build Different.” hero uses a people-free, medium-view dumbbell-rack photograph.

## Auth / roles
No authentication or gated areas.

## Content rules
Pricing, trainer, results/testimonial, and enquiry-form sections are intentionally omitted. Homepage branch cards show names and short descriptions only; complete addresses appear only on branch pages.