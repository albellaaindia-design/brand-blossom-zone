import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { SERVICE_CATEGORIES } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-study", label: "Work" },
  { to: "/career", label: "Career" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const numbered = SERVICE_CATEGORIES.slice(0, 6);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-pad flex h-14 items-center justify-between gap-6">
        <Link to="/" className="font-mono text-xs tracking-[0.25em] uppercase">
          RANK<span className="text-primary">ADVERTISING</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground hover:text-primary"
        >
          Start a conversation <ArrowRight className="size-3.5" />
        </Link>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* numbered services strip */}
      <div className="hidden lg:block border-t border-border/60 bg-background/60">
        <div className="container-pad h-9 flex items-center gap-6 overflow-x-auto font-mono text-[11px] uppercase tracking-[0.18em]">
          <span className="text-terminal-dim">Services</span>
          {numbered.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary whitespace-nowrap"
            >
              <span className="text-terminal-dim">{String(i + 1).padStart(2, "0")}</span>
              <span>{s.title}</span>
            </Link>
          ))}
          <Link to="/services" className="ml-auto text-primary whitespace-nowrap">All services →</Link>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="container-pad py-4 flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.18em]">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1.5 text-muted-foreground hover:text-primary">
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="py-1.5 text-primary">
              Start a conversation →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
