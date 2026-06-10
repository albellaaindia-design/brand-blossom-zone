import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { TerminalHero } from "@/components/TerminalHero";
import { SERVICE_CATEGORIES, INDUSTRIES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rank Advertising — Technical depth. Real delivery." },
      { name: "description", content: "Infrastructure, AI, development & marketing — built and run by the people who ship. Trusted across India, USA, UK, UAE, Canada, Australia and 10+ countries." },
      { property: "og:title", content: "Rank Advertising — Technical depth. Real delivery." },
      { property: "og:description", content: "Six disciplines, one standard. Zoho, AI, development, SEO, performance and branding under one accountable team." },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: "200+", label: "Projects shipped across 10+ countries" },
  { value: "11", label: "Agencies trust us to deliver under their brand" },
  { value: "99.99%", label: "Average uptime maintained on managed stacks" },
  { value: "4.9★", label: "Average client rating across reviews" },
];

const DISCIPLINES = [
  {
    code: "zoho-stack — orchestration",
    tag: "WIRED",
    title: "Zoho — fully wired.",
    body: "CRM, Books, Desk, Creator, Campaigns. Implemented, customised and supported by certified Zoho engineers — not generalists.",
    bullets: ["Zoho CRM", "Zoho One", "Creator apps", "Implementation audit", "Hire a Zoho dev"],
    note: "Owned end-to-end — from blueprint to user adoption.",
    href: "zoho",
  },
  {
    code: "seo-engine — answer-engine optimisation",
    tag: "CITED",
    title: "SEO + AEO — found by humans and AI.",
    body: "Technical SEO that loads, content that ranks, and AI Citation Optimization that gets you quoted inside ChatGPT, Perplexity and Google AI Overviews.",
    bullets: ["Technical SEO", "AI SEO / AEO", "Local SEO", "Content SEO", "Link building"],
    note: "Found inside the AI engine — before a single link is clicked.",
    href: "seo",
  },
  {
    code: "src/app/site.tsx — editor",
    tag: "TS",
    title: "Websites — engineered to convert.",
    body: "Conversion-first websites and landing pages. Fast, accessible, instrumented. No themes, no template fatigue — built around the offer.",
    bullets: ["Website design", "Conversion development", "Landing pages", "Maintenance", "Technical fixes"],
    note: "Owned by the project leads from scope to delivery — no handoffs.",
    href: "website",
  },
  {
    code: "performance — funnel control",
    tag: "TUNING",
    title: "Performance — funnel control.",
    body: "Reach → click → landing → lead → revenue. Tuned at every stage by media buyers who optimise to ROAS, not impressions.",
    bullets: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Programmatic", "CRO"],
    note: "Optimised to revenue at every stage — not clicks at the top.",
    href: "performance",
  },
  {
    code: "ai-pipeline — orchestration",
    tag: "BUILT",
    title: "AI — designed around your data.",
    body: "Retrieval, automation and copilots wired into your stack — not a chat box bolted onto a prompt. We design around your data and workflows.",
    bullets: ["AI SEO", "AI workflows", "RAG / vector search", "AI copilots", "Automation"],
    note: "Designed around your data & workflows — not a prompt around a chat box.",
    href: "extras",
  },
  {
    code: "brand-system.v2 — brand guide",
    tag: "v1.0",
    title: "Branding — one system, every channel.",
    body: "Identity, type, colour, motion, voice. One coherent brand system applied consistently across ads, web, social and product.",
    bullets: ["Brand strategy", "Logo & identity", "Content design", "Social creative", "Brand guidelines"],
    note: "One system — applied consistently across every channel.",
    href: "branding",
  },
];

const WAYS = [
  { n: "01", title: "Businesses that have outgrown freelancers", note: "Need a team, not a person." },
  { n: "02", title: "Startups that need products built and maintained", note: "Built, then kept alive." },
  { n: "03", title: "Companies modernising tech, AI or post-M&A", note: "Legacy · AI · post-M&A." },
  { n: "04", title: "Agencies that need reliable white-label execution", note: "Delivered under your brand." },
];

