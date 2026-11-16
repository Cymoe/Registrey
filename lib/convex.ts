import { ConvexHttpClient } from "convex/browser";

// Public deployment URL (not a secret). Override with NEXT_PUBLIC_CONVEX_URL.
export const convexUrl =
  process.env.NEXT_PUBLIC_CONVEX_URL ?? "https://shocking-swordfish-614.convex.cloud";

export const convex = new ConvexHttpClient(convexUrl);
