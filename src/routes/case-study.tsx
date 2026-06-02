import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { TrendingUp } from "lucide-react";
import { IMAGES } from "@/lib/category-images";

const CASES = [
  {
    client: "D2C Skincare Brand · India",
    service: "Performance Marketing + SEO",
    result: "4.2x ROAS in 90 days",
    summary: "Restructured ad accounts, rebuilt PDPs and shipped a content engine — paid ROAS tripled while organic traffic grew 180%.",
  },
  {
    client: "Legal Firm · USA",
    service: "Local SEO + Google Ads",
    result: "11x qualified leads",
    summary: "Hyper-local landing pages plus a tightly geo-targeted ad strategy unlocked 11x consultation requests in 6 months.",
  },
  {
    client: "B2B SaaS · UK",
    service: "LinkedIn Ads + Content",
    result: "$1.2M pipeline in Q1",
    summary: "Thought-leadership content plus an ABM-style LinkedIn engine generated a $1.2M qualified pipeline in a single quarter.",
  },
  {
    client: "Hospitality Group · UAE",
    service: "Zoho One Implementation",
    result: "60% faster booking ops",
    summary: "End-to-end Zoho One rollout across reservations, CRM and reporting cut manual ops by 60% and unlocked guest LTV insights.",
  },
  {
    client: "Real Estate Developer · Australia",
    service: "Meta Ads + Landing Pages",
    result: "₹38 CPL on premium inventory",
    summary: "Creative-led testing and conversion-focused landers brought CPL down 70% on a luxury property launch.",
  },
  {
    client: "EdTech Startup · Canada",
    service: "Brand + Website + SEO",
    result: "0 → 80k monthly visitors",
    summary: "Rebrand, full website rebuild and content/SEO programme took organic from zero to 80k monthly visitors in 12 months.",
  },
];

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Studies — Rank Advertising" },
      { name: "description", content: "Real outcomes from real clients — paid, SEO, Zoho and full-stack growth case studies." },
      { property: "og:title", content: "Case Studies — Rank Advertising" },
      { property: "og:description", content: "200+ projects shipped across 10+ countries. Here's a snapshot of the results." },
    ],
  }),
  component: CasesPage,
});

function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={<>Outcomes, not <span className="text-gradient-brand">opinions</span>.</>}
        description="A selection of recent client engagements across performance marketing, SEO, websites and Zoho implementation."
      />

      <section className="container-pad py-16 grid gap-6 md:grid-cols-2">
        {CASES.map((c) => (
          <article key={c.client} className="rounded-2xl border border-border bg-surface/60 p-6 hover:border-primary/60 transition-colors">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
              <TrendingUp className="size-4" /> {c.service}
            </div>
            <h3 className="mt-3 text-xl font-semibold">{c.client}</h3>
            <p className="mt-2 text-3xl font-bold text-gradient-brand">{c.result}</p>
            <p className="mt-3 text-sm text-muted-foreground">{c.summary}</p>
          </article>
        ))}
      </section>

      <CTASection title="Want similar results for your brand?" />
    </>
  );
}
