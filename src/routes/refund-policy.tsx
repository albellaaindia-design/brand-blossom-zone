import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({ meta: [{ title: "Refund & Return Policy — Rank Advertising" }, { name: "description", content: "Refund and return policy for Rank Advertising services." }] }),
  component: () => (
    <LegalPage title="Refund & Return Policy" eyebrow="Legal" updated="January 2026">
      <p>Rank Advertising provides professional digital services. Once work has commenced on an engagement, fees are generally non-refundable. This policy outlines the limited situations where refunds may apply.</p>
      <h2>Pre-Engagement</h2>
      <p>If you cancel an engagement in writing before any work has started, advance payments are refundable minus any third-party costs already incurred (e.g. ad spend, software licenses).</p>
      <h2>In-Progress Engagements</h2>
      <p>For active retainers, you may pause or terminate with the notice period defined in your agreement. Fees for work already delivered are non-refundable.</p>
      <h2>Service Quality</h2>
      <p>If a deliverable does not meet the agreed scope, we will revise it at no additional cost. Refunds are not provided in lieu of revisions.</p>
      <h2>Returns</h2>
      <p>As a digital services provider, we do not handle physical returns.</p>
      <h2>Contact</h2>
      <p>For refund queries, write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  ),
});
