import { Shell, Cta, Checks } from "@/components/ui";
import { modules, offers, usd } from "@/lib/funnel";

const upgradePrice = offers.mid.price - offers.low.price;

// The job, start to finish, as the System teaches it. Each step maps to real lessons.
const jobFlow = [
  ["Estimate", "Scan the property and build a consistent, priced estimate in one sitting."],
  ["Approval", "Send it for approval the way that closes, never as a scary contract."],
  ["Payment", "Collect the deposit with a payment link and set draws for big jobs."],
  ["Materials", "Order everything from saved lists on your phone, tagged to the job."],
  ["Pickup", "Your sub gets the order and PO numbers and picks it up in hours."],
];

export default function System() {
  const o = offers.mid;
  const recorded = modules
    .filter((m) => m.owner === "mid")
    .map((m) => ({ ...m, lessons: m.lessons.filter((l) => l.loom) }))
    .filter((m) => m.lessons.length);

  return (
    <Shell>
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        {o.name}
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
        Run the job from your phone. Your crew handles the site.
      </h1>
      <p className="mt-5 text-lg text-ink/80">
        The Blueprint made you an operator with a plan. The System is how the
        business actually runs once jobs come in: estimating, closing, getting paid,
        and getting materials to the crew without you driving to the store.
      </p>
      <div className="mt-8"><Cta href="/system/checkout">Unlock the System</Cta></div>

      <section className="mt-16 rounded-2xl bg-ink p-6 text-paper sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          The part most owners never hand off
        </p>
        <h2 className="mt-2 text-3xl font-bold text-balance">
          Order every material from your phone. Your subs pick it up.
        </h2>
        <p className="mt-4 text-paper/80">
          Materials are where owners get stuck on site: a missing box of screws, a
          paint color nobody can match, a run to the store that eats the morning. The
          Materials module is the exact process used on real renovation jobs:
        </p>
        <ul className="mt-5 space-y-3">
          {[
            "Saved lists for every package: drywall, plumbing, paint, flooring. Add the whole list, trim what this job doesn't need, check out.",
            "Every order tagged with the house number as the PO, so subs and the store always know which job it's for.",
            "A screenshot with the order and PO numbers goes to the sub on WhatsApp. They pick it up in a couple of hours.",
            "Paint colors matched remotely: the sub snaps a photo, you order the right color online.",
            "The last-minute items at the end of every job, ordered the night before so nobody waits.",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-1 text-accent">●</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-paper/60">
          Shown on screen, step by step, including a full live ordering session.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">One job, start to finish</h2>
        <p className="mt-2 text-ink/80">
          This is the order the System teaches, and the order every job runs in.
        </p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-5">
          {jobFlow.map(([step, text], i) => (
            <li key={step} className="rounded-xl border border-ink/10 bg-white p-4">
              <span className="text-sm font-bold text-accent">{i + 1}</span>
              <h3 className="font-semibold">{step}</h3>
              <p className="mt-1 text-sm text-ink/70">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">What&apos;s inside</h2>
        <div className="mt-6 space-y-6">
          {recorded.map((m) => (
            <div key={m.title}>
              <h3 className="font-semibold">{m.title}</h3>
              <ul className="mt-2 space-y-1 text-ink/80">
                {m.lessons.map((l) => (
                  <li key={l.id}>▶ {l.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/60">
          New lessons are added as the System grows, at no extra cost.
        </p>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-ink/10 bg-white p-5">
          <h3 className="font-semibold">This is for you if</h3>
          <div className="mt-3">
            <Checks
              items={[
                "You have startup capital, or you're willing to work in the business first",
                "You want a business that runs on process, not on you being on site",
                "You'll follow a proven way of doing things before changing it",
              ]}
            />
          </div>
        </div>
        <div className="rounded-xl border border-ink/10 bg-white p-5">
          <h3 className="font-semibold">It&apos;s not for you if</h3>
          <ul className="mt-3 space-y-2 text-ink/80">
            <li>✕ You want passive income with no money or time going in</li>
            <li>✕ You expect results without hiring or managing anyone</li>
          </ul>
        </div>
      </section>

      <section className="mt-16 rounded-2xl border-2 border-accent bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-bold">Unlock {o.name}</h2>
        <p className="mt-3 text-ink/80">
          {usd(o.price)}, and the {usd(offers.low.price)} you paid for the Blueprint comes
          off. You pay <span className="font-bold text-ink">{usd(upgradePrice)}</span>.
        </p>
        <div className="mt-5"><Cta href="/system/checkout">Unlock for {usd(upgradePrice)}</Cta></div>
      </section>
    </Shell>
  );
}
