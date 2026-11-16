import { Shell, Cta, DraftNote } from "@/components/ui";
import { offers, usd } from "@/lib/funnel";

export default function SystemCheckout() {
  const credit = offers.low.price;
  return (
    <Shell>
      <h1 className="text-3xl font-bold">Upgrade to the System</h1>
      <div className="mt-6 rounded-xl border border-ink/10 bg-white p-5">
        <div className="flex justify-between font-medium">
          <span>{offers.mid.name}</span>
          <span>{usd(offers.mid.price)}</span>
        </div>
        <div className="mt-2 flex justify-between text-ink/70">
          <span>Blueprint credit</span>
          <span>−{usd(credit)}</span>
        </div>
        <div className="mt-5 flex justify-between border-t border-ink/10 pt-4 text-lg font-bold">
          <span>Total today</span>
          <span>{usd(offers.mid.price - credit)}</span>
        </div>
      </div>
      <div className="mt-6"><Cta href="/course">Complete upgrade</Cta></div>
      <DraftNote>no payment is taken. Stripe checkout goes here.</DraftNote>
    </Shell>
  );
}
