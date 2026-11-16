import Link from "next/link";
import { Shell, Cta, DraftNote } from "@/components/ui";
import { isLocked, modules, offers, unlockAll, usd } from "@/lib/funnel";

export default function Course() {
  return (
    <Shell>
      <h1 className="text-3xl font-bold">Your course</h1>
      {unlockAll && (
        <p className="mt-3 rounded bg-yellow-100 px-3 py-2 text-sm text-yellow-900">
          Review mode: every lesson is unlocked. Turn off <code>unlockAll</code> in
          lib/funnel.ts before launch.
        </p>
      )}
      <ol className="mt-6 space-y-4">
        {modules.map((m, i) => {
          const locked = m.owner === "mid" && !unlockAll;
          return (
            <li key={m.title} className="rounded-xl border border-ink/10 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{i + 1}. {m.title}</span>
                {locked && <span className="text-sm text-ink/60">🔒 Full system</span>}
              </div>
              <ul className="mt-2 space-y-1 text-sm">
                {m.lessons.map((l) => {
                  const open = !isLocked(m, l);
                  return (
                    <li key={l.id}>
                      <Link
                        href={`/course/${l.id}`}
                        className={open ? "hover:underline" : "text-ink/45"}
                      >
                        {open ? "▶" : "🔒"} {l.title}
                        {l.preview && (
                          <span className="ml-2 rounded bg-accent/15 px-1.5 py-0.5 text-xs font-semibold text-accent-dark">
                            Free preview
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
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
      <DraftNote>login, progress tracking and the real upgrade checkout.</DraftNote>
    </Shell>
  );
}
