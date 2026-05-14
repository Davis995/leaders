import { PageHeader } from "@/components/site/PageHeader";
import { IMG } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — iLead Mentorship",
  description: "Learn about iLead's mission to empower young leaders through mentorship, leadership and digital skills.",
};

export default function AboutPage() {
  const values = [
    { title: "Purpose", desc: "We believe every young person carries a unique purpose worth discovering." },
    { title: "Practice", desc: "Growth happens in the doing — workshops, projects, real conversations." },
    { title: "Community", desc: "Mentors and peers walk with you, not ahead of you." },
  ];
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="We grow young leaders who grow communities."
        description="iLead is a mentorship and leadership platform built around emotional intelligence, public speaking, entrepreneurship, and digital skills."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-[32px] overflow-hidden">
            <img src={IMG.community} alt="iLead community" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </div>
          <div className="space-y-6 text-foreground/80 text-lg">
            <p>iLead Mentorship was born from a simple belief: young people don't lack potential, they lack access — to mentors, opportunities and confidence.</p>
            <p>Through guided cohorts, hands-on workshops and a warm community of changemakers, we help young leaders move from quiet potential to visible impact.</p>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-[28px] bg-card border border-border p-8">
              <h3 className="text-2xl font-semibold">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
