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

// Course area. Blueprint modules ("low") are open to every buyer. System
// modules ("mid") are locked and act as the in-course upsell, except lessons
// marked preview. To add a video, paste its Loom share link or ID into `loom`.
export type Lesson = { id: string; title: string; loom?: string; preview?: boolean };
export type Module = { title: string; owner: "low" | "mid"; lessons: Lesson[] };

// Placeholder lessons until the real titles and videos are in.
const todo = (slug: string, n: number): Lesson[] =>
  Array.from({ length: n }, (_, i) => ({ id: `${slug}-${i + 1}`, title: `Lesson ${i + 1}` }));

export const modules: Module[] = [
  {
    title: "Why trades, why now",
    owner: "low",
    lessons: [
      ...todo("why", 3),
      {
        id: "be-resourceful",
        title: "Be Resourceful",
        loom: "https://www.loom.com/share/3958104a5d804d0f893f6b743fbb2f44",
      },
    ],
  },
  { title: "Capital path vs Boots path", owner: "low", lessons: todo("paths", 3) },
  {
    title: "Choosing your trade and market",
    owner: "low",
    lessons: [
      {
        id: "exterior-design-and-services-showcase",
        title: "Exterior Design and Services Showcase",
        loom: "https://www.loom.com/share/16197bf798e649819cc9ac94654fb00e",
      },
      ...todo("choose", 4),
    ],
  },
  { title: "Your startup cost worksheet", owner: "low", lessons: todo("costs", 2) },
  { title: "Launch: licensing, insurance, first crew", owner: "mid", lessons: todo("launch", 8) },
  {
    title: "Sell: leads, estimating, high-ticket projects",
    owner: "mid",
    lessons: [
      {
        id: "building-a-successful-business-strategy",
        title: "Building a Successful Business Strategy",
        loom: "https://www.loom.com/share/558abe0d750649fd8d35ea2a5db82503",
      },
      {
        id: "automated-estimating-interior",
        title: "Automated Estimating (Interior)",
        loom: "https://www.loom.com/share/2aacab951e8d424eb804be6883614fed",
      },
      {
        id: "sending-your-estimate-for-approval",
        title: "Sending Your Estimate for Approval",
        loom: "https://www.loom.com/share/0d490027aecb40768526e5d65dfe2e8e",
      },
      ...todo("sell", 6),
    ],
  },
  {
    title: "Systemize: dispatch, quality, cash flow",
    owner: "mid",
    lessons: [
      {
        id: "collecting-payments-and-draws",
        title: "Collecting Payments and Draws",
        loom: "https://www.loom.com/share/5ac5dd28c11a44efa710e38497f1835a",
      },
      {
        id: "sending-material-orders-to-subs",
        title: "Sending Material Orders to Subs",
        loom: "https://www.loom.com/share/d3aae55e32824377b4459741e1b40ef9",
      },
      ...todo("systemize", 5),
    ],
  },
  {
    title: "Remove yourself: the operator handoff",
    owner: "mid",
    lessons: [
      {
        id: "doing-less-by-delegation",
        title: "Doing Less by Delegation",
        loom: "https://www.loom.com/share/70593fa3aba945a29e5b3f6ef4c90af0",
        preview: true,
      },
      {
        id: "power-of-decision-making",
        title: "The Power of Decision Making",
        loom: "https://www.loom.com/share/5097dbc601a745909df6c6d850e6d2cc",
      },
      ...todo("remove", 4),
    ],
  },
];

export const allLessons = modules.flatMap((m) =>
  m.lessons.map((l) => ({ ...l, module: m, locked: m.owner === "mid" && !l.preview })),
);

// Accepts a Loom share/embed URL or a bare video ID.
export const loomId = (v: string) => v.match(/[0-9a-f]{32}/)?.[0] ?? v;

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
