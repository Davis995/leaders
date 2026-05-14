import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Mic, Brain, Rocket, Laptop, Briefcase, Users,
  Sparkles, Quote,
} from "lucide-react";
import { IMG } from "@/lib/images";

export default function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      <About />
      <Programs />
      <Impact />
      <Events />
      <Gallery />
      <Partners />
      <ApplyCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 pt-12 lg:pt-20 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-1.5 text-xs font-medium text-foreground/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Cohort 09 — applications open
            </div>
            <h1 className="mt-6 font-bold tracking-tight text-foreground text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
              Empowering young leaders.
              <br />
              <span className="text-foreground/60">Build confidence,</span>
              <br />
              purpose & impact.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              A mentorship and leadership platform helping young people grow through emotional
              intelligence, public speaking, entrepreneurship, storytelling and digital skills.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/cohorts"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:scale-[1.02] transition shadow-lg shadow-foreground/10"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium hover:bg-foreground/5 transition"
              >
                Explore Programs
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <PortraitCluster />
          </div>
        </div>
      </div>
    </section>
  );
}

function PortraitCluster() {
  const portraits = [
    { src: IMG.heroPortrait1, rotate: "-rotate-6", translate: "translate-y-4" },
    { src: IMG.heroPortrait2, rotate: "rotate-3", translate: "-translate-y-6" },
    { src: IMG.heroPortrait3, rotate: "rotate-6", translate: "translate-y-2" },
    { src: IMG.heroPortrait4, rotate: "-rotate-3", translate: "-translate-y-4" },
  ];
  return (
    <div className="relative grid grid-cols-2 gap-4">
      {portraits.map((p, i) => (
        <div
          key={i}
          className={`overflow-hidden rounded-[32px] shadow-xl shadow-foreground/10 transform ${p.rotate} ${p.translate} hover:rotate-0 transition-transform duration-500`}
        >
          <img
            src={p.src}
            alt="Young leader portrait"
            className="w-full h-64 object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
      <div className="absolute -bottom-6 -left-6 hidden lg:flex items-center gap-3 rounded-2xl bg-card border border-border px-4 py-3 shadow-lg">
        <div className="grid place-items-center w-9 h-9 rounded-full bg-accent text-accent-foreground">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="text-xs">
          <div className="font-semibold">500+ youth empowered</div>
          <div className="text-muted-foreground">Across 20+ cohorts</div>
        </div>
      </div>
    </div>
  );
}

function Highlights() {
  const items = [
    { title: "Leadership Mentorship", desc: "Develop confidence, leadership mindset and communication skills." },
    { title: "Public Speaking", desc: "Master storytelling, speaking and presentation abilities." },
    { title: "Digital & Career Skills", desc: "Prepare youth for opportunities in the modern digital world." },
  ];
  return (
    <section className="border-y border-border/60 bg-card">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        {items.map((it) => (
          <div key={it.title} className="flex gap-4">
            <div className="mt-1 h-10 w-10 rounded-full bg-foreground text-background grid place-items-center shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">What we do</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Everything young leaders need to grow.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From mentorship and emotional intelligence to entrepreneurship and digital empowerment,
            iLead supports personal and professional transformation.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <Card className="lg:col-span-7 row-span-2 min-h-[420px] p-0 overflow-hidden" tone="warm-1">
            <div className="relative h-full">
              <img src={IMG.mentorship} alt="Mentorship cohort" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-2xl font-semibold">Mentorship Cohorts</h3>
                <p className="mt-2 text-white/80 max-w-md">Join guided mentorship communities with youth leaders and mentors who walk with you.</p>
              </div>
            </div>
          </Card>
          <Card className="lg:col-span-5 p-8" tone="warm-2">
            <h3 className="text-2xl font-semibold">Leadership Training</h3>
            <p className="mt-3 text-foreground/70">Interactive workshops focused on leadership and confidence — built around real practice, not theory.</p>
          </Card>
          <Card className="lg:col-span-5 p-8" tone="warm-3">
            <h3 className="text-2xl font-semibold">Emotional Intelligence</h3>
            <p className="mt-3 text-foreground/70">Build self-awareness, empathy and personal growth that translates into stronger relationships.</p>
          </Card>
          <Card className="lg:col-span-12 p-0 overflow-hidden" tone="warm-4">
            <div className="grid md:grid-cols-2">
              <div className="p-10">
                <h3 className="text-2xl font-semibold">Progress & Growth</h3>
                <p className="mt-3 text-foreground/70 max-w-md">Track learning journeys and personal development milestones — celebrate every step forward.</p>
                <Link href="/programs" className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  See programs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <img src={IMG.growth} alt="Growth" className="h-full w-full object-cover min-h-[260px]" loading="lazy" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  children,
  className = "",
  tone = "warm-1",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "warm-1" | "warm-2" | "warm-3" | "warm-4";
}) {
  const bg = {
    "warm-1": "bg-[var(--card-warm-1)]",
    "warm-2": "bg-[var(--card-warm-2)]",
    "warm-3": "bg-[var(--card-warm-3)]",
    "warm-4": "bg-[var(--card-warm-4)]",
  }[tone];
  return (
    <div className={`rounded-[28px] ${bg} hover:-translate-y-1 transition-transform duration-300 ${className}`}>
      {children}
    </div>
  );
}

function Programs() {
  const programs = [
    { name: "Leadership Mentorship", Icon: Users },
    { name: "Public Speaking & Communication", Icon: Mic },
    { name: "Emotional Intelligence", Icon: Brain },
    { name: "Entrepreneurship & Innovation", Icon: Rocket },
    { name: "Digital Skills Training", Icon: Laptop },
    { name: "Career Development", Icon: Briefcase },
  ];
  return (
    <section className="py-24 lg:py-32 bg-card border-y border-border/50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Programs</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Programs that inspire change.</h2>
          </div>
          <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-medium">
            View all programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map(({ name, Icon }) => (
            <div
              key={name}
              className="group rounded-[28px] border border-border bg-background p-8 hover:border-foreground transition"
            >
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-secondary text-foreground">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{name}</h3>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition">
                Learn more <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { n: "500+", l: "Youth Empowered" },
    { n: "50+", l: "Workshops Conducted" },
    { n: "20+", l: "Mentorship Cohorts" },
  ];
  const stories = [
    { name: "Amara, 19", role: "Cohort 06", quote: "iLead gave me a voice. I went from afraid to speak up to leading my own community project in six months.", img: IMG.heroPortrait3 },
    { name: "Daniel, 22", role: "Cohort 04", quote: "The mentors saw potential in me before I did. Today I run a startup employing four people.", img: IMG.heroPortrait4 },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Impact</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Real stories. Real impact.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how iLead is transforming young people into confident changemakers and future leaders.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="rounded-[28px] bg-primary text-primary-foreground p-8">
              <div className="text-5xl font-bold">{s.n}</div>
              <div className="mt-2 text-primary-foreground/70">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {stories.map((s) => (
            <div key={s.name} className="rounded-[28px] bg-card border border-border p-8 flex gap-6">
              <img src={s.img} alt={s.name} className="w-20 h-20 rounded-2xl object-cover shrink-0" loading="lazy" />
              <div>
                <Quote className="w-6 h-6 text-accent" />
                <p className="mt-3 text-foreground/80">"{s.quote}"</p>
                <p className="mt-4 text-sm font-medium">{s.name} <span className="text-muted-foreground font-normal">— {s.role}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  const events = [
    { title: "Leadership Bootcamp", date: "Jun 14", img: IMG.workshop, tag: "Bootcamp" },
    { title: "Speak Up Live", date: "Jul 02", img: IMG.speaking, tag: "Public speaking" },
    { title: "Founders Circle", date: "Jul 19", img: IMG.community, tag: "Networking" },
  ];
  return (
    <section className="py-24 lg:py-32 bg-card border-y border-border/50">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Events</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Events & workshops.</h2>
          </div>
          <Link href="/events" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium">
            See all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <article key={e.title} className="group rounded-[28px] overflow-hidden bg-background border border-border hover:-translate-y-1 transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <span className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-medium">
                  {e.tag}
                </span>
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="font-semibold text-lg">{e.title}</h3>
                <span className="text-sm text-muted-foreground">{e.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [IMG.gallery1, IMG.gallery2, IMG.gallery3, IMG.gallery4, IMG.gallery5, IMG.gallery6];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Gallery</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Moments of growth.</h2>
        </div>
        <div className="columns-2 md:columns-3 gap-5 [&>*]:mb-5">
          {imgs.map((src, i) => (
            <div key={i} className="break-inside-avoid rounded-[24px] overflow-hidden shadow-sm">
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full object-cover hover:scale-105 transition duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = ["NorthBeam", "Konvoy", "Hyperlight", "MeridianCo", "Fielder", "Atlas&Co"];
  return (
    <section className="py-16 border-y border-border/60 bg-card">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-wider text-muted-foreground">
          Partners & collaborations
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((p) => (
            <div key={p} className="text-center text-xl font-semibold tracking-tight text-foreground/40 hover:text-foreground transition">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplyCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="rounded-[40px] bg-primary text-primary-foreground p-10 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
          <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70">Apply</p>
          <h2 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
            Start your leadership journey.
          </h2>
          <p className="mt-5 text-primary-foreground/70 max-w-xl mx-auto text-lg">
            Apply to join mentorship cohorts, leadership workshops and youth empowerment programs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/cohorts" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-medium hover:scale-[1.02] transition">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-medium hover:bg-white/5 transition">
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
