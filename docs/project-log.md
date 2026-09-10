# Project log — OBEC website

Narrative record of what this project is, what's been done, why decisions were made the way they were, and where things stand. Read this first in a new session to pick up where things left off. For the granular "what are we still waiting on from someone" checklist, see [`launch-open-items.md`](./launch-open-items.md) instead — this file is about the story and reasoning, that one is the actionable list.

Update this file whenever a phase wraps up or a significant decision gets made — not after every small edit.

## What this is

The EcoCity Ottawa / OBEC (Ottawa Biosphere EcoCity) nonprofit website. Next.js (App Router) + TypeScript + Tailwind v4, bilingual (EN/FR) via a custom `t()` context. Working branch: `feature/seo-metadata-improvements` (the branch actually being used for launch — see "Branches" below). Deployed preview on Vercel under the `obec-evbo.ca`-linked account; domain may eventually migrate to `ecocityottawa.ca`.

## Where things stand right now (2026-09-10)

The site itself is functionally and visually launch-ready. The project has moved from **building** into **board review and content handoff** — the board (via Guy) has seen the live preview and is now the source of real content and a few decisions the code can't make on its own. Today's work was mostly coordination: drafting/sending emails to the board, actioning their feedback, and confirming a Vercel deploy gotcha (see below).

Active threads right now:
- Waiting on Guy to get Vercel access sorted (he was stuck at the Google sign-in step) and to answer whether to make the preview fully public or approve Mouloud next (Hobby plan = one outside collaborator at a time).
- Waiting on Rudi for social links and the real mailing address/phone.
- A call with Esther (Board Chair) was set up for 5pm today to talk launch next steps.
- **Important gotcha for whoever picks this up next:** `CONTACT_TO_EMAIL` was updated to `info@ecocityottawa.ca` in local `.env.local`, but `.env.local` is gitignored and never deploys. The live Vercel site won't pick this up until someone with Vercel project access sets it directly in Vercel's environment variable settings. Don't assume it's live just because it's in the repo owner's local file.

## How the project got here

### Phase 1 — Pre-launch audit and critical fixes
A full audit covered security, accessibility, design uniformity, and content completeness. Six critical items came out of it and were resolved one by one: a working Gmail-based form backend (contact/volunteer/newsletter, tested live), real Privacy/Terms pages drafted to match the site's actual behavior (not yet board-approved), a mobile-menu keyboard-trap fix, inline form validation with a consistent red accent + scroll-to-error, and donate/social links (donate wired to real CanadaHelps URLs; social links commented out pending real URLs — see Footer.tsx).

**Why placeholder content stayed in so long:** the plan from early on was to build every section against realistic mock data first, then swap in real content once it existed, rather than blocking layout/functionality work on content that wasn't ready yet. That's why so much of the "waiting on" list is content swaps, not code work.

**Incident:** a background agent once ran a destructive `git reset --hard` + `git clean -fd` mid-task, wiping uncommitted work (nothing had been pushed, so nothing was permanently lost, but everything had to be redone). Lesson applied since: commit more often, and no more agents given unsupervised Bash/git access for file-editing tasks — that work is now done directly, turn by turn, with the human in the loop reviewing along the way.

### Phase 2 — Real content pass
The user supplied a project document; extracted 9 real structured projects plus 16 workshop-derived "under consideration" project cards from its ~700-line appendix, replacing all fictional mock projects. Only 3 projects have real photos (E-Waste, Hintonburg, Braiding Sweetgrass) — checked each embedded image individually rather than trusting filename/position proximity, which caught one image that would have been wrongly used (a Carleton University club photo that coincidentally matched a neighbourhood name). Along the way, found and fixed a translation-key bug where missing translations rendered literal keys like `mockProject.1.title` as visible page text — traced to `t()` returning the key itself (never falsy) on a miss, fixed with a `localize()` helper used everywhere that pattern existed.

Also cleaned up the Projects section UX: added pagination, renamed the misleading "List" (card grid) view to "Cards" and built a genuine compact list view, and removed a Map view that only ever showed a fake stock photo with fake markers (real map integration is intentionally deferred, not an oversight).

### Phase 3 — Sitewide visual consistency
Two sitewide passes, both explicitly discussed and approved before touching anything given the blast radius:
- **Brand-green consolidation** — the brand green was rendering as 6+ different hex values across ~130 call sites; consolidated to the single `brand-green` token, and converted two off-brand navy/blue accent colors to brand-green too, per the user's choice.
- **Padding-system unification** — newer pages used a different flat spacing pattern than older pages' shared `.section` design token; unified everything onto `.section`, including a doubled-padding bug (an outer `.section` element plus a redundant inner `px-*` div) found along the way in several components.

### Phase 4 — UI/UX polish round
A batch of specific fixes, each discussed with the user first where the approach had real tradeoffs (see the AskUserQuestion decisions in that conversation):
- Fixed French-language button overflow in the desktop nav (~1024-1280px range) with a component-level fix — tightened gaps/padding/font-size rather than moving the shared `lg:` breakpoint, to avoid blast radius on unrelated layouts.
- Standardized every section header's description width to 700px (readable-measure range), after auditing all ~35 candidate headers and finding none needed the 800px "dense copy" exception in practice. Left CTA banners and split two-column headers alone — different, intentional treatments.
- Shortened `PageHero` (used by every subpage except home) so mobile heroes don't eat half the screen.
- Rebuilt the homepage testimonials section as a real scroll-snap carousel with prev/next + keyboard support, opaque cards (was letting the background leaf watermark bleed through), and 5 entries instead of 3.
- Fixed the About page history timeline: mobile lost the desktop version's per-era colors and had no connecting visual thread — added a vertical dot-and-line story layout using the same colors as desktop.
- Added the decorative leaf (Sprout) motif to the two green sections that were missing it, matching the pattern already used elsewhere.
- Redesigned the Projects theme/type/status filter from a wrapping pill grid (which could push real content below the fold) into a horizontal scroll strip with a "show all" dropdown.

### Phase 5 — Board review and coordination (current)
The board reviewed the live Vercel preview. Feedback came back through Guy (who's coordinating content/access on the board's side, cc'ing Rudi for domain/social/address info he holds). Actioned so far:
- Commented out the homepage News & Events and Testimonials sections per Guy's request (real content doesn't exist yet) — same pattern as the already-commented-out Newsletter section, not deleted.
- Confirmed `info@ecocityottawa.ca` as the contact-form recipient address per Guy (see the Vercel env-var gotcha above — not fully live yet).
- Drafted and sent replies to Guy (content list + Vercel access fix) and Esther (scheduling a call).

## Branches

`feat/about-page` was checked (2026-09-10) and found to be a stale checkpoint branch — fully contained as an ancestor of `feature/seo-metadata-improvements`, nothing unique to merge. Safe to ignore or delete.

## Where to look for more detail

- [`launch-open-items.md`](./launch-open-items.md) — the actionable "waiting on X" checklist, organized by who it's waiting on.
- `git log --oneline` on `feature/seo-metadata-improvements` — every phase above corresponds to a cluster of commits with descriptive messages; read the messages for exact scope of each change.
