import { PageHeader } from "@/components/site/PageHeader";
import { IMG } from "@/lib/images";
import { Calendar, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — iLead Mentorship",
  description: "Bootcamps, public speaking events, networking and youth conferences.",
};

const events = [
  { title: "Leadership Bootcamp", date: "Jun 14", place: "Lagos", img: IMG.workshop, tag: "Bootcamp" },
  { title: "Speak Up Live", date: "Jul 02", place: "Online", img: IMG.speaking, tag: "Public speaking" },
  { title: "Founders Circle", date: "Jul 19", place: "Nairobi", img: IMG.community, tag: "Networking" },
  { title: "Community Impact Day", date: "Aug 03", place: "Accra", img: IMG.mentorship, tag: "Workshop" },
  { title: "Youth Conference 2026", date: "Sep 21", place: "Kigali", img: IMG.cohort, tag: "Conference" },
  { title: "Digital Skills Sprint", date: "Oct 11", place: "Online", img: IMG.growth, tag: "Workshop" },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader eyebrow="Events" title="Events & workshops." description="A calendar of opportunities to learn, speak, build and connect." />
      <section className="pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <article key={e.title} className="rounded-[28px] overflow-hidden bg-card border border-border hover:-translate-y-1 transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="text-xs rounded-full bg-secondary px-3 py-1">{e.tag}</span>
                <h3 className="mt-3 text-xl font-semibold">{e.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {e.date}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {e.place}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
