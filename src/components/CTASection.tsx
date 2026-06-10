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
  title = "Ready to build something that works?",
  description = "Tell us what you're building. We'll tell you if and how we can help — honestly, without a sales deck.",
}: Props) {
  return (
    <section className="relative mt-20 border-t border-border">
      <div className="container-pad py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-dim">Channel · 01 · Status open</div>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.18em]">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-foreground text-background px-5 py-3 hover:bg-primary"
            >
              Start a conversation <ArrowRight className="size-3.5" />
            </Link>
            <a
              href="tel:+919372214451"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 hover:border-primary hover:text-primary"
            >
              +91 93722 14451
            </a>
          </div>
        </div>
        <QuickInquiryForm service={service} />
      </div>
    </section>
  );
}
