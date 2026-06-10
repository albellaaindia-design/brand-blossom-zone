import { useEffect, useState } from "react";

const LINES: { text: string; cls?: string; delay: number }[] = [
  { text: "$ orq deploy --target=production", cls: "text-foreground", delay: 0 },
  { text: "→ resolving project graph … ok", delay: 220 },
  { text: "→ branding / identity", delay: 420 },
  { text: "  · design tokens linked … ok", delay: 620 },
  { text: "→ provisioning infrastructure", delay: 820 },
  { text: "  · region ap-south-1 … ready", delay: 1020 },
  { text: "  · edge nodes ×12 … online", delay: 1220 },
  { text: "→ compiling application", delay: 1420 },
  { text: "  · vite build … 2.41s", delay: 1620 },
  { text: "  · bundle 184kb gzip … ok", delay: 1820 },
  { text: "→ deploying services", delay: 2020 },
  { text: "  · containers ×6 … healthy", delay: 2220 },
  { text: "  · tls / dns … propagated", delay: 2420 },
  { text: "→ indexing (seo / aeo)", delay: 2620 },
  { text: "  · sitemap 142 urls … submitted", delay: 2820 },
  { text: "→ wiring performance + ai layer", delay: 3020 },
  { text: "  · attribution … connected", delay: 3220 },
];

function colorize(line: string) {
  // green "ok / ready / online / healthy / connected / submitted / propagated"
  return line.replace(
    /\b(ok|ready|online|healthy|connected|submitted|propagated|2\.41s|184kb gzip|×12|×6|142 urls)\b/g,
    '<span class="text-terminal">$1</span>',
  );
}

export function TerminalHero() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const timers = LINES.map((l, i) =>
      setTimeout(() => setShown((n) => Math.max(n, i + 1)), l.delay),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="font-mono text-[12px] md:text-[13px] leading-7 text-muted-foreground">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-terminal-dim border-b border-border/60 pb-3 mb-4">
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-terminal animate-pulse" />
          BUILD PIPELINE · <span className="text-primary">MAIN</span>
        </span>
        <span>NODE ap-south-1</span>
      </div>
      <div className="min-h-[360px]">
        {LINES.slice(0, shown).map((l, i) => (
          <div
            key={i}
            className={l.cls}
            dangerouslySetInnerHTML={{ __html: colorize(l.text) }}
          />
        ))}
        {shown < LINES.length && <div className="blink h-5" />}
        {shown >= LINES.length && (
          <div className="mt-4 text-terminal">✓ deploy complete · status: growth</div>
        )}
      </div>
      <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-terminal-dim">
        <span>STATUS · GROWTH</span>
        <div className="flex-1 h-px bg-border relative">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-brand"
            style={{ width: `${Math.min(100, (shown / LINES.length) * 100)}%` }}
          />
        </div>
        <span>{Math.min(100, Math.round((shown / LINES.length) * 100))}%</span>
      </div>
    </div>
  );
}
