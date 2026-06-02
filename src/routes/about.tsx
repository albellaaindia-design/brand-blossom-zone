import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { COUNTRIES } from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";
import teamImg from "@/assets/team-collab.jpg";
import mapImg from "@/assets/global-map.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Rank Advertising" },
      { name: "description", content: "A strong team of marketers, designers, Zoho and AI experts delivering growth across 10+ countries." },
      { property: "og:title", content: "About Us — Rank Advertising" },
      { property: "og:description", content: "Meet the team behind Rank Advertising — strategists, creatives and engineers building measurable growth." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>We're a small team obsessed with <span className="text-gradient-brand">real outcomes</span>.</>}
        description="Rank Advertising is a digital growth studio of marketers, designers, Zoho specialists and applied-AI experts. We've delivered 200+ projects for brands across India, USA, Canada, Australia, UAE, UK and 10+ other countries."
      />

      <section className="container-pad py-16 grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Built for outcomes, not optics.</h2>
          <p className="mt-4 text-muted-foreground">
            We started Rank to fix what most agencies break — accountability. No bloated retainers.
            No revolving door of junior staff. Just a senior team that owns the number with you.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether you need to rank on Google, scale paid pipeline, implement Zoho One across
            departments, or launch a conversion-focused website — we plug in, ship, and measure.
          </p>
          <div className="mt-6 rounded-2xl overflow-hidden border border-border">
            <img src={teamImg} alt="Our team collaborating" loading="lazy" width={1280} height={896} className="w-full h-[280px] object-cover" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["Marketers", "Senior strategists running paid, SEO, content and lifecycle."],
            ["Designers", "Brand identity, UX, motion and creative for high-CTR ads."],
            ["Zoho Experts", "Certified consultants for Zoho One, CRM, Creator and audits."],
            ["AI Experts", "AI SEO, citations, automation and growth experimentation."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-surface/60 p-5">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pad py-16 border-t border-border">
        <div className="rounded-3xl overflow-hidden border border-border relative">
          <img src={mapImg} alt="Global client map" loading="lazy" width={1280} height={720} className="w-full h-[280px] md:h-[360px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
          <div className="absolute inset-0 flex items-center p-6 md:p-12">
            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold">Where we work</h2>
              <p className="mt-3 text-muted-foreground">Headquartered in Navi Mumbai with active clients across continents.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {COUNTRIES.map((c) => (
            <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2 text-sm">
              <CheckCircle2 className="size-4 text-primary" /> {c}
            </span>
          ))}
        </div>
      </section>

      <CTASection title="Let's build something measurable." />
    </>
  );
}
