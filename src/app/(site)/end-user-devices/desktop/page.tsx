import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { CtaBand } from "@/components/sections/CtaBand";
import { GlobalPartners } from "@/components/sections/GlobalPartners";

export const metadata = buildMetadata({
  title: "Desktop Computers Sri Lanka | Enterprise Workstation Solutions",
  description: "Enterprise desktop computers and workstations for office productivity from Sumathi IT. High-performance computing, expandable configurations, and cost-effective ownership.",
  path: "/end-user-devices/desktop",
  keywords: ["desktop computers Sri Lanka", "business desktops", "enterprise desktops", "office computers", "workstations"]
});

export default function DesktopPage() {
  return (
    <>
      <PageHero
        title="Enterprise Desktop Computers"
        description="High-performance desktop solutions for office productivity and demanding applications"
        breadcrumbs={[{ label: "End User Devices" }, { label: "Desktop" }]}
        backgroundImage="/images/end user devices/hero image end user devices.jpg"
      />
      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <AnimatedSection variant="slide-right">
            <SectionHeader
              eyebrow="Desktop Computers"
              title="Powerful Workstations for Office Environments"
              description="Reliable desktop solutions for demanding business applications and productivity."
            />
            <div className="mt-7 rounded-card bg-brand-lavender p-6">
              <AnimatedList items={["High-performance computing", "Expandable configurations", "Enterprise-grade reliability", "Cost-effective ownership"]} />
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
            eyebrow="Why Choose Our Desktops"
            title="Enterprise-Grade Features for Office Excellence"
            description="Our desktop solutions deliver performance, reliability, and scalability for business operations."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection variant="pop" delay={0.05}>
              <div className="premium-card p-6">
                <h3 className="font-semibold text-navy-950">Scalable Performance</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Upgradeable components for future-proofing your investment and adapting to growing business needs.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.1}>
              <div className="premium-card p-6">
                <h3 className="font-semibold text-navy-950">Cost-Effective</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Lower total cost of ownership with longer lifecycle and easier maintenance compared to portable devices.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.15}>
              <div className="premium-card p-6">
                <h3 className="font-semibold text-navy-950">Enhanced Security</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Physical security advantages and centralized management for controlled office environments.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Use Cases"
            title="Desktop Solutions for Every Need"
            description="From basic office computing to specialized workstations for demanding applications."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection variant="pop" delay={0.05}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">General Office</h3>
                <p className="mt-2 text-sm text-slate-600">Administrative and clerical work</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.1}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Design & Creative</h3>
                <p className="mt-2 text-sm text-slate-600">Graphics and multimedia production</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.15}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Development</h3>
                <p className="mt-2 text-sm text-slate-600">Software development and coding</p>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.2}>
              <div className="premium-card p-6 text-center">
                <h3 className="font-semibold text-navy-950">Data Processing</h3>
                <p className="mt-2 text-sm text-slate-600">Analytics and database operations</p>
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
              title="Desktop Computing Portfolio"
              description="Discover our comprehensive range of desktop computers and workstations for every business requirement."
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">Standard Desktops</h4>
                <p className="mt-1 text-xs text-slate-600">Reliable office computing solutions</p>
              </div>
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">Mini PCs</h4>
                <p className="mt-1 text-xs text-slate-600">Compact space-saving designs</p>
              </div>
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">All-in-One</h4>
                <p className="mt-1 text-xs text-slate-600">Integrated display solutions</p>
              </div>
              <div className="premium-card p-6">
                <h4 className="font-semibold text-navy-950 text-sm">Tower Systems</h4>
                <p className="mt-1 text-xs text-slate-600">Maximum expandability options</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" className="relative h-[500px] overflow-hidden rounded-card bg-brand-lavender shadow-soft">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-navy-950/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-white/20" />
                <p className="text-sm font-medium text-navy-950/60">Desktop Product Showcase</p>
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
