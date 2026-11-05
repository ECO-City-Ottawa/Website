# Launch open items

Running list of things that are wired up in code but waiting on real information from you or the board before they're launch-final. Add to this as new items come up; delete a line once it's resolved.

## Waiting on you

- **Which email should receive form submissions — decided, not yet live in production.** Guy confirmed `info@ecocityottawa.ca`. Updated `CONTACT_TO_EMAIL` in local `.env.local` (2026-09-10) — but `.env.local` is gitignored and never pushed, so **the Vercel project's own environment variables still need to be set/updated separately** (whoever administers the Vercel project — sounds like Rudi) or the live site keeps using whatever was there before. Sending still goes through the test Gmail account (`GMAIL_USER`) until real SMTP credentials exist; Guy offered Google Admin access for that, pending Rudi's approval.
- **Real project content — done.** 25 real projects/CSPs/community proposals from your document are live in `src/data/mockData.ts` (9 structured projects + 16 workshop-derived "under consideration" proposals from Lowertown/Kanata North/Manor Park). Only 3 have real photos (E-Waste, Hintonburg, Braiding Sweetgrass) — the rest use placeholder stock images. Guy suggested pulling old project photos from the Wayback Machine archive of the previous site — worth doing as a follow-up pass.
- **News & Events — removed (2026-11-03 pre-launch cleanup).** The `/news`, `/events` and `/news-events` routes, their mock data (`mockNews`, `mockEvents`), and every link to them were deleted because they only held fictional content. `NewsEventsSection.tsx` and `TestimonialsSection.tsx` are kept as files but are not rendered anywhere; **`NewsEventsSection.tsx` still links to the deleted routes, so rework it before ever re-enabling it.** Rebuild these pages when there is real news/event content.
- **Real footer social links** (Facebook, Instagram, X, LinkedIn) — Guy said Rudi should have these; asked Rudi directly (2026-09-10 email), or omit for now per Guy if Rudi doesn't have them either.
- **Team/Volunteers section — hidden from the About page (2026-11-03).** `Volunteers.tsx` is kept but no longer rendered. Guy provided a source doc for real volunteer names/photos (Google Sites link, shared 2026-09-09) — pull those in, then add `<Volunteers />` back to `src/app/about/page.tsx`.
- **Board data fixes (section hidden from the About page 2026-11-03; add `<OurBoard />` back to `src/app/about/page.tsx` once fixed)** — in `OurBoard.tsx`: Chair Esther Weirich's photo currently points to `Amber.jpg` (looks like a leftover from an earlier roster), and Muloud Gahlouz's bio pulls from a translation key still named `desc.pamela`. Guy acknowledged this ("Noted") — needs the correct photo file and a bio key rename once confirmed.
- **Real contact page location** — mailing address / city / postal code (and phone, if it should be shown). Guy said Rudi has this; asked Rudi directly (2026-09-10 email). As of 2026-11-03 the footer and contact page show only "Ottawa, Ontario, Canada" (EN and FR agree), with `TODO` comments in `Footer.tsx`, `ContactPageClient.tsx` and `translations.ts` where the address goes. The old "Call us" button and the French footer phone number were removed (they were unverified). **Still to decide:** the Privacy and Terms pages (EN + FR: `privacy.contact.body`, `terms.contact.body`) still contain a street address (108 Equestrian Drive, K2M 1H6) — confirm it or swap it for the real one.

## Waiting on Vercel / access

