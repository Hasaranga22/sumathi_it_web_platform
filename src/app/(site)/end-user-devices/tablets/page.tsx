import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { CtaBand } from "@/components/sections/CtaBand";
import { GlobalPartners } from "@/components/sections/GlobalPartners";

export const metadata = buildMetadata({
  title: "Enterprise Tablets Sri Lanka | Mobile Business Solutions",
  description: "Enterprise tablets for mobile business solutions from Sumathi IT. Portable, powerful tablets for field teams, customer engagement, and on-the-go productivity.",
  path: "/end-user-devices/tablets",
  keywords: ["tablets Sri Lanka", "business tablets", "enterprise tablets", "mobile computing", "field devices"]
});

export default function TabletsPage() {
  return (
    <>
      <PageHero
        title="Enterprise Tablets"
        description="Mobile productivity solutions for field teams and customer engagement"
        breadcrumbs={[{ label: "End User Devices" }, { label: "Tablets" }]}
        backgroundImage="/images/end user devices/hero image end user devices.jpg"
      />
      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <AnimatedSection variant="slide-right">
            <SectionHeader
              eyebrow="Business Tablets"
              title="Mobile Productivity for Field Teams"
              description="Lightweight, powerful tablets for on-the-go business operations and customer engagement."
            />
            <div className="mt-7 rounded-card bg-brand-lavender p-6">
              <AnimatedList items={["Portable and lightweight", "Long battery life", "Touch-optimized interfaces", "Enterprise security and management"]} />
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" className="relative h-[400px] overflow-hidden rounded-card bg-brand-lavender shadow-soft">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-navy-950/10" />
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Why Choose Our Tablets"
            title="Enterprise-Grade Features for Mobile Excellence"
            description="Our tablet solutions deliver portability, performance, and security for mobile business operations."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection variant="pop" delay={0.05}>
              <div className="premium-card p-6">
                <h3 className="font-semibold text-navy-950">Mobility & Flexibility</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Lightweight design with long battery life for full-day field operations without power constraints.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.1}>
              <div className="premium-card p-6">
                <h3 className="font-semibold text-navy-950">Touch-Optimized</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Intuitive touch interfaces and mobile-optimized applications for seamless user experience.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.15}>
              <div className="premium-card p-6">
                <h3 className="font-semibold text-navy-950">Device Management</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Enterprise mobility management (EMM) support for centralized device control and security policies.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Industry Applications"
            title="Tablets for Every Business Scenario"
            description="Versatile mobile solutions for diverse industry requirements and field operations."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection variant="pop" delay={0.05}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Retail</h3>
                <p className="mt-2 text-sm text-slate-600">Point of sale and inventory</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.1}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Healthcare</h3>
                <p className="mt-2 text-sm text-slate-600">Patient records and diagnostics</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.15}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Field Service</h3>
                <p className="mt-2 text-sm text-slate-600">On-site inspections and reports</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.2}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Sales</h3>
                <p className="mt-2 text-sm text-slate-600">Presentations and client meetings</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <AnimatedSection variant="slide-right">
            <SectionHeader
              eyebrow="Product Showcase"
              title="Tablet Device Portfolio"
              description="Explore our selection of enterprise tablets designed for mobility, productivity, and field operations."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">Standard Tablets</h4>
                <p className="mt-1 text-xs text-slate-600">General business applications</p>
              </div>
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">Rugged Tablets</h4>
                <p className="mt-1 text-xs text-slate-600">Durable field-ready devices</p>
              </div>
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">2-in-1 Devices</h4>
                <p className="mt-1 text-xs text-slate-600">Laptop-tablet hybrid flexibility</p>
              </div>
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">Professional Grade</h4>
                <p className="mt-1 text-xs text-slate-600">High-performance specifications</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" className="relative h-[500px] overflow-hidden rounded-card bg-brand-lavender shadow-soft">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-navy-950/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-white/20" />
                <p className="text-sm font-medium text-navy-950/60">Tablet Product Showcase</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <GlobalPartners />
      <CtaBand />
    </>
  );
}
