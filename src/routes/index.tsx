import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Globe2, Sparkles, Target, Zap, Award } from "lucide-react";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { SERVICE_CATEGORIES, COUNTRIES, INDUSTRIES } from "@/lib/site-data";
import { CTASection } from "@/components/CTASection";
import dashboardImg from "@/assets/hero-dashboard.jpg";
import teamImg from "@/assets/team-collab.jpg";
import aiImg from "@/assets/ai-network.jpg";
import mapImg from "@/assets/global-map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rank Advertising — Digital Marketing, Zoho & AI Experts" },
      { name: "description", content: "We're a team of marketers, designers, Zoho & AI experts driving measurable growth for brands across 10+ countries." },
      { property: "og:title", content: "Rank Advertising — Digital Marketing, Zoho & AI Experts" },
      { property: "og:description", content: "Performance marketing, SEO, Zoho implementation, paid ads, websites and AI growth — built to convert." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 500px at 85% 15%, oklch(0.7 0.22 40 / 0.35), transparent 60%), radial-gradient(700px 400px at 10% 85%, oklch(0.55 0.22 30 / 0.2), transparent 60%)",
          }}
        />
        {/* peakpilots-style bar gradient on the right */}
        <div className="absolute right-0 bottom-0 hidden lg:flex h-full w-1/3 items-end gap-2 pr-8 pointer-events-none">
          {[40, 55, 70, 85, 100].map((h, i) => (
            <div
              key={i}
              className="w-12 rounded-t-md bg-gradient-bars opacity-80"
              style={{ height: `${h}%`, animation: `pulse 4s ease-in-out ${i * 0.3}s infinite` }}
            />
          ))}
        </div>

        <div className="relative container-pad pt-16 md:pt-24 pb-20 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" /> Marketers · Designers · Zoho · AI
            </span>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
              Growth that <span className="text-gradient-brand">ranks</span>.<br />
              Marketing that <span className="text-gradient-brand">converts</span>.
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
              We're a tight team of marketers, designers, Zoho specialists and AI experts.
              We've shipped 200+ projects across India, USA, Canada, Australia, UAE, UK and 10+
              countries — all built around one goal: measurable business growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95">
                Explore Services <ArrowRight className="size-4" />
              </Link>
              <Link to="/case-study" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary">
                See Case Studies
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat value="200+" label="Projects" />
              <Stat value="10+" label="Countries" />
              <Stat value="9 yrs" label="Avg expertise" />
            </div>
          </div>

          <div className="relative z-10">
            <QuickInquiryForm
              heading="Quick Inquiry"
              subheading="Fill in 4 fields. We'll get back within 1 business day."
              compact
            />
          </div>
        </div>
      </section>

      {/* Logos / Countries */}
      <section className="border-y border-border bg-surface/40">
        <div className="container-pad py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Trusted globally</span>
          {COUNTRIES.map((c) => (
            <span key={c} className="text-sm font-medium text-foreground/70">{c}</span>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="container-pad py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">What we do</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Full-stack growth, one accountable team.</h2>
          <p className="mt-4 text-muted-foreground">
            From strategy to execution — SEO, performance marketing, websites, Zoho implementation,
            content, branding and AI-powered growth.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.slice(0, 6).map((s) => (
            <Link
              to="/services"
              hash={s.slug}
              key={s.slug}
              className="group rounded-2xl border border-border bg-surface/60 p-6 hover:border-primary/60 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.slice(0, 4).map((i) => (
                  <li key={i} className="text-xs rounded-full border border-border px-2.5 py-1 text-foreground/70">{i}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View all services <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Visual band — dashboard */}
      <section className="container-pad pb-8">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <img
            src={dashboardImg}
            alt="Analytics dashboard showing campaign performance and growth"
            loading="lazy"
            width={1280}
            height={896}
            className="w-full h-[280px] md:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h3 className="text-2xl md:text-4xl font-bold max-w-2xl">Dashboards, attribution & honest reporting — from day one.</h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-xl">Track what matters: pipeline, CAC, LTV and ROAS. Not vanity metrics.</p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-pad py-20 border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-border order-2 lg:order-1">
            <img
              src={teamImg}
              alt="Rank Advertising team collaborating in the studio"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-[320px] md:h-[440px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Why Rank</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">A partner — not a vendor.</h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              We bring senior strategists, in-house designers, certified Zoho engineers and
              applied-AI experts to every account. Lean teams. Tight feedback loops.
              Transparent reporting.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {WHY.map((w) => (
                <div key={w.title} className="rounded-2xl border border-border bg-surface/60 p-5">
                  <w.icon className="size-6 text-primary" />
                  <h3 className="mt-3 font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global reach */}
      <section className="container-pad pb-8">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <img
            src={mapImg}
            alt="Global reach across India, USA, UK, UAE, Australia and beyond"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-[260px] md:h-[380px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 flex items-center p-6 md:p-12">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Global reach</span>
              <h3 className="mt-3 text-2xl md:text-4xl font-bold">Shipped from Navi Mumbai. Trusted in 10+ countries.</h3>
              <p className="mt-3 text-sm md:text-base text-muted-foreground">India · USA · Canada · Australia · UAE · UK · Singapore · Germany · Saudi Arabia · and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative border-t border-border">
        <img
          src={aiImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1280}
          height={896}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="relative container-pad py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Industries</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Deep playbooks across verticals.</h2>
            </div>
            <Link to="/industries" className="text-sm font-semibold text-primary inline-flex items-center gap-1">
              All industries <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.slice(0, 6).map((i) => (
              <div key={i.name} className="rounded-2xl border border-border p-5 bg-surface/60 backdrop-blur">
                <h3 className="font-semibold">{i.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-gradient-brand">{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

const WHY = [
  { icon: Target, title: "ROI-first", text: "Every campaign is built around pipeline, CAC and LTV — not vanity metrics." },
  { icon: Zap, title: "Move fast", text: "Two-week sprints. Weekly check-ins. No agency theatre." },
  { icon: Globe2, title: "Global, local", text: "Strategies tuned for India, US, UAE, UK, Canada, AUS and beyond." },
  { icon: BarChart3, title: "Data-led", text: "Dashboards, attribution and honest reporting from day one." },
  { icon: Award, title: "Senior talent", text: "Work directly with the people doing the work — not account managers." },
  { icon: Sparkles, title: "AI-native", text: "AI SEO, AI citations and automation built into every engagement." },
];
