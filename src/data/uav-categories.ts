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
}[] = [
  {
    title: "Drones",
    slug: "drones",
    summary: "Enterprise and agricultural drone platforms for inspection, mapping, spraying, and public safety. Our comprehensive DJI drone lineup includes the Enterprise series for professional operations and the Agras series for precision agriculture.",
    image: "/images/uav/done.jpg",
    tagline: "Built for the field, trusted for the mission",
    description: "From the Matrice 400 series for heavy-lift industrial missions to the Mavic 3M for multispectral agriculture, our enterprise drones deliver reliable performance in demanding field conditions. The Agras series provides specialized spraying and spreading capabilities for commercial farming operations.",
    videoUrl: "/videos/uav/drone.mp4",
    videoPoster: "/images/uav/banner-drones.jpg",
    bannerImage: "/images/uav/banner-drones.jpg",
    bannerEyebrow: "Enterprise & Agricultural Drones",
    bannerHeading: "Professional drone solutions for every mission",
    bannerText: "Enterprise series for inspection and mapping, Agras series for precision agriculture and spraying operations."
  },
  {
    title: "Payloads",
    slug: "payloads",
    summary: "Advanced sensor and camera payloads that transform enterprise drones into specialized data collection platforms. Our payload lineup includes LiDAR sensors, thermal imaging cameras, photogrammetry cameras, and specialized sensors for surveying, inspection, agriculture, and public safety applications.",
    image: "/images/uav/payloads/zenmuse h30 series/zenmuse h30.jpg",
    description: "Transform your drone platform with our comprehensive DJI payload ecosystem. The Zenmuse L3 LiDAR sensor penetrates vegetation for accurate ground elevation mapping, while the Zenmuse H30 series (H30 and H30T) provides high-resolution visible and thermal imaging for electrical inspection and search operations. The Zenmuse P1 photogrammetry camera delivers survey-grade imagery for orthomosaic mapping and 3D reconstruction. Specialized sensors like the Zenmuse S1 and V1 address unique industrial and inspection requirements. These payloads integrate seamlessly with DJI enterprise drones, providing plug-and-play compatibility and synchronized data capture.",
    features: [
      "Zenmuse L3 - Advanced LiDAR sensor for high-density point cloud capture and vegetation penetration.",
      "Zenmuse H30 Series - H30 for detailed inspection, H30T for thermal imaging and search operations.",
      "Zenmuse P1 - High-resolution photogrammetry camera for precision mapping and 3D modeling.",
      "Zenmuse S1 - Specialized sensor for specific industrial and inspection applications.",
      "Zenmuse V1 - Versatile camera payload for general inspection and documentation."
    ],
    bannerImage: "/images/uav/banner-payloads.jpg",
    bannerEyebrow: "Specialized Sensors",
    bannerHeading: "Transform drones into data collection platforms",
    bannerText: "From LiDAR and thermal to photogrammetry and specialized sensors, our payload ecosystem equips your drone with the right tool for every mission."
  },
  {
    title: "Accessories",
    slug: "accessories",
    summary: "Essential accessories and support equipment that enhance drone operations, safety, and field deployment. Our enterprise accessory lineup includes docking stations, ground stations, safety equipment, RTK systems, and onboard computers for professional-grade UAV operations.",
    image: "/images/uav/accessories/ap100 parachute/ap100_blog_2.webp",
    description: "Maximize your drone's operational capability with our comprehensive DJI accessory lineup. The DJI AP100 Parachute provides emergency recovery for regulatory compliance and enhanced safety. The DJI O4 Ground Station serves as a professional field command center for mission planning and fleet management. The D-RTK 3 Multifunctional Station delivers centimeter-level positioning accuracy for survey-grade mapping. The DJI FlightHub 2 AIO offers all-in-one fleet management and data processing. The Manifold 3 onboard computer enables AI processing and edge computing directly on drones.",
    features: [
      "DJI AP100 Parachute - Emergency recovery system for enhanced safety and regulatory compliance.",
      "DJI O4 Ground Station - Professional field command center for mission planning and fleet management.",
      "DJI FlightHub 2 AIO - All-in-one fleet management and data processing system.",
      "Manifold 3 - High-performance onboard computer for AI processing and edge computing.",
      "D-RTK 3 Multifunctional Station - High-precision RTK base station for centimeter-level positioning."
    ],
    bannerImage: "/images/uav/accessories/accessory image box.jpg",
    bannerEyebrow: "Mission Support",
    bannerHeading: "The foundation for professional operations",
    bannerText: "From autonomous docks to precision RTK and safety equipment, our accessories ensure your drone fleet operates reliably in any environment."
  },
  {
    title: "Software",
    slug: "software",
    summary: "A complete mapping, modeling, mission planning, and data processing software suite from DJI, Pix4D, and Terra Solid that turns raw drone imagery and sensor data into actionable maps, 3D models, and analytics.",
    image: "/images/uav/software.jpg",
    description: "Unlock the full potential of your drone with our specialized software ecosystem. DJI software includes FlightHub 2 for cloud-based fleet management, FlightHub 2 On-Premises for local data control, DJI Terra for photogrammetry, DJI Modify for 3D modeling, and DJI DeliveryHub for logistics. Pix4D offers Matic for rapid mapping, Fields for agriculture, React for real-time processing, mapper for professional photogrammetry, and Cloud for collaborative workflows. Terra Solid provides Terrascan for LiDAR processing, TerraModeler for terrain modeling, TerraMatch for data calibration, and TerraPhoto for aerial image processing.",
    features: [
      "DJI Software - FlightHub 2, FlightHub 2 On-Premises, DJI Terra, DJI Modify, DJI DeliveryHub for fleet management and data processing.",
      "Pix4D Software - Matic, Fields, React, mapper, Cloud for photogrammetry, agriculture, and collaborative mapping.",
      "Terra Solid Software - Terrascan, TerraModeler, TerraMatch, TerraPhoto for LiDAR processing and terrain modeling.",
      "Flight Planning - Autonomous missions with precise waypoint navigation and terrain-aware altitude control.",
      "Data Processing - Convert imagery and point clouds into orthomosaics, 3D models, and analytics."
    ],
    bannerImage: "/images/uav/banner-software.jpg",
    bannerEyebrow: "Data Processing",
    bannerHeading: "Turn raw flight data into decisions",
    bannerText: "Our software connects flight planning, photogrammetry, and analytics into one seamless workflow from DJI, Pix4D, and Terra Solid."
  },
  {
    title: "GNSS System",
    slug: "gnss",
    summary: "High-precision GNSS positioning and geospatial accuracy tools from Two Nav designed for survey, construction, and GIS field operations — delivering centimeter-to-millimeter accuracy even in signal-challenged or remote environments.",
    image: "/images/uav/GNSS.jpg",
    description: "Achieve millimeter-level precision in surveying, construction, and GIS with our advanced Two Nav GNSS solutions. Accurate positioning is the foundation of any geospatial project. Our GNSS receivers combine RTK (Real-Time Kinematic) and PPK (Post-Processed Kinematic) correction methods to deliver reliable centimeter and millimeter-level accuracy. The Two Nav Roc provides professional-grade surveying accuracy, the Cross Plus offers enhanced performance for demanding applications, the Terra is built for harsh field conditions, and the Aventura 2 Plus is optimized for GIS data collection. Multi-constellation support means these receivers lock onto GPS, GLONASS, Galileo, and BeiDou satellites simultaneously for improved reliability in obstructed environments.",
    features: [
      "Two Nav Roc - Professional GNSS receiver for high-precision surveying and geospatial data collection.",
      "Two Nav Cross Plus - Advanced GNSS receiver with enhanced features for demanding surveying applications.",
      "Two Nav Terra - Rugged GNSS receiver designed for harsh field conditions and outdoor operations.",
      "Two Nav Aventura 2 Plus - Versatile GNSS receiver for GIS data collection and field mapping.",
      "RTK & PPK Technology - Real-time kinematic and post-processing correction for centimeter-to-millimeter accuracy."
    ],
    bannerImage: "/images/uav/banner-gnss.jpg",
    bannerEyebrow: "Precision Positioning",
    bannerHeading: "Millimeter accuracy, wherever your team works",
    bannerText: "Two Nav multi-constellation GNSS receivers keep survey, construction, and GIS crews confident in every reading, even in demanding field conditions."
  },
  {
    title: "BIM & Digital Construction Solutions",
    slug: "bim",
    summary: "Specialized Scan-to-BIM services that transform laser scanner and drone LiDAR data into accurate BIM models for as-built documentation, renovation projects, and facility management.",
    image: "/images/uav/BIM.jpg",
    description: "Focus on Scan-to-BIM rather than general BIM — our specialized services transform existing structures into intelligent digital models. Using advanced laser scanners and drone-mounted LiDAR systems, we capture precise point cloud data of buildings and infrastructure, then convert it into accurate, editable BIM models in Revit and IFC formats. This reality capture approach eliminates manual measurement errors and provides architects, engineers, and contractors with reliable as-built documentation. Our Scan-to-BIM workflow complements our enterprise drone and LiDAR technologies, strengthening our overall geospatial and digital construction solutions portfolio.",
    features: [
      "Scan-to-BIM Services - Convert laser scanner and drone LiDAR point clouds into accurate BIM models for existing structures.",
      "High-Precision Reality Capture - Laser scanners and drone LiDAR capture millimeter-accurate point clouds of existing structures.",
      "Point Cloud to BIM Conversion - Transform raw scan data into intelligent Revit and IFC models with proper element classification.",
      "As-Built Documentation - Generate accurate as-built models for renovation, retrofit, and facility management workflows."
    ],
    services: [
      "3D Modeling (Revit, AutoCAD) - Detailed, coordinated building models built to industry standards for design and construction use.",
      "4D & 5D BIM Integration - Link construction sequencing and budget data directly to the 3D model for real-time project tracking.",
      "Reality Capture Consulting - Expert guidance on implementing Scan-to-BIM workflows for your construction and engineering projects."
    ],
    bannerImage: "/images/uav/banner-bim.jpg",
    bannerEyebrow: "Digital Construction",
    bannerHeading: "Transform Reality into Intelligent BIM Models",
    bannerText: "Scan-to-BIM workflows connect laser scanners, drone LiDAR, and construction teams in one coordinated digital model for accurate as-built documentation."
  },
  {
    title: "Scanners",
    slug: "scanners",
    summary: "Advanced 3D reality capture and scanning systems from XGrids built for survey and engineering teams — spanning terrestrial, mobile, and handheld platforms to document physical environments with exceptional accuracy and detail.",
    image: "/images/uav/scanners.jpg",
    description: "Capture highly detailed 3D data for architecture, archaeology, and industrial inspections with our advanced XGrids scanning systems. The XGrids Lixel L2 Pro delivers professional-grade LiDAR scanning for high-precision mapping and surveying. The XGrids PortalCam provides rapid capture of building portals and architectural features. The XGrids Lixel K2 offers compact LiDAR for mobile mapping and indoor 3D capture. The XGrids Lixel Kity K1 provides an entry-level solution for basic 3D mapping. LixelStudio software processes and analyzes LiDAR data from XGrids scanners. Together, these tools give construction, heritage preservation, and mining teams the flexibility to choose the right capture method for each project.",
    features: [
      "XGrids Lixel L2 Pro - Professional-grade LiDAR scanner for high-precision 3D mapping and surveying applications.",
      "XGrids PortalCam - Specialized scanning system for rapid capture of building portals and architectural features.",
      "XGrids Lixel K2 - Compact LiDAR scanner for mobile mapping and indoor 3D capture applications.",
      "XGrids Lixel Kity K1 - Entry-level LiDAR scanner for basic 3D mapping and documentation applications.",
      "LixelStudio - Software suite for processing and analyzing LiDAR data from XGrids scanners."
    ],
    applications: [
      "Construction: As-built documentation and progress tracking that compares real-world site conditions against the design model.",
      "Heritage Preservation: Digital archiving of historical sites and structures, preserving detailed records for restoration and research.",
      "Mining: Accurate volume calculations and pit monitoring to track material extraction, stockpile levels, and site changes over time."
    ],
    bannerImage: "/images/uav/banner-scanners.png",
    bannerEyebrow: "Reality Capture",
    bannerHeading: "Every detail, captured in 3D",
    bannerText: "XGrids scanning systems provide precise 3D digital records for architecture, heritage, and mining projects."
  }
];