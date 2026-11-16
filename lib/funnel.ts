// Single source of truth for the funnel. Names, prices and copy are DRAFTS:
// edit here and every page updates. Prices are in whole US dollars.

export const brand = {
  name: "Location-Free Trades", // placeholder brand name
  promise: "Own an essential trades business you can run from anywhere.",
};

export type Offer = {
  id: string;
  tier: "low" | "bump" | "upsell" | "mid" | "high";
  name: string;
  price: number;
  tagline: string;
  includes: string[];
};

export const offers = {
  low: {
    id: "blueprint",
    tier: "low",
    name: "The Location-Free Trades Blueprint",
    price: 37,
    tagline:
      "Pick your trade, your market and your path, and know what it will really cost, in one weekend.",
    includes: [
      "Why essential trades are the AI-proof alternative to another corporate decade",
      "The two honest entry paths: Capital or Boots on the Ground",
      "Trade selection scorecard: demand, licensing, ticket size, remote-readiness",
      "Startup cost worksheet for your trade and market",
      "The stages from first job to running it from anywhere",
    ],
  },
  bump: {
    id: "numbers-pack",
    tier: "bump",
    name: "Trade-by-Trade Numbers Pack",
    price: 27,
    tagline:
      "Side-by-side startup budgets, typical job sizes and licensing notes for each trade we cover.",
    includes: ["Budget templates", "Licensing checklist", "Pricing cheat sheet"],
  },
  upsell: {
    id: "launch-kit",
    tier: "upsell",
    name: "The First 30 Days Launch Kit",
    price: 147,
    tagline:
      "Everything for your first month: entity and licensing steps, first-hire scripts, and a lead system that books jobs.",
    includes: [
      "Day-by-day launch plan",
      "Hiring and subcontractor scripts and agreements",
      "Lead generation setup walkthrough",
      "Quoting and invoicing templates",
    ],
  },
  mid: {
    id: "system",
    tier: "mid",
    name: "The Remote Trades Operator System",
    price: 1297,
    tagline:
      "The full path from launch to an operator-run business you manage from anywhere.",
    includes: [
      "Launch: licensing, insurance, first crew",
      "Sell: lead flow, estimating, winning high-ticket projects",
      "Systemize: dispatch, quality control, cash flow",
      "Remove yourself: hiring an operator and managing by numbers",
    ],
  },
  high: {
    id: "launch-partner",
    tier: "high",
    name: "Launch Partner",
    price: 4500,
    tagline:
      "We review your plan, your hires and your big bids alongside you. No scheduled calls: recorded feedback on your real work.",
    includes: [
      "Personal review of your market, trade and budget plan",
      "Recorded video feedback on hires, bids and numbers",
      "Priority written Q&A for 90 days",
      "Review of your first high-ticket project bids",
    ],
  },
} satisfies Record<string, Offer>;

// Course area: what the low-ticket buyer sees. Locked modules belong to the
// mid-ticket system and act as the in-course upsell.
export const modules: { title: string; owner: "low" | "mid"; lessons: number }[] = [
  { title: "Why trades, why now", owner: "low", lessons: 4 },
  { title: "Capital path vs Boots path", owner: "low", lessons: 3 },
  { title: "Choosing your trade and market", owner: "low", lessons: 5 },
  { title: "Your startup cost worksheet", owner: "low", lessons: 2 },
  { title: "Launch: licensing, insurance, first crew", owner: "mid", lessons: 8 },
  { title: "Sell: leads, estimating, high-ticket projects", owner: "mid", lessons: 9 },
  { title: "Systemize: dispatch, quality, cash flow", owner: "mid", lessons: 7 },
  { title: "Remove yourself: the operator handoff", owner: "mid", lessons: 6 },
];

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
