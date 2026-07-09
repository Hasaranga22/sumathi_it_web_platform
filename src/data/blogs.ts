import type { Article } from "@/types/content";

export const blogs: Article[] = [
  {
    title: "How Enterprise Networks Support Digital Transformation",
    slug: "enterprise-networks-digital-transformation",
    date: "2026-07-01",
    category: "Enterprise IT",
    excerpt: "A practical look at how stable, scalable network architecture supports modern business operations.",
    image: "/images/blogs/network-transformation.svg",
    body: [
      "Digital transformation depends on reliable infrastructure. Before advanced applications can perform well, the network foundation must be stable, secure, and scalable.",
      "A well-planned enterprise network connects branches, users, applications, and workloads while reducing operational friction."
    ],
    seoTitle: "Enterprise Networks and Digital Transformation",
    seoDescription: "Learn how enterprise networking supports digital transformation, scalability, security, and business continuity."
  },
  {
    title: "Why UAV Data Is Becoming Critical for Field Operations",
    slug: "uav-data-field-operations",
    date: "2026-07-02",
    category: "UAV Solutions",
    excerpt: "Drone-based data collection is helping teams inspect, map, and monitor faster with better visibility.",
    image: "/images/blogs/uav-data.svg",
    body: [
      "UAV data allows businesses to capture high-value field information without depending only on manual inspection.",
      "With the right drone, software, and processing workflow, field teams can move from image capture to actionable insight."
    ],
    seoTitle: "UAV Data for Field Operations",
    seoDescription: "Explore how UAV data supports mapping, inspection, monitoring, and field operations for modern organizations."
  },
  {
    title: "Cybersecurity Starts With the Right Infrastructure Decisions",
    slug: "cybersecurity-infrastructure-decisions",
    date: "2026-07-03",
    category: "Cybersecurity",
    excerpt: "Security is strongest when it is designed into networks, endpoints, access, and operations from the beginning.",
    image: "/images/blogs/security-foundation.svg",
    body: [
      "Cybersecurity cannot be treated as a single product purchase. It must be part of infrastructure planning, user access, monitoring, and operational discipline.",
      "Organizations that design security early are better prepared for changing threats and compliance requirements."
    ],
    seoTitle: "Cybersecurity Infrastructure Decisions",
    seoDescription: "Understand why cybersecurity should be designed into enterprise infrastructure from the beginning."
  }
];
