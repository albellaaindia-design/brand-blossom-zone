import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Rank Advertising" }, { name: "description", content: "How Rank Advertising collects, uses and protects your data." }] }),
  component: () => (
    <LegalPage title="Privacy Policy" eyebrow="Legal" updated="January 2026">
      <p>Rank Advertising respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have.</p>
      <h2>Information We Collect</h2>
      <p>We collect details you provide through our inquiry forms (name, email, phone, company), email correspondence, and basic analytics such as pages visited, device and approximate location.</p>
      <h2>How We Use Information</h2>
      <p>To respond to your inquiry, deliver services you engage us for, improve our website, and send relevant updates. We never sell your personal data.</p>
      <h2>Cookies</h2>
      <p>We use first-party and third-party cookies for analytics and ad measurement. You can control cookies via your browser settings.</p>
      <h2>Data Sharing</h2>
      <p>We may share data with trusted processors (hosting, analytics, CRM) bound by confidentiality. We disclose data when required by law.</p>
      <h2>Data Retention</h2>
      <p>Inquiry data is retained for as long as is necessary to provide you services and to comply with legal requirements.</p>
      <h2>Your Rights</h2>
      <p>You may request access, correction or deletion of your personal data by writing to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <h2>Contact</h2>
      <p>For any privacy questions, contact <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  ),
});
