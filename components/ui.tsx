import Link from "next/link";
import { brand } from "@/lib/funnel";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-ink/10 px-4 py-4">
        <div className="mx-auto max-w-3xl font-semibold tracking-tight">
          <Link href="/">{brand.name}</Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">{children}</main>
      <footer className="border-t border-ink/10 px-4 py-6 text-xs text-ink/60">
        <p className="mx-auto max-w-3xl">
          This is education, not a guarantee of income. Starting a trades business takes
          capital, hands-on work, or both, and results depend on your market, effort and
          execution. Most businesses take time to become profitable and some never do.
        </p>
      </footer>
    </div>
  );
}

export function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg bg-accent px-6 py-3 text-center font-semibold text-white hover:bg-accent-dark"
    >
      {children}
    </Link>
  );
}

export function Checks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2">
          <span className="text-accent">✓</span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function DraftNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 rounded border border-dashed border-ink/30 px-3 py-2 text-xs text-ink/60">
      Not wired yet: {children}
    </p>
  );
}
