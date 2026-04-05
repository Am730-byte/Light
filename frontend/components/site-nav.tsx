import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/session", label: "Session" },
  { href: "/session/yoursession", label: "Your Sessions" },
  { href: "/exercises", label: "Exercises" },
  { href: "/profile", label: "Profile" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
];

export default function SiteNav({ current }: { current?: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/95 px-5 py-4 shadow-xl shadow-black/20">
      <Link href="/dashboard" className="text-2xl font-bold tracking-tight text-white">
        GymApp
      </Link>

      <nav className="flex flex-wrap gap-2">
        {links.map((link) => {
          const isCurrent = current === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isCurrent
                  ? "bg-emerald-700 text-white"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
