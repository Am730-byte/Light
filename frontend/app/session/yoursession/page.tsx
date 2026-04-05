"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SiteNav from "@/components/site-nav";

type WorkoutSession = {
  id: string;
  name: string;
  notes: string | null;
  date: string;
};

export default function YourSessionsPage() {
  const router = useRouter();
  const [sessions, setSessions] = useState<WorkoutSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchSessions() {
    try {
      const response = await axios.get(
        "http://localhost:5173/api/session/workout",
        {
          withCredentials: true,
        },
      );
      setSessions(response.data);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Could not fetch your sessions");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void fetchSessions();
  }, []);

  async function handleDeleteSession(sessionId: string) {
    try {
      await axios.delete(`http://localhost:5173/api/session/workout/${sessionId}`, {
        withCredentials: true,
      });
      setSessions((current) => current.filter((session) => session.id !== sessionId));
    } catch (error) {
      console.error(error);
      setError("Could not delete session");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <SiteNav current="/session/yoursession" />

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">Your Sessions</h1>
            <p className="mt-2 text-zinc-400">
              Open, continue, or delete any workout session you already created.
            </p>
          </div>
          <Link
            href="/session/createsession"
            className="rounded-xl bg-emerald-700 px-4 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            Create Session
          </Link>
        </div>

        {loading ? <p className="text-zinc-400">Loading sessions...</p> : null}
        {error ? <p className="rounded-2xl bg-red-900/30 px-4 py-3 text-red-300">{error}</p> : null}

        {!loading && !error && sessions.length === 0 ? (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-6 shadow-xl shadow-black/20">
            <p className="text-zinc-300">No sessions created yet.</p>
          </div>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-5 shadow-xl shadow-black/20"
            >
              <button
                type="button"
                onClick={() => router.push(`/session/yoursession/${session.id}`)}
                className="w-full text-left"
              >
                <h2 className="text-2xl font-semibold">{session.name}</h2>
                <p className="mt-3 text-sm text-zinc-400">
                  {session.notes?.trim() || "No notes"}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-emerald-300">
                  {new Date(session.date).toLocaleString()}
                </p>
              </button>

              <div className="mt-4 flex gap-3">
                <Link
                  href={`/session/yoursession/${session.id}`}
                  className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  Open
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteSession(session.id)}
                  className="rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
