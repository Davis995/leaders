import { PageHeader } from "@/components/site/PageHeader";
import { IMG } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — iLead Mentorship",
  description: "Leadership insights, youth empowerment stories and practical guides.",
};

const posts = [
  { title: "How to lead before you have a title", cat: "Leadership", img: IMG.blog1, read: "5 min" },
  { title: "The quiet power of public speaking", cat: "Communication", img: IMG.blog2, read: "7 min" },
  { title: "Emotional intelligence is your edge", cat: "Emotional Intelligence", img: IMG.blog3, read: "6 min" },
  { title: "Building your first venture at 21", cat: "Entrepreneurship", img: IMG.cohort, read: "8 min" },
  { title: "Why mentorship beats advice", cat: "Youth Empowerment", img: IMG.mentorship, read: "4 min" },
  { title: "A digital toolkit for young leaders", cat: "Communication", img: IMG.growth, read: "5 min" },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader eyebrow="Journal" title="Leadership insights & stories." description="Notes from mentors, alumni and the iLead team." />
      <section className="pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3]">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1 text-foreground">{p.cat}</span>
                <span>{p.read} read</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug group-hover:underline underline-offset-4">{p.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
