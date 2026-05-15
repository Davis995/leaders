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
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="iLead Mentorship Logo" 
              className="h-12 w-auto object-contain mix-blend-multiply"
            />
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
      </header>

      {open && (
        <div 
          className="lg:hidden fixed inset-0 z-[100]"
          style={{ backgroundColor: '#000000' }}
        >
          <div className="flex items-center justify-end px-6 h-16 border-b border-white/10">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-2 text-lg text-white">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-4 border-b border-white/10 transition-colors hover:text-[#F4A300]",
                  pathname === l.href ? "text-[#F4A300] font-semibold" : "text-white"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/cohorts"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#F4A300] text-black px-6 py-4 font-semibold shadow-lg shadow-[#F4A300]/20"
            >
              Join a Cohort
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}