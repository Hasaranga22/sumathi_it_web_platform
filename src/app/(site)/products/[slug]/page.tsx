import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Headphones, PackageCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductGallery } from "@/components/product/ProductGallery";
import { DroneComparison } from "@/components/product/DroneComparison";
import { ProductCard } from "@/components/cards/ProductCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { ButtonLink } from "@/components/common/ButtonLink";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return buildMetadata({ title: product.seoTitle, description: product.seoDescription, path: `/products/${product.slug}`, keywords: [product.title, `${product.title} Sri Lanka`] });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => product.relatedSlugs.includes(item.slug));

  return (
    <>
      <Breadcrumbs items={[{ label: "UAV Solutions", href: "/uav-solutions" }, { label: product.title }]} />
      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <AnimatedSection variant="pop"><ProductGallery images={product.images} title={product.title} /></AnimatedSection>
          <AnimatedSection variant="slide-left">
            <p className="inline-flex rounded-full bg-brand-lavender px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-purple">{product.category}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-navy-950 sm:text-5xl">{product.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>
            <div className="mt-8 premium-card p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-purple text-white"><PackageCheck className="h-5 w-5" /></div>
                <h2 className="text-xl font-semibold text-navy-950">Key features</h2>
              </div>
              <AnimatedList items={product.features} />
            </div>
            <div className="mt-6 rounded-card border border-gold-100 bg-gold-50 p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-500 text-white"><Headphones className="h-6 w-6" /></div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-950">Need technical guidance for this product?</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">Request availability, deployment planning, pricing guidance, product compatibility or field workflow support.</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <ButtonLink href="/contact-us" variant="gold">Request Product Consultation</ButtonLink>
                    <Link href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-gold-300 bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition hover:border-gold-500">
                      Call {siteConfig.contact.phone} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader title="Product specifications" description="Keep the specification object clean in JSON so it can be migrated to Supabase fields later." />
          <AnimatedSection variant="pop" className="mt-8 premium-card overflow-hidden">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="grid gap-2 border-b border-slate-100 p-5 last:border-0 sm:grid-cols-[260px_1fr]">
                <dt className="font-semibold text-navy-950">{key}</dt>
                <dd className="text-slate-600">{value}</dd>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
      {product.comparison ? (
        <section className="section-padding bg-white">
          <div className="container-padded">
            <SectionHeader title="Compare with other drones" description="Useful for customers who need to shortlist drone options before contacting sales." />
            <div className="mt-8">
              <DroneComparison defaultFirstSlug={product.slug} />
            </div>
          </div>
        </section>
      ) : null}
      {related.length ? (
        <section className="section-padding bg-slate-50">
          <div className="container-padded">
            <SectionHeader title="Related products" />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item, index) => (
                <AnimatedSection key={item.slug} delay={index * 0.06} variant="pop">
                  <ProductCard title={item.title} summary={item.summary} image={item.images[0]} href={`/products/${item.slug}`} category={item.category} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <CtaBand title={`Interested in ${product.title}?`} description="Contact Sumathi IT for product availability, technical guidance, deployment planning, and solution consultation." />
    </>
  );
}
