import { buildMetadata } from "@/lib/seo";
import { BimContent } from "./BimContent";

export async function generateMetadata() {
  return buildMetadata({
    title: "BIM & DIGITAL CONSTRUCTION SOLUTIONS | UAV Solutions",
    description: "Scan-to-BIM and digital construction workflows that transform laser scanner and drone data into accurate BIM models for as-built documentation, renovation projects, and facility management.",
    path: "/uav-solutions/bim",
    keywords: ["Scan-to-BIM Sri Lanka", "Digital construction solutions", "BIM services", "Point cloud to BIM", "Reality capture", "LiDAR BIM"]
  });
}

export default function BimPage() {
  return <BimContent />;
}
