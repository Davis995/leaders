import { PageHeader } from "@/components/site/PageHeader";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cohorts — iLead Mentorship",
  description: "Apply to upcoming iLead mentorship cohorts and join a community of young leaders.",
};

export default function CohortsPage() {
  const cohorts = [
    { id: "09", name: "Cohort 09 — Summer", dates: "Jun 24 – Aug 30", spots: "30 spots", status: "Open" },
    { id: "10", name: "Cohort 10 — Founders Track", dates: "Sep 09 – Nov 22", spots: "20 spots", status: "Soon" },
    { id: "11", name: "Cohort 11 — Speak & Lead", dates: "Jan 13 – Mar 28", spots: "30 spots", status: "Soon" },
  ];
  return (
    <>
      <PageHeader eyebrow="Cohorts" title="Join a cohort." description="Ten weeks of mentorship, workshops and community projects with a group of peers." />
      <section className="pb-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 space-y-4">
          {cohorts.map((c) => (
            <div key={c.id} className="rounded-[28px] bg-card border border-border p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm rounded-full bg-secondary px-3 py-1">#{c.id}</span>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${c.status === "Open" ? "bg-accent text-accent-foreground" : "bg-foreground/10 text-foreground/70"}`}>
                    {c.status}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold">{c.name}</h3>
                <p className="text-muted-foreground">{c.dates} · {c.spots}</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
                Apply <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
      <ApplicationForm />
    </>
  );
}

function ApplicationForm() {
  return (
    <section className="pb-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="rounded-[40px] bg-primary text-primary-foreground p-10 lg:p-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl">Start your application.</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl">Tell us a bit about yourself. Our team responds within 48 hours.</p>
          <form className="mt-10 grid md:grid-cols-2 gap-4 max-w-3xl">
            <Field label="Full name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Age" name="age" />
            <Field label="Program of interest" name="program" />
            <div className="md:col-span-2">
              <label className="text-sm text-primary-foreground/80">Why do you want to join?</label>
              <textarea className="mt-2 w-full rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm outline-none min-h-32" />
            </div>
            <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-medium w-fit">
              Submit application <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-primary-foreground/80">{label}</label>
      <input id={name} name={name} type={type} className="mt-2 w-full rounded-full bg-white/10 border border-white/10 px-5 py-3 text-sm outline-none" />
    </div>
  );
}
