import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 80% 20%, oklch(0.82 0.13 195 / 0.22), transparent 60%), radial-gradient(600px 300px at 10% 80%, oklch(0.7 0.13 175 / 0.18), transparent 60%)",
        }}
      />
      <div className="relative container-pad py-20 md:py-28">
        {eyebrow && (
          <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05] max-w-4xl">{title}</h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
