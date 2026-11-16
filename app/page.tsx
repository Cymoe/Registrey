import { Shell, Cta, Checks } from "@/components/ui";
import { offers, usd } from "@/lib/funnel";

export default function Home() {
  const o = offers.low;
  return (
    <Shell>
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        For corporate professionals who want their own thing
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        The business AI can&apos;t replace is the one that fixes, builds and maintains
        the real world.
      </h1>
      <p className="mt-5 text-lg text-ink/80">
        Essential trades businesses keep running in every economy. Run well, one can be
        managed from anywhere. Getting there is not passive: you start with capital, with
        your own boots on the ground, or both. The Blueprint shows you which path fits
        you and what it costs before you risk anything bigger than {usd(o.price)}.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Cta href="/checkout">Get the Blueprint for {usd(o.price)}</Cta>
        <a href="/quiz" className="font-medium underline underline-offset-4">
          Not sure? Take the 60-second fit quiz
        </a>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Two honest ways in</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-ink/10 bg-white p-5">
            <h3 className="font-semibold">Capital path</h3>
            <p className="mt-2 text-ink/80">
              You fund the launch and hire skilled people from day one. Faster to
              remote, but you need real startup money and the discipline to manage by
              numbers.
            </p>
          </div>
          <div className="rounded-xl border border-ink/10 bg-white p-5">
            <h3 className="font-semibold">Boots path</h3>
            <p className="mt-2 text-ink/80">
              You work in the business first, learn every job, then hire and train your
              way out. Less money up front, more of your time.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">What&apos;s inside {o.name}</h2>
        <div className="mt-4"><Checks items={o.includes} /></div>
        <div className="mt-8"><Cta href="/checkout">Start for {usd(o.price)}</Cta></div>
      </section>
    </Shell>
  );
}
