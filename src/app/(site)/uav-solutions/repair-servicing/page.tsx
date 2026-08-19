import { buildMetadata } from "@/lib/seo";
import { RepairServicingContent } from "./RepairServicingContent";

export async function generateMetadata() {
  return buildMetadata({
    title: "Repair & Servicing | Geospatial Solutions",
    description: "Professional DJI drone repair, maintenance, and after-sales support services in Sri Lanka. Authorized DJI dealer with certified technicians.",
    path: "/uav-solutions/repair-servicing",
    keywords: ["DJI repair Sri Lanka", "Drone servicing Sri Lanka", "DJI maintenance", "Drone repair service"]
  });
}

export default function RepairServicingPage() {
  return <RepairServicingContent />;
}
