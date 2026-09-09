# Launch open items

Running list of things that are wired up in code but waiting on real information from you or the board before they're launch-final. Add to this as new items come up; delete a line once it's resolved.

## Waiting on you

- **Gmail credentials for form email.** Contact, Volunteer, and Newsletter now send email via Gmail SMTP (see `.env.example`). Needs a `GMAIL_USER` + `GMAIL_APP_PASSWORD` (App Password, not the regular login password) in `.env.local`, plus a `CONTACT_TO_EMAIL` destination address. Use your own address to test first; swap in the real destination(s) later. Nothing sends until this is filled in.
- **Real project/news/event content.** All of `/projects`, `/news`, `/events` (and their detail pages, plus the homepage teasers) run on fictional placeholder data in `src/data/mockData.ts`. You said you have a document with the real content — once you send it, this gets swapped in.
- **Real footer social links** (Facebook, Instagram, X, LinkedIn) — currently `href="#"` placeholders in `Footer.tsx`.
- **Real donate links** (Zeffy, CanadaHelps buttons) — currently `href="#"` placeholders in `DonatePageClient.tsx`.
- **Testimonials** — real quotes/names/photos to replace the 3 placeholder entries in `TestimonialsSection.tsx`.
- **Team/Volunteers section** — real volunteer names/photos to replace the duplicated placeholder entry in `Volunteers.tsx`.
- **Board data fixes** — in `OurBoard.tsx`: Chair Esther Weirich's photo currently points to `Amber.jpg` (looks like a leftover from an earlier roster), and Muloud Gahlouz's bio pulls from a translation key still named `desc.pamela`. Needs the correct photo file and a bio key rename once confirmed.

## Waiting on board approval

- **Privacy Policy and Terms of Use.** Both pages now have real drafted content (not stubs) at `/privacy` and `/terms`, styled to match the rest of the site, in English and French. This is a first draft written to cover what the site actually does (the three forms, the two donation platforms, the Google Maps embed, no tracking cookies) — it has not been reviewed by a lawyer or the board. Needs board sign-off before it's treated as final. No visible "draft" notice is shown on the live pages themselves; tracking that here instead.

## Future phase (not started)

- **In-app / dashboard messaging.** Once a real dashboard/backend exists, form submissions (currently sent as email only) could also land as in-app messages/notifications there. Noted for that phase — no action needed now.

## Also worth knowing (from the full audit, not blocking)

- Resources page "Download" buttons have no handler and the resources listed are fabricated — needs real files or a real resource library before that page goes live as-is.
- No cookie-consent mechanism exists; the footer's "Cookie Settings" button currently does nothing. Low priority since the site doesn't use tracking cookies today, but worth building if that ever changes.
- `npm audit` reported vulnerabilities in current dependencies — worth a review pass before launch (`npm audit` for details).

## Incident log

- **2026-09-08** — a background agent tasked with a color-cleanup pass ran what looks like `git reset --hard` + `git clean -fd` on the repo, wiping every uncommitted change from the working tree (forms/email wiring, Privacy/Terms pages, mobile-menu fix, em-dash cleanup, typo fix, security headers). Nothing had been committed, so nothing was permanently lost, but everything had to be redone from scratch. Lesson: commit working changes more often, and any future agent given Bash/git access is being told explicitly not to run resetting/cleaning commands.
