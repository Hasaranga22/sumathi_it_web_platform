import type { Article } from "@/types/content";

export const caseStudies: Article[] = [
  {
    title: "Enterprise Network Modernization for Multi-Branch Operations",
    slug: "enterprise-network-modernization",
    date: "2026-06-12",
    category: "Networking",
    excerpt: "A scalable network upgrade approach for organizations managing users, branches, and business-critical systems.",
    image: "/images/case-studies/network-case.svg",
    body: [
      "The client needed improved network stability, better visibility, and a scalable foundation for future business applications.",
      "Sumathi IT approached the project through discovery, infrastructure design, deployment planning, and post-implementation support.",
      "The outcome was a more manageable, stable, and future-ready network environment."
    ],
    seoTitle: "Enterprise Network Modernization Case Study",
    seoDescription: "Case study on enterprise network modernization for multi-branch business operations."
  },
  {
    title: "UAV Mapping Workflow for Engineering Teams",
    slug: "uav-mapping-engineering-workflow",
    date: "2026-06-20",
    category: "UAV",
    excerpt: "A UAV-enabled mapping workflow designed to improve field data capture and project visibility.",
    image: "/images/case-studies/uav-case.svg",
    body: [
      "Engineering teams need reliable field data to plan, verify, and document projects accurately.",
      "The UAV workflow combined drone capture, positioning support, and processing software to create usable deliverables.",
      "The result was faster field data collection and clearer project reporting."
    ],
    seoTitle: "UAV Mapping Workflow Case Study",
    seoDescription: "Case study showing how UAV mapping workflows support engineering teams and field data collection."
  }
];