const PROCESS = [
  { n: "01", phase: "SCOPE", title: "We define it precisely.", body: "You've felt the cost of a vague brief. We pin down what's built, what it costs, and when it lands — before any code." },
  { n: "02", phase: "BUILD", title: "No handoffs, ever.", body: "No more chasing one overloaded contractor. The lead who scoped it owns it through delivery, with a team behind them." },
  { n: "03", phase: "SHIP", title: "We hand over, properly.", body: "Docs, a walkthrough and a real support window — not a half-finished repo and a goodbye." },
];

const RESULTS = [
  { value: "Zero", label: "Security incidents across 40+ managed servers, three years running.", cat: "Managed Infrastructure" },
  { value: "3,000+", label: "SKUs managed end-to-end on a custom inventory + billing platform.", cat: "Custom Development" },
  { value: "983%", label: "Increase in top-5 keyword rankings for a hyperlocal publisher in 12 months.", cat: "SEO & AEO" },
  { value: "6×", label: "ROAS sustained on $500k+ monthly managed spend across international markets.", cat: "Performance Marketing" },
];

const QUOTES = [
  { who: "CDS Asia", text: "They built the site, they host it, and updates land on time without us having to ask twice. Consistency isn't a nice-to-have — it's everything." },
  { who: "INCHES Healthcare", text: "Five years of infrastructure that can't fail. Platforms have never gone down, data has never been at risk, and we've never had to chase them." },
  { who: "Squid Media", text: "We've sent them every type of brief over four years. The only external team we've never had to second-guess." },
  { who: "Modi Surgico", text: "Every point documented, every timeline met. They went far beyond the brief to advise on what would actually work." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px 400px at 80% 30%, oklch(0.82 0.13 195 / 0.18), transparent 65%), radial-gradient(500px 350px at 10% 80%, oklch(0.7 0.13 175 / 0.12), transparent 65%)",
          }}
        />
        <div className="relative container-pad pt-16 md:pt-24 pb-20 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-dim flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-terminal" />
              Built on tech, not decks.
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[0.98] tracking-tight">
              Technical depth.<br />
              <span className="text-gradient-brand italic font-normal">Real delivery.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Infrastructure, AI, development and marketing — done by the people who
              know the grind of taking projects from identity through deployment to growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.18em]">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-foreground text-background px-5 py-3 hover:bg-primary">
                Start a conversation <ArrowRight className="size-3.5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 hover:border-primary hover:text-primary">
                See what we do
              </Link>
            </div>
          </div>

          <div className="rounded-sm border border-border bg-surface/60 p-6 md:p-8">
            <TerminalHero />
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-border bg-surface/30">
          <div className="container-pad grid grid-cols-2 lg:grid-cols-4 divide-x divide-border border-x border-border">
            {STATS.map((s) => (
              <div key={s.label} className="p-6 md:p-8">
                <div className="font-display text-3xl md:text-5xl font-bold text-gradient-brand">{s.value}</div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground font-mono leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Inquiry */}
      <section className="container-pad py-16 grid gap-10 lg:grid-cols-[1fr_0.9fr] items-start">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-dim">Quick inquiry · 01</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">
            Tell us what you're building.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Four fields, one honest reply within a business day. No sales deck, no pipeline drip — just whether we can help.
          </p>
          <ul className="mt-6 space-y-2 font-mono text-xs text-muted-foreground">
            <li><span className="text-terminal">✓</span> Typical response within 24 hours</li>
            <li><span className="text-terminal">✓</span> First call is a conversation, not a pitch</li>
            <li><span className="text-terminal">✓</span> NDA on request</li>
          </ul>
        </div>
        <QuickInquiryForm heading="Channel · 01" subheading="$ connect rankadvertising — input project brief" compact />
      </section>

      {/* CLIENTS / SECTORS */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-pad py-16">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] items-end">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-dim">Clients</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Sectors vary. Standards don't.</h2>
            </div>
            <p className="text-muted-foreground max-w-lg">
              Over 200 businesses — from pre-launch startups figuring out their stack to established brands scaling what's already working. One consistent standard of work.
            </p>
          </div>

          <div className="mt-12 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="marquee flex gap-12 w-max">
              {[...INDUSTRIES, ...INDUSTRIES].map((i, idx) => (
                <div key={idx} className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground/70 whitespace-nowrap border border-border/60 rounded-sm px-5 py-3">
                  {i.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIX DISCIPLINES */}
      <section className="container-pad py-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] items-end">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-dim">Services</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Six disciplines. One standard.</h2>
          </div>
          <p className="text-muted-foreground max-w-lg">
            From the infrastructure your product runs on to the marketing that scales it — built and run by people who have done it before, on work that actually shipped.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {DISCIPLINES.map((d) => (
            <Link
              key={d.title}
              to="/services/$slug"
              params={{ slug: d.href }}
              className="group rounded-sm border border-border bg-surface/50 p-6 md:p-8 hover:border-primary/60 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-terminal-dim border-b border-border/60 pb-3">
                <span>{d.code}</span>
                <span className="text-terminal">{d.tag}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold">{d.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {d.bullets.map((b) => (
                  <li key={b} className="font-mono text-[11px] rounded-sm border border-border px-2.5 py-1 text-muted-foreground">{b}</li>
                ))}
              </ul>
              <p className="mt-6 pt-4 border-t border-border/60 font-mono text-[11px] text-muted-foreground">
                <span className="text-primary">○</span> {d.note}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                Read more <ArrowRight className="size-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            All services <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* FOUR WAYS IN */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-pad py-20">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] items-end">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-dim">Who we work with · How we work</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Four ways in. One path through.</h2>
            </div>
            <p className="text-muted-foreground max-w-lg">
              However you come to us, the work runs the same — scoped tightly, owned by the people you spoke to, delivered without drama.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border">
            {WAYS.map((w) => (
              <div key={w.n} className="bg-background p-6">
                <div className="font-mono text-xs text-terminal">{w.n}</div>
                <div className="mt-4 font-semibold leading-snug">{w.title}</div>
                <div className="mt-2 text-xs text-muted-foreground font-mono">{w.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {PROCESS.map((p) => (
              <div key={p.n}>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-dim">{p.n} · {p.phase}</div>
                <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="container-pad py-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] items-end">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-dim">Results</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Numbers we stand behind.</h2>
          </div>
          <p className="text-muted-foreground max-w-lg">
            Real numbers from live engagements. Names, context and full breakdowns on the Work page.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border">
          {RESULTS.map((r) => (
            <div key={r.label} className="bg-background p-8">
              <div className="font-display text-5xl md:text-6xl font-bold text-gradient-brand">{r.value}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.label}</p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-terminal-dim">{r.cat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTES */}
      <section className="border-y border-border bg-surface/30">
        <div className="container-pad py-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-dim">What clients say</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold max-w-3xl">
            Taken directly from the people <span className="text-gradient-brand italic font-normal">we've worked with.</span>
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {QUOTES.map((q) => (
              <div key={q.who} className="rounded-sm border border-border bg-background p-6">
                <div className="text-terminal text-2xl font-mono leading-none">"</div>
                <p className="mt-2 text-sm md:text-base text-foreground/90 leading-relaxed">{q.text}</p>
                <div className="mt-5 pt-4 border-t border-border/60 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  — {q.who}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERMINAL CTA */}
      <section className="container-pad py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.02]">
              Ready to build something{" "}
              <span className="text-gradient-brand italic font-normal">that works?</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              Tell us what you're building. We'll tell you if and how we can help — honestly, without a sales deck. Typical response within 24 hours.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-foreground text-background px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary">
              Start a conversation <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="rounded-sm border border-border bg-surface/60 p-6 md:p-8 font-mono text-[12px] leading-7">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-terminal-dim border-b border-border/60 pb-3 mb-3">
              <span>CHANNEL · 01</span>
              <span className="text-terminal">STATUS · OPEN</span>
            </div>
            <div className="text-muted-foreground">› <span className="text-primary">connect</span> rankadvertising</div>
            <div className="text-terminal">$ handshake complete</div>
            <div className="text-muted-foreground">› ready: input project brief</div>
            <div className="text-muted-foreground blink">›</div>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-sm border border-primary/50 text-primary px-4 py-2 text-[11px] uppercase tracking-[0.18em] hover:bg-primary hover:text-primary-foreground">
              › Enter brief →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
