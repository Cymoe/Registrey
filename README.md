# Registrey

Ascension funnel for a location-free trades business course: low-ticket front end, mid-ticket system, application-only high ticket (no sales calls).

## Flow

`/` sales page → `/quiz` (optional fit quiz) → `/checkout` (with order bump) → `/upgrade` (one-click upsell) → `/thank-you` → `/course` (locked modules sell the mid ticket) → `/apply` (high ticket).

Offer names, prices and copy are drafts and all live in `lib/funnel.ts`.

## Status

Pages and navigation work. Not wired yet: payments (Stripe), login, real course content and data (Convex; draft tables in `convex/schema.ts`), and email.

## Run

    npm install
    npm run dev
