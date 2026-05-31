import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — Rank Advertising" }, { name: "description", content: "Terms & Conditions for using rankadvertising.co." }] }),
  component: () => (
    <LegalPage title="Terms & Conditions" eyebrow="Legal" updated="January 2026">
      <p>By accessing or using the services of Rank Advertising ("we", "us", "our"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.</p>
      <h2>Services</h2>
      <p>We provide digital marketing, SEO, paid advertising, website design and development, Zoho implementation, branding and related consulting services. Scope, deliverables and timelines are confirmed in a signed proposal or statement of work.</p>
      <h2>Engagement</h2>
      <p>All client engagements are governed by a separate written agreement. In case of any conflict between these Terms and the engagement contract, the engagement contract prevails.</p>
      <h2>Intellectual Property</h2>
      <p>All content, designs, code and creative assets published on this website are the property of Rank Advertising unless otherwise stated. Client deliverables transfer to the client on full payment.</p>
      <h2>Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, Rank Advertising shall not be liable for any indirect, incidental or consequential damages arising from use of our website or services.</p>
      <h2>Governing Law</h2>
      <p>These Terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts in Navi Mumbai, Maharashtra.</p>
      <h2>Contact</h2>
      <p>Questions about these Terms? Write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  ),
});
