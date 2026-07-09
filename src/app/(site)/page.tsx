import Image from "next/image";
import { Globe2, Network, ShieldCheck, UsersRound } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { enterpriseSolutions } from "@/data/enterprise-solutions";
import { blogs } from "@/data/blogs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { ButtonLink } from "@/components/common/ButtonLink";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata = buildMetadata({
  title: "Enterprise IT, UAV and System Integration Solutions",
  description: "Sumathi IT delivers enterprise IT infrastructure, system integration, cybersecurity, data center, UAV, geospatial, and digital transformation solutions in Sri Lanka.",
  keywords: ["Sumathi IT website", "IT system integration Colombo", "enterprise IT Sri Lanka"]
});

const processSteps = [
  "Discovery and Analysis",
  "Tailored Solutions",
  "Design Your IT Roadmap",
  "Deployment and Support"
];

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

const whyCards = [
  { title: "Trust backed by 30 years of legacy", icon: ShieldCheck, text: "A reliable partner with group strength, local understanding, and long-term customer relationships." },
  { title: "Expert team with proven experience", icon: UsersRound, text: "Certified engineers, consultants, and support teams for complex enterprise and field technology needs." },
  { title: "Strong global and local partnerships", icon: Globe2, text: "Technology relationships help us deliver scalable, practical, and certified solutions." },
  { title: "End-to-end future-ready solutions", icon: Network, text: "From consultation and deployment to support, we build ecosystems that grow with your business." }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-padded grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <AnimatedSection>
            <p className="inline-flex rounded-full px-4 py-2 text-md font-semibold uppercase tracking-[0.22em] text-brand-purple">Sumathi IT</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-navy-950 sm:text-5xl lg:text-6xl">
              Your challenges, our solutions — IT done right with precision and care.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Enterprise infrastructure, cybersecurity, UAV solutions, geospatial engineering, end-user devices, and system integration services for Sri Lankan organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/enterprise-solutions">Explore Solutions</ButtonLink>
              <ButtonLink href="/contact-us" variant="secondary">Talk to an Expert</ButtonLink>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15} variant="pop" className="relative">
            <div className="absolute -left-6 -top-6 z-10 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-card">
              <p className="text-4xl font-semibold tracking-[-0.06em] text-brand-purple">30+</p>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Years of IT experience</p>
            </div>
            <div className="relative h-[360px] overflow-hidden rounded-card bg-brand-lavender shadow-soft sm:h-[480px]">
              <Image src="/images/hero/home-hero.svg" alt="Sumathi IT team and technology solutions" fill className="object-cover transition duration-1000 hover:scale-[1.03]" priority />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-12">
        <div className="container-padded overflow-hidden">
          <div className="relative w-full">
            <div className="flex w-max animate-[marquee_60s_linear_infinite] gap-20 hover:[animation-play-state:paused]">
              {[...partners, ...partners, ...partners].map((item, index) => (
                <div key={`${item.name}-${index}`} className="flex items-center justify-center opacity-60 grayscale transition hover:grayscale-0 hover:opacity-100">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <AnimatedSection variant="slide-right">
            <SectionHeader
              eyebrow="Our approach"
              title="We guide IT and business leaders through four clear steps."
              description="The experience must feel structured, easy to understand, and dependable from the first consultation to deployment and support."
            />
            <div className="mt-7 rounded-card bg-brand-lavender p-6">
              <AnimatedList items={["Clear discovery before recommending products", "Vendor-agnostic solution thinking", "Support-focused implementation planning"]} />
            </div>
          </AnimatedSection>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step} delay={index * 0.06} variant="pop">
                <div className="premium-card flex items-start gap-4 p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-purple text-sm font-bold text-white">0{index + 1}</span>
                  <div>
                    <h3 className="font-semibold text-navy-950">{step}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">Structured consultation, technical clarity, and practical execution for enterprise-grade outcomes.</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded rounded-card bg-brand-lavender !pr-0">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
            <AnimatedSection variant="slide-right" className="relative min-h-[420px]">
              <Image src="/images/enterprise/data-center.svg" alt="Data center and enterprise infrastructure" fill className="object-cover" />
            </AnimatedSection>
            <div className="purple-panel p-8 text-white sm:p-10 lg:p-12 rounded-tr-[1.4rem] rounded-br-[1.4rem]">
              <div className="grid gap-8 md:grid-cols-2">
                {whyCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <AnimatedSection key={card.title} delay={index * 0.06} variant="pop" className="text-center">
                      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/18 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-blue-50">{card.text}</p>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader eyebrow="Enterprise capability" title="Solutions built for critical business environments" description="From network foundations to secure data center environments, our solution areas are structured for long-term reliability." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enterpriseSolutions.slice(0, 3).map((solution, index) => (
              <AnimatedSection key={solution.slug} delay={index * 0.06} variant="pop">
                <SolutionCard {...solution} href={`/enterprise-solutions/${solution.slug}`} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <AnimatedSection className="relative h-[360px] overflow-hidden rounded-card bg-brand-lavender shadow-soft" variant="pop">
            <Image src="/images/uav/uav-hero.svg" alt="UAV solutions and drone technology" fill className="object-cover transition duration-700 hover:scale-[1.03]" />
          </AnimatedSection>
          <AnimatedSection variant="slide-left">
            <SectionHeader eyebrow="UAV and geospatial" title="Drone, mapping, GNSS, BIM and scanning workflows in one ecosystem" description="Support your field teams with practical UAV solutions, product guidance, software, and geospatial workflows." />
            <div className="mt-6">
              <AnimatedList items={["Enterprise drones and dock-based deployment", "Mapping and photogrammetry software", "GNSS, BIM, scanners, and UAV services"]} />
            </div>
            <ButtonLink href="/uav-solutions" className="mt-8">Explore UAV Solutions</ButtonLink>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader eyebrow="Insights" title="Latest news and technology updates" description="Keep this section updated using JSON now, then migrate to Supabase CMS in the next phase." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogs.map((blog, index) => (
              <AnimatedSection key={blog.slug} delay={index * 0.06} variant="pop">
                <ArticleCard {...blog} href={`/news/${blog.slug}`} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
