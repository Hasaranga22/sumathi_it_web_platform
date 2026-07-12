import { Award, Handshake, Settings2, ShieldCheck } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { enterpriseSolutions } from "@/data/enterprise-solutions";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";

export const metadata = buildMetadata({
  title: "Enterprise Solutions",
  description: "Future-ready IT infrastructure solutions from Sumathi IT including networking, unified communication, data center, cybersecurity, and ELV solutions.",
  path: "/enterprise-solutions",
  keywords: ["enterprise IT infrastructure Sri Lanka", "networking solutions Colombo", "cybersecurity system integration"]
});

const highlights = [
  { label: "18+ Years of Expertise", icon: Award },
  { label: "Vendor-Agnostic Approach", icon: Handshake },
  { label: "End-to-End Support", icon: Settings2 },
  { label: "Proven Track Record", icon: ShieldCheck }
];

export default function EnterpriseSolutionsPage() {
  return (
    <>
      <PageHero
        title="Enterprise Solutions"
        description="Future-ready IT infrastructure for your business"
        breadcrumbs={[{ label: "Enterprise Solutions" }]}
        useVideo={true}
      />
      <section className="bg-white py-10">
        <div className="container-padded grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.label} delay={index * 0.04} variant="pop">
                <div className="premium-card p-5 text-center text-sm font-semibold text-navy-950">
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-brand-lavender text-brand-purple"><Icon className="h-5 w-5" /></div>
                  {item.label}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <SectionHeader
              eyebrow="How we create value"
              title="Infrastructure decisions should be based on business need, not product pressure."
              description="Our enterprise approach is designed to reduce downtime, improve security, simplify operations, and build long-term technology stability."
            />
            <div className="mt-7 rounded-card bg-white p-6 shadow-card">
              <AnimatedList items={["Architecture-led solution planning", "Multi-vendor deployment capability", "Implementation, handover, and support readiness", "Scalable designs for future business growth"]} />
            </div>
          </AnimatedSection>
          <div>
            <SectionHeader title="Explore our enterprise solution areas" description="Each solution page is SEO-ready and structured with benefits, industries, related solutions, and clear CTA actions." />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {enterpriseSolutions.map((solution, index) => (
                <AnimatedSection key={solution.slug} delay={index * 0.05} variant="pop">
                  <SolutionCard {...solution} href={`/enterprise-solutions/${solution.slug}`} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
