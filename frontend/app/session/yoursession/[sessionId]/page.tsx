"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import SiteNav from "@/components/site-nav";
import { api } from "@/lib/api";

type SetLog = {
  id: string;
  weight: number;
  set: number;
  rep: number;
};

type ExerciseData = {
  id: string;
  name: string;
  equipment: string;
  primarymuscle: string;
};

type SessionExercise = {
  id: string;
  exerciseId: string;
  exercise: ExerciseData;
  sets: SetLog[];
};

type SessionData = {
  id: string;
  name: string;
  notes: string | null;
  date: string;
  exercises: SessionExercise[];
};

export default function YourSession() {
  const params = useParams();
  const sessionId = params.sessionId as string;
  const router = useRouter();

  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await api.get(`/api/session/workout/${sessionId}`);
        setSession(response.data);
      } catch (error) {
        console.error(error);
        setError("Could not fetch session");
      } finally {
        setLoading(false);
      }
    }

    if (sessionId) {
      void fetchSession();
    }
  }, [sessionId]);

  if (loading) return <div className="min-h-screen bg-zinc-950 p-6 text-white">Loading...</div>;
  if (error) return <div className="min-h-screen bg-zinc-950 p-6 text-white">{error}</div>;
  if (!session) return <div className="min-h-screen bg-zinc-950 p-6 text-white">No session found</div>;

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <SiteNav current="/session/yoursession" />

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-8 shadow-xl shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold">{session.name}</h1>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                {session.notes || "No notes"}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/session/yoursession/${session.id}/exercise`}
                className="rounded-xl bg-emerald-700 px-4 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Start Workout
              </Link>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await api.delete(`/api/session/workout/${session.id}`);
                    router.push("/session/yoursession");
                  } catch (error) {
                    console.error(error);
                    setError("Could not delete session");
                  }
                }}
                className="rounded-xl bg-red-700 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
              >
                Delete Session
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/95 p-6 shadow-xl shadow-black/20">
          <h2 className="text-2xl font-semibold">Exercises In This Session</h2>
          <div className="mt-5 space-y-4">
            {session.exercises.length > 0 ? (
              session.exercises.map((item) => (
                <div key={item.id} className="rounded-2xl bg-zinc-800 p-4">
                  <h3 className="text-xl font-semibold">{item.exercise.name}</h3>
                  <p className="text-zinc-400">
                    {item.exercise.primarymuscle} • {item.exercise.equipment}
                  </p>
                  <div className="mt-4 space-y-2">
                    {item.sets.length > 0 ? (
                      item.sets.map((setLog) => (
                        <div key={setLog.id} className="rounded-lg bg-zinc-700 p-3">
                          Set {setLog.set}: {setLog.rep} reps @ {setLog.weight} kg
                        </div>
                      ))
                    ) : (
                      <p className="text-zinc-500">No sets yet</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-zinc-400">
                No exercises yet. Use Start Workout to add exercises and begin.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
