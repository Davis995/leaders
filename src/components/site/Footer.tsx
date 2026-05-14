import Link from "next/link";
import { Instagram, Linkedin, Facebook, Youtube, MessageCircle, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-accent text-accent-foreground">
                <Sparkles className="w-4 h-4" />
              </span>
              iLead Mentorship
            </div>
            <p className="mt-4 text-primary-foreground/70 max-w-md">
              Empowering young people to lead with confidence, purpose and impact through mentorship,
              storytelling and digital skills.
            </p>
            <form className="mt-6 flex max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l-full bg-white/10 placeholder:text-primary-foreground/50 px-5 py-3 text-sm outline-none border border-white/10"
              />
              <button className="rounded-r-full bg-accent text-accent-foreground px-5 py-3 text-sm font-medium">
                Subscribe
              </button>
            </form>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            <FooterCol title="Explore" items={[["About","/about"],["Programs","/programs"],["Cohorts","/cohorts"]]} />
            <FooterCol title="Resources" items={[["Events","/events"],["Blog","/blog"],["Contact","/contact"]]} />
            <FooterCol title="Company" items={[["Mission","/about"],["Partners","/about"],["Stories","/blog"]]} />
            <div>
              <h4 className="font-medium mb-4">Follow</h4>
              <div className="flex gap-3 text-primary-foreground/80">
                <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                <a href="#" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
                <a href="#" aria-label="WhatsApp"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-sm text-primary-foreground/60 gap-2">
          <p>© {new Date().getFullYear()} iLead Mentorship. All rights reserved.</p>
          <p>Built with purpose for young leaders.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="font-medium mb-4">{title}</h4>
      <ul className="space-y-2 text-primary-foreground/70">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="hover:text-primary-foreground transition">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}