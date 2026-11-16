"use client";
import { useState } from "react";
import { Shell, Cta, DraftNote } from "@/components/ui";
import { offers, usd } from "@/lib/funnel";

export default function Checkout() {
  const [bump, setBump] = useState(false);
  const total = offers.low.price + (bump ? offers.bump.price : 0);
  return (
    <Shell>
      <h1 className="text-3xl font-bold">Checkout</h1>
      <div className="mt-6 rounded-xl border border-ink/10 bg-white p-5">
        <div className="flex justify-between font-medium">
          <span>{offers.low.name}</span>
          <span>{usd(offers.low.price)}</span>
        </div>
        <label className="mt-5 flex cursor-pointer gap-3 rounded-lg border-2 border-dashed border-accent bg-accent/5 p-4">
          <input
            type="checkbox"
            checked={bump}
            onChange={(e) => setBump(e.target.checked)}
            className="mt-1 size-5 accent-accent"
          />
          <span>
            <span className="font-semibold">
              Yes, add the {offers.bump.name} for {usd(offers.bump.price)}
            </span>
            <span className="mt-1 block text-sm text-ink/80">{offers.bump.tagline}</span>
          </span>
        </label>
        <div className="mt-5 flex justify-between border-t border-ink/10 pt-4 text-lg font-bold">
          <span>Total today</span>
          <span>{usd(total)}</span>
        </div>
      </div>
      <div className="mt-6"><Cta href="/upgrade">Complete order</Cta></div>
      <DraftNote>no payment is taken. Stripe checkout goes here.</DraftNote>
    </Shell>
  );
}
