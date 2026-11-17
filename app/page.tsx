import { Shell, Cta, Checks } from "@/components/ui";
import { offers, usd } from "@/lib/funnel";

export default function Home() {
  const o = offers.low;
  return (
    <Shell>
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
        For corporate people who want their own thing
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
        Home services don&apos;t need more tradesmen. They need operators.
      </h1>
      <p className="mt-5 text-xl font-semibold">
        Be the broker. You handle the sales. Your crews do the work.
      </p>
      <p className="mt-3 text-lg text-ink/80">
        You don&apos;t have to swing a hammer. Your subs bring the skills. You bring the
        marketing, the systems and the hustle that most trades companies never have.
        That&apos;s what lets the business grow, and it&apos;s what lets you run it from
        anywhere.
      </p>
      <div className="relative mt-8 aspect-video w-full max-w-full overflow-hidden rounded-xl bg-ink shadow-lg">
        <iframe
          src="https://www.loom.com/embed/c954a298a53c45dfb558460b77a79552?hideEmbedTopBar=true"
          title="Remote Ops: the opportunity in 6 minutes"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Cta href="/checkout">Get the Operator Blueprint for {usd(o.price)}</Cta>
        <a href="/quiz" className="font-medium underline underline-offset-4">
          Not sure? Take the 60-second fit quiz
        </a>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">The work is AI-proof. The way you run it shouldn&apos;t be.</h2>
        <p className="mt-3 text-ink/80">
          No software is going to paint a house, install a pergola or fix a roof. That
          demand isn&apos;t going anywhere. But estimating, ordering materials, getting
          paid and finding the next customer all run from your phone, with the same
          tools and instincts you already use at work.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">What the operator actually does</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            ["Fills the seats", "Finds the subs and key people, and gives each one a clear role."],
            ["Keeps the phone ringing", "Marketing, follow-up and closing. The job most owners avoid."],
            ["Runs the system", "Estimates, payments and materials, handled from anywhere."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border border-ink/10 bg-white p-5">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-ink/80">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Remote is earned. Here&apos;s the honest part.</h2>
        <p className="mt-3 text-ink/80">
          This isn&apos;t a hack and it isn&apos;t passive. Every operator starts one of two
          ways, and you need at least one of them.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-ink/10 bg-white p-5">
            <h3 className="font-semibold">Capital path</h3>
            <p className="mt-2 text-ink/80">
              You fund the launch and hire skilled people from day one. Faster to remote,
              but you need real startup money and the discipline to manage by numbers.
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
