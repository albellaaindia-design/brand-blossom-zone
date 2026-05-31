import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({ meta: [{ title: "Shipping & Delivery Policy — Rank Advertising" }, { name: "description", content: "How and when Rank Advertising delivers digital services." }] }),
  component: () => (
    <LegalPage title="Shipping & Delivery Policy" eyebrow="Legal" updated="January 2026">
      <p>Rank Advertising is a digital services company. We do not ship physical goods. The term "delivery" refers to the handover of digital deliverables such as reports, designs, websites, ad campaigns, Zoho configurations and consulting outputs.</p>
      <h2>Delivery Timelines</h2>
      <p>Timelines are defined in the signed proposal or statement of work and depend on project scope, client approvals and third-party dependencies.</p>
      <h2>Delivery Method</h2>
      <p>Deliverables are shared via email, cloud storage, project management tools or live platforms (e.g. ad accounts, CMS, Zoho instances).</p>
      <h2>Delays</h2>
      <p>If a delivery is delayed for reasons beyond our control, we will keep you informed and revise timelines in writing.</p>
      <h2>Contact</h2>
      <p>For delivery queries, write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  ),
});
