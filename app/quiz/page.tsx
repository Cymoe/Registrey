"use client";
import { useState } from "react";
import { Shell, Cta } from "@/components/ui";

const questions = [
  {
    q: "How much startup capital could you commit in the next 6 months?",
    a: [["Under $10k", 0], ["$10k to $50k", 1], ["Over $50k", 2]],
  },
  {
    q: "How many hours a week could you work in the business at first?",
    a: [["Under 10", 0], ["10 to 30", 1], ["Full time", 2]],
  },
  {
    q: "How soon do you want to be location free?",
    a: [["Within a year", 2], ["1 to 3 years", 1], ["No rush", 0]],
  },
] as const;

export default function Quiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const step = answers.length;

  if (step < questions.length) {
    const { q, a } = questions[step];
    return (
      <Shell>
        <p className="text-sm text-ink/60">Question {step + 1} of {questions.length}</p>
        <h1 className="mt-2 text-3xl font-bold">{q}</h1>
        <div className="mt-6 grid gap-3">
          {a.map(([label, score]) => (
            <button
              key={label}
              onClick={() => setAnswers([...answers, score])}
              className="rounded-lg border border-ink/15 bg-white px-5 py-4 text-left font-medium hover:border-accent"
            >
              {label}
            </button>
          ))}
        </div>
      </Shell>
    );
  }

  const [capital, hours] = answers;
  const result =
    capital === 0 && hours === 0
      ? {
          title: "Not yet, and that's worth knowing",
          body: "This model needs capital or hands-on time, and right now you have little of either to give. The Blueprint will show you exactly what to save or free up first.",
        }
      : capital >= hours
        ? {
            title: "You fit the Capital path",
            body: "You can fund a launch and hire skilled people early. Your risk is spending before you understand the numbers. The Blueprint's cost worksheet fixes that.",
          }
        : {
            title: "You fit the Boots path",
            body: "You have more time than money. You'll work in the business first, then hire your way out. The Blueprint maps the stages so you don't get stuck on the tools.",
          };

  return (
    <Shell>
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">Your result</p>
      <h1 className="mt-2 text-3xl font-bold">{result.title}</h1>
      <p className="mt-4 text-lg text-ink/80">{result.body}</p>
      <div className="mt-8"><Cta href="/checkout">Get the Blueprint</Cta></div>
    </Shell>
  );
}
