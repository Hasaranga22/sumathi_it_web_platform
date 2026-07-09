import { notFound } from "next/navigation";
import { Building2, Layers3 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { enterpriseSolutions } from "@/data/enterprise-solutions";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroBlock } from "@/components/sections/HeroBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";

export function generateStaticParams() {
  return enterpriseSolutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = enterpriseSolutions.find((item) => item.slug === slug);
  if (!solution) return {};
  return buildMetadata({ title: solution.seoTitle, description: solution.seoDescription, path: `/enterprise-solutions/${solution.slug}`, keywords: [solution.title, `${solution.title} Sri Lanka`] });
}

export default async function EnterpriseSolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = enterpriseSolutions.find((item) => item.slug === slug);
  if (!solution) notFound();
  const related = enterpriseSolutions.filter((item) => item.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ label: "Enterprise Solutions", href: "/enterprise-solutions" }, { label: solution.title }]} />
      <HeroBlock eyebrow="Enterprise Solution" title={solution.title} description={solution.summary} image={solution.image} />
      <section className="section-padding bg-white">
        <div className="container-padded">
          <AnimatedSection variant="pop">
            <div className="prose prose-lg max-w-none text-slate-700">
              {solution.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-8">{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-8 lg:grid-cols-2">
          <AnimatedSection variant="pop">
            <div className="premium-card p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-lavender text-brand-purple"><Layers3 className="h-6 w-6" /></div>
              <h2 className="mt-5 text-2xl font-semibold text-navy-950">Key benefits</h2>
              <div className="mt-6"><AnimatedList items={solution.benefits} /></div>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" delay={0.08}>
            <div className="premium-card p-7">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-lavender text-brand-purple"><Building2 className="h-6 w-6" /></div>
              <h2 className="mt-5 text-2xl font-semibold text-navy-950">Industries served</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {solution.industries.map((industry) => <span key={industry} className="rounded-full bg-brand-lavender px-4 py-2 text-sm font-medium text-brand-purple">{industry}</span>)}
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-600">Each deployment can be tailored for performance, security, compliance, uptime and long-term support requirements.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-padded">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-navy-950">Related solutions</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item, index) => (
              <AnimatedSection key={item.slug} delay={index * 0.06} variant="pop">
                <SolutionCard {...item} href={`/enterprise-solutions/${item.slug}`} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={`Plan your ${solution.title.toLowerCase()} requirement`} />
    </>
  );
}
