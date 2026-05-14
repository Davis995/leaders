import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { Mic, Brain, Rocket, Laptop, Briefcase, Users, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — iLead Mentorship",
  description: "Mentorship, public speaking, emotional intelligence, entrepreneurship and digital skills programs for young leaders.",
};

const programs = [
  { name: "Leadership Mentorship", Icon: Users, desc: "1:1 and group mentorship that builds confidence and clarity." },
  { name: "Public Speaking & Communication", Icon: Mic, desc: "From storytelling to stage — speak with presence." },
  { name: "Emotional Intelligence", Icon: Brain, desc: "Self-awareness, empathy and resilient relationships." },
  { name: "Entrepreneurship & Innovation", Icon: Rocket, desc: "Validate ideas and ship your first venture." },
  { name: "Digital Skills Training", Icon: Laptop, desc: "Practical digital fluency for the modern world." },
  { name: "Career Development", Icon: Briefcase, desc: "CVs, interviews and pathways into work that matters." },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader eyebrow="Programs" title="Programs that inspire change." description="Six core tracks designed to develop the leader in every young person." />
      <section className="pb-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map(({ name, Icon, desc }) => (
            <div key={name} className="rounded-[28px] border border-border bg-card p-8 hover:border-foreground transition">
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-secondary text-foreground">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{name}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
              <Link href="/cohorts" className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                Apply <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
