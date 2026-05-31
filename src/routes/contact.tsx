import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { SITE } from "@/lib/site-data";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rank Advertising" },
      { name: "description", content: "Get in touch with Rank Advertising for digital marketing, Zoho and AI growth services." },
      { property: "og:title", content: "Contact — Rank Advertising" },
      { property: "og:description", content: "Reach our team via email, phone or the quick inquiry form. We reply within 1 business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's get the <span className="text-gradient-brand">conversation</span> started.</>}
        description="Tell us about your goals and we'll come back with ideas, examples and a clear next step."
      />
      <section className="container-pad py-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-surface/40 p-6">
            <h3 className="text-xl font-semibold">Office</h3>
            <p className="mt-2 text-sm text-muted-foreground flex items-start gap-2">
              <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
              {SITE.address}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface/40 p-6">
            <h3 className="text-xl font-semibold">Direct line</h3>
            <a href={`tel:${SITE.phone}`} className="mt-2 inline-flex items-center gap-2 text-sm hover:text-primary">
              <Phone className="size-4 text-primary" /> {SITE.phone}
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-surface/40 p-6">
            <h3 className="text-xl font-semibold">Email</h3>
            <a href={`mailto:${SITE.email}`} className="mt-2 inline-flex items-center gap-2 text-sm hover:text-primary">
              <Mail className="size-4 text-primary" /> {SITE.email}
            </a>
          </div>
        </div>
        <QuickInquiryForm heading="Send a message" subheading="We reply within 1 business day." />
      </section>
    </>
  );
}
