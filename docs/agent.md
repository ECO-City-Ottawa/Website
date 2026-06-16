You are working on the OBEC website — a Next.js project for the Ottawa Built Environment Council (obec-evbo.ca). A full pre-launch audit has already been completed. Your job is to work through the fix plan below and resolve every listed issue.


STRICT RULES


Do not touch the following — they are intentionally deferred:

Contact form submission logic
Volunteer form submission logic
Newsletter signup handler
Resource download button handlers
Google Maps / map view integration
Any buttons tied to future dashboard/backend features



One fix at a time. After each fix, briefly confirm what you changed and move to the next task.
Do not refactor or improve anything not listed. Scope is limited to the issues below.
Do not change any UI styling, layout, or component structure unless the fix explicitly requires it.



PHASE 1 — ONE-LINE BUGS (start here)

Task 1.1 — PAL Steps Duplication Bug


File: src/app/engagement/page.tsx around line 532–534
Problem: A .map() over a steps array renders palSteps[0] on every iteration — all cards show the same content
Fix: Use the current iteration variable instead of hardcoding index 0


Task 1.2 — Board Image Case Sensitivity


File: src/components/about/OurBoard.tsx lines 16 and 28
Problem: Code uses /board/amber.jpg and /board/eric.jpg but files in public/ are Amber.jpg and Eric.jpg. Breaks on Vercel.
Fix: Check what the actual filenames are in public/board/, then update the src references in the component to match exactly (including casing)


Task 1.3 — Raw <img> Tags


Files: src/app/news/page.tsx:68, src/app/events/page.tsx:44,101
Problem: Raw <img> used instead of Next.js <Image />
Fix: Import Image from next/image and replace each raw tag. Add explicit width and height props. Ensure alt text is appropriate.



PHASE 2 — ACCESSIBILITY

Task 2.1 — Contact Form Label Associations


File: src/app/contact/page.tsx lines 130–246
Problem: Labels are not associated with inputs via htmlFor/id
Fix: Add a unique id to every <input>, <select>, <textarea>. Add matching htmlFor on every <label>.


Task 2.2 — Volunteer Form Label Associations


File: src/app/engagement/page.tsx lines 277–417
Problem: Same as 2.1
Fix: Same approach — id on each field, htmlFor on each label


Task 2.3 — Skip Link Target on Detail Pages


Affected files: src/app/events/[slug]/page.tsx, src/app/news/[slug]/page.tsx, src/app/projects/[slug]/page.tsx
Problem: Skip link in Navbar targets #main but these pages render <main> without id="main"
Fix: Add id="main" to the <main> element in each of those three files


Task 2.4 — Search and Newsletter Input Accessible Names


Files: src/app/news-events/page.tsx (lines 175, 385), src/app/resources/page.tsx (line 132), src/components/projects/ExploreProjects.tsx (line 184), newsletter section component
Problem: Inputs have no label or aria-label — screen readers announce them as blank
Fix: Add aria-label="..." to each input with a descriptive value (e.g. aria-label="Search news and events")


Task 2.5 — Focus Styles on Form Fields


Files: src/app/contact/page.tsx, src/app/engagement/page.tsx and related fields
Problem: focus:outline-none used with only a border change — not WCAG compliant
Fix: Replace with a visible focus ring, e.g.:
focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent
Apply to all form inputs, selects, and textareas on both pages


Task 2.6 — Heading Order on Event Detail Page


File: src/app/events/[slug]/page.tsx around lines 55, 64, 79
Problem: Heading jumps from h1 to h3, skipping h2
Fix: Insert or promote the appropriate element to h2 to restore the correct order


Task 2.7 — Decorative Image Alt Text


File: src/components/ui/PageHero.tsx and similar
Problem: Background/decorative images use alt="Background" — screen readers announce this unnecessarily
Fix: Change alt="Background" (and similar non-informative alt text) to alt="" on all purely decorative images



