import Link from "next/link";
import { Shell, Cta, Checks, DraftNote } from "@/components/ui";
import { offers, usd } from "@/lib/funnel";

export default function Upgrade() {
  const o = offers.upsell;
  return (
    <Shell>
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        Your order is confirmed. One thing before you start.
      </p>
      <h1 className="mt-2 text-3xl font-bold">
        The Blueprint tells you what to launch. Want the first 30 days done for you on
        paper?
      </h1>
      <p className="mt-4 text-lg text-ink/80">{o.tagline}</p>
      <div className="mt-6"><Checks items={o.includes} /></div>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Cta href="/thank-you">Add {o.name} for {usd(o.price)}</Cta>
        <Link href="/thank-you" className="text-sm text-ink/60 underline">
          No thanks, take me to the Blueprint
        </Link>
      </div>
      <DraftNote>the add button will charge the saved card in one click.</DraftNote>
    </Shell>
  );
}
