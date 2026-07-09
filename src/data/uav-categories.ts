import type { ProductCategory } from "@/types/product";

export const uavCategories: {
  title: string;
  slug: ProductCategory;
  summary: string;
  image: string;
  tagline?: string;
  description?: string;
  features?: string[];
  applications?: string[];
  services?: string[];
  whyChooseUs?: string[];
  /** Full-width image + overlay text banner shown below the intro description */
  bannerImage?: string;
  bannerEyebrow?: string;
  bannerHeading?: string;
  bannerText?: string;
  /** Drones only: full-width header video */
  videoUrl?: string;
  videoPoster?: string;
  /** Feature section image */
  featureImage?: string;
  /** Applications section image */
  applicationsImage?: string;
}[] = [
  {
    title: "Drones",
    slug: "drones",
    summary: "Enterprise UAV platforms for inspection, mapping, agriculture, and public safety.",
    image: "/images/uav/category-drones.svg",
    tagline: "Better Growth, Better Life",
    description:
      "Revolutionizing Agave Farming: Using Agras T50 Drones to Spray Agave. Agave, a resilient desert plant, is central to the production of tequila, a beverage deeply rooted in Mexican culture. Predominantly cultivated in Jalisco, Mexico, particularly the Tequila region, agave farming has unique challenges and requirements.",
    videoUrl: "/videos/uav/drone-demo.mp4",
    videoPoster: "/images/uav/drone-video-poster.svg",
    bannerImage: "/images/uav/banner-drones.svg",
    bannerEyebrow: "Enterprise UAV",
    bannerHeading: "Built for the field, trusted for the mission",
    bannerText:
      "From dock-based automated inspection to compact enterprise platforms, our drone lineup is selected for teams that need repeatable, reliable flight performance across agriculture, infrastructure, and public safety work.",
    featureImage: "/images/uav/feature-drones.jpg"
  },
  {
    title: "Software",
    slug: "software",
    summary: "Mapping, modeling, mission planning, and data processing software.",
    image: "/images/uav/category-software.svg",
    description:
      "Unlock the full potential of your drone with our specialized software for flight automation, photogrammetry, and 3D modeling.",
    features: [
      "Flight Planning - Autonomous missions with waypoint navigation.",
      "Photogrammetry - Convert images into 2D maps & 3D models.",
      "LiDAR Processing - Generate high-accuracy point clouds.",
      "AI Analytics - Automated object detection for agriculture and infrastructure."
    ],
    bannerImage: "/images/uav/banner-software.svg",
    bannerEyebrow: "Data Processing",
    bannerHeading: "Turn raw flight data into decisions",
    bannerText:
      "Our software stack connects flight planning, photogrammetry, and analytics into one workflow, so imagery captured in the field becomes maps, models, and insight without manual guesswork.",
    featureImage: "/images/uav/feature-software.jpg"
  },
  {
    title: "GNSS",
    slug: "gnss",
    summary: "Positioning and geospatial accuracy tools for field operations.",
    image: "/images/uav/category-gnss.svg",
    description:
      "Achieve millimeter-level precision in surveying, construction, and GIS with our advanced GNSS solutions.",
    features: [
      "RTK & PPK Technology – Real-time kinematic & post-processing accuracy.",
      "Multi-Constellation Support – GPS, GLONASS, Galileo, and BeiDou.",
      "Rugged & Weatherproof – Built for challenging field conditions."
    ],
    bannerImage: "/images/uav/banner-gnss.svg",
    bannerEyebrow: "Precision Positioning",
    bannerHeading: "Millimeter accuracy, wherever your team works",
    bannerText:
      "Multi-constellation GNSS receivers keep survey, construction, and GIS crews confident in every reading, even in demanding field conditions.",
    featureImage: "/images/uav/feature-gnss.jpg"
  },
  {
    title: "BIM",
    slug: "bim",
    summary: "Digital construction workflows, 3D visualization, and reality capture support.",
    image: "/images/uav/category-bim.svg",
    description:
      "Revolutionize your construction projects with BIM for smarter planning, collaboration, and execution.",
    features: [
      "3D Visualization - Virtual walkthroughs before construction.",
      "Clash Detection - Identify conflicts in design early.",
      "Cost & Time Savings – Reduce rework and delays."
    ],
    services: [
      "3D Modeling (Revit, AutoCAD)",
      "4D & 5D BIM (Time & cost integration)",
      "Scan-to-BIM (Convert point clouds into BIM models)"
    ],
    bannerImage: "/images/uav/banner-bim.svg",
    bannerEyebrow: "Digital Construction",
    bannerHeading: "Plan, coordinate, and build with confidence",
    bannerText:
      "BIM workflows connect design, field data, and construction teams in one model, catching clashes early and keeping projects on schedule and on budget.",
    featureImage: "/images/uav/feature-bim.jpg"
  },
  {
    title: "Scanners",
    slug: "scanners",
    summary: "Reality capture and scanning systems for survey and engineering teams.",
    image: "/images/uav/category-scanners.svg",
    description:
      "Capture highly detailed 3D data for architecture, archaeology, and industrial inspections with our advanced scanners.",
    applications: [
      "Construction: As-built documentation, progress tracking.",
      "Heritage Preservation: Digital archiving of historical sites.",
      "Mining: Volume calculations, pit monitoring."
    ],
    features: [
      "Terrestrial LiDAR – High-accuracy ground-based scanning.",
      "Mobile Mapping – UAV & vehicle-mounted systems.",
      "Handheld Scanners – Portable devices for quick scans."
    ],
    bannerImage: "/images/uav/banner-scanners.svg",
    bannerEyebrow: "Reality Capture",
    bannerHeading: "Every detail, captured in 3D",
    bannerText:
      "Terrestrial, mobile, and handheld scanning systems give architecture, heritage, and mining teams a precise digital record of physical space.",
    featureImage: "/images/uav/feature-scanners.jpg",
    applicationsImage: "/images/uav/applications-scanners.jpg"
  },
  {
    title: "UAV Services",
    slug: "uav-services",
    summary: "Professional drone services for mapping, inspection, and data collection.",
    image: "/images/uav/category-services.svg",
    description:
      "Beyond sales, we offer expert UAV maintenance, calibration, and repair services to keep your drones operational.",
    services: [
      "Drone Repairs – Motor, gimbal, and sensor fixes.",
      "Battery & Propeller Replacements – Genuine cells and airframe parts.",
      "Firmware Upgrades – Keep every platform on the latest stable release.",
      "Payload Calibration – LiDAR, thermal, and multispectral sensors."
    ],
    whyChooseUs: [
      "Certified Technicians – Manufacturer-trained experts.",
      "Quick Turnaround – Minimize downtime.",
      "Genuine Parts – OEM components for longevity"
    ],
    bannerImage: "/images/uav/banner-services.svg",
    bannerEyebrow: "Keep Flying",
    bannerHeading: "Maintenance that keeps missions on schedule",
    bannerText:
      "Certified technicians, genuine parts, and fast turnaround times mean less downtime and more confidence in every flight.",
    featureImage: "/images/uav/feature-services.jpg"
  }
];