PHASE 3 — MISSING ROUTES & CONTENT

Task 3.1 — Create /privacy Page


Create src/app/privacy/page.tsx
Include id="main" on the <main> element
Add export const metadata with title and description
Placeholder body copy: "Our privacy policy is currently being updated. Please check back soon."


Task 3.2 — Create /terms Page


Create src/app/terms/page.tsx
Same structure as 3.1
Placeholder body copy: "Our terms of use are currently being updated. Please check back soon."


Task 3.3 — Remove Lorem Ipsum


File: src/data/translations.ts lines 666, 736, 1713, 1783
Problem: Lorem ipsum placeholder text is visible on the engagement page in EN and FR
Fix:

English: replace with "Content coming soon."
French: replace with "Contenu à venir."





Task 3.4 — Fix href="#" on About Page CTAs


Files: src/components/about/Objectives.tsx:73, src/components/about/OurApproach.tsx:26
Problem: CTA links use href="#" and scroll to top with no destination
Fix: Remove the <Link> wrapper and render the label as a non-clickable styled span or button with a TODO comment indicating the target route is TBD. Do not leave href="#" in production.


Task 3.5 — Replace example.com Event Registration URLs


File: src/data/mockData.ts lines 500, 518, 536, 554, 572, 590, 608, 626
Problem: Event registration links point to example.com
Fix: Replace each with "#" and add a comment: // TODO: replace with real OBEC event registration URL


Task 3.6 — Footer Social Links


File: src/components/footer/Footer.tsx lines 22–26
Problem: Links point to generic platform homepages
Fix: Add a TODO comment on each: // TODO: replace with real OBEC social URL. For now, set href="#" so they don't navigate anywhere misleading. Do not remove the icons.


Task 3.7 — Donation CTA URLs


File: src/app/donate/page.tsx lines 170, 194
Problem: CTAs point to generic Zeffy and CanadaHelps homepages, not OBEC-specific pages
Fix: Add a TODO comment and temporarily set href="#" until real OBEC donation URLs are confirmed



PHASE 4 — SEO & META

Task 4.1 — Create robots.txt


Create public/robots.txt with:


User-agent: *
Allow: /

Sitemap: https://obec-evbo.ca/sitemap.xml

Task 4.2 — Create Sitemap


Create src/app/sitemap.ts listing all static routes:
/, /about, /contact, /donate, /engagement, /events, /news, /news-events, /projects, /projects/browse, /resources, /why-how, /privacy, /terms
Use the Next.js MetadataRoute.Sitemap return type
Set lastModified: new Date() for all entries
Use base URL https://obec-evbo.ca


Task 4.3 — Page-Specific Metadata


Add export const metadata to every page that currently relies on the default from layout.tsx
Reference src/app/about/page.tsx as the existing example to follow
Pages to update and suggested titles:

page.tsx (homepage) → "Home | OBEC"
contact/page.tsx → "Contact Us | OBEC"
donate/page.tsx → "Donate | OBEC"
engagement/page.tsx → "Get Involved | OBEC"
events/page.tsx → "Events | OBEC"
news/page.tsx → "News | OBEC"
news-events/page.tsx → "News & Events | OBEC"
projects/page.tsx → "Projects | OBEC"
projects/browse/page.tsx → "Browse Projects | OBEC"
resources/page.tsx → "Resources | OBEC"
why-how/page.tsx → "Why & How | OBEC"
privacy/page.tsx → "Privacy Policy | OBEC"
terms/page.tsx → "Terms of Use | OBEC"



Write a relevant 1-sentence description for each



WHEN DONE

Report a final summary in this format:

## Fix Summary

### ✅ Completed
- List each task completed with the file(s) changed

### ⚠️ Needs Client Input (cannot complete without external info)
- Task 3.6 — real OBEC social URLs
- Task 3.7 — real OBEC donation page URLs

### ❌ Skipped / Blocked
- Any task you could not complete and why