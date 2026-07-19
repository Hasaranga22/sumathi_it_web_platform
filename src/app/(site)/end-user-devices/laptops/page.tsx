import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { CtaBand } from "@/components/sections/CtaBand";
import { GlobalPartners } from "@/components/sections/GlobalPartners";

export const metadata = buildMetadata({
  title: "Enterprise Laptops Sri Lanka | Business Computing Solutions",
  description: "Premium enterprise laptops for business productivity from Sumathi IT. Featuring high-performance processors, extended battery life, and enterprise security features for mobile workforce.",
  path: "/end-user-devices/laptops",
  keywords: ["laptops Sri Lanka", "business laptops", "enterprise laptops", "corporate laptops", "workforce laptops"]
});

export default function LaptopsPage() {
  return (
    <>
      <PageHero
        title="Enterprise Laptops"
        description="High-performance laptops designed for business productivity and mobile workforce"
        breadcrumbs={[{ label: "End User Devices" }, { label: "Laptops" }]}
        backgroundImage="/images/end user devices/hero image end user devices.jpg"
      />
      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <AnimatedSection variant="slide-right">
            <SectionHeader
              eyebrow="Business Laptops"
              title="Reliable Performance for Mobile Workforce"
              description="Equip your team with powerful, secure laptops designed for enterprise productivity and collaboration."
            />
            <div className="mt-7 rounded-card bg-brand-lavender p-6">
              <AnimatedList items={["High-performance processors", "Extended battery life", "Enterprise security features", "Lightweight and portable designs"]} />
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
            eyebrow="Why Choose Our Laptops"
            title="Enterprise-Grade Features for Business Success"
            description="Our laptop solutions are selected to meet the demanding needs of modern business environments."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection variant="pop" delay={0.05}>
              <div className="premium-card p-6">
                <h3 className="font-semibold text-navy-950">Performance & Reliability</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Latest generation processors and SSD storage for seamless multitasking and fast application performance.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.1}>
              <div className="premium-card p-6">
                <h3 className="font-semibold text-navy-950">Enterprise Security</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Built-in security features including TPM, biometric authentication, and encrypted storage options.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.15}>
              <div className="premium-card p-6">
                <h3 className="font-semibold text-navy-950">All-Day Battery</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Extended battery life for full-day productivity without frequent charging requirements.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Industries We Serve"
            title="Laptops for Every Business Sector"
            description="Tailored laptop solutions for diverse industry requirements and use cases."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection variant="pop" delay={0.05}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Corporate</h3>
                <p className="mt-2 text-sm text-slate-600">Executive and management laptops</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.1}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Healthcare</h3>
                <p className="mt-2 text-sm text-slate-600">Medical and clinical computing</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.15}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Education</h3>
                <p className="mt-2 text-sm text-slate-600">Teaching and learning devices</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.2}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Field Services</h3>
                <p className="mt-2 text-sm text-slate-600">Rugged and portable solutions</p>
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
              title="Premium Laptop Portfolio"
              description="Explore our range of enterprise laptops featuring the latest technology from leading global brands."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">Business Series</h4>
                <p className="mt-1 text-xs text-slate-600">Professional-grade laptops for executives</p>
              </div>
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">Performance Series</h4>
                <p className="mt-1 text-xs text-slate-600">High-power machines for demanding tasks</p>
              </div>
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">Ultra-Portable</h4>
                <p className="mt-1 text-xs text-slate-600">Lightweight solutions for mobile teams</p>
              </div>
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">Convertible</h4>
                <p className="mt-1 text-xs text-slate-600">2-in-1 flexibility for versatility</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" className="relative h-[500px] overflow-hidden rounded-card bg-brand-lavender shadow-soft">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-navy-950/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-white/20" />
                <p className="text-sm font-medium text-navy-950/60">Laptop Product Showcase</p>
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
