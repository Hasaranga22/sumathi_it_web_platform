import Image from "next/image";
import { Award, Quote, ShieldCheck, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata = buildMetadata({
  title: "25th Anniversary Message",
  description: "Sumathi IT celebrates 25 years of trusted technology solutions, service excellence, enterprise IT capability, UAV technologies, and customer partnerships in Sri Lanka.",
  path: "/chairman-message",
  keywords: ["Sumathi IT 25 anniversary", "25 years technology solutions Sri Lanka", "Sumathi IT chairman message"]
});

const milestones = [
  "ICT infrastructure and enterprise networking",
  "System integration and end-user devices",
  "Repair services and technical support",
  "UAV, GNSS, BIM, scanning and software services"
];

export default function ChairmanMessagePage() {
  return (
    <>
      <PageHero
        title="25th Anniversary"
        description="Sumathi IT celebrates 25 years of trusted technology solutions in Sri Lanka"
        breadcrumbs={[{ label: "25th Anniversary" }]}
        backgroundImage="/images/hero/page-hero-bg.svg"
      />

      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-5">
            <AnimatedSection variant="pop" className="rounded-card border border-gold-100 bg-gold-50 p-6 shadow-card">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-gold-200">
                  <Image src="/images/team/chairman.svg" alt="Chandima Wickramatunge" fill className="object-cover" />
                </div>
                <div className="mt-4">
                  <Award className="mx-auto h-8 w-8 text-gold-500" />
                  <h2 className="mt-4 text-2xl font-semibold text-navy-950">25 years of progress</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-700">A dedicated anniversary page with gold, white and black visual language to represent victory, trust and legacy.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop" delay={0.08} className="rounded-card bg-[#111111] p-6 text-white shadow-soft">
              <Sparkles className="h-8 w-8 text-gold-300" />
              <h3 className="mt-4 text-xl font-semibold">Key service areas</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-gold-50/90">
                {milestones.map((item) => <li key={item} className="flex gap-3"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-gold-300" />{item}</li>)}
              </ul>
            </AnimatedSection>
          </aside>

          <article className="space-y-7 text-base leading-8 text-slate-700">
            <AnimatedSection variant="pop" className="premium-card p-7 sm:p-9">
              <p>For 25 years, Sumathi IT has supported businesses, institutions and organisations with reliable ICT solutions, enterprise technology services, system integration, end-user devices, repair services, UAV technologies, GNSS solutions, BIM, scanning solutions and software services. Over the years, the company has continued to grow with the changing needs of Sri Lanka’s business and technology landscape.</p>
              <p className="mt-5">As part of the Sumathi Holdings Group, Sumathi IT has built its reputation on service reliability, technical expertise and long-term customer relationships. The company has worked closely with clients across different industries, helping them improve operations, strengthen infrastructure and adopt technology solutions that support business growth.</p>
            </AnimatedSection>

            <AnimatedSection variant="pop" className="relative overflow-hidden rounded-card border border-gold-100 bg-gold-50 p-7 sm:p-9">
              <Quote className="h-10 w-10 text-gold-500" />
              <blockquote className="mt-5 text-xl font-medium leading-9 text-navy-950">
                “Reaching 25 years is a proud moment for everyone connected to Sumathi IT. This milestone reflects the trust placed in us by our clients, partners, employees and the Sumathi Holdings family.”
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-gold-700">Chandima Wickramatunge, Group CEO – IT Cluster, Sumathi Holdings</p>
            </AnimatedSection>

            <AnimatedSection variant="pop" className="premium-card p-7 sm:p-9">
              <p>We are sincerely grateful to every client who has worked with us and supported our journey. As technology continues to evolve, Sumathi IT remains committed to delivering reliable solutions, strengthening client partnerships and contributing to Sri Lanka’s digital future.</p>
              <p className="mt-5">From ICT infrastructure and enterprise networking to geospatial technologies and technical support services, Sumathi IT continues to focus on delivering practical, scalable and dependable technology solutions. The company’s growth has been shaped by its ability to adapt to new technologies while maintaining a strong commitment to customer service.</p>
              <p className="mt-5">The 25th anniversary is also a moment to recognise the people behind Sumathi IT. The company’s engineers, technical teams, consultants, service staff and management have all contributed to its progress. Their dedication has helped Sumathi IT earn the confidence of clients and maintain its position as a reliable technology partner in Sri Lanka.</p>
            </AnimatedSection>

            <AnimatedSection variant="pop" className="rounded-card bg-[#111111] p-7 text-white shadow-soft sm:p-9">
              <p>Sumathi IT’s continued partnerships with leading global technology brands have further strengthened its capabilities in enterprise IT solutions. Its recognition as Sri Lanka’s only HPE Gold Partner for Networking in 2026 highlights the company’s commitment to advanced networking, infrastructure solutions and service excellence.</p>
              <p className="mt-5">As Sumathi IT celebrates 25 years of service, the company extends its sincere appreciation to all clients, business partners, technology principals, employees and the wider Sumathi Holdings family for their valuable contribution to this journey.</p>
            </AnimatedSection>

            <AnimatedSection variant="pop" className="premium-card p-7 sm:p-9">
              <p>Looking ahead, Sumathi IT remains focused on delivering future-ready IT solutions in Sri Lanka. With 25 years of experience, strong technical capability and a clear commitment to innovation, the company is ready to support businesses as they continue to transform, modernise and grow.</p>
              <p className="mt-5 font-semibold text-navy-950">Sumathi IT proudly celebrates 25 years of trust, technology and service excellence — and looks forward to continuing its role as a dependable technology solutions partner for Sri Lanka’s future.</p>
            </AnimatedSection>
          </article>
        </div>
      </section>
      <CtaBand title="Continue the next chapter with Sumathi IT" description="Connect with Sumathi IT for future-ready enterprise IT, UAV, geospatial and system integration solutions." />
    </>
  );
}
