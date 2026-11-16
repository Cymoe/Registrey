// Funnel tables, deployed to the "Remote Ops" Convex project.
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // One row per person, created at first purchase or application.
  customers: defineTable({
    email: v.string(),
    stripeCustomerId: v.optional(v.string()),
    path: v.optional(v.union(v.literal("capital"), v.literal("boots"), v.literal("not_yet"))),
  }).index("by_email", ["email"]),

  // What each customer owns. offerId matches ids in lib/funnel.ts.
  entitlements: defineTable({
    customerId: v.id("customers"),
    offerId: v.string(),
    amountPaid: v.number(), // cents
    stripePaymentId: v.optional(v.string()),
  }).index("by_customer", ["customerId"]),

  // Lesson progress, used to trigger the mid and high offers.
  progress: defineTable({
    customerId: v.id("customers"),
    lessonId: v.string(),
    completedAt: v.number(),
  }).index("by_customer", ["customerId"]),

  // Funnel events: page views, offer shown/accepted/declined, emails sent.
  events: defineTable({
    customerId: v.optional(v.id("customers")),
    type: v.string(),
    offerId: v.optional(v.string()),
    at: v.number(),
  }).index("by_customer", ["customerId"]),

  // High-ticket applications.
  applications: defineTable({
    email: v.string(),
    capital: v.string(),
    hours: v.string(),
    plan: v.string(),
    status: v.union(v.literal("pending"), v.literal("approved"), v.literal("declined")),
  }).index("by_status", ["status"]),
});