- **Vercel Hobby (free) plan only allows one outside collaborator at a time.** Guy's access request is still pending as of 2026-09-10 (he was stuck at the Vercel sign-in screen, hadn't completed Google sign-in yet — follow-up sent). Mouloud has also requested access but hasn't been approved yet since Guy was prioritized. Options once Guy's access clears: approve Mouloud next, or just make the preview public so anyone can view it without individual access — also resolves the "coming soon" placeholder currently showing publicly. Guy was asked which he'd prefer.
- **Production environment variables** — confirm whether `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `CONTACT_TO_EMAIL` are set in the Vercel project's own settings (not just local `.env.local`, which never gets deployed). Whoever administers the Vercel project (Rudi, most likely, since the project sits under the `obec-evbo.ca`-linked account) needs to confirm/update these directly in Vercel.

## Waiting on board approval

- **Privacy Policy and Terms of Use.** Both pages now have real drafted content (not stubs) at `/privacy` and `/terms`, styled to match the rest of the site, in English and French. This is a first draft written to cover what the site actually does (the three forms, the two donation platforms, the Google Maps embed, no tracking cookies) — it has not been reviewed by a lawyer or the board. Needs board sign-off before it's treated as final. No visible "draft" notice is shown on the live pages themselves; tracking that here instead.

## Future phase (not started)

- **In-app / dashboard messaging.** Once a real dashboard/backend exists, form submissions (currently sent as email only) could also land as in-app messages/notifications there. Noted for that phase — no action needed now.

## Also worth knowing (from the full audit, not blocking)

- **Resources page — removed (2026-11-03)** (fabricated resources, non-functional downloads). Rebuild when there are real files.
- No cookie-consent mechanism exists; the dead footer "Cookie settings" button was removed (2026-11-03). Build real consent UI only if tracking cookies are ever added.
- `npm audit` reported vulnerabilities in current dependencies — worth a review pass before launch (`npm audit` for details).
- **Project location maps are deferred.** Both the project detail page's "location map" section and the Explore Projects "Map view" toggle were showing a static stock photo with fake marker text, not a real map — this matches your own project notes that live map integration is intentional future work, not an oversight. Both fake sections are now removed (the Map toggle was replaced with a real List view). Add a real map back in when there's an actual map integration to wire up.
- **Placeholder image you sent in chat** — still need it saved to a file I can reach (Downloads or `public/` directly) before I can wire it in as the site's default placeholder photo.
- **Green-color consolidation and section-padding unification — done.** Brand green consolidated to the `brand-green` token sitewide (commit `86d9cb5`), off-brand navy/blue accents converted to brand-green, and every page's section spacing unified onto the shared `.section` system including a doubled-padding bug found along the way (commit `28f0ff6`).
- **Dead/orphaned components — deleted (2026-11-03):** `DemonstrationEvents`, `ProjectLibrary`, `PublicActionLabs`.
- **Site is English-only for launch (2026-11-03).** `FORCE_ENGLISH` in `src/context/LanguageContext.tsx` ignores/clears any saved "fr" preference. French translations are intact; set it to `false` (and re-enable the Navbar switcher) once the French copy is reviewed.
- **Newsletter:** `/api/newsletter` still works, but no form is rendered (`NewsletterSection.tsx` kept, not used).
- **Link-share image:** `layout.tsx` uses `/homepage/hero1.jpg` (1440x1080) for Open Graph/Twitter cards because there is no 1200x630 branded image. A purpose-made share card would look better.
- **Form hardening (2026-11-03):** contact and volunteer endpoints now have a honeypot, email-format check and length limits (`src/lib/formValidation.ts`).
- **Sitemap/OG base URL is `https://obec-evbo.ca`** (in `sitemap.ts` and `layout.tsx`); update both if the domain moves to `ecocityottawa.ca`.
- **Leftovers noticed, not changed:** `#Participate` / `#volunteer` / `#faq` badge text on `/engagement`; the Why & How "Tools of engagement" section still shows placeholder library projects and two no-op buttons ("View project", "View all"); the Partners card list still includes "Local community associations (e.g., Manor Park)"; the engagement FAQ answer about partnering mentions schools and hospitals; `docs/agent.md` is a stale audit prompt that still lists the deleted routes.

## Incident log

- **2026-09-08** — a background agent tasked with a color-cleanup pass ran what looks like `git reset --hard` + `git clean -fd` on the repo, wiping every uncommitted change from the working tree (forms/email wiring, Privacy/Terms pages, mobile-menu fix, em-dash cleanup, typo fix, security headers). Nothing had been committed, so nothing was permanently lost, but everything had to be redone from scratch. Lesson: commit working changes more often, and any future agent given Bash/git access is being told explicitly not to run resetting/cleaning commands.
