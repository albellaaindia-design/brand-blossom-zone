import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SERVICE_CATEGORIES, SITE } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface/40">
      <div className="container-pad py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block size-7 rounded-md bg-gradient-brand" />
            <span className="font-display text-lg font-bold">
              RANK<span className="text-gradient-brand">ADVERTISING</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            A team of marketers, designers, Zoho & AI experts helping brands grow across India, USA, Canada, Australia, UAE, UK and 10+ countries.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["/about", "About Us"],
              ["/services", "Our Services"],
              ["/industries", "Industries"],
              ["/case-study", "Case Study"],
              ["/career", "Career"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-primary">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICE_CATEGORIES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/90">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 text-primary shrink-0" /><span>{SITE.address}</span></li>
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 text-primary shrink-0" /><a href={`tel:${SITE.phone}`} className="hover:text-primary">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="size-4 mt-0.5 text-primary shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-pad py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rank Advertising. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/terms" className="hover:text-primary">Terms & Condition</Link>
            <Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link>
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/shipping-policy" className="hover:text-primary">Shipping & Delivery</Link>
            <Link to="/refund-policy" className="hover:text-primary">Refund & Return</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
