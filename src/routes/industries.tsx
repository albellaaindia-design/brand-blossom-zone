import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { INDUSTRIES } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Rank Advertising" },
      { name: "description", content: "Specialised marketing & Zoho playbooks for Legal, Healthcare, SaaS, E-commerce, Real Estate, Manufacturing and more." },
      { property: "og:title", content: "Industries We Serve — Rank Advertising" },
      { property: "og:description", content: "Vertical expertise across 9+ industries — built around how your customers actually buy." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Industry-tuned <span className="text-gradient-brand">playbooks</span>.</>}
        description="We don't run generic campaigns. Our team brings vertical-specific strategies refined across hundreds of engagements."
      />

      <section className="container-pad py-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((i) => (
          <div key={i.name} className="rounded-2xl border border-border bg-surface/40 p-6 hover:border-primary/60 transition-colors">
            <h3 className="text-xl font-semibold">{i.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{i.description}</p>
          </div>
        ))}
      </section>

      <CTASection title="Tell us about your industry — we've probably built for it." />
    </>
  );
}
