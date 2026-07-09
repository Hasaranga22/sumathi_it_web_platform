import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { CountUpStat } from "@/components/common/CountUpStat";
import { TestimonialSlider } from "@/components/common/TestimonialSlider";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata = buildMetadata({
  title: "About Us",
  description: "Learn about Sumathi IT, a Sri Lankan IT solutions and system integration company under Sumathi Holdings.",
  path: "/about-us",
  keywords: ["about Sumathi IT", "Sumathi Holdings IT company", "Sri Lanka system integration company"]
});

const stats = [
  { value: "30+", label: "Years of proven experience", icon: "shield" as const },
  { value: "95%", label: "Customer satisfaction focus", icon: "smile" as const },
  { value: "250+", label: "Projects completed", icon: "network" as const },
  { value: "25+", label: "Technology partnerships", icon: "handshake" as const }
];

const leadership = [
  { name: "Chandima Wickramatunge", role: "Group CEO – IT Cluster", image: "/images/team/chairman.svg" },
  { name: "Kumara Perera", role: "Chief Technology Officer", image: "/images/team/cto.svg" },
  { name: "Nimal Fernando", role: "Director – Operations", image: "/images/team/director-ops.svg" },
  { name: "Priya Jayawardena", role: "Head – Enterprise Solutions", image: "/images/team/head-enterprise.svg" },
  { name: "Samantha Silva", role: "Head – UAV Solutions", image: "/images/team/head-uav.svg" },
  { name: "Dilani Rathnayake", role: "Head – Human Resources", image: "/images/team/head-hr.svg" }
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Sumathi IT"
        description="A trusted technology partner under Sumathi Holdings"
        breadcrumbs={[{ label: "About Us" }]}
      />
      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-8 lg:grid-cols-2">
          <AnimatedSection variant="pop">
            <div className="premium-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">Our Mission</h2>
              <p className="mt-4 leading-8 text-slate-600">To help organizations operate smarter, faster, and more securely through practical technology solutions and reliable implementation support.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" delay={0.08}>
            <div className="premium-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">Our Vision</h2>
              <p className="mt-4 leading-8 text-slate-600">To be a trusted technology partner for digital transformation, enterprise infrastructure, geospatial innovation, and UAV-driven business value.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-padded grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => <CountUpStat key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />)}
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader title="Leadership team" description="Meet the experienced professionals driving Sumathi IT's vision and growth." />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, index) => (
              <AnimatedSection key={person.name} delay={index * 0.06} variant="pop">
                <div className="premium-card overflow-hidden p-0 text-center">
                  <div className="relative h-64 overflow-hidden bg-brand-lavender">
                    <Image src={person.image} alt={person.name} fill className="object-cover transition duration-1000 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-navy-950">{person.name}</h3>
                    <p className="mt-2 text-sm text-brand-purple">{person.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader title="Leadership message" description="The 25th anniversary connects Sumathi IT’s legacy, customer trust, and future-ready technology direction." />
          <AnimatedSection variant="pop" className="mt-8 grid gap-8 rounded-card bg-white p-6 shadow-card lg:grid-cols-[340px_1fr] lg:items-center">
            <div className="relative h-80 overflow-hidden rounded-card bg-brand-lavender">
              <Image src="/images/team/chairman.svg" alt="Chairman" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-500">25th anniversary</p>
              <h3 className="mt-3 text-2xl font-semibold text-navy-950">25 years of trust, technology and service excellence</h3>
              <p className="mt-4 leading-8 text-slate-600">The anniversary page is designed as a special campaign touchpoint with a gold, white and black visual treatment to highlight legacy and victory.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader
            title="Customer testimonials"
            description="What our clients say about working with Sumathi IT."
          />

          <div className="mt-8">
            <TestimonialSlider />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
