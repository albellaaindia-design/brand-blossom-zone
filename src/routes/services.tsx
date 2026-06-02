import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { QuickInquiryForm } from "@/components/QuickInquiryForm";
import { SERVICE_CATEGORIES, SERVICE_NAME_TO_SLUG } from "@/lib/site-data";
import { CATEGORY_IMAGES, IMAGES } from "@/lib/category-images";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Rank Advertising" },
      { name: "description", content: "Digital marketing, SEO, paid ads, websites, social, content, email and Zoho services delivered by a senior team." },
      { property: "og:title", content: "Our Services — Rank Advertising" },
      { property: "og:description", content: "End-to-end growth services: SEO, performance marketing, Zoho, websites, branding and AI." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={<>Everything you need to <span className="text-gradient-brand">grow</span>, under one roof.</>}
        description="From SEO and paid acquisition to Zoho implementation, websites and AI growth — pick the engagement that fits your stage."
      />

      <section className="container-pad py-12 grid gap-12 lg:grid-cols-[1fr_380px] items-start">
        <div className="space-y-16">
          {SERVICE_CATEGORIES.map((cat) => (
            <article key={cat.slug} id={cat.slug} className="scroll-mt-24">
              <div className="flex items-baseline justify-between flex-wrap gap-3">
                <h2 className="text-3xl md:text-4xl font-bold">{cat.title}</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-primary">{cat.items.length} services</span>
              </div>
              <p className="mt-2 text-muted-foreground max-w-2xl">{cat.tagline}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {cat.items.map((item) => {
                  const slug = SERVICE_NAME_TO_SLUG[item];
                  const content = (
                    <>
                      <Check className="size-4 mt-0.5 text-primary shrink-0" />
                      <span className="text-sm flex-1">{item}</span>
                      {slug && <ArrowRight className="size-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </>
                  );
                  return (
                    <li key={item}>
                      {slug ? (
                        <Link
                          to="/services/$slug"
                          params={{ slug }}
                          className="group flex items-start gap-3 rounded-xl border border-border bg-surface/40 px-4 py-3 hover:border-primary/60 transition-colors"
                        >
                          {content}
                        </Link>
                      ) : (
                        <div className="flex items-start gap-3 rounded-xl border border-border bg-surface/40 px-4 py-3">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6">
                <a
                  href="#inquiry"
                  className="inline-flex items-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
                >
                  Get a quote for {cat.title}
                </a>
              </div>
            </article>
          ))}
        </div>

        <aside id="inquiry" className="lg:sticky lg:top-24">
          <QuickInquiryForm heading="Quick Service Inquiry" subheading="Tell us which service you need." compact />
        </aside>
      </section>

      <CTASection />
    </>
  );
}
