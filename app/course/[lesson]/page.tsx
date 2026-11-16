import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell, Cta } from "@/components/ui";
import { allLessons, loomId, offers } from "@/lib/funnel";

export function generateStaticParams() {
  return allLessons.map((l) => ({ lesson: l.id }));
}

export default async function LessonPage(props: PageProps<"/course/[lesson]">) {
  const { lesson: id } = await props.params;
  const i = allLessons.findIndex((l) => l.id === id);
  if (i === -1) notFound();
  const lesson = allLessons[i];
  const next = allLessons.slice(i + 1).find((l) => !l.locked);

  return (
    <Shell>
      <Link href="/course" className="text-sm text-ink/60 underline">
        ← {lesson.module.title}
      </Link>
      <h1 className="mt-2 text-3xl font-bold">{lesson.title}</h1>

      {lesson.locked ? (
        <div className="mt-6 rounded-xl border-2 border-accent bg-white p-5">
          <p className="font-semibold">This lesson is part of {offers.mid.name}.</p>
          <div className="mt-4"><Cta href="/system">Unlock the full system</Cta></div>
        </div>
      ) : lesson.loom ? (
        <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl bg-ink">
          <iframe
            src={`https://www.loom.com/embed/${loomId(lesson.loom)}?hideEmbedTopBar=true`}
            title={lesson.title}
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        </div>
      ) : (
        <p className="mt-6 rounded-xl border border-dashed border-ink/30 p-8 text-center text-ink/60">
          Video coming soon.
        </p>
      )}

      {lesson.preview && (
        <div className="mt-6 rounded-xl border-2 border-accent bg-white p-5">
          <p className="font-semibold">
            Free preview from {offers.mid.name}. The rest of this module shows you how to
            hand the business to an operator.
          </p>
          <div className="mt-4"><Cta href="/system">Unlock the full system</Cta></div>
        </div>
      )}

      {next && (
        <Link href={`/course/${next.id}`} className="mt-8 inline-block font-medium underline">
          Next: {next.title} →
        </Link>
      )}
    </Shell>
  );
}
