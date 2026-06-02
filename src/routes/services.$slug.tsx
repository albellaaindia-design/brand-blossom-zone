import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { SERVICE_DETAILS_BY_SLUG, SERVICE_DETAILS } from "@/lib/site-data";
import { CATEGORY_IMAGES, IMAGES } from "@/lib/category-images";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const detail = SERVICE_DETAILS_BY_SLUG[params.slug];
    if (!detail) throw notFound();
    return { detail };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.detail;
    const title = d ? `${d.name} — Rank Advertising` : "Service — Rank Advertising";
    const desc = d?.tagline ?? "Specialised growth services delivered by senior marketers, designers, Zoho & AI experts.";
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
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-4 inline-block text-primary">Back to all services</Link>
    </section>
  ),
  errorComponent: ({ error }) => (
    <section className="container-pad py-32 text-center">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </section>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { detail } = Route.useLoaderData();

  // Related services in same category, excluding current
  const related = SERVICE_DETAILS.filter(
    (d) => d.categorySlug === detail.categorySlug && d.slug !== detail.slug,
  ).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow={detail.category}
        title={<>{detail.name.split(" ").slice(0, -1).join(" ")} <span className="text-gradient-brand">{detail.name.split(" ").slice(-1)}</span></>}
        description={detail.tagline}
      />

      <section className="container-pad pt-10">
        <div className="rounded-3xl overflow-hidden border border-border">
          <img
            src={CATEGORY_IMAGES[detail.categorySlug] ?? IMAGES.dashboard}
            alt={`${detail.name} visual`}
            loading="lazy"
            width={1280}
            height={500}
            className="w-full h-[220px] md:h-[360px] object-cover"
          />
        </div>
      </section>

      <section className="container-pad py-14 grid gap-12 lg:grid-cols-[1fr_400px] items-start">
        <article className="space-y-10">
          <div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="size-4" /> All services
            </Link>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-foreground/85">{detail.intro}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">What you get</h2>
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
            <h2 className="text-2xl font-bold">Why teams pick us for {detail.name}</h2>
            <p className="mt-3 text-muted-foreground">
              We're a senior team of marketers, designers, Zoho & AI experts. We've shipped {detail.category.toLowerCase()} work for clients across India, USA, Canada, Australia, UAE, UK and 10+ other countries — across legal, healthcare, hospitality, e-commerce, SaaS, real estate, B2B, manufacturing and education.
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

          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold">Related {detail.category} services</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/services/$slug"
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
          )}
        </article>

        <aside id="inquiry" className="lg:sticky lg:top-24">
          <QuickInquiryForm
            service={detail.name}
            heading={`Inquire about ${detail.name}`}
            subheading="Share a few details and we'll get back within one business day."
            compact
          />
        </aside>
      </section>

      <CTASection service={detail.name} title={`Ready to get started with ${detail.name}?`} />
    </>
  );
}
