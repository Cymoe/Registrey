import { mutation } from "./_generated/server";
import { v } from "convex/values";

// High-ticket application from /apply. Saved as pending for review.
export const submit = mutation({
  args: {
    email: v.string(),
    capital: v.string(),
    hours: v.string(),
    plan: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error("Invalid email");
    if (args.plan.length > 5000) throw new Error("Plan is too long");
    const id = await ctx.db.insert("applications", { ...args, email, status: "pending" });
    await ctx.db.insert("events", { type: "application_submitted", offerId: "launch-partner", at: Date.now() });
    return id;
  },
});
