import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    title: "DJI Dock 3",
    slug: "dji-dock-3",
    category: "drones",
    summary: "Remote drone-in-a-box deployment platform for automated operations and infrastructure monitoring.",
    description:
      "DJI Dock 3 is designed for remote, automated UAV operations where teams need repeatable flight missions, centralized monitoring, and reliable field deployment.",
    images: ["/images/uav/drone products/dji dock3/dji dock3.jpg", "/images/uav/drone products/dji dock3/dji dock3-1.jpg", "/images/uav/drone products/dji dock3/Dock3-2.jpg"],
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
    images: ["/images/uav/drone products/dji matrice 350 rtk/matrice 350rtk 1.jpg", "/images/uav/drone products/dji matrice 350 rtk/matrice 350rtk 2.jpg", "/images/uav/drone products/dji matrice 350 rtk/matrice 350rtk 3.jpg", "/images/uav/drone products/dji matrice 350 rtk/matrice 350rtk 4.jpg"],
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
    relatedSlugs: ["dji-dock-3", "dji-mavic-3-enterprise", "two-nav-roc"],
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
    images: ["/images/uav/drone products/DJI mavic 3/mavic 1.png", "/images/uav/drone products/DJI mavic 3/mavic2.png", "/images/uav/drone products/DJI mavic 3/mavic3.png", "/images/uav/drone products/DJI mavic 3/mavic4.png"],
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
    relatedSlugs: ["dji-matrice-350-rtk", "pix4dmapper", "two-nav-roc"],
    seoTitle: "DJI Mavic 3 Enterprise Sri Lanka",
    seoDescription: "DJI Mavic 3 Enterprise drone solutions in Sri Lanka for mapping, inspection, survey, and field operations."
  },
  {
    title: "DJI FlightHub 2",
    slug: "dji-flighthub-2",
    category: "software",
    summary: "Cloud-based drone fleet management and data processing platform with enhanced capabilities.",
    description:
      "DJI FlightHub 2 provides comprehensive drone fleet management, real-time monitoring, and data processing capabilities with enhanced features for enterprise operations. The platform enables centralized fleet management, real-time mission monitoring, automated data processing, and integration with enterprise systems for seamless geospatial workflows.",
    images: ["/images/uav/softwares/dji flight hub.jpg"],
    features: ["Cloud-based fleet management", "Real-time drone monitoring", "Enhanced data processing", "Enterprise integration", "Automated workflows", "Advanced analytics"],
    specifications: {
      "Product type": "Software",
      "Use case": "Fleet management and data processing",
      "Deployment": "Cloud-based platform",
      "Recommended for": "Enterprise drone operators"
    },
    relatedSlugs: ["dji-dock-3", "dji-matrice-400", "pix4dmapper"],
    seoTitle: "DJI FlightHub 2 Sri Lanka",
    seoDescription: "DJI FlightHub 2 cloud-based drone fleet management and data processing platform in Sri Lanka."
  },
  {
    title: "DJI FlightHub 2 On-Premises",
    slug: "dji-flighthub-2-on-premises",
    category: "software",
    summary: "On-premises deployment of DJI FlightHub 2 for organizations requiring local data control.",
    description:
      "DJI FlightHub 2 On-Premises offers the same powerful fleet management and data processing capabilities as the cloud version, but deployed locally within your organization's infrastructure. This solution is ideal for government agencies, defense organizations, and enterprises with strict data sovereignty and security requirements.",
    images: ["/images/uav/softwares/eng_pm_DJI-FlightHub-2-On-Premises.webp"],
    features: ["On-premises deployment", "Local data control", "Enhanced security", "Full fleet management", "Data processing capabilities", "Enterprise integration"],
    specifications: {
      "Product type": "Software",
      "Use case": "Fleet management with local data control",
      "Deployment": "On-premises installation",
      "Recommended for": "Government and enterprise with security requirements"
    },
    relatedSlugs: ["dji-dock-3", "dji-matrice-400", "pix4dmapper"],
    seoTitle: "DJI FlightHub 2 On-Premises Sri Lanka",
    seoDescription: "DJI FlightHub 2 On-Premises deployment solutions in Sri Lanka for organizations requiring local data control."
  },
  {
    title: "DJI Modify",
    slug: "dji-modify",
    category: "software",
    summary: "Reality capture and 3D modeling software for construction and engineering applications.",
    description:
      "DJI Modify is a reality capture and 3D modeling solution that transforms drone imagery and LiDAR data into accurate 3D models for construction, engineering, and architectural applications. The software streamlines the workflow from data capture to detailed 3D models, enabling better project visualization and analysis.",
    images: ["/images/uav/softwares/DJI_MODIFY.jpg"],
    features: ["Reality capture processing", "3D model generation", "Construction workflows", "Engineering applications", "Architectural visualization", "Automated modeling"],
    specifications: {
      "Product type": "Software",
      "Use case": "Reality capture and 3D modeling",
      "Data output": "3D models and detailed reconstructions",
      "Recommended for": "Construction and engineering teams"
    },
    relatedSlugs: ["dji-matrice-400", "zenmuse-l2", "pix4dmapper"],
    seoTitle: "DJI Modify Software Sri Lanka",
    seoDescription: "DJI Modify reality capture and 3D modeling software solutions in Sri Lanka for construction and engineering applications."
  },
  {
    title: "DJI DeliveryHub",
    slug: "dji-deliveryhub",
    category: "software",
    summary: "Delivery management platform for drone logistics and cargo transport operations.",
    description:
      "DJI DeliveryHub is a comprehensive platform for managing drone delivery operations, including route planning, fleet coordination, cargo tracking, and delivery analytics. The platform enables efficient last-mile logistics, emergency supply delivery, and commercial drone delivery services with full operational visibility.",
    images: ["/images/uav/softwares/dji delivery hub.jpg"],
    features: ["Delivery route planning", "Fleet coordination", "Cargo tracking", "Delivery analytics", "Logistics optimization", "Emergency delivery support"],
    specifications: {
      "Product type": "Software",
      "Use case": "Drone delivery management",
      "Deployment": "Cloud-based platform",
      "Recommended for": "Logistics companies and delivery operators"
    },
    relatedSlugs: ["dji-flycart-100", "dji-dock-3", "dji-matrice-400"],
    seoTitle: "DJI DeliveryHub Sri Lanka",
    seoDescription: "DJI DeliveryHub drone delivery management platform solutions in Sri Lanka for logistics and cargo transport operations."
  },
  {
    title: "PIX4D Matic",
    slug: "pix4d-matic",
    category: "software",
    summary: "Fast photogrammetry software for rapid mapping and 3D model generation.",
    description:
      "PIX4D Matic is designed for speed and efficiency, enabling rapid processing of aerial imagery into maps and 3D models. The software is optimized for quick turnaround projects where time is critical, such as disaster response, rapid site assessment, and time-sensitive surveying operations.",
    images: ["/images/uav/softwares/pix4d matic/pix4d-matic__37163.webp"],
    features: ["Fast processing", "Rapid mapping", "Quick 3D generation", "Time-sensitive workflows", "Emergency response support", "Efficient data processing"],
    specifications: {
      "Product type": "Software",
      "Use case": "Rapid mapping and 3D modeling",
      "Processing speed": "Optimized for fast turnaround",
      "Recommended for": "Emergency responders and rapid survey teams"
    },
    relatedSlugs: ["dji-mavic-3-enterprise", "dji-matrice-400", "pix4dmapper"],
    seoTitle: "PIX4D Matic Sri Lanka",
    seoDescription: "PIX4D Matic fast photogrammetry software solutions in Sri Lanka for rapid mapping and 3D model generation."
  },
  {
    title: "PIX4D Fields",
    slug: "pix4d-fields",
    category: "software",
    summary: "Agricultural mapping software for crop analysis, field management, and precision agriculture.",
    description:
      "PIX4D Fields is specialized for agricultural applications, providing crop health analysis, field management tools, and precision agriculture workflows. The software enables farmers and agricultural professionals to monitor crop health, plan treatments, and optimize agricultural operations through detailed aerial imagery analysis.",
    images: ["/images/uav/softwares/pix4d fields/pix4d-pix4dfields-box.jpg"],
    features: ["Crop health analysis", "Field management", "Precision agriculture", "Treatment planning", "Agricultural analytics", "Yield optimization"],
    specifications: {
      "Product type": "Software",
      "Use case": "Agricultural mapping and analysis",
      "Specialization": "Agriculture-focused workflows",
      "Recommended for": "Farmers and agricultural professionals"
    },
    relatedSlugs: ["dji-mavic-3m", "dji-agras-t55", "pix4dmapper"],
    seoTitle: "PIX4D Fields Sri Lanka",
    seoDescription: "PIX4D Fields agricultural mapping software solutions in Sri Lanka for crop analysis and precision agriculture."
  },
  {
    title: "PIX4D React",
    slug: "pix4d-react",
    category: "software",
    summary: "Real-time photogrammetry software for on-site processing and immediate results.",
    description:
      "PIX4D React enables real-time photogrammetry processing directly in the field, providing immediate results for time-critical operations. The software is ideal for situations where on-site analysis and rapid decision-making are essential, such as construction monitoring, disaster assessment, and field inspections.",
    images: ["/images/uav/softwares/pix4d react/images (1).jpg"],
    features: ["Real-time processing", "On-site analysis", "Immediate results", "Field operations", "Rapid decision support", "Time-critical workflows"],
    specifications: {
      "Product type": "Software",
      "Use case": "Real-time photogrammetry and on-site processing",
      "Processing mode": "Real-time field processing",
      "Recommended for": "Field teams requiring immediate results"
    },
    relatedSlugs: ["dji-mavic-3-enterprise", "dji-matrice-400", "pix4dmapper"],
    seoTitle: "PIX4D React Sri Lanka",
    seoDescription: "PIX4D React real-time photogrammetry software solutions in Sri Lanka for on-site processing and immediate results."
  },
  {
    title: "PIX4Dmapper",
    slug: "pix4dmapper",
    category: "software",
    summary: "Professional photogrammetry software for drone mapping, 3D modeling, and geospatial deliverables.",
    description:
      "PIX4Dmapper enables professional processing of aerial imagery into maps, point clouds, orthomosaics, and 3D models for engineering and survey workflows. With PIX4D, agricultural field mapping enables early pest identification, fertilizer planning, crop protection, and targeted input application.",
    images: ["/images/uav/softwares/pix4d mapper/images.jpg"],
    features: ["Photogrammetry processing", "Orthomosaic generation", "Point cloud creation", "3D model output", "Survey workflow support", "Agricultural field analysis"],
    specifications: {
      "Product type": "Software",
      "Use case": "Mapping, survey, 3D modeling",
      "Data output": "Orthomosaic, point cloud, 3D model",
      "Recommended for": "Surveyors, engineers, and UAV teams"
    },
    relatedSlugs: ["dji-mavic-3-enterprise", "dji-matrice-400", "two-nav-roc"],
    seoTitle: "PIX4Dmapper Sri Lanka",
    seoDescription: "PIX4Dmapper software solutions in Sri Lanka for UAV photogrammetry, mapping, point clouds, and 3D modeling."
  },
  {
    title: "PIX4D Cloud",
    slug: "pix4d-cloud",
    category: "software",
    summary: "Cloud-based photogrammetry platform for collaborative mapping and data processing.",
    description:
      "PIX4D Cloud provides cloud-based photogrammetry processing with collaborative features for teams working across multiple locations. The platform enables centralized data processing, project sharing, and collaborative analysis, making it ideal for distributed teams and organizations requiring cloud-based geospatial workflows.",
    images: ["/images/uav/softwares/pix4d cloud/pix4d-cloud__59542.webp"],
    features: ["Cloud processing", "Collaborative workflows", "Project sharing", "Team collaboration", "Centralized data management", "Scalable processing"],
    specifications: {
      "Product type": "Software",
      "Use case": "Cloud-based photogrammetry and collaboration",
      "Deployment": "Cloud-based platform",
      "Recommended for": "Distributed teams and collaborative projects"
    },
    relatedSlugs: ["pix4dmapper", "dji-matrice-400", "dji-flighthub-2"],
    seoTitle: "PIX4D Cloud Sri Lanka",
    seoDescription: "PIX4D Cloud photogrammetry platform solutions in Sri Lanka for collaborative mapping and data processing."
  },
  {
    title: "TerraScan",
    slug: "terrascan",
    category: "software",
    summary: "LiDAR data processing software for point cloud classification and terrain modeling.",
    description:
      "TerraScan is a comprehensive LiDAR processing software for point cloud classification, terrain modeling, and feature extraction. The software provides advanced tools for processing large LiDAR datasets, automating classification workflows, and generating accurate terrain models for surveying, engineering, and mapping applications.",
    images: ["/images/uav/softwares/terrascan/images (5).jpg"],
    features: ["Point cloud classification", "Terrain modeling", "Feature extraction", "Automated workflows", "Large dataset processing", "Survey-grade accuracy"],
    specifications: {
      "Product type": "Software",
      "Use case": "LiDAR data processing and terrain modeling",
      "Data input": "LiDAR point clouds",
      "Recommended for": "Surveyors and LiDAR processing professionals"
    },
    relatedSlugs: ["zenmuse-l3", "dji-matrice-400", "terra-modeler"],
    seoTitle: "TerraScan Sri Lanka",
    seoDescription: "TerraScan LiDAR processing software solutions in Sri Lanka for point cloud classification and terrain modeling."
  },
  {
    title: "TerraModeler",
    slug: "terra-modeler",
    category: "software",
    summary: "3D terrain modeling software for construction, engineering, and surveying applications.",
    description:
      "TerraModeler provides advanced 3D terrain modeling capabilities for construction, engineering, and surveying projects. The software enables creation of detailed terrain models, design of earthwork projects, and analysis of topographic data for infrastructure development and construction planning.",
    images: ["/images/uav/softwares/terra modeler/images (3).jpg"],
    features: ["3D terrain modeling", "Earthwork design", "Topographic analysis", "Construction planning", "Infrastructure design", "Volume calculation"],
    specifications: {
      "Product type": "Software",
      "Use case": "3D terrain modeling and earthwork design",
      "Applications": "Construction, engineering, surveying",
      "Recommended for": "Construction and engineering teams"
    },
    relatedSlugs: ["terrascan", "dji-matrice-400", "pix4dmapper"],
    seoTitle: "TerraModeler Sri Lanka",
    seoDescription: "TerraModeler 3D terrain modeling software solutions in Sri Lanka for construction and engineering applications."
  },
  {
    title: "TerraMatch",
    slug: "terra-match",
    category: "software",
    summary: "LiDAR data matching and calibration software for improving data accuracy and quality.",
    description:
      "TerraMatch is specialized software for LiDAR data matching and calibration, improving the accuracy and quality of point cloud data. The software corrects systematic errors, aligns multiple datasets, and ensures high-quality data for survey-grade applications requiring precise measurements.",
    images: ["/images/uav/softwares/terra match/images (2).jpg"],
    features: ["Data matching", "Calibration tools", "Accuracy improvement", "Error correction", "Dataset alignment", "Quality control"],
    specifications: {
      "Product type": "Software",
      "Use case": "LiDAR data matching and calibration",
      "Focus": "Data accuracy and quality improvement",
      "Recommended for": "LiDAR processing professionals"
    },
    relatedSlugs: ["terrascan", "zenmuse-l3", "terra-photo"],
    seoTitle: "TerraMatch Sri Lanka",
    seoDescription: "TerraMatch LiDAR data matching and calibration software solutions in Sri Lanka for improving data accuracy."
  },
  {
    title: "TerraPhoto",
    slug: "terra-photo",
    category: "software",
    summary: "Aerial image processing software for orthophoto generation and image analysis.",
    description:
      "TerraPhoto is designed for processing aerial imagery to generate high-quality orthophotos and perform image analysis. The software handles large image datasets, provides accurate georeferencing, and supports various aerial imaging workflows for mapping and surveying applications.",
    images: ["/images/uav/softwares/terra photo/images (4).jpg"],
    features: ["Orthophoto generation", "Image processing", "Georeferencing", "Large dataset handling", "Aerial imaging workflows", "Image analysis"],
    specifications: {
      "Product type": "Software",
      "Use case": "Aerial image processing and orthophoto generation",
      "Data input": "Aerial imagery",
      "Recommended for": "Photogrammetry and mapping professionals"
    },
    relatedSlugs: ["terrascan", "terra-match", "pix4dmapper"],
    seoTitle: "TerraPhoto Sri Lanka",
    seoDescription: "TerraPhoto aerial image processing software solutions in Sri Lanka for orthophoto generation and image analysis."
  },
  {
    title: "Two Nav Roc",
    slug: "two-nav-roc",
    category: "gnss",
    summary: "Professional GNSS receiver for high-precision surveying and geospatial data collection.",
    description:
      "Two Nav Roc is a professional GNSS receiver designed for high-precision surveying and geospatial data collection. With advanced RTK capabilities and multi-constellation support, the Roc delivers centimeter-level accuracy for topographic surveys, construction staking, and GIS data collection in demanding field conditions.",
    images: ["/images/uav/gnss/two nav roc/highlight-5.webp"],
    features: ["High-precision positioning", "RTK capabilities", "Multi-constellation support", "Survey-grade accuracy", "Field-ready design", "Professional workflows"],
    specifications: {
      "Product type": "GNSS Receiver",
      "Use case": "High-precision surveying and data collection",
      "Positioning accuracy": "Centimeter-level RTK",
      "Recommended for": "Professional surveyors and GIS teams"
    },
    relatedSlugs: ["dji-matrice-400", "pix4dmapper", "terrascan"],
    seoTitle: "Two Nav Roc GNSS Receiver Sri Lanka",
    seoDescription: "Two Nav Roc professional GNSS receiver solutions in Sri Lanka for high-precision surveying and geospatial data collection."
  },
  {
    title: "Two Nav Cross Plus",
    slug: "two-nav-cross-plus",
    category: "gnss",
    summary: "Advanced GNSS receiver with enhanced features for demanding surveying applications.",
    description:
      "Two Nav Cross Plus is an advanced GNSS receiver with enhanced features for demanding surveying applications. Building on the proven Two Nav platform, the Cross Plus offers improved performance, longer battery life, and advanced connectivity options for surveyors who need reliable operation in challenging field environments.",
    images: ["/images/uav/gnss/two nav cross plus/TwoNav_Cross_Plus_1024x1024.jpg"],
    features: ["Enhanced performance", "Long battery life", "Advanced connectivity", "Challenging environment operation", "Professional surveying", "Reliable accuracy"],
    specifications: {
      "Product type": "GNSS Receiver",
      "Use case": "Demanding surveying applications",
      "Enhancements": "Improved performance and connectivity",
      "Recommended for": "Professional surveyors in challenging environments"
    },
    relatedSlugs: ["two-nav-roc", "dji-matrice-400", "pix4dmapper"],
    seoTitle: "Two Nav Cross Plus GNSS Receiver Sri Lanka",
    seoDescription: "Two Nav Cross Plus advanced GNSS receiver solutions in Sri Lanka for demanding surveying applications."
  },
  {
    title: "Two Nav Terra",
    slug: "two-nav-terra",
    category: "gnss",
    summary: "Rugged GNSS receiver designed for harsh field conditions and outdoor operations.",
    description:
      "Two Nav Terra is a rugged GNSS receiver designed for harsh field conditions and outdoor operations. With enhanced durability, weather resistance, and reliable performance in extreme environments, the Terra is ideal for surveyors working in construction sites, mining operations, and remote locations where equipment reliability is critical.",
    images: ["/images/uav/gnss/two nav terra/71BKd6vBk2L._AC_SX466_.jpg"],
    features: ["Rugged design", "Weather resistance", "Extreme environment operation", "Reliable performance", "Construction and mining", "Field durability"],
    specifications: {
      "Product type": "GNSS Receiver",
      "Use case": "Harsh field conditions and outdoor operations",
      "Durability": "Enhanced rugged and weather-resistant design",
      "Recommended for": "Surveyors in construction, mining, and remote operations"
    },
    relatedSlugs: ["two-nav-roc", "dji-agras-t55", "pix4dmapper"],
    seoTitle: "Two Nav Terra GNSS Receiver Sri Lanka",
    seoDescription: "Two Nav Terra rugged GNSS receiver solutions in Sri Lanka for harsh field conditions and outdoor operations."
  },
  {
    title: "Two Nav Aventura 2 Plus",
    slug: "two-nav-aventura-2-plus",
    category: "gnss",
    summary: "Versatile GNSS receiver for GIS data collection and field mapping applications.",
    description:
      "Two Nav Aventura 2 Plus is a versatile GNSS receiver optimized for GIS data collection and field mapping applications. With user-friendly operation, efficient data capture workflows, and seamless integration with GIS software, the Aventura 2 Plus is ideal for field teams collecting spatial data for environmental monitoring, asset management, and mapping projects.",
    images: ["/images/uav/gnss/two nav aventura 2 plus/TwoNav_Aventura_2_Plus_-_main_pic_720x.jpg"],
    features: ["Versatile operation", "GIS data collection", "Field mapping", "User-friendly interface", "Software integration", "Efficient workflows"],
    specifications: {
      "Product type": "GNSS Receiver",
      "Use case": "GIS data collection and field mapping",
      "Specialization": "GIS and mapping workflows",
      "Recommended for": "GIS teams and field mapping professionals"
    },
    relatedSlugs: ["two-nav-roc", "dji-mavic-3m", "pix4d-fields"],
    seoTitle: "Two Nav Aventura 2 Plus GNSS Receiver Sri Lanka",
    seoDescription: "Two Nav Aventura 2 Plus versatile GNSS receiver solutions in Sri Lanka for GIS data collection and field mapping."
  },
  {
    title: "3D Modeling Service (Revit, AutoCAD)",
    slug: "3d-modeling-service",
    category: "bim",
    summary: "Professional 3D modeling services using Revit and AutoCAD for construction and engineering projects.",
    description:
      "Our 3D modeling services provide detailed digital models using Revit and AutoCAD for construction, architecture, and engineering projects, enabling accurate visualization and planning.",
    images: ["/images/uav/BIM/revit.png", "/images/uav/BIM/autocad.png"],
    features: ["Revit 3D modeling", "AutoCAD drafting", "Architectural visualization", "Engineering documentation", "BIM integration"],
    specifications: {
      "Product type": "Service",
      "Use case": "3D modeling and documentation",
      "Software": "Revit, AutoCAD",
      "Recommended for": "Architects, engineers, and contractors"
    },
    relatedSlugs: ["bim-reality-capture-service", "laser-scanner-pro", "pix4dmapper"],
    seoTitle: "3D Modeling Services Sri Lanka",
    seoDescription: "Professional 3D modeling services using Revit and AutoCAD in Sri Lanka for construction and engineering projects."
  },
  {
    title: "4D & 5D BIM (Building Information Modeling) Service",
    slug: "4d-5d-bim-service",
    category: "bim",
    summary: "Time and cost integration BIM services for construction project management.",
    description:
      "Our 4D & 5D BIM services integrate time scheduling and cost estimation into building information models, enabling better project planning, cost control, and timeline management.",
    images: ["/images/uav/BIM.jpg"],
    features: ["4D BIM (Time integration)", "5D BIM (Cost integration)", "Project scheduling", "Cost estimation", "Construction planning"],
    specifications: {
      "Product type": "Service",
      "Use case": "Time and cost management in BIM",
      "Capabilities": "4D scheduling, 5D costing",
      "Recommended for": "Project managers and construction teams"
    },
    relatedSlugs: ["3d-modeling-service", "bim-reality-capture-service", "pix4dmapper"],
    seoTitle: "4D & 5D BIM Services Sri Lanka",
    seoDescription: "4D & 5D BIM services for time and cost integration in construction projects in Sri Lanka."
  },
  {
    title: "Scan-to-BIM (Building Information Modeling) Service",
    slug: "scan-to-bim-service",
    category: "bim",
    summary: "Convert point clouds into BIM models for as-built documentation and renovation projects.",
    description:
      "Our Scan-to-BIM services convert laser scanner point cloud data into accurate BIM models, supporting as-built documentation, renovation projects, and facility management workflows.",
    images: ["/images/uav/BIM.jpg"],
    features: ["Point cloud to BIM conversion", "As-built documentation", "Renovation support", "Facility management", "High-accuracy modeling"],
    specifications: {
      "Product type": "Service",
      "Use case": "Point cloud to BIM conversion",
      "Input": "LiDAR point clouds",
      "Output": "BIM models (Revit, IFC)",
      "Recommended for": "Architects, engineers, and facility managers"
    },
    relatedSlugs: ["laser-scanner-pro", "3d-modeling-service", "zenmuse-l2"],
    seoTitle: "Scan-to-BIM Services Sri Lanka",
    seoDescription: "Scan-to-BIM services for converting point clouds into BIM models in Sri Lanka."
  },
  {
    title: "BIM (Building Information Modeling) Reality Capture Service",
    slug: "bim-reality-capture-service",
    category: "bim",
    summary: "BIM and reality capture support for construction, architecture, and engineering projects.",
    description:
      "Our BIM reality capture support helps project teams connect field conditions with digital construction workflows and 3D visualization.",
    images: ["/images/uav/BIM/bim-2.jpg"],
    features: ["3D visualization", "Construction documentation", "Reality capture workflow", "Digital project coordination", "Engineering support"],
    specifications: {
      "Product type": "Service",
      "Use case": "BIM, digital construction, 3D visualization",
      "Recommended for": "Architects, contractors, and consultants"
    },
    relatedSlugs: ["laser-scanner-pro", "pix4dmapper", "two-nav-roc"],
    seoTitle: "BIM and Reality Capture Services Sri Lanka",
    seoDescription: "BIM and reality capture services in Sri Lanka for construction, engineering, architecture, and 3D visualization workflows."
  },
  {
    title: "Zenmuse L2",
    slug: "zenmuse-l2",
    category: "scanners",
    summary: "UAV-mounted LiDAR scanner for high-density mapping and surveying.",
    description:
      "Zenmuse L2 is a UAV-mounted LiDAR scanner designed for high-density mapping and surveying applications, providing accurate point cloud data for topographic surveys, infrastructure inspection, and environmental monitoring.",
    images: ["/images/uav/scanners/Zenmuse L2/Zenmuse L2 -1.jpg", "/images/uav/scanners/Zenmuse L2/Zenmuse L2-2.jpg", "/images/uav/scanners/Zenmuse L2/Zenmuse L2-3.png", "/images/uav/scanners/Zenmuse L2/Zenmuse L2-4.jpg"],
    features: ["UAV-mounted LiDAR", "High-density point clouds", "RTK integration", "Multi-return capability", "Survey-grade accuracy"],
    specifications: {
      "Product type": "LiDAR Sensor",
      "Use case": "Aerial mapping and surveying",
      "Mounting": "UAV-compatible",
      "Recommended for": "Surveyors and mapping professionals"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "terrascan", "scan-to-bim-service"],
    seoTitle: "Zenmuse L2 LiDAR Scanner Sri Lanka",
    seoDescription: "Zenmuse L2 UAV-mounted LiDAR scanner for high-density mapping and surveying in Sri Lanka."
  },
  {
    title: "FARO FocusS 350",
    slug: "faro-focuss-350",
    category: "scanners",
    summary: "High-precision 3D laser scanner for architecture, construction, and engineering.",
    description:
      "FARO FocusS 350 is a high-precision 3D laser scanner widely used for architecture, construction, engineering documentation, and heritage preservation projects, delivering accurate point cloud data for BIM workflows.",
    images: ["/images/uav/scanners/FARO FocusS 350/FARO FocusS 350 -1.jpg", "/images/uav/scanners/FARO FocusS 350/FARO FocusS 350 -2.png", "/images/uav/scanners/FARO FocusS 350/FARO FocusS 350 -3.jpg"],
    features: ["High-precision scanning", "Long-range capability", "Fast data capture", "BIM workflow integration", "Heritage preservation support"],
    specifications: {
      "Product type": "Terrestrial Scanner",
      "Use case": "Architecture, construction, engineering",
      "Range": "Up to 350m",
      "Recommended for": "Surveyors, architects, and engineers"
    },
    relatedSlugs: ["scan-to-bim-service", "3d-modeling-service", "laser-scanner-pro"],
    seoTitle: "FARO FocusS 350 Scanner Sri Lanka",
    seoDescription: "FARO FocusS 350 high-precision 3D laser scanner for architecture and construction in Sri Lanka."
  },
  {
    title: "SLAM Hand Scanner",
    slug: "slam-hand-scanner",
    category: "scanners",
    summary: "Portable 3D mapping and scanning device for indoor and mobile applications.",
    description:
      "SLAM hand scanner provides portable 3D mapping and scanning capabilities for indoor environments, mobile applications, and confined spaces where traditional scanners cannot easily operate.",
    images: ["/images/uav/scanners/SLAM Hand Scanner/handheld-SLAM-3d-Lidar-scanner.png"],
    features: ["Portable handheld design", "SLAM technology", "Indoor mapping", "Mobile scanning", "Real-time data capture"],
    specifications: {
      "Product type": "Handheld Scanner",
      "Use case": "Indoor and mobile scanning",
      "Technology": "SLAM (Simultaneous Localization and Mapping)",
      "Recommended for": "Surveyors and facility managers"
    },
    relatedSlugs: ["scan-to-bim-service", "faro-focuss-350", "3d-modeling-service"],
    seoTitle: "SLAM Hand Scanner Sri Lanka",
    seoDescription: "Portable SLAM hand scanner for 3D mapping and scanning in Sri Lanka."
  },
  {
    title: "Laser Scanner Pro",
    slug: "laser-scanner-pro",
    category: "scanners",
    summary: "Scanning solution for detailed site capture, engineering documentation, and 3D modeling workflows.",
    description:
      "Laser scanning solutions help engineering and construction teams capture precise site data for documentation, design, and digital twin workflows.",
    images: ["/images/uav/scanners/Laser Scanner Pro/laser scanner.png"],
    features: ["Accurate site capture", "Point cloud output", "Engineering documentation", "Reality capture support", "BIM workflow compatibility"],
    specifications: {
      "Product type": "Scanner",
      "Use case": "Reality capture and point cloud workflows",
      "Recommended for": "Engineering and construction teams"
    },
    relatedSlugs: ["bim-reality-capture-service", "pix4dmapper", "two-nav-roc"],
    seoTitle: "3D Laser Scanners Sri Lanka",
    seoDescription: "3D laser scanner and reality capture solutions in Sri Lanka for engineering, construction, and BIM workflows."
  },
  {
    title: "XGrids Lixel L2 Pro",
    slug: "xgrids-lixel-l2-pro",
    category: "scanners",
    summary: "Professional-grade LiDAR scanner for high-precision 3D mapping and surveying applications.",
    description:
      "XGrids Lixel L2 Pro is a professional LiDAR scanner designed for high-precision 3D mapping and surveying. With advanced point cloud capture capabilities and long-range performance, the L2 Pro is ideal for topographic surveys, infrastructure inspection, and detailed reality capture projects requiring survey-grade accuracy.",
    images: ["/images/uav/scanners/xgrids lixel l2 pro/1731926243837.jpg", "/images/uav/scanners/xgrids lixel l2 pro/1731926243949.jpg"],
    features: ["High-precision LiDAR", "Long-range scanning", "Professional-grade accuracy", "Survey workflows", "Reality capture", "Advanced point cloud"],
    specifications: {
      "Product type": "LiDAR Scanner",
      "Use case": "High-precision mapping and surveying",
      "Accuracy": "Survey-grade precision",
      "Recommended for": "Professional surveyors and mapping teams"
    },
    relatedSlugs: ["dji-matrice-400", "terrascan", "pix4dmapper"],
    seoTitle: "XGrids Lixel L2 Pro Scanner Sri Lanka",
    seoDescription: "XGrids Lixel L2 Pro professional LiDAR scanner solutions in Sri Lanka for high-precision 3D mapping and surveying."
  },
  {
    title: "XGrids PortalCam",
    slug: "xgrids-portalcam",
    category: "scanners",
    summary: "Portal scanning system for rapid capture of building entrances and architectural features.",
    description:
      "XGrids PortalCam is a specialized scanning system designed for rapid capture of building portals, entrances, and architectural features. The system provides efficient scanning of doorways, windows, and structural openings, making it ideal for as-built documentation, renovation planning, and architectural preservation projects.",
    images: ["/images/uav/scanners/xgrids portalcam/PortalCam_1.jpg.jpg", "/images/uav/scanners/xgrids portalcam/PortalCam_5.png.png", "/images/uav/scanners/xgrids portalcam/PortalCam_Aussehen.png.png"],
    features: ["Portal scanning", "Rapid capture", "Architectural documentation", "Renovation planning", "Building entrances", "Efficient workflows"],
    specifications: {
      "Product type": "Specialized Scanner",
      "Use case": "Portal and architectural feature scanning",
      "Specialization": "Building entrances and portals",
      "Recommended for": "Architects and renovation teams"
    },
    relatedSlugs: ["faro-focuss-350", "scan-to-bim-service", "3d-modeling-service"],
    seoTitle: "XGrids PortalCam Scanner Sri Lanka",
    seoDescription: "XGrids PortalCam specialized scanning system solutions in Sri Lanka for portal and architectural feature capture."
  },
  {
    title: "XGrids Lixel K2",
    slug: "xgrids-lixel-k2",
    category: "scanners",
    summary: "Compact LiDAR scanner for mobile mapping and indoor 3D capture applications.",
    description:
      "XGrids Lixel K2 is a compact LiDAR scanner optimized for mobile mapping and indoor 3D capture. With a portable design and efficient scanning capabilities, the K2 is ideal for indoor mapping, facility documentation, and mobile applications where maneuverability and ease of use are essential.",
    images: ["/images/uav/scanners/xgrids lixel k2/k2_product_shot_1_720x720_crop_center.png.png", "/images/uav/scanners/xgrids lixel k2/k2_product_shot_2_720x720_crop_center.png.png", "/images/uav/scanners/xgrids lixel k2/xgrids_k2_product_5_720x720_crop_center.png.png"],
    features: ["Compact design", "Mobile mapping", "Indoor capture", "Portable operation", "Facility documentation", "Efficient scanning"],
    specifications: {
      "Product type": "Compact LiDAR Scanner",
      "Use case": "Mobile mapping and indoor capture",
      "Form factor": "Portable and compact",
      "Recommended for": "Facility managers and indoor mapping teams"
    },
    relatedSlugs: ["slam-hand-scanner", "scan-to-bim-service", "terrascan"],
    seoTitle: "XGrids Lixel K2 Scanner Sri Lanka",
    seoDescription: "XGrids Lixel K2 compact LiDAR scanner solutions in Sri Lanka for mobile mapping and indoor 3D capture."
  },
  {
    title: "XGrids Lixel Kity K1",
    slug: "xgrids-lixel-kity-k1",
    category: "scanners",
    summary: "Entry-level LiDAR scanner for basic 3D mapping and documentation applications.",
    description:
      "XGrids Lixel Kity K1 is an entry-level LiDAR scanner designed for basic 3D mapping and documentation applications. With user-friendly operation and essential scanning capabilities, the K1 provides an accessible solution for teams starting with 3D capture technology for documentation and basic mapping projects.",
    images: ["/images/uav/scanners/xgrids lixel kity k1/SolutionK1.png", "/images/uav/scanners/xgrids lixel kity k1/thumbnail.jpg", "/images/uav/scanners/xgrids lixel kity k1/xgrids-xgrids-lixel-kity-k1-1189705669.png"],
    features: ["Entry-level design", "Basic 3D mapping", "User-friendly operation", "Documentation workflows", "Accessible technology", "Essential scanning"],
    specifications: {
      "Product type": "Entry-level LiDAR Scanner",
      "Use case": "Basic 3D mapping and documentation",
      "Level": "Entry-level accessibility",
      "Recommended for": "Teams new to 3D capture technology"
    },
    relatedSlugs: ["xgrids-lixel-k2", "pix4dmapper", "3d-modeling-service"],
    seoTitle: "XGrids Lixel Kity K1 Scanner Sri Lanka",
    seoDescription: "XGrids Lixel Kity K1 entry-level LiDAR scanner solutions in Sri Lanka for basic 3D mapping and documentation."
  },
  {
    title: "LixelStudio",
    slug: "lixelstudio",
    category: "scanners",
    summary: "Software suite for processing and analyzing LiDAR data from XGrids scanners.",
    description:
      "LixelStudio is a comprehensive software suite for processing and analyzing LiDAR data captured with XGrids scanners. The software provides tools for point cloud processing, 3D model generation, data analysis, and export to various formats, enabling complete workflows from data capture to final deliverables.",
    images: ["/images/uav/scanners/lixelstudio/Lixel-Studio-3.5.1.0-Version_0.jpg.jpg"],
    features: ["Point cloud processing", "3D model generation", "Data analysis", "Format export", "Complete workflows", "XGrids integration"],
    specifications: {
      "Product type": "Software",
      "Use case": "LiDAR data processing and analysis",
      "Compatibility": "XGrids scanner integration",
      "Recommended for": "LiDAR processing professionals"
    },
    relatedSlugs: ["xgrids-lixel-l2-pro", "terrascan", "pix4dmapper"],
    seoTitle: "LixelStudio Software Sri Lanka",
    seoDescription: "LixelStudio software suite solutions in Sri Lanka for processing and analyzing XGrids LiDAR data."
  },
  {
    title: "UAV Mapping Service",
    slug: "uav-mapping-service",
    category: "uav-services",
    summary: "Professional UAV mapping and inspection service for businesses, projects, and public-sector operations.",
    description:
      "Our UAV mapping service supports project teams with professional data capture, inspection, aerial imagery, and survey-ready deliverables.",
    images: ["/images/uav/banner-services.jpg"],
    features: ["Aerial mapping", "Inspection support", "Survey deliverables", "Data processing", "Professional field operation"],
    specifications: {
      "Product type": "Service",
      "Use case": "Mapping, inspection, survey support",
      "Recommended for": "Enterprise, engineering, and government projects"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "pix4dmapper", "two-nav-roc"],
    seoTitle: "UAV Mapping Services Sri Lanka",
    seoDescription: "Professional UAV mapping and drone inspection services in Sri Lanka for enterprise, engineering, and government projects."
  },
  {
    title: "DJI Matrice 400",
    slug: "dji-matrice-400",
    category: "drones",
    summary: "Heavy-lift enterprise drone platform for demanding industrial inspection, mapping, and public safety missions.",
    description:
      "DJI Matrice 400 is a robust enterprise drone designed for heavy-lift operations and demanding industrial missions. With enhanced payload capacity, extended flight time, and advanced obstacle sensing, the Matrice 400 excels in infrastructure inspection, large-scale mapping, and emergency response scenarios where reliability and performance are critical.",
    images: ["/images/uav/drone products/matrice 400/DJI-Matrice-400-Side-and-Top-View-_No-Payload_500x.jpg", "/images/uav/drone products/matrice 400/DJI-Matrice-400-Top-View-Folded_500x.jpg", "/images/uav/drone products/matrice 400/DJI-Matrice-400-Top-View-_No-Payload_500x.jpg"],
    features: ["Heavy-lift capability", "Extended flight time", "Advanced obstacle sensing", "Multi-payload support", "Industrial-grade reliability"],
    specifications: {
      "Use case": "Industrial inspection, large-scale mapping, public safety",
      "Payload capacity": "Enhanced heavy-lift support",
      "Flight time": "Extended operational duration",
      "Recommended for": "Industrial teams and emergency responders"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid deployment",
      droneAutonomy: "Very high",
      protectionClass: "Industrial-grade",
      temperatureRange: "Wide operating range",
      sealingSystem: "Weather-resistant design",
      baseAndMounting: "Portable field deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Supported",
      mobileDeployment: "Supported",
      antiVibrationSystem: "Payload stabilization",
      obstacleDetectionSensors: "Multi-direction sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Enhanced thermal design"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "zenmuse-l3", "pix4dmapper"],
    seoTitle: "DJI Matrice 400 Sri Lanka",
    seoDescription: "DJI Matrice 400 heavy-lift enterprise drone solutions in Sri Lanka for industrial inspection, mapping, and public safety operations."
  },
  {
    title: "DJI Matrice 4E",
    slug: "dji-matrice-4e",
    category: "drones",
    summary: "Enterprise drone platform with enhanced photogrammetry capabilities for high-precision mapping and surveying.",
    description:
      "DJI Matrice 4E is optimized for photogrammetry and mapping applications, featuring advanced camera systems and precise positioning for survey-grade data collection. Ideal for construction monitoring, topographic surveys, and infrastructure inspection where high-resolution imagery and accuracy are essential.",
    images: ["/images/uav/drone products/matrice 4 series/0d094c6c5fc4345015a60fd6315a8a2f.png", "/images/uav/drone products/matrice 4 series/0da7a1c2c07e8cc3f2b6524049ced98a.png", "/images/uav/drone products/matrice 4 series/c72f0e3ee037a2dbea5516a6c0f61c51.png"],
    features: ["Photogrammetry optimized", "High-resolution imaging", "RTK positioning", "Survey-grade accuracy", "Mapping workflows"],
    specifications: {
      "Use case": "Photogrammetry, mapping, surveying",
      "Camera system": "High-resolution mapping camera",
      "Positioning": "RTK supported",
      "Recommended for": "Surveyors and mapping professionals"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid field launch",
      droneAutonomy: "High",
      protectionClass: "Professional outdoor operation",
      temperatureRange: "Standard enterprise range",
      sealingSystem: "Weather-resistant body",
      baseAndMounting: "Portable deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Supported",
      mobileDeployment: "Highly suitable",
      antiVibrationSystem: "Camera stabilization",
      obstacleDetectionSensors: "Omnidirectional sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Professional thermal design"
    },
    relatedSlugs: ["dji-matrice-4t", "zenmuse-p1", "pix4dmapper"],
    seoTitle: "DJI Matrice 4E Sri Lanka",
    seoDescription: "DJI Matrice 4E photogrammetry drone solutions in Sri Lanka for high-precision mapping and surveying applications."
  },
  {
    title: "DJI Matrice 4T",
    slug: "dji-matrice-4t",
    category: "drones",
    summary: "Enterprise drone with thermal imaging capabilities for inspection, search and rescue, and public safety operations.",
    description:
      "DJI Matrice 4T combines enterprise drone performance with advanced thermal imaging, making it ideal for electrical inspection, building diagnostics, search and rescue, and public safety missions. The thermal camera detects heat signatures while the visible camera provides detailed context, enabling comprehensive situational awareness.",
    images: ["/images/uav/drone products/matrice 4 series/c72f0e3ee037a2dbea5516a6c0f61c51.png", "/images/uav/drone products/matrice 4 series/0d094c6c5fc4345015a60fd6315a8a2f.png", "/images/uav/drone products/matrice 4 series/0da7a1c2c07e8cc3f2b6524049ced98a.png"],
    features: ["Thermal imaging", "Dual camera system", "Inspection workflows", "Search and rescue ready", "Public safety optimized"],
    specifications: {
      "Use case": "Thermal inspection, search and rescue, public safety",
      "Camera system": "Thermal + visible dual camera",
      "Thermal resolution": "High-resolution thermal sensor",
      "Recommended for": "Inspectors and emergency responders"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid field launch",
      droneAutonomy: "High",
      protectionClass: "Professional outdoor operation",
      temperatureRange: "Standard enterprise range",
      sealingSystem: "Weather-resistant body",
      baseAndMounting: "Portable deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Supported",
      mobileDeployment: "Highly suitable",
      antiVibrationSystem: "Camera stabilization",
      obstacleDetectionSensors: "Omnidirectional sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Professional thermal design"
    },
    relatedSlugs: ["dji-matrice-4e", "zenmuse-h30t", "pix4dmapper"],
    seoTitle: "DJI Matrice 4T Sri Lanka",
    seoDescription: "DJI Matrice 4T thermal imaging drone solutions in Sri Lanka for inspection, search and rescue, and public safety operations."
  },
  {
    title: "DJI Matrice 4DE",
    slug: "dji-matrice-4de",
    category: "drones",
    summary: "Enterprise drone with enhanced photogrammetry and extended range for large-area mapping and surveying operations.",
    description:
      "DJI Matrice 4DE builds upon the Matrice 4E platform with extended flight range and enhanced photogrammetry capabilities, making it ideal for large-area mapping projects, corridor surveys, and extensive topographic mapping where extended coverage and efficiency are critical.",
    images: [
  "/images/uav/drone products/matrice 4de/dji_launches_matrice_4_series.webp",
  "/images/uav/drone products/matrice 4de/matrice_4_t_and_m4e.webp",
],
    features: ["Extended range", "Enhanced photogrammetry", "Large-area coverage", "Survey-grade accuracy", "Efficient mapping workflows"],
    specifications: {
      "Use case": "Large-area mapping, corridor surveys, topographic mapping",
      "Flight range": "Extended operational range",
      "Camera system": "High-resolution mapping camera",
      "Recommended for": "Surveyors and large project teams"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid field launch",
      droneAutonomy: "Very high",
      protectionClass: "Professional outdoor operation",
      temperatureRange: "Extended operating range",
      sealingSystem: "Weather-resistant body",
      baseAndMounting: "Portable deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Supported",
      mobileDeployment: "Highly suitable",
      antiVibrationSystem: "Camera stabilization",
      obstacleDetectionSensors: "Omnidirectional sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Professional thermal design"
    },
    relatedSlugs: ["dji-matrice-4dt", "zenmuse-p1", "pix4dmapper"],
    seoTitle: "DJI Matrice 4DE Sri Lanka",
    seoDescription: "DJI Matrice 4DE extended-range drone solutions in Sri Lanka for large-area mapping and surveying operations."
  },
  {
    title: "DJI Matrice 4 TD",
    slug: "dji-matrice-4dt",
    category: "drones",
    summary: "Enterprise drone with thermal imaging and extended range for large-area inspection and public safety operations.",
    description:
      "DJI Matrice 4 TD combines extended flight range with advanced thermal imaging, making it ideal for large-area infrastructure inspection, pipeline monitoring, and extensive search and rescue operations where coverage and thermal detection are both critical requirements.",
    images: ["/images/uav/drone products/matrice 4d series/16x9_Blog_Header_-M4TD_IP.webp"],
    features: ["Extended range", "Thermal imaging", "Large-area inspection", "Pipeline monitoring", "Search and rescue optimized"],
    specifications: {
      "Use case": "Large-area inspection, pipeline monitoring, search and rescue",
      "Flight range": "Extended operational range",
      "Camera system": "Thermal + visible dual camera",
      "Recommended for": "Inspectors and emergency responders"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid field launch",
      droneAutonomy: "Very high",
      protectionClass: "Professional outdoor operation",
      temperatureRange: "Extended operating range",
      sealingSystem: "Weather-resistant body",
      baseAndMounting: "Portable deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Supported",
      mobileDeployment: "Highly suitable",
      antiVibrationSystem: "Camera stabilization",
      obstacleDetectionSensors: "Omnidirectional sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Professional thermal design"
    },
    relatedSlugs: ["dji-matrice-4de", "zenmuse-h30t", "pix4dmapper"],
    seoTitle: "DJI Matrice 4DT Sri Lanka",
    seoDescription: "DJI Matrice 4DT extended-range thermal drone solutions in Sri Lanka for large-area inspection and public safety operations."
  },
  {
    title: "DJI Mavic 3M",
    slug: "dji-mavic-3m",
    category: "drones",
    summary: "Multispectral enterprise drone for agriculture, environmental monitoring, and precision agriculture applications.",
    description:
      "DJI Mavic 3M is a multispectral imaging drone designed for agriculture and environmental monitoring. With specialized sensors that capture data across multiple spectral bands, it enables crop health analysis, vegetation mapping, and precision agriculture applications that go beyond what standard RGB cameras can provide.",
    images: ["/images/uav/drone products/mavic 3m/mavic 3m.jpg", "/images/uav/drone products/mavic 3m/unnamed-2-600x600.png"],
    features: ["Multispectral imaging", "Crop health analysis", "Precision agriculture", "Environmental monitoring", "Compact enterprise design"],
    specifications: {
      "Use case": "Agriculture, environmental monitoring, vegetation mapping",
      "Camera system": "Multispectral sensor array",
      "Spectral bands": "Multiple spectral channels",
      "Recommended for": "Agricultural professionals and environmental researchers"
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
    relatedSlugs: ["dji-matrice-350-rtk", "pix4d-fields", "two-nav-roc"],
    seoTitle: "DJI Mavic 3M Sri Lanka",
    seoDescription: "DJI Mavic 3M multispectral drone solutions in Sri Lanka for agriculture, environmental monitoring, and precision agriculture applications."
  },
  {
    title: "DJI Agras T55",
    slug: "dji-agras-t55",
    category: "drones",
    summary: "Heavy-duty agricultural drone for large-scale spraying, spreading, and crop protection operations.",
    description:
      "DJI Agras T55 is a heavy-duty agricultural drone designed for large-scale spraying and spreading operations. With enhanced payload capacity and extended flight time, the T55 is ideal for commercial farming, orchard management, and large-area crop protection where efficiency and coverage are critical.",
    images: ["/images/uav/drone products/agras t55/agras t55 pt2.png", "/images/uav/drone products/agras t55/tagras  t55.jpg"],
    features: ["Heavy payload capacity", "Large-area spraying", "Spreading capability", "Extended flight time", "Commercial farming optimized"],
    specifications: {
      "Use case": "Large-scale spraying, spreading, crop protection",
      "Payload capacity": "Enhanced liquid and solid payload",
      "Operation area": "Large-area coverage",
      "Recommended for": "Commercial farmers and agricultural service providers"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid field launch",
      droneAutonomy: "High",
      protectionClass: "Agricultural-grade",
      temperatureRange: "Wide operating range",
      sealingSystem: "Weather-resistant design",
      baseAndMounting: "Portable field deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Optional RTK support",
      mobileDeployment: "Supported",
      antiVibrationSystem: "Payload stabilization",
      obstacleDetectionSensors: "Agricultural sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Enhanced thermal design"
    },
    relatedSlugs: ["dji-agras-t100", "pix4d-fields", "two-nav-roc"],
    seoTitle: "DJI Agras T55 Sri Lanka",
    seoDescription: "DJI Agras T55 agricultural drone solutions in Sri Lanka for large-scale spraying, spreading, and crop protection operations."
  },
  {
    title: "DJI Agras T100",
    slug: "dji-agras-t100",
    category: "drones",
    summary: "Ultra-heavy agricultural drone for maximum commercial spraying and spreading operations.",
    description:
      "DJI Agras T100 represents the pinnacle of agricultural drone capability with ultra-heavy payload capacity for maximum spraying and spreading performance. Designed for the most demanding commercial agricultural operations, the T100 delivers unmatched coverage and efficiency for large-scale farming enterprises.",
    images: ["/images/uav/drone products/agras t100/agras_t100_render_720x720_crop_center.png.png", "/images/uav/drone products/agras t100/nuyWayAg2025-T100_General-3512_-_Square.jpg", "/images/uav/drone products/agras t100/nuyWayAg2025-T100_General-3701_-_Square.jpg"],
    features: ["Ultra-heavy payload", "Maximum coverage", "Commercial spraying", "Heavy spreading", "Enterprise farming"],
    specifications: {
      "Use case": "Maximum commercial spraying and spreading",
      "Payload capacity": "Ultra-heavy liquid and solid payload",
      "Operation area": "Maximum coverage capability",
      "Recommended for": "Large commercial farming enterprises"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid field launch",
      droneAutonomy: "Very high",
      protectionClass: "Industrial-grade",
      temperatureRange: "Wide operating range",
      sealingSystem: "Weather-resistant design",
      baseAndMounting: "Portable field deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Optional RTK support",
      mobileDeployment: "Supported",
      antiVibrationSystem: "Payload stabilization",
      obstacleDetectionSensors: "Agricultural sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Enhanced thermal design"
    },
    relatedSlugs: ["dji-agras-t55", "pix4d-fields", "two-nav-roc"],
    seoTitle: "DJI Agras T100 Sri Lanka",
    seoDescription: "DJI Agras T100 ultra-heavy agricultural drone solutions in Sri Lanka for maximum commercial spraying and spreading operations."
  },
  {
    title: "DJI Agras T70P",
    slug: "dji-agras-t70p",
    category: "drones",
    summary: "Professional agricultural drone for precision spraying and spreading with advanced flight control.",
    description:
      "DJI Agras T70P is a professional agricultural drone designed for precision spraying and spreading operations. With advanced flight control systems and precise payload management, the T70P delivers accurate application for orchards, vineyards, and precision agriculture where targeted treatment is essential.",
    images: ["/images/uav/drone products/agras t70p/Ag_T70P2.jpg", "/images/uav/drone products/agras t70p/Ag_T70P4.jpg", "/images/uav/drone products/agras t70p/Ag_t70P-Controller_crop.jpg"],
    features: ["Precision spraying", "Advanced flight control", "Orchard optimized", "Targeted application", "Professional agriculture"],
    specifications: {
      "Use case": "Precision spraying, orchard management, targeted application",
      "Payload capacity": "Professional-grade payload",
      "Flight control": "Advanced precision systems",
      "Recommended for": "Orchard managers and precision farmers"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid field launch",
      droneAutonomy: "High",
      protectionClass: "Professional-grade",
      temperatureRange: "Wide operating range",
      sealingSystem: "Weather-resistant design",
      baseAndMounting: "Portable field deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Optional RTK support",
      mobileDeployment: "Supported",
      antiVibrationSystem: "Payload stabilization",
      obstacleDetectionSensors: "Agricultural sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Enhanced thermal design"
    },
    relatedSlugs: ["dji-agras-t25p", "pix4d-fields", "two-nav-roc"],
    seoTitle: "DJI Agras T70P Sri Lanka",
    seoDescription: "DJI Agras T70P professional agricultural drone solutions in Sri Lanka for precision spraying and orchard management."
  },
  {
    title: "DJI Agras T25P",
    slug: "dji-agras-t25p",
    category: "drones",
    summary: "Compact agricultural drone for small to medium-scale spraying and spreading operations.",
    description:
      "DJI Agras T25P is a compact agricultural drone designed for small to medium-scale farming operations. With efficient spraying and spreading capabilities in a portable form factor, the T25P is ideal for smaller farms, specialty crops, and operations where maneuverability and ease of transport are important.",
    images: ["/images/uav/drone products/agras t25p/415 (1).png", "/images/uav/drone products/agras t25p/415.png", "/images/uav/drone products/agras t25p/416.png"],
    features: ["Compact design", "Efficient spraying", "Portable operation", "Small farm optimized", "Specialty crop support"],
    specifications: {
      "Use case": "Small to medium-scale spraying and spreading",
      "Payload capacity": "Efficient medium payload",
      "Form factor": "Compact and portable",
      "Recommended for": "Small farmers and specialty crop producers"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid field launch",
      droneAutonomy: "High",
      protectionClass: "Professional-grade",
      temperatureRange: "Standard operating range",
      sealingSystem: "Weather-resistant design",
      baseAndMounting: "Highly portable deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Optional RTK support",
      mobileDeployment: "Highly suitable",
      antiVibrationSystem: "Payload stabilization",
      obstacleDetectionSensors: "Agricultural sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Standard thermal design"
    },
    relatedSlugs: ["dji-agras-t70p", "pix4d-fields", "two-nav-roc"],
    seoTitle: "DJI Agras T25P Sri Lanka",
    seoDescription: "DJI Agras T25P compact agricultural drone solutions in Sri Lanka for small to medium-scale farming operations."
  },
  {
    title: "DJI FlyCart 100",
    slug: "dji-flycart-100",
    category: "drones",
    summary: "Heavy-lift delivery drone for cargo transport and logistics operations.",
    description:
      "DJI FlyCart 100 is a heavy-lift delivery drone designed for cargo transport and logistics operations. With substantial payload capacity and extended range, the FlyCart 100 enables efficient delivery of supplies, equipment, and materials to remote or hard-to-reach locations, revolutionizing last-mile logistics and emergency supply delivery.",
    images: ["/images/uav/drone products/fly cart 100/BI5A3198-2.jpg", "/images/uav/drone products/fly cart 100/DJI-Flycart-100-01-700x700.webp", "/images/uav/drone products/fly cart 100/Screenshot-2025-12-05-at-10.29.50-740x498.jpg"],
    features: ["Heavy-lift capacity", "Extended range", "Cargo delivery", "Logistics optimized", "Emergency supply transport"],
    specifications: {
      "Use case": "Cargo delivery, logistics, emergency supply transport",
      "Payload capacity": "Heavy-lift cargo capability",
      "Flight range": "Extended delivery range",
      "Recommended for": "Logistics companies and emergency responders"
    },
    comparison: {
      rechargeTime: "Battery-dependent",
      takeOffTime: "Rapid deployment",
      droneAutonomy: "High",
      protectionClass: "Industrial-grade",
      temperatureRange: "Wide operating range",
      sealingSystem: "Weather-resistant design",
      baseAndMounting: "Portable field deployment",
      preciseLanding: "Supported",
      rtkRelayCompatibility: "Optional RTK support",
      mobileDeployment: "Supported",
      antiVibrationSystem: "Payload stabilization",
      obstacleDetectionSensors: "Multi-direction sensing",
      securityAndGeocaging: "Supported",
      thermalManagement: "Enhanced thermal design"
    },
    relatedSlugs: ["dji-dock-3", "dji-matrice-350-rtk", "two-nav-roc"],
    seoTitle: "DJI FlyCart 100 Sri Lanka",
    seoDescription: "DJI FlyCart 100 heavy-lift delivery drone solutions in Sri Lanka for cargo transport and logistics operations."
  },
  {
    title: "Zenmuse L3",
    slug: "zenmuse-l3",
    category: "payloads",
    summary: "Advanced LiDAR sensor for high-density point cloud capture and vegetation penetration.",
    description:
      "Zenmuse L3 is a high-performance LiDAR sensor designed for enterprise drones, capable of capturing dense point clouds that penetrate vegetation to reveal accurate ground elevation. Ideal for topographic surveying, forestry management, and infrastructure inspection where traditional photogrammetry struggles with canopy coverage.",
    images: ["/images/uav/payloads/zenmuse l3/dji-dji-zenmuse-l3-1202704069.jpg", "/images/uav/payloads/zenmuse l3/dji-dji-zenmuse-l3-1202704070.jpg", "/images/uav/payloads/zenmuse l3/dji-dji-zenmuse-l3-1202704072.jpg"],
    features: ["High-density LiDAR", "Vegetation penetration", "RTK integration", "Survey-grade accuracy", "Multi-return capability"],
    specifications: {
      "Product type": "LiDAR Sensor",
      "Use case": "Surveying, mapping, forestry",
      "Point density": "High-density capture",
      "Recommended for": "Surveyors and mapping professionals"
    },
    relatedSlugs: ["dji-matrice-400", "terrascan", "pix4dmapper"],
    seoTitle: "Zenmuse L3 LiDAR Sensor Sri Lanka",
    seoDescription: "Zenmuse L3 advanced LiDAR sensor solutions in Sri Lanka for high-density point cloud capture and vegetation penetration."
  },
  {
    title: "Zenmuse H30",
    slug: "zenmuse-h30",
    category: "payloads",
    summary: "High-performance visible camera for detailed inspection and mapping applications.",
    description:
      "Zenmuse H30 is a professional visible camera payload designed for detailed inspection and mapping. With high-resolution imaging and advanced zoom capabilities, the H30 enables detailed infrastructure inspection, construction monitoring, and precision mapping where visual clarity and detail are essential.",
    images: ["/images/uav/payloads/zenmuse h30 series/zenmuse h30.jpg", "/images/uav/payloads/zenmuse h30 series/DJI-Zenmuse-H30-Quad-sensor-with-wide_-zoom_-laser-rangefinder_-and-NIR-aux-light-front-view_1000x.jpg", "/images/uav/payloads/zenmuse h30 series/DJI-Zenmuse-H30-Quad-sensor-with-wide_-zoom_-laser-rangefinder_-and-NIR-aux-light-Top-3-4-front-view_1000x.jpg"],
    features: ["High-resolution imaging", "Advanced zoom", "Inspection optimized", "Mapping workflows", "Professional grade"],
    specifications: {
      "Product type": "Visible Camera",
      "Use case": "Inspection, mapping, monitoring",
      "Resolution": "High-resolution sensor",
      "Recommended for": "Inspectors and mapping professionals"
    },
    relatedSlugs: ["dji-matrice-4e", "two-nav-terra", "pix4dmapper"],
    seoTitle: "Zenmuse H30 Camera Sri Lanka",
    seoDescription: "Zenmuse H30 high-performance camera solutions in Sri Lanka for detailed inspection and mapping applications."
  },
  {
    title: "Zenmuse H30T",
    slug: "zenmuse-h30t",
    category: "payloads",
    summary: "Thermal imaging camera with visible sensor for comprehensive inspection and search operations.",
    description:
      "Zenmuse H30T combines thermal imaging with a visible camera in one payload, providing comprehensive situational awareness for electrical inspection, building diagnostics, search and rescue, and public safety operations. The thermal sensor detects heat signatures while the visible camera provides detailed context for complete analysis.",
    images: ["/images/uav/payloads/zenmuse h30 series/zenmuse h30.jpg", "/images/uav/payloads/zenmuse h30 series/DJI-Zenmuse-H30-Quad-sensor-with-wide_-zoom_-laser-rangefinder_-and-NIR-aux-light-3-4-back-view_1000x.jpg"],
    features: ["Thermal imaging", "Dual camera system", "Heat signature detection", "Inspection workflows", "Search and rescue"],
    specifications: {
      "Product type": "Thermal Camera",
      "Use case": "Thermal inspection, search and rescue, public safety",
      "Thermal resolution": "High-resolution thermal sensor",
      "Recommended for": "Inspectors and emergency responders"
    },
    relatedSlugs: ["dji-matrice-4t", "two-nav-terra", "pix4dmapper"],
    seoTitle: "Zenmuse H30T Thermal Camera Sri Lanka",
    seoDescription: "Zenmuse H30T thermal imaging camera solutions in Sri Lanka for comprehensive inspection and search operations."
  },
  {
    title: "Zenmuse P1",
    slug: "zenmuse-p1",
    category: "payloads",
    summary: "High-resolution photogrammetry camera for precision mapping and 3D modeling.",
    description:
      "Zenmuse P1 is a professional photogrammetry camera optimized for high-precision mapping and 3D modeling. With a large-format sensor and mechanical shutter, the P1 delivers survey-grade imagery for orthomosaic mapping, digital elevation models, and detailed 3D reconstruction in construction, surveying, and engineering applications.",
    images: ["/images/uav/payloads/zenmuse p1/836dface656447c3e7dbbd67fe8af55c.png", "/images/uav/payloads/zenmuse p1/fef76936fd00a2e4a5a10b79994f4d1a.png"],
    features: ["Large-format sensor", "Mechanical shutter", "Photogrammetry optimized", "Survey-grade accuracy", "3D modeling"],
    specifications: {
      "Product type": "Photogrammetry Camera",
      "Use case": "Mapping, surveying, 3D modeling",
      "Sensor format": "Large-format sensor",
      "Recommended for": "Surveyors and mapping professionals"
    },
    relatedSlugs: ["dji-matrice-4e", "pix4dmapper", "terrascan"],
    seoTitle: "Zenmuse P1 Photogrammetry Camera Sri Lanka",
    seoDescription: "Zenmuse P1 high-resolution photogrammetry camera solutions in Sri Lanka for precision mapping and 3D modeling."
  },
  {
    title: "Zenmuse S1",
    slug: "zenmuse-s1",
    category: "payloads",
    summary: "Specialized sensor for specific industrial and inspection applications.",
    description:
      "Zenmuse S1 is a specialized sensor payload designed for specific industrial and inspection applications. With tailored sensing capabilities, the S1 addresses unique measurement and inspection requirements across various industries where standard camera solutions may not meet specific technical needs.",
    images: ["/images/uav/payloads/zenmuse s1/DJI-Zenmuse-S1-Spotlight-Front-3-4-View_1000x.jpg", "/images/uav/payloads/zenmuse s1/DJI-Zenmuse-S1-Spotlight-Top-3-4-Front-View_jpg_1000x.jpg", "/images/uav/payloads/zenmuse s1/DJI-Zenmuse-S1-and-V1-Payloads-mounted-on-a-Matrice-350-RTK_1000x.jpg"],
    features: ["Specialized sensing", "Industrial applications", "Custom measurement", "Inspection optimized", "Professional grade"],
    specifications: {
      "Product type": "Specialized Sensor",
      "Use case": "Industrial inspection, specialized measurement",
      "Sensing capability": "Application-specific",
      "Recommended for": "Industrial inspection teams"
    },
    relatedSlugs: ["dji-matrice-400", "zenmuse-l2", "pix4dmapper"],
    seoTitle: "Zenmuse S1 Sensor Sri Lanka",
    seoDescription: "Zenmuse S1 specialized sensor solutions in Sri Lanka for industrial inspection and specialized applications."
  },
  {
    title: "Zenmuse V1",
    slug: "zenmuse-v1",
    category: "payloads",
    summary: "Versatile camera payload for general inspection and documentation applications.",
    description:
      "Zenmuse V1 is a versatile camera payload designed for general inspection and documentation applications. With balanced performance and flexibility, the V1 supports a wide range of inspection tasks, documentation workflows, and general imaging needs where reliability and consistent image quality are important.",
    images: ["/images/uav/payloads/zenmuse v1/DJI-Zenmuse-V1-Speaker-Top-View_1000x.jpg", "/images/uav/payloads/zenmuse v1/DJI-Zenmuse-V1-Speaker-Bottom-View_1000x.jpg", "/images/uav/payloads/zenmuse v1/DJI-Zenmuse-V1-Speaker-Back-View_1000x.jpg"],
    features: ["Versatile imaging", "General inspection", "Documentation workflows", "Reliable performance", "Professional grade"],
    specifications: {
      "Product type": "Camera Payload",
      "Use case": "General inspection, documentation",
      "Imaging capability": "Versatile performance",
      "Recommended for": "General inspection teams"
    },
    relatedSlugs: ["dji-matrice-350-rtk", "dji-terra", "pix4dmapper"],
    seoTitle: "Zenmuse V1 Camera Sri Lanka",
    seoDescription: "Zenmuse V1 versatile camera payload solutions in Sri Lanka for general inspection and documentation applications."
  },
  {
    title: "DJI AP100 Parachute",
    slug: "dji-ap100-parachute",
    category: "accessories",
    summary: "Emergency parachute system for enhanced drone safety and regulatory compliance.",
    description:
      "DJI AP100 Parachute is an emergency recovery system designed to enhance drone safety and meet regulatory requirements for operations over people or in restricted airspace. The parachute system deploys automatically in emergency situations, providing controlled descent and protecting both the drone and people on the ground.",
    images: ["/images/uav/accessories/ap100 parachute/ap100_blog_cover.png", "/images/uav/accessories/ap100 parachute/ap100_blog_2.webp", "/images/uav/accessories/ap100 parachute/ap100_blog_3.webp"],
    features: ["Emergency deployment", "Regulatory compliance", "Controlled descent", "Enhanced safety", "Automatic activation"],
    specifications: {
      "Product type": "Safety Equipment",
      "Use case": "Emergency recovery, regulatory compliance",
      "Deployment": "Automatic emergency activation",
      "Recommended for": "Commercial drone operators"
    },
    relatedSlugs: ["dji-matrice-400", "dji-mavic-3-enterprise", "dji-dock-3"],
    seoTitle: "DJI AP100 Parachute Sri Lanka",
    seoDescription: "DJI AP100 parachute system solutions in Sri Lanka for enhanced drone safety and regulatory compliance."
  },
  {
    title: "DJI O4 Ground Station",
    slug: "dji-o4-ground-station",
    category: "accessories",
    summary: "Advanced ground station for mission planning, real-time monitoring, and fleet management.",
    description:
      "DJI O4 Ground Station is a professional field command center for drone operations, providing advanced mission planning capabilities, real-time monitoring, and fleet management functionality. The ground station enables operators to plan complex missions, monitor multiple drones simultaneously, and maintain situational awareness during critical operations.",
    images: ["/images/uav/accessories/o4 ground station/dji-o4-ground-station.jpg", "/images/uav/accessories/o4 ground station/dji-o4-ground-station (1).jpg", "/images/uav/accessories/o4 ground station/dji-o4-ground-station (3).jpg"],
    features: ["Mission planning", "Real-time monitoring", "Fleet management", "Advanced control", "Field operations"],
    specifications: {
      "Product type": "Ground Station",
      "Use case": "Mission planning, fleet management, monitoring",
      "Control capability": "Advanced mission control",
      "Recommended for": "Professional drone operators"
    },
    relatedSlugs: ["dji-matrice-400", "dji-flighthub-2", "dji-dock-3"],
    seoTitle: "DJI O4 Ground Station Sri Lanka",
    seoDescription: "DJI O4 ground station solutions in Sri Lanka for mission planning and fleet management."
  },
  {
    title: "DJI FlightHub 2 AIO",
    slug: "dji-flighthub-2-aio",
    category: "accessories",
    summary: "All-in-one fleet management and data processing system for enterprise drone operations.",
    description:
      "DJI FlightHub 2 AIO is a comprehensive all-in-one solution for enterprise drone fleet management and data processing. Combining cloud-based fleet monitoring with local data processing capabilities, FlightHub 2 AIO enables organizations to manage drone operations, process data securely, and maintain control over their geospatial workflows.",
    images: ["/images/uav/accessories/flighthub 2 aio/2-_0000_56565e6e-512c-4bb5-9386-9a93b759049b_1000x.png", "/images/uav/accessories/flighthub 2 aio/In-blog_Blog_Image_1960x1080px_-_2025-10-14T134004.368_1000x.jpg", "/images/uav/accessories/flighthub 2 aio/New_Blog_Poster_Image_Template__65_1000x.jpg"],
    features: ["Fleet management", "Data processing", "Cloud integration", "Enterprise security", "All-in-one solution"],
    specifications: {
      "Product type": "Fleet Management System",
      "Use case": "Fleet management, data processing, cloud operations",
      "Deployment": "All-in-one enterprise solution",
      "Recommended for": "Enterprise drone operators"
    },
    relatedSlugs: ["dji-dock-3", "dji-matrice-400", "pix4dmapper"],
    seoTitle: "DJI FlightHub 2 AIO Sri Lanka",
    seoDescription: "DJI FlightHub 2 AIO fleet management solutions in Sri Lanka for enterprise drone operations."
  },
  {
    title: "Manifold 3",
    slug: "manifold-3",
    category: "accessories",
    summary: "High-performance onboard computer for AI processing and edge computing on drones.",
    description:
      "Manifold 3 is a high-performance onboard computer designed for AI processing and edge computing on enterprise drones. With powerful computing capabilities, Manifold 3 enables real-time object detection, automated decision-making, and advanced data processing directly on the drone, reducing latency and enabling autonomous operations.",
    images: ["/images/uav/accessories/manifold 3/73a3643d3c61768a959b94e8651b2db7@ultra.webp", "/images/uav/accessories/manifold 3/e6bb8ef4b7331b80af2e0e1888437965@ultra.webp", "/images/uav/accessories/manifold 3/1949b62528a2a48fd5e39ea43103d6b2@ultra.webp"],
    features: ["AI processing", "Edge computing", "Real-time analysis", "Autonomous operations", "High-performance computing"],
    specifications: {
      "Product type": "Onboard Computer",
      "Use case": "AI processing, edge computing, autonomous operations",
      "Computing power": "High-performance processing",
      "Recommended for": "Enterprise drone developers"
    },
    relatedSlugs: ["dji-matrice-400", "zenmuse-h30t", "dji-terra"],
    seoTitle: "Manifold 3 Onboard Computer Sri Lanka",
    seoDescription: "Manifold 3 onboard computer solutions in Sri Lanka for AI processing and edge computing on drones."
  },
  {
    title: "D-RTK 3 Multifunctional Station",
    slug: "d-rtk-3-station",
    category: "accessories",
    summary: "High-precision RTK base station for centimeter-level positioning accuracy.",
    description:
      "D-RTK 3 Multifunctional Station is a professional RTK base station that provides centimeter-level positioning accuracy for drone operations. Supporting multiple satellite constellations and advanced correction methods, the D-RTK 3 enables survey-grade mapping, precise inspection, and accurate data collection for professional geospatial applications.",
    images: ["/images/uav/accessories/d-rtk 3/d-rtk-3-multifunctional-station.jpg", "/images/uav/accessories/d-rtk 3/d-rtk-3-multifunctional-station (1).jpg", "/images/uav/accessories/d-rtk 3/d-rtk-3-multifunctional-station (2).jpg"],
    features: ["RTK positioning", "Multi-constellation support", "Centimeter accuracy", "Survey-grade precision", "Professional grade"],
    specifications: {
      "Product type": "RTK Base Station",
      "Use case": "Precision positioning, surveying, mapping",
      "Positioning accuracy": "Centimeter-level RTK",
      "Recommended for": "Surveyors and mapping professionals"
    },
    relatedSlugs: ["dji-matrice-400", "dji-mavic-3-enterprise", "two-nav-roc"],
    seoTitle: "D-RTK 3 Station Sri Lanka",
    seoDescription: "D-RTK 3 multifunctional station solutions in Sri Lanka for high-precision RTK positioning."
  }
];

export const droneProducts = products.filter((product) => product.category === "drones" && product.comparison);
