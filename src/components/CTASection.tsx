import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { QuickInquiryForm } from "./QuickInquiryForm";

interface Props {
  service?: string;
  title?: string;
  description?: string;
}

export function CTASection({
  service,
  title = "Ready to grow with a team that delivers?",
  description = "Get a tailored strategy from marketers, designers, Zoho & AI experts who've shipped results across 10+ countries.",
}: Props) {
  return (
    <section className="relative mt-20">
      <div className="container-pad grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Let's Talk</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95"
            >
              Talk to an Expert <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:+919372214451"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary"
            >
              Call +91 93722 14451
            </a>
          </div>
        </div>
        <QuickInquiryForm service={service} />
      </div>
    </section>
  );
}
