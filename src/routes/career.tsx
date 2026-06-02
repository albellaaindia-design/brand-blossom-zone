import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { IMAGES } from "@/lib/category-images";

const OPENINGS = [
  { role: "Performance Marketing Specialist", type: "Full-time · Navi Mumbai / Remote", years: "2-5 yrs" },
  { role: "SEO Strategist (AI SEO focus)", type: "Full-time · Remote", years: "3-6 yrs" },
  { role: "Zoho One Consultant", type: "Full-time · Navi Mumbai", years: "3+ yrs" },
  { role: "UI/UX Designer", type: "Full-time · Hybrid", years: "2-4 yrs" },
  { role: "Content Marketer", type: "Full-time · Remote", years: "2-4 yrs" },
  { role: "Senior Frontend Developer", type: "Full-time · Remote", years: "4+ yrs" },
];

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — Rank Advertising" },
      { name: "description", content: "Join a team of marketers, designers, Zoho and AI experts building global brands from Navi Mumbai." },
      { property: "og:title", content: "Careers — Rank Advertising" },
      { property: "og:description", content: "Open roles in marketing, design, Zoho and engineering." },
    ],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build the work you'll be <span className="text-gradient-brand">proud</span> of.</>}
        description="We hire senior talent and treat juniors like future leads. Flat structure. Real ownership. Global clients."
      />

      <section className="container-pad pt-10">
        <div className="rounded-3xl overflow-hidden border border-border">
          <img src={IMAGES.team} alt="The Rank Advertising team at work" loading="lazy" width={1280} height={896} className="w-full h-[260px] md:h-[380px] object-cover" />
        </div>
      </section>

      <section className="container-pad py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Open roles</h2>
        <div className="mt-8 grid gap-4">
          {OPENINGS.map((o) => (
            <div key={o.role} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface/60 p-5">
              <div>
                <h3 className="text-lg font-semibold">{o.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.type} · {o.years}</p>
              </div>
              <a
                href={`mailto:${SITE.email}?subject=Application: ${encodeURIComponent(o.role)}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                Apply
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface/40 p-6">
          <h3 className="text-xl font-semibold">Don't see your role?</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            We're always interested in great people. Drop your CV and a short note about what you'd
            love to work on.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a className="inline-flex items-center gap-2 text-primary" href={`mailto:${SITE.email}`}>
              <Mail className="size-4" /> {SITE.email}
            </a>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-primary" /> Navi Mumbai
            </span>
          </div>
        </div>
      </section>

      <CTASection title="Want to partner instead of join?" description="If you'd rather work with us as a client, get a quick quote below." />
    </>
  );
}
