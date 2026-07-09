import type { ProductCategory } from "@/types/product";

export const uavCategories: { title: string; slug: ProductCategory; summary: string; image: string }[] = [
  { title: "Drones", slug: "drones", summary: "Enterprise UAV platforms for inspection, mapping, agriculture, and public safety.", image: "/images/uav/category-drones.svg" },
  { title: "Software", slug: "software", summary: "Mapping, modeling, mission planning, and data processing software.", image: "/images/uav/category-software.svg" },
  { title: "GNSS", slug: "gnss", summary: "Positioning and geospatial accuracy tools for field operations.", image: "/images/uav/category-gnss.svg" },
  { title: "BIM", slug: "bim", summary: "Digital construction workflows, 3D visualization, and reality capture support.", image: "/images/uav/category-bim.svg" },
  { title: "Scanners", slug: "scanners", summary: "Reality capture and scanning systems for survey and engineering teams.", image: "/images/uav/category-scanners.svg" },
  { title: "UAV Services", slug: "uav-services", summary: "Professional drone services for mapping, inspection, and data collection.", image: "/images/uav/category-services.svg" }
];
