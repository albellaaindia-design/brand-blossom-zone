import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 350px at 85% 20%, oklch(0.82 0.13 195 / 0.18), transparent 60%), radial-gradient(500px 300px at 10% 80%, oklch(0.7 0.13 175 / 0.12), transparent 60%)",
        }}
      />
      <div className="relative container-pad py-20 md:py-28">
        {eyebrow && (
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-terminal-dim flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-terminal" />
            {eyebrow}
          </div>
        )}
        <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.02] max-w-4xl tracking-tight">{title}</h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl">{description}</p>
        )}
      </div>
    </section>
  );
}
