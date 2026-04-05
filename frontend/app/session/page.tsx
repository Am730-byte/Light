"use client";

import Link from "next/link";
import SiteNav from "@/components/site-nav";

const sessionActions = [
  {
    href: "/session/createsession",
    title: "Create Session",
    description: "Start a workout and get a session id back from the backend.",
    tone: "bg-emerald-700 hover:bg-emerald-600",
  },
  {
    href: "/session/yoursession",
    title: "Your Sessions",
    description: "See every workout session you already created and open one.",
    tone: "bg-amber-700 hover:bg-amber-600",
  },
  {
    href: "/exercises",
    title: "Exercises",
    description: "Browse the exercise library before or during a workout.",
    tone: "bg-blue-700 hover:bg-blue-600",
  },
];

export default function SessionPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <SiteNav current="/session" />

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-8 shadow-xl shadow-black/20">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
            Session Flow
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Create it, open it, work inside it
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
            Sessions are now fully connected: create a session, view all sessions,
            open one specific session, start the workout, add exercises, and log sets.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/session/createsession"
              className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Create Session
            </Link>
            <Link
              href="/session/yoursession"
              className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold text-white transition hover:bg-zinc-700"
            >
              Open Your Sessions
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {sessionActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-zinc-700"
            >
              <div
                className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white transition ${action.tone}`}
              >
                Open
              </div>
              <h2 className="mt-5 text-2xl font-semibold">{action.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {action.description}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
