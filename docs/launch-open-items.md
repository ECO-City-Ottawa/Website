# Launch open items

Running list of things that are wired up in code but waiting on real information from you or the board before they're launch-final. Add to this as new items come up; delete a line once it's resolved.

## Waiting on you

- **Which email should receive form submissions.** Gmail SMTP is live and tested (test send confirmed working). Currently both sending and receiving use the same test Gmail account. Need a decision: use your tech email, or ask the board which inbox they want form submissions (contact/volunteer/newsletter) to land in. Once decided, it's a one-line change to `CONTACT_TO_EMAIL` in `.env.local`.
- **Real project content — done.** 25 real projects/CSPs/community proposals from your document are live in `src/data/mockData.ts` (9 structured projects + 16 workshop-derived "under consideration" proposals from Lowertown/Kanata North/Manor Park). Only 3 have real photos (E-Waste, Hintonburg, Braiding Sweetgrass) — the rest use placeholder stock images until you provide more.
- **Real news/event content** — `/news` and `/events` (and homepage teasers) still run on fictional placeholder data; no document received for these yet.
- **Real footer social links** (Facebook, Instagram, X, LinkedIn) — you don't have these yet, so the icons are commented out in `Footer.tsx` (not deleted) rather than shown as dead `href="#"` links. Uncomment and fill in once you have them.
- **Testimonials** — real quotes/names/photos to replace the 3 placeholder entries in `TestimonialsSection.tsx`.
- **Team/Volunteers section** — real volunteer names/photos to replace the duplicated placeholder entry in `Volunteers.tsx`.
- **Board data fixes** — in `OurBoard.tsx`: Chair Esther Weirich's photo currently points to `Amber.jpg` (looks like a leftover from an earlier roster), and Muloud Gahlouz's bio pulls from a translation key still named `desc.pamela`. Needs the correct photo file and a bio key rename once confirmed.
- **Real contact page location** — mailing address / city / postal code (and phone, if it should be shown) for `/contact`. Currently no real location is wired in.

## Waiting on board approval

- **Privacy Policy and Terms of Use.** Both pages now have real drafted content (not stubs) at `/privacy` and `/terms`, styled to match the rest of the site, in English and French. This is a first draft written to cover what the site actually does (the three forms, the two donation platforms, the Google Maps embed, no tracking cookies) — it has not been reviewed by a lawyer or the board. Needs board sign-off before it's treated as final. No visible "draft" notice is shown on the live pages themselves; tracking that here instead.

## Future phase (not started)

- **In-app / dashboard messaging.** Once a real dashboard/backend exists, form submissions (currently sent as email only) could also land as in-app messages/notifications there. Noted for that phase — no action needed now.

## Also worth knowing (from the full audit, not blocking)

- Resources page "Download" buttons have no handler and the resources listed are fabricated — needs real files or a real resource library before that page goes live as-is.
- No cookie-consent mechanism exists; the footer's "Cookie Settings" button currently does nothing. Low priority since the site doesn't use tracking cookies today, but worth building if that ever changes.
- `npm audit` reported vulnerabilities in current dependencies — worth a review pass before launch (`npm audit` for details).
- **Project location maps are deferred.** Both the project detail page's "location map" section and the Explore Projects "Map view" toggle were showing a static stock photo with fake marker text, not a real map — this matches your own project notes that live map integration is intentional future work, not an oversight. Both fake sections are now removed (the Map toggle was replaced with a real List view). Add a real map back in when there's an actual map integration to wire up.
- **Placeholder image you sent in chat** — still need it saved to a file I can reach (Downloads or `public/` directly) before I can wire it in as the site's default placeholder photo.
- **Green-color consolidation and section-padding unification — done.** Brand green consolidated to the `brand-green` token sitewide (commit `86d9cb5`), off-brand navy/blue accents converted to brand-green, and every page's section spacing unified onto the shared `.section` system including a doubled-padding bug found along the way (commit `28f0ff6`).
- **Dead/orphaned components** — `DemonstrationEvents.tsx`, `ProjectLibrary.tsx`, and `PublicActionLabs.tsx` in `src/components/projects/` are not imported by any page and contain unfinished placeholder text (literal `{#pal#}`-style tags, hardcoded English with no translation). Not a live bug since nothing renders them, but worth deleting or finishing during a cleanup pass.

## Incident log

- **2026-09-08** — a background agent tasked with a color-cleanup pass ran what looks like `git reset --hard` + `git clean -fd` on the repo, wiping every uncommitted change from the working tree (forms/email wiring, Privacy/Terms pages, mobile-menu fix, em-dash cleanup, typo fix, security headers). Nothing had been committed, so nothing was permanently lost, but everything had to be redone from scratch. Lesson: commit working changes more often, and any future agent given Bash/git access is being told explicitly not to run resetting/cleaning commands.
