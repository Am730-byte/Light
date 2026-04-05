"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import SiteNav from "@/components/site-nav";

type User = {
  id: string;
  name: string;
  userName: string;
  email: string;
  createdAt: string;
  role: string;
  type: string;
  totalSessions: number;
  totalExercises: number;
};

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get("http://localhost:5173/api/profile/me", {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
        setError("Could not fetch profile");
      } finally {
        setLoading(false);
      }
    }

    void fetchProfile();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <SiteNav current="/profile" />

        {loading ? <p className="text-zinc-400">Loading...</p> : null}
        {error ? <p className="rounded-2xl bg-red-900/30 px-4 py-3 text-red-300">{error}</p> : null}
        {!loading && !error && !user ? <p>No profile found</p> : null}

        {user ? (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-6 shadow-xl shadow-black/20">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="mt-2 text-zinc-400">@{user.userName}</p>
              <div className="mt-6 space-y-3 text-zinc-300">
                <p>
                  <span className="font-semibold text-white">Email:</span> {user.email}
                </p>
                <p>
                  <span className="font-semibold text-white">Role:</span> {user.role}
                </p>
                <p>
                  <span className="font-semibold text-white">Type:</span> {user.type}
                </p>
                <p>
                  <span className="font-semibold text-white">Joined:</span>{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/session/yoursession"
                  className="rounded-xl bg-emerald-700 px-4 py-3 font-semibold text-white transition hover:bg-emerald-600"
                >
                  Your Sessions
                </Link>
                <Link
                  href="/exercises"
                  className="rounded-xl bg-zinc-800 px-4 py-3 font-semibold text-white transition hover:bg-zinc-700"
                >
                  Exercises
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-6 shadow-xl shadow-black/20">
              <h2 className="text-2xl font-semibold">Stats</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-zinc-800 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                    Sessions
                  </p>
                  <p className="mt-3 text-3xl font-bold">{user.totalSessions}</p>
                </div>
                <div className="rounded-2xl bg-zinc-800 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
                    Exercises
                  </p>
                  <p className="mt-3 text-3xl font-bold">{user.totalExercises}</p>
                </div>
              </div>
            </section>
          </div>
        ) : null}
      </div>
    </main>
  );
}
