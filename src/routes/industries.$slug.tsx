import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { INDUSTRY_DETAILS_BY_SLUG, INDUSTRY_DETAILS } from "@/lib/site-data";
import { INDUSTRY_IMAGES, IMAGES } from "@/lib/category-images";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const detail = INDUSTRY_DETAILS_BY_SLUG[params.slug];
    if (!detail) throw notFound();
    return { detail };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.detail;
    const title = d ? `${d.name} Marketing — Rank Advertising` : "Industry — Rank Advertising";
    const desc = d?.tagline ?? "Vertical-specific marketing playbooks.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <section className="container-pad py-32 text-center">
      <h1 className="text-3xl font-bold">Industry not found</h1>
      <Link to="/industries" className="mt-4 inline-block text-primary">Back to industries</Link>
    </section>
  ),
  errorComponent: ({ error }) => (
    <section className="container-pad py-32 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </section>
  ),
  component: IndustryDetailPage,
});

function IndustryDetailPage() {
  const { detail } = Route.useLoaderData();
  const others = INDUSTRY_DETAILS.filter((i) => i.slug !== detail.slug).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="Industry expertise"
        title={<><span className="text-gradient-brand">{detail.name}</span> marketing.</>}
        description={detail.tagline}
      />

      <section className="container-pad pt-10">
        <div className="rounded-3xl overflow-hidden border border-border">
          <img
            src={INDUSTRY_IMAGES[detail.slug] ?? IMAGES.team}
            alt={`${detail.name} marketing`}
            loading="lazy"
            width={1280}
            height={500}
            className="w-full h-[220px] md:h-[360px] object-cover"
          />
        </div>
      </section>

      <section className="container-pad py-14 grid gap-12 lg:grid-cols-[1fr_400px] items-start">
        <article className="space-y-10">
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-4" /> All industries
          </Link>

          <p className="text-lg leading-relaxed text-foreground/85">{detail.intro}</p>

          <div>
            <h2 className="text-2xl font-bold">What we deliver</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {detail.highlights.map((h: string) => (
                <li key={h} className="flex items-start gap-3 rounded-xl border border-border bg-surface/40 px-4 py-3">
                  <Check className="size-4 mt-0.5 text-primary shrink-0" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
            <h2 className="text-2xl font-bold">A senior team that's done this before</h2>
            <p className="mt-3 text-muted-foreground">
              Our marketers, designers, Zoho & AI experts have delivered {detail.name.toLowerCase()} marketing programs across India, USA, Canada, Australia, UAE, UK and 10+ other countries.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#inquiry" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
                Get a quote <ArrowRight className="size-4" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary">
                Talk to an expert
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Other industries we serve</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {others.map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: r.slug }}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface/40 px-4 py-3 hover:border-primary/60 transition-colors"
                  >
                    <span className="text-sm font-medium">{r.name}</span>
                    <ArrowRight className="size-4 text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <aside id="inquiry" className="lg:sticky lg:top-24">
          <QuickInquiryForm
            service={`${detail.name} Marketing`}
            heading={`Inquire — ${detail.name}`}
            subheading="Tell us about your business and goals."
            compact
          />
        </aside>
      </section>

      <CTASection service={`${detail.name} Marketing`} title={`Grow your ${detail.name.toLowerCase()} business with us.`} />
    </>
  );
}
