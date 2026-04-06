"use client";

import Link from "next/link";
import { useState, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import SiteNav from "@/components/site-nav";
import { api } from "@/lib/api";

export default function CreateFunction() {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await api.post(
        "/api/session/workout",
        {
          name,
          notes,
        },
      );
      router.push(`/session/yoursession/${response.data.id}`);
    } catch (error) {
      console.error(error);
      setError("Could not create session");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <SiteNav current="/session/createsession" />

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-8 shadow-xl shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold">Create Session</h1>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Give your workout a name and optional notes. After submit, you go
                straight into the session detail page.
              </p>
            </div>
            <Link
              href="/session/yoursession"
              className="rounded-xl bg-zinc-800 px-4 py-3 font-semibold text-white transition hover:bg-zinc-700"
            >
              Your Sessions
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <input
              name="name"
              value={name}
              placeholder="Session name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none"
              required
            />
            <textarea
              name="notes"
              value={notes}
              placeholder="Enter notes here"
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-32 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none"
            />

            {error ? <p className="rounded-2xl bg-red-900/30 px-4 py-3 text-red-300">{error}</p> : null}

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Create Session
              </button>
              <Link
                href="/session"
                className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold text-white transition hover:bg-zinc-700"
              >
                Back
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
