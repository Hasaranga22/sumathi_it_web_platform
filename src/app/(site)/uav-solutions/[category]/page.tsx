import { notFound } from "next/navigation";
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

export function generateStaticParams() {
  return uavCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = uavCategories.find((entry) => entry.slug === category);
  if (!item) return {};
  return buildMetadata({
    title: `${item.title} | UAV Solutions`,
    description: item.summary,
    path: `/uav-solutions/${item.slug}`,
    keywords: [`${item.title} Sri Lanka`, "UAV products Sri Lanka"]
  });
}

export default async function UavCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = uavCategories.find((entry) => entry.slug === category);
  if (!item) notFound();
  const categoryProducts = products.filter((product) => product.category === item.slug);

  return (
    <>
      <Breadcrumbs items={[{ label: "UAV Solutions", href: "/uav-solutions" }, { label: item.title }]} />
      <HeroBlock eyebrow="UAV Category" title={item.title} description={item.summary} image={item.image} />
      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <div className="premium-card p-7">
              <h2 className="text-2xl font-semibold text-navy-950">Why this category matters</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">Customers need more than product names. This section explains the practical value, deployment fit and business use case behind {item.title.toLowerCase()}.</p>
              <div className="mt-6">
                <AnimatedList items={["Structured product guidance from Sumathi IT", "Ready for JSON now and Supabase CMS later", "Clear product detail pages with CTA and related products"]} />
              </div>
            </div>
          </AnimatedSection>
          <div>
            <SectionHeader title={`${item.title} products and services`} description={`Browse available ${titleCase(item.slug)} content managed from JSON.`} />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {categoryProducts.map((product, index) => (
                <AnimatedSection key={product.slug} delay={index * 0.05} variant="pop">
                  <ProductCard title={product.title} summary={product.summary} image={product.images[0]} href={`/products/${product.slug}`} category={product.category} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand title={`Need support with ${item.title.toLowerCase()}?`} />
    </>
  );
}
