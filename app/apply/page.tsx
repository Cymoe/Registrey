"use client";
import { useState } from "react";
import { Shell, Checks } from "@/components/ui";
import { convex } from "@/lib/convex";
import { api } from "@/convex/_generated/api";
import { offers, usd } from "@/lib/funnel";

const field = "mt-1 w-full rounded-lg border border-ink/20 bg-white px-3 py-2";

export default function Apply() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const o = offers.high;
  if (sent)
    return (
      <Shell>
        <h1 className="text-3xl font-bold">Application received</h1>
        <p className="mt-4 text-lg text-ink/80">
          We review every application. If it&apos;s a fit you&apos;ll get a private
          enrolment link by email. No call needed.
        </p>
      </Shell>
    );
  return (
    <Shell>
      <h1 className="text-3xl font-bold">Apply for {o.name}</h1>
      <p className="mt-3 text-lg text-ink/80">{o.tagline}</p>
      <div className="mt-5"><Checks items={o.includes} /></div>
      <p className="mt-4 text-sm text-ink/60">Investment: {usd(o.price)}. By application only.</p>
      <form
        className="mt-8 space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          const f = new FormData(e.currentTarget);
          setBusy(true);
          setError("");
          try {
            await convex.mutation(api.applications.submit, {
              email: String(f.get("email")),
              capital: String(f.get("capital")),
              hours: String(f.get("hours")),
              plan: String(f.get("plan")),
            });
            setSent(true);
          } catch {
            setError("Something went wrong. Check your email address and try again.");
          } finally {
            setBusy(false);
          }
        }}
      >
        <label className="block font-medium">
          Email
          <input required name="email" type="email" className={field} />
        </label>
        <label className="block font-medium">
          Startup capital available
          <select required name="capital" className={field} defaultValue="">
            <option value="" disabled>Select</option>
            <option>Under $10k</option>
            <option>$10k to $50k</option>
            <option>$50k to $150k</option>
            <option>Over $150k</option>
          </select>
        </label>
        <label className="block font-medium">
          Hours per week you can work in the business
          <select required name="hours" className={field} defaultValue="">
            <option value="" disabled>Select</option>
            <option>Under 10</option>
            <option>10 to 30</option>
            <option>Full time</option>
          </select>
        </label>
        <label className="block font-medium">
          Which trade and market are you considering, and why?
          <textarea required name="plan" rows={4} maxLength={5000} className={field} />
        </label>
        {error && <p className="text-sm text-red-700">{error}</p>}
        <button
          disabled={busy}
          className="rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark disabled:opacity-60"
        >
          {busy ? "Sending…" : "Submit application"}
        </button>
      </form>
    </Shell>
  );
}
