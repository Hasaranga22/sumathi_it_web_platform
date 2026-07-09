import { notFound } from "next/navigation";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { titleCase } from "@/lib/utils";
import { uavCategories } from "@/data/uav-categories";
import { products } from "@/data/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroBlock } from "@/components/sections/HeroBlock";
import { ProductCard } from "@/components/cards/ProductCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { CategoryVideoHeader } from "@/components/sections/CategoryVideoHeader";
import { ImageTextBanner } from "@/components/sections/ImageTextBanner";
import { DroneImageSlider } from "@/components/sections/DroneImageSlider";
import { ServiceFeatureSection } from "@/components/sections/ServiceFeatureSection";

const partners = [
  { name: "Acronis", logo: "/images/logo/partners logos/Acronis-150x80.png" },
  { name: "Check Point", logo: "/images/logo/partners logos/Check-Point-150x80.png" },
  { name: "Coral", logo: "/images/logo/partners logos/Coral-Logo-150x80.png" },
  { name: "Dahua", logo: "/images/logo/partners logos/Dahua_Technology_logo-150x80.png" },
  { name: "Dell", logo: "/images/logo/partners logos/Dell_logo_PNG1-scaled-150x80.png" },
  { name: "Fortinet", logo: "/images/logo/partners logos/Fortinet-150x80.png" },
  { name: "Hikvision", logo: "/images/logo/partners logos/Hikvision-Logo-150x80.png" },
  { name: "Huawei", logo: "/images/logo/partners logos/Huawei-150x80.png" },
  { name: "Juniper", logo: "/images/logo/partners logos/Juniper-150x80.png" },
  { name: "Kaspersky", logo: "/images/logo/partners logos/Kaspersky-150x80.png" },
  { name: "Lenovo", logo: "/images/logo/partners logos/Lenovo_logo_PNG3-scaled-150x80.png" },
  { name: "Sonicwall", logo: "/images/logo/partners logos/Sonicwall-150x80.png" },
  { name: "Synology", logo: "/images/logo/partners logos/Synology_logo-150x80.png" },
  { name: "VMware", logo: "/images/logo/partners logos/VMware-Logo-150x80.png" },
  { name: "Veeam", logo: "/images/logo/partners logos/Veeam-logo-150x80.png" },
  { name: "Cohesity", logo: "/images/logo/partners logos/cohesity-jpg-150x80.png" },
  { name: "Grandstream", logo: "/images/logo/partners logos/grandstream-logo-150x80.png" }
];

export function generateStaticParams() {
  return uavCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = uavCategories.find((entry) => entry.slug === category);
  if (!item) return {};
  const seoDescription = item.description || item.summary;
  return buildMetadata({
    title: `${item.title} | UAV Solutions Sri Lanka`,
    description: `${seoDescription} Sumathi IT provides ${item.title.toLowerCase()} solutions including ${item.features?.join(', ') || 'professional services'} for enterprise and industrial applications in Sri Lanka.`,
    path: `/uav-solutions/${item.slug}`,
    keywords: [`${item.title} Sri Lanka`, `${item.title} solutions`, "UAV products Sri Lanka", "drone technology", "geospatial solutions"]
  });
}

export default async function UavCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = uavCategories.find((entry) => entry.slug === category);
  if (!item) notFound();
  const categoryProducts = products.filter((product) => product.category === item.slug);
  const isDrones = item.slug === "drones";

  return (
    <>
      <Breadcrumbs items={[{ label: "UAV Solutions", href: "/uav-solutions" }, { label: item.title }]} />
      <HeroBlock eyebrow="UAV Category" title={item.title} description={item.summary} image={item.image} />

      {/* Full-width header video — currently only supplied for Drones, but any
          category can opt in by adding a `videoUrl` in uav-categories.ts */}
      {item.videoUrl && (
        <CategoryVideoHeader
          videoUrl={item.videoUrl}
          poster={item.videoPoster}
          eyebrow={item.tagline ?? "In the field"}
          title={item.title}
          description={item.description}
        />
      )}

      {item.tagline && !item.videoUrl && (
        <section className="section-padding bg-brand-purple text-white">
          <div className="container-padded text-center">
            <AnimatedSection variant="pop">
              <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">{item.tagline}</h2>
            </AnimatedSection>
          </div>
        </section>
      )}

      {item.description && (
        <section className="section-padding bg-white">
          <div className="container-padded">
            <AnimatedSection variant="pop">
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="leading-8">{item.description}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Image + overlay text banner, tuned to each category's content */}
      {item.bannerImage && item.bannerHeading && (
        <ImageTextBanner
          image={item.bannerImage}
          eyebrow={item.bannerEyebrow}
          heading={item.bannerHeading}
          text={item.bannerText}
          align={isDrones ? "left" : "right"}
        />
      )}

      {/* Drone-only auto-sliding gallery — dummy slides until real photography is uploaded */}
      {isDrones && <DroneImageSlider />}

      {item.features && item.features.length > 0 && (
        <ServiceFeatureSection
          title="Key Features"
          description="What makes this solution stand out."
          items={item.features}
          image={item.featureImage || "/images/uav/feature-default.jpg"}
          imageAlt={`${item.title} key features`}
        />
      )}

      {item.applications && item.applications.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-padded">
            <SectionHeader title="Applications" description="Common use cases and industries." />
            <div className="mt-10">
              <AnimatedList items={item.applications} />
            </div>
          </div>
        </section>
      )}

      {item.services && item.services.length > 0 && (
        <ServiceFeatureSection
          title="Our Services"
          description="Professional services we offer to keep your operations running smoothly."
          items={item.services}
          image="/images/uav/service-workshop.jpg"
          imageAlt="UAV service and maintenance workshop"
        />
      )}

      {item.whyChooseUs && item.whyChooseUs.length > 0 && (
        <ServiceFeatureSection
          title="Why Choose Us"
          description="Benefits of working with Sumathi IT for your UAV solutions."
          items={item.whyChooseUs}
          image="/images/uav/why-choose-us.jpg"
          imageAlt="Sumathi IT team providing expert UAV support"
          reverse={true}
        />
      )}

      {categoryProducts.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-padded">
            <SectionHeader
              title={`${item.title} products and services`}
              description={`Browse available ${titleCase(item.slug)} content managed from JSON.`}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product, index) => (
                <AnimatedSection key={product.slug} delay={index * 0.05} variant="pop">
                  <ProductCard
                    title={product.title}
                    summary={product.summary}
                    image={product.images[0]}
                    href={`/products/${product.slug}`}
                    category={product.category}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-y border-slate-200 bg-white py-12">
        <div className="container-padded overflow-hidden">
          <h2 className="text-center text-2xl font-semibold tracking-normal text-navy-950 mb-8">
            OUR GLOBAL PARTNERS
          </h2>
          <div className="relative w-full">
            <div className="flex w-max animate-[marquee_60s_linear_infinite] gap-20 hover:[animation-play-state:paused]">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex items-center justify-center opacity-60 grayscale transition hover:grayscale-0 hover:opacity-100">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    width={150}
                    height={80}
                    className="h-16 w-auto object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={`Need support with ${item.title.toLowerCase()}?`} />
    </>
  );
}