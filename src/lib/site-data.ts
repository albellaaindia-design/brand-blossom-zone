export const SITE = {
  name: "Rank Advertising",
  email: "hello@rankadvertising.co",
  phone: "+91 93722 14451",
  address:
    "4th Floor, Akshar Blue Chip IT Park, Turbhe MIDC, Turbhe, Navi Mumbai, Maharashtra 400703",
};

export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  items: string[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "zoho",
    title: "Zoho Services",
    tagline: "Certified Zoho implementation, customization & support.",
    items: [
      "Zoho CRM",
      "Zoho Implementation",
      "Zoho Creator Services",
      "Zoho Consulting Services",
      "Zoho One Implementation",
      "Zoho Implementation Audit",
      "Zoho Support",
      "Hire Zoho Developer",
    ],
  },
  {
    slug: "seo",
    title: "Core Digital Marketing",
    tagline: "Rank higher. Get found. Drive traffic that converts.",
    items: [
      "Search Engine Optimization (SEO)",
      "AI SEO & AI Citation Optimization",
      "Technical SEO",
      "Local SEO",
      "Content SEO",
      "Organic Traffic Growth Strategy",
    ],
  },
  {
    slug: "website",
    title: "Website Services",
    tagline: "Fast, conversion-focused websites engineered to perform.",
    items: [
      "Website Design",
      "Website Development",
      "Conversion-Focused Website Development",
      "Landing Page Development",
      "Website Maintenance",
      "Technical Website Fixes",
      "Responsive Website Design",
    ],
  },
  {
    slug: "performance",
    title: "Performance Marketing",
    tagline: "Predictable pipeline. Measurable ROI. Profitable growth.",
    items: [
      "Performance Marketing",
      "Lead Generation Campaigns",
      "Conversion Optimization",
      "ROI-Focused Advertising",
      "Customer Acquisition Campaigns",
      "Campaign Scaling & Optimization",
    ],
  },
  {
    slug: "ads",
    title: "Paid Advertising",
    tagline: "Google, Meta, LinkedIn — managed by certified specialists.",
    items: [
      "Google Ads Management",
      "Meta Ads (Facebook & Instagram)",
      "LinkedIn Ads",
      "PPC (Pay-Per-Click) Advertising",
      "Retargeting Campaigns",
      "Lead Generation Ads",
      "Brand Awareness Campaigns",
    ],
  },
  {
    slug: "social",
    title: "Social Media Marketing",
    tagline: "Build the audience. Grow the brand. Spark the conversation.",
    items: [
      "Instagram Marketing",
      "Facebook Marketing",
      "LinkedIn Marketing",
      "Social Media Management",
      "Social Media Strategy",
      "Reels Creation",
      "Content Calendar Planning",
      "Community Engagement",
      "Influencer Marketing",
      "Social Media Growth Campaigns",
    ],
  },
  {
    slug: "branding",
    title: "Content & Branding",
    tagline: "Distinctive brands. Stories that travel. Content that lasts.",
    items: [
      "Content Marketing",
      "LinkedIn Personal Branding",
      "Thought Leadership Marketing",
      "Brand Identity Development",
      "Branding Campaigns",
      "Creative Design",
      "Visual Branding",
    ],
  },
  {
    slug: "email",
    title: "Email Marketing",
    tagline: "Nurture leads, retain customers, drive repeat revenue.",
    items: [
      "Email Marketing Campaigns",
      "Email Automation",
      "Promotional Email Campaigns",
      "Customer Engagement Emails",
    ],
  },
  {
    slug: "extras",
    title: "Additional Services",
    tagline: "Strategy, research & consulting to power your next phase.",
    items: [
      "SEM (Search Engine Marketing)",
      "Online Reputation Management (ORM)",
      "Brand Strategy",
      "Market Research",
      "Digital Transformation Consulting",
      "Business Growth Consulting",
    ],
  },
];

export const INDUSTRIES: { name: string; description: string }[] = [
  { name: "Legal", description: "Client acquisition for law firms and legal consultants." },
  { name: "Healthcare", description: "Patient growth for clinics, hospitals & wellness brands." },
  { name: "Hospitality", description: "Bookings & brand love for hotels, restaurants & resorts." },
  { name: "E-commerce", description: "Scaling D2C brands with paid, SEO and retention loops." },
  { name: "SaaS", description: "Pipeline, MQLs and product-led growth for software companies." },
  { name: "Real Estate", description: "Qualified buyer & investor leads at scale." },
  { name: "B2B", description: "Account-based marketing & enterprise lead generation." },
  { name: "Manufacturing", description: "Distributor, dealer & export lead generation." },
  { name: "Education / EdTech", description: "Enrolment growth and lifecycle marketing." },
];

export const COUNTRIES = [
  "India",
  "USA",
  "Canada",
  "Australia",
  "UAE",
  "UK",
  "Singapore",
  "Germany",
  "Saudi Arabia",
  "Netherlands",
];
