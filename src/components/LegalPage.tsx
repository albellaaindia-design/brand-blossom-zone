import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

export function LegalPage({ title, eyebrow, updated, children }: { title: string; eyebrow: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={`Last updated: ${updated}`} />
      <section className="container-pad py-14 max-w-3xl">
        <div className="prose prose-invert max-w-none text-foreground/85 space-y-5 text-[15px] leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:text-foreground [&_a]:text-primary">
          {children}
        </div>
      </section>
    </>
  );
}
