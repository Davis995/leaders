"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/cohorts", label: "Cohorts" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-lg">
          <span className="grid place-items-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
            <Sparkles className="w-4 h-4" />
          </span>
          iLead Mentorship
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-foreground/80">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "hover:text-foreground transition-colors",
                pathname === l.href && "text-foreground font-medium"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/cohorts"
          className="hidden lg:inline-flex items-center rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Join a Cohort
        </Link>
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in">
          <nav className="flex flex-col p-6 gap-4 text-lg">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 border-b border-border/50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/cohorts"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3"
            >
              Join a Cohort
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}