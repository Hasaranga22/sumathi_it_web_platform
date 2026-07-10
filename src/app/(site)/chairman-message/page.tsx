import Image from "next/image";

import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnniversaryCelebration } from "@/components/sections/AnniversaryCelebration";

export const metadata = buildMetadata({
  title: "25th Anniversary Message",
  description:
    "Sumathi IT celebrates 25 years of trusted technology solutions, service excellence, enterprise IT capability, UAV technologies, and customer partnerships in Sri Lanka.",
  path: "/chairman-message",
  keywords: ["Sumathi IT 25 anniversary", "25 years technology solutions Sri Lanka", "Sumathi IT chairman message"]
});


export default function ChairmanMessagePage() {
  return (
    <>

      <AnniversaryCelebration logoSrc="/images/logo/logo_white.png" companyName="Sumathi IT" years={25}>
        <section className="section-padding bg-white">
          <div className="container-padded grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="space-y-5">
              <AnimatedSection
                variant="pop"
                className="rounded-card border border-gold-100 bg-white p-6 text-center shadow-card"
              >
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-gold-200 sm:h-48 sm:w-48">
                  <Image src="/images/anniversary/ceo.jpg" alt="Chandima Wickramatunge" fill className="object-cover" />
                </div>

                <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold-300 text-sm font-semibold tracking-wide text-gold-600">
                  25
                </div>

                <h2 className="mt-3 text-2xl font-semibold text-navy-950">25 Years of Progress</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  A dedicated anniversary page honouring the trust, partnership and legacy built over
                  a quarter century.
                </p>
              </AnimatedSection>
            </aside>

            <article className="space-y-7 text-base leading-8 text-slate-700">
              <AnimatedSection variant="pop" className="premium-card p-7 sm:p-9">
                <p>
                  Dear valued clients, partners and members of the Sumathi Holdings family,
                </p>
                <p className="mt-5">
                  For 25 years, Sumathi IT has had the privilege of supporting businesses,
                  institutions and organisations across Sri Lanka with reliable ICT solutions,
                  enterprise technology services, system integration, end-user devices, repair
                  services, UAV technologies, GNSS solutions, BIM and scanning solutions, and
                  software services. Over the years, we have continued to grow alongside the
                  changing needs of the country&apos;s business and technology landscape.
                </p>
                <p className="mt-5">
                  As part of the Sumathi Holdings Group, we have built our reputation on service
                  reliability, technical expertise and long-term relationships. It has been our
                  honour to work closely with clients across many industries, helping them
                  strengthen their infrastructure, improve their operations and adopt technology
                  that supports lasting growth.
                </p>
              </AnimatedSection>

              <AnimatedSection
                variant="pop"
                className="relative rounded-card border-l-4 border-gold-400 bg-white p-7 shadow-card sm:p-9"
              >
                <span className="absolute -top-4 left-6 select-none font-serif text-6xl leading-none text-gold-300">
                  &ldquo;
                </span>
                <blockquote className="mt-3 text-xl font-medium leading-9 text-navy-950">
                  Reaching 25 years is a proud and humbling moment for everyone connected to
                  Sumathi IT. This milestone reflects the trust so generously placed in us by our
                  clients, our partners, our employees, and the wider Sumathi Holdings family.
                </blockquote>
                <p className="mt-5 text-sm font-semibold text-gold-700">
                  Chandima Wickramatunge, Group CEO – IT Cluster, Sumathi Holdings
                </p>
              </AnimatedSection>

              <AnimatedSection variant="pop" className="premium-card p-7 sm:p-9">
                <p>
                  We are sincerely grateful to every client who has walked this journey with us.
                  As technology continues to evolve, Sumathi IT remains committed to delivering
                  dependable solutions, deepening our client partnerships, and contributing
                  meaningfully to Sri Lanka&apos;s digital future.
                </p>
                <p className="mt-5">
                  From ICT infrastructure and enterprise networking to geospatial technologies and
                  technical support services, our focus continues to be practical, scalable and
                  dependable technology. Our growth has been shaped by our willingness to embrace
                  new technologies while never losing sight of the customer service that first
                  earned your trust.
                </p>
                <p className="mt-5">
                  This anniversary is also a moment to recognise the people behind Sumathi IT. Our
                  engineers, technical teams, consultants, service staff and management have each
                  contributed to this progress, and it is their dedication that has allowed us to
                  earn your confidence and remain a reliable technology partner in Sri Lanka.
                </p>
                <p className="mt-5">
                  Our continued partnerships with leading global technology brands have further
                  strengthened our capabilities in enterprise IT. We are proud that this recognised
                  us as Sri Lanka&apos;s only HPE Gold Partner for Networking in 2026, a reflection
                  of our commitment to advanced networking, infrastructure and service excellence.
                </p>
              </AnimatedSection>

              <AnimatedSection
                variant="pop"
                className="rounded-card border border-gold-100 bg-gold-50 p-7 sm:p-9"
              >
                <p>
                  Looking ahead, Sumathi IT remains focused on delivering future-ready IT
                  solutions for Sri Lanka. With 25 years of experience, strong technical
                  capability and a clear commitment to innovation, we are ready to support
                  businesses as they continue to transform, modernise and grow.
                </p>
                <div className="mt-6 h-px w-16 bg-gold-300" />
                <p className="mt-6 font-semibold text-navy-950">
                  With heartfelt thanks, Sumathi IT proudly celebrates 25 years of trust,
                  technology and service excellence, and looks forward to continuing as your
                  dependable technology partner for many years to come.
                </p>
              </AnimatedSection>
            </article>
          </div>
        </section>
      </AnniversaryCelebration>

      <CtaBand
        title="Continue the next chapter with Sumathi IT"
        description="Connect with Sumathi IT for future-ready enterprise IT, UAV, geospatial and system integration solutions."
      />
    </>
  );
}