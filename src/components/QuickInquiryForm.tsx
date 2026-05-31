import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry } from "@/lib/inquiry.functions";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

interface Props {
  service?: string;
  sourcePage?: string;
  compact?: boolean;
  heading?: string;
  subheading?: string;
}

export function QuickInquiryForm({
  service,
  sourcePage,
  compact = false,
  heading = "Get a Quick Quote",
  subheading = "Tell us about your goals — we'll get back within one business day.",
}: Props) {
  const submit = useServerFn(submitInquiry);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submit({
        data: {
          ...form,
          service: service ?? null,
          source_page: sourcePage ?? (typeof window !== "undefined" ? window.location.pathname : null),
          message: form.message || null,
        },
      });
      toast.success("Thanks! Our team will reach out shortly.");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-surface/80 backdrop-blur p-6 md:p-8 shadow-card-dark">
      <div className="mb-5">
        <h3 className="text-2xl md:text-3xl font-bold">{heading}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{subheading}</p>
        {service && (
          <p className="mt-2 text-xs uppercase tracking-wider text-primary">For: {service}</p>
        )}
      </div>
      <form onSubmit={handleSubmit} className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
        <Input name="name" placeholder="Your Name *" value={form.name} onChange={onChange} required />
        <Input name="email" type="email" placeholder="Email *" value={form.email} onChange={onChange} required />
        <Input name="phone" placeholder="Phone *" value={form.phone} onChange={onChange} required />
        <Input name="company" placeholder="Company Name *" value={form.company} onChange={onChange} required />
        <div className={compact ? "" : "md:col-span-2"}>
          <textarea
            name="message"
            placeholder="How can we help? (optional)"
            value={form.message}
            onChange={onChange}
            rows={3}
            className="w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`${compact ? "" : "md:col-span-2"} inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95 disabled:opacity-60 shadow-glow`}
        >
          {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          {loading ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    />
  );
}
