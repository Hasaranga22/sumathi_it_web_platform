import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "Company gallery of Sumathi IT events, UAV demonstrations, training sessions, projects, and team activities.",
  path: "/gallery",
  keywords: ["Sumathi IT gallery", "UAV demonstrations Sri Lanka", "Sumathi IT events"]
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="A curated view of our work, people, and technology moments"
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <section className="section-padding bg-slate-50">
        <div className="container-padded mb-10 max-w-2xl">
          <p className="text-sm leading-6 text-slate-600">
            Click the front photo to open it full-screen, or use the arrows to browse the deck.
          </p>
        </div>
        <GalleryGrid />
      </section>
    </>
  );
}