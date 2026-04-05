"use client";

import Link from "next/link";
import { useState } from "react";
import type { SubmitEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import SiteNav from "@/components/site-nav";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5173/api/login/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Login failed");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <SiteNav current="/login" />

        <section className="mx-auto max-w-xl rounded-3xl border border-zinc-800 bg-zinc-900/95 p-8 shadow-xl shadow-black/20">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            Log in first so the browser gets the auth cookie for protected pages.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none"
              required
            />

            {error ? <p className="rounded-2xl bg-red-900/30 px-4 py-3 text-red-300">{error}</p> : null}

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Login
              </button>
              <Link
                href="/signup"
                className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold text-white transition hover:bg-zinc-700"
              >
                Create Account
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
