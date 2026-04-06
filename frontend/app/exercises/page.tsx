"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteNav from "@/components/site-nav";
import { api } from "@/lib/api";

type Exercise = {
  id: string;
  name: string;
  equipment: string;
  primarymuscle: string;
  secondarymuscle: string[];
  instructions: string | null;
  source: string | null;
  sourcetype: string | null;
  createdAt: string;
};

export default function Exercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [clickCardId, setClickCardId] = useState<string | null>(null);

  function handleVideoMount(video: HTMLVideoElement | null) {
    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    const startPlayback = async () => {
      try {
        await video.play();
      } catch (error) {
        console.error("Video autoplay failed", error);
      }
    };

    if (video.readyState >= 2) {
      void startPlayback();
      return;
    }

    const onCanPlay = () => {
      void startPlayback();
      video.removeEventListener("canplay", onCanPlay);
    };

    video.addEventListener("canplay", onCanPlay);
  }

  async function fetchExercises(searchValue = "") {
    setLoading(true);

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
      setLoading(false);
    }
  }

  useEffect(() => {
    void fetchExercises();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <SiteNav current="/exercises" />

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-8 shadow-xl shadow-black/20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold">Exercises</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300">
                Search the backend library, inspect muscles and media, and jump back
                into your workout anytime.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/session"
                className="rounded-xl bg-emerald-700 px-4 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Session Hub
              </Link>
              <Link
                href="/session/yoursession"
                className="rounded-xl bg-zinc-800 px-4 py-3 font-semibold text-white transition hover:bg-zinc-700"
              >
                Your Sessions
              </Link>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search exercises"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none"
            />
            <button
              type="button"
              onClick={() => fetchExercises(search)}
              className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Search
            </button>
          </div>
        </section>

        {loading ? <p className="mt-5 text-zinc-400">Loading...</p> : null}
        {error ? <p className="mt-5 rounded-2xl bg-red-900/30 px-4 py-3 text-red-300">{error}</p> : null}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              onClick={() =>
                setClickCardId((current) =>
                  current === exercise.id ? null : exercise.id,
                )
              }
              className={`relative rounded-3xl border bg-zinc-900/95 p-5 shadow-xl shadow-black/20 transition duration-300 ${
                clickCardId === exercise.id
                  ? "z-30 sm:col-span-2 lg:col-span-2 scale-[1.04] border-emerald-500/70 shadow-[0_30px_90px_rgba(0,0,0,0.65)] ring-1 ring-emerald-400/30"
                  : "border-zinc-800 hover:scale-[1.01] hover:-translate-y-1 hover:border-zinc-700"
              }`}
            >
              <h2 className="text-xl font-semibold">{exercise.name}</h2>
              <p className="mt-2 text-zinc-300">Primary: {exercise.primarymuscle}</p>
              <p className="text-zinc-400">Equipment: {exercise.equipment}</p>
              <p className="text-zinc-400">
                Secondary:{" "}
                {exercise.secondarymuscle.length > 0
                  ? exercise.secondarymuscle.join(", ")
                  : "None"}
              </p>

              {clickCardId === exercise.id ? (
                <div className="mt-4 space-y-4 rounded-2xl border border-zinc-800 bg-zinc-800/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                      More Info
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setClickCardId(null);
                      }}
                      className="rounded-xl bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                    >
                      Close
                    </button>
                  </div>

                  <p className="text-sm leading-7 text-zinc-300">
                    {exercise.instructions}
                  </p>

                  {exercise.sourcetype === "image" && exercise.source ? (
                    <img
                      src={exercise.source}
                      alt={exercise.name}
                      className="max-h-[32rem] w-full rounded-2xl bg-black object-contain"
                    />
                  ) : exercise.sourcetype === "video" && exercise.source ? (
                    <video
                      ref={handleVideoMount}
                      src={exercise.source}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="exercise-video max-h-[32rem] w-full rounded-2xl bg-black object-contain"
                    />
                  ) : (
                    <p className="text-sm text-zinc-500">No media available</p>
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
