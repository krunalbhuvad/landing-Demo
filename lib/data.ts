export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Testimonial = {
  name: string;
  role: string;
  photo: string;
  quote: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  isPopular?: boolean;
  features: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

export const features: Feature[] = [
  {
    icon: "⚡",
    title: "Workflow Automation",
    description:
      "Turn repetitive tasks into intelligent automations with no-code triggers and AI actions."
  },
  {
    icon: "🧠",
    title: "AI Decision Engine",
    description:
      "NeuroFlow analyzes context and chooses the best next action so your team moves faster."
  },
  {
    icon: "🔗",
    title: "50+ Integrations",
    description:
      "Connect Slack, Notion, HubSpot, Google Workspace, and your internal tools in minutes."
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description:
      "Role-based access, encrypted pipelines, and audit logs built for serious teams."
  }
];

export const stats: Stat[] = [
  { value: "10,000+", label: "Teams automating daily work" },
  { value: "99.9%", label: "Platform uptime guarantee" },
  { value: "42%", label: "Average productivity lift" },
  { value: "< 2 weeks", label: "Typical time to full rollout" }
];

export const testimonials: Testimonial[] = [
  {
    name: "Ava Patel",
    role: "Operations Lead, Orbit Labs",
    photo: "https://i.pravatar.cc/120?img=32",
    quote:
      "NeuroFlow replaced 6 manual handoffs in our onboarding flow and cut cycle time almost in half."
  },
  {
    name: "Marcus Lee",
    role: "Head of RevOps, ScaleForge",
    photo: "https://i.pravatar.cc/120?img=12",
    quote:
      "We finally have one AI layer across our stack. The impact on speed and visibility is massive."
  },
  {
    name: "Elena Cruz",
    role: "Founder, NovaSprint",
    photo: "https://i.pravatar.cc/120?img=47",
    quote:
      "It feels like hiring an always-on operations analyst who never misses a step."
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29/mo",
    description: "Great for solo founders and small teams automating core workflows.",
    features: ["Up to 5 workflows", "Basic integrations", "Email support"]
  },
  {
    name: "Growth",
    price: "$99/mo",
    description: "Perfect for scaling teams that want smarter automation across departments.",
    isPopular: true,
    features: [
      "Unlimited workflows",
      "Advanced AI actions",
      "Priority support",
      "Team collaboration"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations requiring custom infrastructure and governance controls.",
    features: [
      "Dedicated onboarding",
      "SAML + SSO",
      "Custom SLAs",
      "Security reviews"
    ]
  }
];

export const faqs: FAQItem[] = [
  {
    question: "How quickly can we launch NeuroFlow AI?",
    answer:
      "Most teams go live with their first automated workflow in under an hour. Full multi-team rollout typically takes 1-2 weeks."
  },
  {
    question: "Do I need technical skills to use it?",
    answer:
      "No. NeuroFlow provides visual workflow builders and prebuilt templates, so non-technical users can create powerful automations."
  },
  {
    question: "Is our data secure?",
    answer:
      "Yes. Data is encrypted in transit and at rest, with strict access controls, audit trails, and enterprise compliance options."
  },
  {
    question: "Can we cancel anytime?",
    answer:
      "Absolutely. Monthly plans are flexible, and you can upgrade, downgrade, or cancel directly from your billing settings."
  }
];
