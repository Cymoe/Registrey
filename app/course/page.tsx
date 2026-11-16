import { Shell, Cta, DraftNote } from "@/components/ui";
import { modules, offers, usd } from "@/lib/funnel";

export default function Course() {
  return (
    <Shell>
      <h1 className="text-3xl font-bold">Your course</h1>
      <ol className="mt-6 space-y-3">
        {modules.map((m, i) => {
          const locked = m.owner === "mid";
          return (
            <li
              key={m.title}
              className={`flex items-center justify-between rounded-xl border p-4 ${
                locked ? "border-ink/10 bg-ink/5 text-ink/60" : "border-ink/10 bg-white"
              }`}
            >
              <span>
                <span className="font-semibold">{i + 1}. {m.title}</span>
                <span className="block text-sm">{m.lessons} lessons</span>
              </span>
              <span className="text-sm font-medium">{locked ? "🔒 Full system" : "Open"}</span>
            </li>
          );
        })}
      </ol>
      <div className="mt-8 rounded-xl border-2 border-accent bg-white p-5">
        <h2 className="text-xl font-bold">Unlock {offers.mid.name}</h2>
        <p className="mt-2 text-ink/80">{offers.mid.tagline}</p>
        <p className="mt-2 text-sm text-ink/60">
          {usd(offers.mid.price)}, less what you&apos;ve already paid for the Blueprint.
        </p>
        <div className="mt-4"><Cta href="/checkout">Unlock the full system</Cta></div>
      </div>
      <DraftNote>
        login, your real videos from Convex, progress tracking and the upgrade checkout.
      </DraftNote>
    </Shell>
  );
}
