"use client";

import Link from "next/link";
import { useEffect, useState, type SubmitEvent } from "react";
import { useParams } from "next/navigation";
import SiteNav from "@/components/site-nav";
import { api } from "@/lib/api";

type Exercise = {
  id: string;
  name: string;
  equipment: string;
  primarymuscle: string;
};

type SetLog = {
  id: string;
  weight: number;
  set: number;
  rep: number;
};

type SessionExercise = {
  id: string;
  exerciseId: string;
  exercise: Exercise;
  sets: SetLog[];
};

type SessionData = {
  id: string;
  name: string;
  notes: string | null;
  date: string;
  exercises: SessionExercise[];
};

type SetDraft = {
  weight: string;
  set: string;
  rep: string;
};

async function getSession(sessionId: string) {
  const response = await api.get(`/api/session/workout/${sessionId}`);

  return response.data;
}

export default function ExercisePage() {
  const params = useParams();
  const sessionId = params.sessionId as string;

  const [session, setSession] = useState<SessionData | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [catalogLoading, setCatalogLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [setDrafts, setSetDrafts] = useState<Record<string, SetDraft>>({});

  async function fetchExercises(searchValue = "") {
    setCatalogLoading(true);

    try {
      const response = await api.get(
        "/api/exercise/exercises",
        {
          params: searchValue ? { search: searchValue } : {},
        },
      );

      setExercises(response.data);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Could not fetch exercises");
    } finally {
      setCatalogLoading(false);
    }
  }

  useEffect(() => {
    async function fetchSession() {
      try {
        const nextSession = await getSession(sessionId);
        setSession(nextSession);
        setError("");
      } catch (error) {
        console.error(error);
        setError("Could not fetch session");
      } finally {
        setLoading(false);
      }
    }

    if (!sessionId) {
      return;
    }

    void fetchSession();
    void fetchExercises();
  }, [sessionId]);

  async function handleAddExercise(exerciseId: string) {
    try {
      await api.post(
        `/api/session/workout/${sessionId}/exercise`,
        {
          exerciseId,
        },
      );

      setMessage("Exercise added to session");
      setError("");
      const nextSession = await getSession(sessionId);
      setSession(nextSession);
    } catch (error) {
      console.error(error);
      setError("Could not add exercise to session");
    }
  }

  async function handleDeleteExercise(sessionExerciseId: string) {
    try {
      await api.delete(
        `/api/session/workout/${sessionId}/exercise/${sessionExerciseId}`,
      );

      setMessage("Exercise deleted");
      setError("");
      const nextSession = await getSession(sessionId);
      setSession(nextSession);
    } catch (error) {
      console.error(error);
      setError("Could not delete exercise");
    }
  }

  function handleSetDraftChange(
    sessionExerciseId: string,
    field: keyof SetDraft,
    value: string,
  ) {
    setSetDrafts((current) => ({
      ...current,
      [sessionExerciseId]: {
        ...(current[sessionExerciseId] ?? {
          weight: "",
          set: "",
          rep: "",
        }),
        [field]: value,
      },
    }));
  }

  async function handleSaveSet(
    e: SubmitEvent<HTMLFormElement>,
    sessionExerciseId: string,
  ) {
    e.preventDefault();
    const draft = setDrafts[sessionExerciseId];

    if (!draft) {
      return;
    }

    try {
      await api.post(
        "/api/sets/sets",
        {
          sessionExerciseId,
          weight: Number(draft.weight),
          set: Number(draft.set),
          rep: Number(draft.rep),
        },
      );

      setSetDrafts((current) => ({
        ...current,
        [sessionExerciseId]: {
          weight: "",
          set: "",
          rep: "",
        },
      }));
      setMessage("Set saved");
      setError("");
      const nextSession = await getSession(sessionId);
      setSession(nextSession);
    } catch (error) {
      console.error(error);
      setError("Could not save set");
    }
  }

  async function handleDeleteSet(setId: string) {
    try {
      await api.delete(`/api/sets/sets/${setId}`);

      setMessage("Set deleted");
      setError("");
      const nextSession = await getSession(sessionId);
      setSession(nextSession);
    } catch (error) {
      console.error(error);
      setError("Could not delete set");
    }
  }

  if (loading) {
    return <div className="min-h-screen bg-zinc-900 p-6 text-white">Loading...</div>;
  }

  if (error && !session) {
    return <div className="min-h-screen bg-zinc-900 p-6 text-white">{error}</div>;
  }

  if (!session) {
    return <div className="min-h-screen bg-zinc-900 p-6 text-white">No session found</div>;
  }

  const sessionExerciseIds = new Set(
    session.exercises.map((item) => item.exerciseId),
  );

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <SiteNav current="/session/yoursession" />

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">{session.name}</h1>
            <p className="mt-2 text-zinc-300">{session.notes || "No notes"}</p>
          </div>

          <div className="flex gap-3">
            <Link
              href={`/session/yoursession/${session.id}`}
              className="rounded-xl bg-zinc-700 px-4 py-3 font-semibold text-white transition hover:bg-zinc-600"
            >
              Session Details
            </Link>
            <Link
              href="/session/yoursession"
              className="rounded-xl bg-zinc-700 px-4 py-3 font-semibold text-white transition hover:bg-zinc-600"
            >
              All Sessions
            </Link>
          </div>
        </div>

        {message ? (
          <p className="mb-4 rounded-xl bg-emerald-900/40 px-4 py-3 text-emerald-300">
            {message}
          </p>
        ) : null}
        {error ? (
          <p className="mb-4 rounded-xl bg-red-900/30 px-4 py-3 text-red-300">
            {error}
          </p>
        ) : null}

        <div className="grid gap-6 xl:grid-cols-[1fr_1.15fr]">
          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-5 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-semibold">Add Exercises</h2>
            <div className="mt-4 flex gap-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search exercises"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none"
              />
              <button
                type="button"
                onClick={() => fetchExercises(search)}
                className="rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white transition hover:bg-emerald-600"
              >
                Search
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {catalogLoading ? (
                <p className="text-zinc-400">Loading exercises...</p>
              ) : (
                exercises.map((exercise) => (
                  <div
                    key={exercise.id}
                    className="rounded-2xl border border-zinc-700 bg-zinc-800 p-4"
                  >
                    <h3 className="text-lg font-semibold">{exercise.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {exercise.primarymuscle} • {exercise.equipment}
                    </p>
                    <button
                      type="button"
                      disabled={sessionExerciseIds.has(exercise.id)}
                      onClick={() => handleAddExercise(exercise.id)}
                      className="mt-3 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
                    >
                      {sessionExerciseIds.has(exercise.id)
                        ? "Already Added"
                        : "Add Exercise"}
                    </button>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-5 shadow-xl shadow-black/20">
            <h2 className="text-2xl font-semibold">Workout</h2>
            <div className="mt-5 space-y-5">
              {session.exercises.length === 0 ? (
                <p className="text-zinc-400">
                  No exercises in this session yet. Add one from the left.
                </p>
              ) : (
                session.exercises.map((item) => (
                  <div key={item.id} className="rounded-2xl bg-zinc-800 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold">{item.exercise.name}</h3>
                        <p className="mt-1 text-sm text-zinc-400">
                          {item.exercise.primarymuscle} • {item.exercise.equipment}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteExercise(item.id)}
                        className="rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                      >
                        Delete Exercise
                      </button>
                    </div>

                    <div className="mt-4 space-y-2">
                      {item.sets.length > 0 ? (
                        item.sets.map((setLog) => (
                          <div
                            key={setLog.id}
                            className="flex items-center justify-between gap-3 rounded-lg bg-zinc-900 p-3 text-sm"
                          >
                            <span>
                              Set {setLog.set}: {setLog.rep} reps @ {setLog.weight} kg
                            </span>
                            <button
                              type="button"
                              onClick={() => handleDeleteSet(setLog.id)}
                              className="rounded-lg bg-red-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-600"
                            >
                              Delete
                            </button>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-zinc-500">No sets yet</p>
                      )}
                    </div>

                    <form
                      onSubmit={(e) => handleSaveSet(e, item.id)}
                      className="mt-4 grid gap-3 md:grid-cols-3"
                    >
                      <input
                        type="number"
                        placeholder="Weight"
                        value={setDrafts[item.id]?.weight ?? ""}
                        onChange={(e) =>
                          handleSetDraftChange(item.id, "weight", e.target.value)
                        }
                        className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none"
                        min="0"
                        step="0.5"
                        required
                      />
                      <input
                        type="number"
                        placeholder="Set"
                        value={setDrafts[item.id]?.set ?? ""}
                        onChange={(e) =>
                          handleSetDraftChange(item.id, "set", e.target.value)
                        }
                        className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none"
                        min="1"
                        required
                      />
                      <input
                        type="number"
                        placeholder="Reps"
                        value={setDrafts[item.id]?.rep ?? ""}
                        onChange={(e) =>
                          handleSetDraftChange(item.id, "rep", e.target.value)
                        }
                        className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none"
                        min="1"
                        required
                      />
                      <button
                        type="submit"
                        className="rounded-lg bg-amber-600 px-4 py-2 font-semibold text-white transition hover:bg-amber-500 md:col-span-3"
                      >
                        Save Set
                      </button>
                    </form>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
