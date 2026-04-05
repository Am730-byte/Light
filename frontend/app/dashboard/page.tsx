"use client";

import Link from "next/link";
import SiteNav from "@/components/site-nav";

const cards = [
  {
    href: "/session",
    title: "Session",
    description: "Create workouts, open existing sessions, and start logging.",
    tone: "bg-emerald-700 hover:bg-emerald-600",
  },
  {
    href: "/exercises",
    title: "Exercises",
    description: "Browse all backend exercises and search the library.",
    tone: "bg-blue-700 hover:bg-blue-600",
  },
  {
    href: "/profile",
    title: "Profile",
    description: "See your account info and your current training stats.",
    tone: "bg-amber-700 hover:bg-amber-600",
  },
  {
    href: "/login",
    title: "Login / Sign Up",
    description: "Authenticate first so protected pages can use the auth cookie.",
    tone: "bg-zinc-700 hover:bg-zinc-600",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <SiteNav current="/dashboard" />

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-8 shadow-xl shadow-black/20">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
            Dashboard
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            One place to run your gym app
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
            Move between sessions, exercises, auth, and profile without losing the
            thread. The whole frontend now follows the same layout and button style.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/session"
              className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Open Session
            </Link>
            <Link
              href="/exercises"
              className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold text-white transition hover:bg-zinc-700"
            >
              Browse Exercises
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-zinc-700"
            >
              <div
                className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white transition ${card.tone}`}
              >
                Open
              </div>
              <h2 className="mt-5 text-2xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {card.description}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
