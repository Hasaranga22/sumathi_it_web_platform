import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    title: "DJI Dock 3",
    slug: "dji-dock-3",
    category: "drones",
    summary: "Remote drone-in-a-box deployment platform for automated operations and infrastructure monitoring.",
    description:
      "DJI Dock 3 is designed for remote, automated UAV operations where teams need repeatable flight missions, centralized monitoring, and reliable field deployment.",
    images: ["/images/products/dji-dock-3-1.svg", "/images/products/dji-dock-3-2.svg", "/images/products/dji-dock-3-3.svg"],
    features: ["Automated drone deployment", "Remote mission management", "Weather-aware operation", "Enterprise-ready monitoring", "Ideal for inspection and public safety"],
    specifications: {
      "Use case": "Remote inspection, security, monitoring, emergency response",
      "Operation model": "Automated dock-based deployment",
      "Control": "Cloud-based mission operation",
      "Recommended for": "Enterprise and government users"
    },
    comparison: {
      rechargeTime: "Approx. 30 minutes",
      takeOffTime: "Fast automated launch",
      droneAutonomy: "High",
      protectionClass: "Industrial-grade",
      temperatureRange: "Wide operating range",
      sealingSystem: "Weather-resistant dock design",
      baseAndMounting: "Fixed or field deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Supported",
      mobileDeployment: "Supported with correct setup",
      antiVibrationSystem: "Integrated protection",
      obstacleDetectionSensors: "Multi-direction sensing",
      securityAndGeocaging: "Enterprise security controls",
      thermalManagement: "Integrated thermal control"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "dji-mavic-3-enterprise", "pix4dmapper"],
    seoTitle: "DJI Dock 3 Sri Lanka",
    seoDescription: "Explore DJI Dock 3 drone-in-a-box solutions in Sri Lanka for automated UAV inspection, monitoring, and remote operations."
  },
  {
    title: "DJI Matrice 350 RTK",
    slug: "dji-matrice-350-rtk",
    category: "drones",
    summary: "Heavy-duty enterprise drone platform for inspection, mapping, and industrial missions.",
    description:
      "DJI Matrice 350 RTK supports demanding enterprise missions with payload flexibility, RTK positioning, and professional-grade flight performance.",
    images: ["/images/products/matrice-350-1.svg", "/images/products/matrice-350-2.svg"],
    features: ["Enterprise flight platform", "RTK positioning", "Payload flexibility", "Industrial inspection ready", "Long-range mission support"],
    specifications: {
      "Use case": "Mapping, inspection, emergency response",
      "Positioning": "RTK supported",
      "Payload": "Multiple enterprise payload options",
      "Recommended for": "Survey, inspection, and industrial teams"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Manual or planned mission launch",
      droneAutonomy: "Very high",
      protectionClass: "Enterprise outdoor operation",
      temperatureRange: "Wide operating range",
      sealingSystem: "Aircraft weather resilience",
      baseAndMounting: "Portable field deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Supported",
      mobileDeployment: "Supported",
      antiVibrationSystem: "Payload stabilization",
      obstacleDetectionSensors: "Multi-direction sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Aircraft-level thermal design"
    },
    relatedSlugs: ["dji-dock-3", "dji-mavic-3-enterprise", "gnss-field-receiver"],
    seoTitle: "DJI Matrice 350 RTK Sri Lanka",
    seoDescription: "DJI Matrice 350 RTK enterprise drone solutions in Sri Lanka for mapping, inspection, and industrial operations."
  },
  {
    title: "DJI Mavic 3 Enterprise",
    slug: "dji-mavic-3-enterprise",
    category: "drones",
    summary: "Compact enterprise drone for mapping, inspection, and fast fieldwork.",
    description:
      "DJI Mavic 3 Enterprise is a compact professional UAV for teams that need quick deployment, efficient data capture, and practical field performance.",
    images: ["/images/products/mavic-3-enterprise-1.svg", "/images/products/mavic-3-enterprise-2.svg"],
    features: ["Compact enterprise design", "Fast field deployment", "Mapping and inspection workflows", "RTK module compatibility", "Efficient image capture"],
    specifications: {
      "Use case": "Survey, inspection, mapping",
      "Form factor": "Compact foldable aircraft",
      "Positioning": "RTK module compatibility",
      "Recommended for": "Field teams and survey crews"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid field launch",
      droneAutonomy: "High",
      protectionClass: "Professional outdoor operation",
      temperatureRange: "Standard enterprise range",
      sealingSystem: "Compact aircraft body",
      baseAndMounting: "Portable deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Optional RTK support",
      mobileDeployment: "Highly suitable",
      antiVibrationSystem: "Camera stabilization",
      obstacleDetectionSensors: "Omnidirectional sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Compact thermal design"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "pix4dmapper", "gnss-field-receiver"],
    seoTitle: "DJI Mavic 3 Enterprise Sri Lanka",
    seoDescription: "DJI Mavic 3 Enterprise drone solutions in Sri Lanka for mapping, inspection, survey, and field operations."
  },
  {
    title: "Pix4Dmapper",
    slug: "pix4dmapper",
    category: "software",
    summary: "Photogrammetry software for drone mapping, 3D modeling, and geospatial deliverables.",
    description:
      "Pix4Dmapper enables professional processing of aerial imagery into maps, point clouds, orthomosaics, and 3D models for engineering and survey workflows.",
    images: ["/images/products/pix4dmapper-1.svg", "/images/products/pix4dmapper-2.svg"],
    features: ["Photogrammetry processing", "Orthomosaic generation", "Point cloud creation", "3D model output", "Survey workflow support"],
    specifications: {
      "Product type": "Software",
      "Use case": "Mapping, survey, 3D modeling",
      "Data output": "Orthomosaic, point cloud, 3D model",
      "Recommended for": "Surveyors, engineers, and UAV teams"
    },
    relatedSlugs: ["dji-mavic-3-enterprise", "dji-matrice-350-rtk", "gnss-field-receiver"],
    seoTitle: "Pix4Dmapper Sri Lanka",
    seoDescription: "Pix4Dmapper software solutions in Sri Lanka for UAV photogrammetry, mapping, point clouds, and 3D modeling."
  },
  {
    title: "GNSS Field Receiver",
    slug: "gnss-field-receiver",
    category: "gnss",
    summary: "High-accuracy positioning tool for survey, mapping, construction, and geospatial fieldwork.",
    description:
      "GNSS field receivers support accurate positioning for teams working in surveying, construction, mapping, and geospatial data collection.",
    images: ["/images/products/gnss-receiver-1.svg"],
    features: ["High-accuracy positioning", "Field-ready design", "Survey workflow compatibility", "Geospatial data support", "Reliable outdoor operation"],
    specifications: {
      "Product type": "GNSS hardware",
      "Use case": "Survey and geospatial fieldwork",
      "Recommended for": "Surveyors and engineering teams",
      "Integration": "Compatible with mapping workflows"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "dji-mavic-3-enterprise", "pix4dmapper"],
    seoTitle: "GNSS Solutions Sri Lanka",
    seoDescription: "GNSS field receiver solutions in Sri Lanka for survey, mapping, construction, and geospatial engineering teams."
  },
  {
    title: "BIM Reality Capture Service",
    slug: "bim-reality-capture-service",
    category: "bim",
    summary: "BIM and reality capture support for construction, architecture, and engineering projects.",
    description:
      "Our BIM reality capture support helps project teams connect field conditions with digital construction workflows and 3D visualization.",
    images: ["/images/products/bim-service-1.svg"],
    features: ["3D visualization", "Construction documentation", "Reality capture workflow", "Digital project coordination", "Engineering support"],
    specifications: {
      "Product type": "Service",
      "Use case": "BIM, digital construction, 3D visualization",
      "Recommended for": "Architects, contractors, and consultants"
    },
    relatedSlugs: ["laser-scanner-pro", "pix4dmapper", "gnss-field-receiver"],
    seoTitle: "BIM and Reality Capture Services Sri Lanka",
    seoDescription: "BIM and reality capture services in Sri Lanka for construction, engineering, architecture, and 3D visualization workflows."
  },
  {
    title: "Laser Scanner Pro",
    slug: "laser-scanner-pro",
    category: "scanners",
    summary: "Scanning solution for detailed site capture, engineering documentation, and 3D modeling workflows.",
    description:
      "Laser scanning solutions help engineering and construction teams capture precise site data for documentation, design, and digital twin workflows.",
    images: ["/images/products/scanner-pro-1.svg"],
    features: ["Accurate site capture", "Point cloud output", "Engineering documentation", "Reality capture support", "BIM workflow compatibility"],
    specifications: {
      "Product type": "Scanner",
      "Use case": "Reality capture and point cloud workflows",
      "Recommended for": "Engineering and construction teams"
    },
    relatedSlugs: ["bim-reality-capture-service", "pix4dmapper", "gnss-field-receiver"],
    seoTitle: "3D Laser Scanners Sri Lanka",
    seoDescription: "3D laser scanner and reality capture solutions in Sri Lanka for engineering, construction, and BIM workflows."
  },
  {
    title: "UAV Mapping Service",
    slug: "uav-mapping-service",
    category: "uav-services",
    summary: "Professional UAV mapping and inspection service for businesses, projects, and public-sector operations.",
    description:
      "Our UAV mapping service supports project teams with professional data capture, inspection, aerial imagery, and survey-ready deliverables.",
    images: ["/images/products/uav-service-1.svg"],
    features: ["Aerial mapping", "Inspection support", "Survey deliverables", "Data processing", "Professional field operation"],
    specifications: {
      "Product type": "Service",
      "Use case": "Mapping, inspection, survey support",
      "Recommended for": "Enterprise, engineering, and government projects"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "pix4dmapper", "gnss-field-receiver"],
    seoTitle: "UAV Mapping Services Sri Lanka",
    seoDescription: "Professional UAV mapping and drone inspection services in Sri Lanka for enterprise, engineering, and government projects."
  }
];

export const droneProducts = products.filter((product) => product.category === "drones" && product.comparison);
