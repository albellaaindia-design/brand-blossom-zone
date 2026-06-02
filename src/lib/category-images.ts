import dashboard from "@/assets/hero-dashboard.jpg";
import team from "@/assets/team-collab.jpg";
import ai from "@/assets/ai-network.jpg";
import map from "@/assets/global-map.jpg";
import crm from "@/assets/crm-work.jpg";

export const CATEGORY_IMAGES: Record<string, string> = {
  zoho: crm,
  seo: dashboard,
  website: team,
  performance: dashboard,
  ads: dashboard,
  social: team,
  branding: team,
  email: ai,
  extras: ai,
};

export const INDUSTRY_IMAGES: Record<string, string> = {
  legal: team,
  healthcare: ai,
  hospitality: team,
  ecommerce: dashboard,
  saas: ai,
  "real-estate": team,
  b2b: crm,
  manufacturing: dashboard,
  education: team,
};

export const IMAGES = { dashboard, team, ai, map, crm };
