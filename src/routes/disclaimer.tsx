import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({ meta: [{ title: "Disclaimer — Rank Advertising" }, { name: "description", content: "Disclaimer for content published on rankadvertising.co." }] }),
  component: () => (
    <LegalPage title="Disclaimer" eyebrow="Legal" updated="January 2026">
      <p>The information provided on this website is for general informational purposes only. While we strive to keep the content accurate and up to date, Rank Advertising makes no warranties of any kind, express or implied, about the completeness, accuracy or suitability of the information.</p>
      <h2>No Guaranteed Results</h2>
      <p>Digital marketing outcomes depend on many factors including market conditions, industry, budget and execution. Case studies and statistics represent past results and do not guarantee similar outcomes.</p>
      <h2>External Links</h2>
      <p>This website may contain links to third-party websites. We are not responsible for the content, accuracy or privacy practices of these websites.</p>
      <h2>Professional Advice</h2>
      <p>Content on this website does not constitute legal, financial or professional advice. Please consult qualified professionals before acting on any information.</p>
    </LegalPage>
  ),
});
