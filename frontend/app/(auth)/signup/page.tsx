"use client";

import Link from "next/link";
import { useState } from "react";
import type { SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import SiteNav from "@/components/site-nav";
import { api } from "@/lib/api";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await api.post(
        "/api/signup/signup",
        {
          name,
          userName,
          email,
          password,
        },
      );
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Could not sign up");
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <SiteNav current="/signup" />

        <section className="mx-auto max-w-xl rounded-3xl border border-zinc-800 bg-zinc-900/95 p-8 shadow-xl shadow-black/20">
          <h1 className="text-4xl font-bold">Sign Up</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            Create your account and the backend will issue the auth cookie for the
            rest of the app.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none"
            />
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={userName}
              required
              onChange={(e) => setUserName(e.target.value)}
              className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none"
            />

            {error ? <p className="rounded-2xl bg-red-900/30 px-4 py-3 text-red-300">{error}</p> : null}

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Sign Up
              </button>
              <Link
                href="/login"
                className="rounded-xl bg-zinc-800 px-5 py-3 font-semibold text-white transition hover:bg-zinc-700"
              >
                Already have an account
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
