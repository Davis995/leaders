import { PageHeader } from "@/components/site/PageHeader";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — iLead Mentorship",
  description: "Get in touch with the iLead Mentorship team via email, WhatsApp or in person.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk." description="Whether you're applying, partnering or just curious — we'd love to hear from you." />
      <section className="pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <Info Icon={Mail} title="Email" value="hello@ilead.org" />
            <Info Icon={MessageCircle} title="WhatsApp" value="+1 (000) 000 0000" />
            <Info Icon={MapPin} title="Office" value="Lagos · Nairobi · Online" />
          </div>
          <form className="lg:col-span-7 rounded-[32px] bg-card border border-border p-8 lg:p-10 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label className="text-sm">Message</label>
              <textarea className="mt-2 w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm outline-none min-h-32" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
              Send message <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Info({ Icon, title, value }: { Icon: React.ComponentType<{ className?: string }>; title: string; value: string }) {
  return (
    <div className="rounded-[24px] bg-card border border-border p-6 flex items-start gap-4">
      <div className="grid place-items-center w-11 h-11 rounded-2xl bg-secondary"><Icon className="w-5 h-5" /></div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm">{label}</label>
      <input id={name} name={name} type={type} className="mt-2 w-full rounded-full bg-background border border-border px-5 py-3 text-sm outline-none" />
    </div>
  );
}
