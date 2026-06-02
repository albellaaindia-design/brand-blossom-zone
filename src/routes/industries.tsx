import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { INDUSTRY_DETAILS } from "@/lib/site-data";
import { INDUSTRY_IMAGES, IMAGES } from "@/lib/category-images";

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

      <section className="container-pad pt-10">
        <div className="relative rounded-3xl overflow-hidden border border-border">
          <img src={IMAGES.map} alt="Industries served globally" loading="lazy" width={1280} height={720} className="w-full h-[240px] md:h-[340px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
          <div className="absolute inset-0 flex items-center p-6 md:p-12">
            <p className="max-w-md text-lg md:text-xl font-medium">9 verticals. Hundreds of campaigns. One playbook tuned for each.</p>
          </div>
        </div>
      </section>

      <section className="container-pad py-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {INDUSTRY_DETAILS.map((i) => (
          <Link
            key={i.slug}
            to="/industries/$slug"
            params={{ slug: i.slug }}
            className="group rounded-2xl border border-border bg-surface/40 overflow-hidden hover:border-primary/60 transition-colors"
          >
            <img
              src={INDUSTRY_IMAGES[i.slug] ?? IMAGES.team}
              alt=""
              aria-hidden
              loading="lazy"
              width={1280}
              height={500}
              className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">{i.name}</h3>
                <ArrowRight className="size-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{i.tagline}</p>
            </div>
          </Link>
        ))}
      </section>

      <CTASection title="Tell us about your industry — we've probably built for it." />
    </>
  );
}
