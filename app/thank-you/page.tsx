import Link from "next/link";
import { Shell, Cta } from "@/components/ui";
import { offers } from "@/lib/funnel";

export default function ThankYou() {
  return (
    <Shell>
      <h1 className="text-3xl font-bold">You&apos;re in. Start with module one.</h1>
      <p className="mt-4 text-lg text-ink/80">
        Your access details are on their way by email. Most people finish the Blueprint
        in a weekend.
      </p>
      <div className="mt-6"><Cta href="/course">Open the course</Cta></div>
      <div className="mt-12 rounded-xl border border-ink/10 bg-white p-5">
        <h2 className="font-semibold">Already have capital ready and want to move fast?</h2>
        <p className="mt-2 text-ink/80">{offers.high.tagline}</p>
        <Link href="/apply" className="mt-3 inline-block font-medium underline underline-offset-4">
          Apply for {offers.high.name}
        </Link>
      </div>
    </Shell>
  );
}
