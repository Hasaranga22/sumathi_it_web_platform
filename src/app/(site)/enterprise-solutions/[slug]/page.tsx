import { notFound } from "next/navigation";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { enterpriseSolutions } from "@/data/enterprise-solutions";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroBlock } from "@/components/sections/HeroBlock";
import { CtaBand } from "@/components/sections/CtaBand";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { SolutionShowcaseBand } from "@/components/sections/SolutionShowcaseBand";
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

/* ---------------------------------------------------------------------
 * Datacenter capability grid — sourced from "Our Datacenter Solutions"
 * --------------------------------------------------------------------- */
const datacenterCapabilities = [
  {
    title: "Infrastructure Solutions",
    points: ["Servers, Storage, Virtualization", "Data Center Design"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    ),
  },
  {
    title: "Cloud Solutions",
    points: ["Private / Hybrid / Public Cloud", "Migration & Optimization"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    ),
  },
  {
    title: "Backup & Disaster Recovery",
    points: ["Data Protection", "Business Continuity"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: "End Use Computing (EUC)",
    points: ["Secure application delivery", "Virtual desktop infrastructure"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: "Managed Service",
    points: ["Premium: 24x7 service", "Standard: 8x5 service", "Customized service"],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
  },
  {
    title: "AMC",
    points: ["Annual Maintenance Contracts for comprehensive infrastructure support and lifecycle management."],
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
  },
];

/* ---------------------------------------------------------------------
 * Technology partner logos — extracted from "Key Technologies We Work
 * With". Drop the matching files into
 * /public/images/enterprise solutions/data-center/partner-logos/.
 * --------------------------------------------------------------------- */
const PARTNER_LOGO_PATH = "/images/enterprise%20solutions/data-center/partner-logos";

const partnerCategories = [
  {
    label: "Cloud Platforms",
    logos: [
      { name: "Oracle Cloud Infrastructure", file: "oracle-cloud.png" },
      { name: "Microsoft Azure", file: "microsoft-azure.png" },
      { name: "Amazon Web Services", file: "aws.png" },
    ],
  },
  {
    label: "Software & Virtualization",
    logos: [
      { name: "VMware", file: "vmware.png" },
      { name: "Nutanix", file: "nutanix.png" },
      { name: "Red Hat", file: "redhat.jpg" },
      { name: "Proxmox", file: "proxmox.jpg" },
      { name: "Omnissa", file: "omnissa.jpg" },
      { name: "Virtuozzo", file: "virtuozzo.png" },
      { name: "Sangfor", file: "sangfor.png" },
    ],
  },
  {
    label: "Servers & Storage",
    logos: [
      { name: "Dell Technologies", file: "dell.png" },
      { name: "HPE", file: "hpe.png" },
      { name: "Lenovo", file: "lenovo.png" },
      { name: "IBM", file: "ibm.png" },
      { name: "Huawei", file: "huawei.png" },
      { name: "H3C", file: "h3c.jpg" },
      { name: "NetApp", file: "netapp.png" },
      { name: "Synology", file: "synology.png" },
      { name: "Tandberg", file: "tandberg.png" },
    ],
  },
  {
    label: "Backup & Disaster Recovery",
    logos: [
      { name: "Veeam", file: "veeam.jpg" },
      { name: "Commvault", file: "commvault.png" },
      { name: "Cohesity", file: "cohesity.png" },
      { name: "Nakivo", file: "nakivo.png" },
    ],
  },
];

const allPartnerLogos = partnerCategories.flatMap((category) => category.logos);

const gpuBenefits = [
  { stat: "10x–100x", label: "Faster AI/ML model training vs. CPU-only clusters" },
  { stat: "Real-time", label: "Inference and analytics at production scale" },
  { stat: "LLM-ready", label: "Built for large-scale vision, NLP and generative workloads" },
];

// Real vendor logos instead of letter-avatars. Files already exist in
// the partner-logos folder (used above in "Servers & Storage").
const leadingPlatforms = [
  { name: "Dell Technologies", detail: "PowerEdge XE / R760xa", file: "dell.png" },
  { name: "Hewlett-Packard Enterprise", detail: "Apollo / ProLiant", file: "hpe.png" },
  { name: "Lenovo", detail: "ThinkSystem SR675 / SR670", file: "lenovo.png" },
  { name: "H3C", detail: "UniServer R5300 G5 / R4900 G5", file: "h3c.jpg" },
];

function SectionEyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-white/80" : "text-brand-purple"}`}>
      {children}
    </span>
  );
}

export default async function EnterpriseSolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = enterpriseSolutions.find((item) => item.slug === slug);
  if (!solution) notFound();
  const related = enterpriseSolutions.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[{ label: "Enterprise Solutions", href: "/enterprise-solutions" }, { label: solution.title }]} />
      <HeroBlock eyebrow="Enterprise Solution" title={solution.title} description={solution.summary} image={solution.image} useVideo={true} />

      <section className="section-padding relative bg-white">
        {/* Decorative background — no longer eagerly loaded, it's below the fold on slow connections and was competing with the hero for bandwidth */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background/Back_ground_visual.png"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            loading="lazy"
            quality={50}
            aria-hidden="true"
          />
        </div>
        <div className="container-padded relative z-10">
          <AnimatedSection variant="pop">
            <div className="prose prose-lg max-w-none text-slate-700">
              {solution.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 leading-8">{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <SolutionShowcaseBand
        eyebrow="In the Field"
        title={`${solution.title} deployments, done right.`}
        description="From planning to go-live, our engineers deliver every deployment with the same precision and care every enterprise client expects."
        image={solution.bannerImage}
        imageAlt={`${solution.title} deployment by Sumathi IT`}
      />

      {/* Data Center Solutions Specific Sections */}
      {slug === "data-center-solution" && (
        <>
          {/* Our Datacenter Solutions Section */}
          <section className="section-padding bg-white">
            <div className="container-padded">
              <AnimatedSection variant="pop">
                <SectionEyebrow>What we deliver</SectionEyebrow>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-navy-950 mb-12">
                  Our Datacenter Solutions
                </h2>
              </AnimatedSection>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {datacenterCapabilities.map((capability, index) => (
                  <AnimatedSection
                    key={capability.title}
                    variant="pop"
                    delay={index * 0.08}
                    className="premium-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    {/* Icon: background chip removed per feedback, size bumped up so it reads as a real visual anchor */}
                    <div className="mb-4 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <svg className="h-10 w-10 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {capability.icon}
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-navy-950 mb-3">{capability.title}</h3>
                    <ul className="space-y-2 text-slate-600">
                      {capability.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="text-brand-purple mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-purple/5 transition-transform duration-500 group-hover:scale-150" />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Partners Section — real vendor logos, given room to breathe */}
          <section className="section-padding bg-slate-50">
            <div className="container-padded">
              <AnimatedSection variant="pop">
                <div className="text-center mb-4">
                  <SectionEyebrow>Key technologies we work with</SectionEyebrow>
                </div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-navy-950 mb-4 text-center">
                  Technology Partners
                </h2>
                <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
                  We partner with industry-leading technology providers across cloud, virtualization, compute,
                  storage and data protection to deliver best-in-class data center solutions.
                </p>
              </AnimatedSection>

              <div className="space-y-14">
                {partnerCategories.map((category, categoryIndex) => (
                  <AnimatedSection key={category.label} variant="pop" delay={categoryIndex * 0.1}>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-950/70 mb-6">
                      {category.label}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
                      {category.logos.map((logo, logoIndex) => (
                        <AnimatedSection
                          key={logo.name}
                          variant="pop"
                          delay={categoryIndex * 0.1 + logoIndex * 0.04}
                          className="group flex h-24 items-center justify-center rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                          <div className="relative h-full w-full opacity-90 transition-all duration-300 group-hover:opacity-100 flex items-center justify-center">
                            <Image
                              src={`${PARTNER_LOGO_PATH}/${logo.file}`}
                              alt={logo.name}
                              fill
                              loading="lazy"
                              className="object-contain"
                              sizes="(min-width: 1024px) 160px, (min-width: 640px) 22vw, 40vw"
                            />
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Continuous logo marquee for ambient motion */}
              <div className="partner-marquee-mask mt-28 border-t border-slate-200 pt-10 overflow-hidden">
                <div className="partner-marquee flex w-max items-center gap-16">
                  {[...allPartnerLogos, ...allPartnerLogos].map((logo, index) => (
                    <div key={`${logo.name}-${index}`} className="relative h-9 w-28 flex-shrink-0 opacity-60 flex items-center justify-center">
                      <Image
                        src={`${PARTNER_LOGO_PATH}/${logo.file}`}
                        alt=""
                        fill
                        loading="lazy"
                        className="object-contain"
                        sizes="120px"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <style>{`
                .partner-marquee-mask {
                  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
                  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
                }
                .partner-marquee {
                  animation: partner-marquee-scroll 34s linear infinite;
                }
                .partner-marquee-mask:hover .partner-marquee {
                  animation-play-state: paused;
                }
                @keyframes partner-marquee-scroll {
                  from { transform: translateX(0); }
                  to { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                  .partner-marquee { animation: none; }
                }
              `}</style>
            </div>
          </section>

          {/* AI Infrastructure Platform Section */}
          <section className="section-padding relative overflow-hidden bg-navy-950">
            <div
              className="pointer-events-none absolute inset-0 z-0 bg-scroll bg-cover bg-center opacity-[0.35] md:bg-fixed"
              style={{
                backgroundImage:
                  "url('/images/enterprise%20solutions/data-center/partner-logos/ai%20infa%20background.png')",
              }}
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-navy-950/60" aria-hidden="true" />
            <div className="container-padded relative z-10">
              <AnimatedSection variant="pop">
                <SectionEyebrow light>Built for what&apos;s next</SectionEyebrow>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white mb-4">
                  AI Infrastructure Platform
                </h2>
                <p className="text-slate-300 max-w-2xl">
                  Accelerate your AI initiatives with purpose-built infrastructure designed for machine learning
                  and deep learning workloads.
                </p>
              </AnimatedSection>

              <div className="mt-16 grid gap-10 lg:grid-cols-2">
                {/*
                  Cards are now a solid, mostly-opaque navy panel
                  (bg-navy-950/85 + backdrop-blur-md) instead of a barely-
                  there bg-white/5. With the busy circuit-board background
                  image behind them, a near-transparent card let that
                  artwork show straight through and wash out the light
                  text — that was the legibility bug. A solid dark panel
                  blocks the noise and gives the white/slate-100 text a
                  clean, consistent surface to sit on.
                */}
                <AnimatedSection
                  variant="pop"
                  delay={0.08}
                  className="rounded-2xl border border-white/10 bg-navy-950/85 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-navy-950/95 hover:border-brand-purple/30"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">Why GPU Servers?</h3>
                  <ul className="space-y-6">
                    {gpuBenefits.map((benefit) => (
                      <li key={benefit.label} className="flex items-start gap-4">
                        <span className="flex-shrink-0 rounded-full bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white">
                          {benefit.stat}
                        </span>
                        <span className="text-slate-100 leading-relaxed">{benefit.label}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>

                <AnimatedSection
                  variant="pop"
                  delay={0.16}
                  className="rounded-2xl border border-white/10 bg-navy-950/85 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-navy-950/95 hover:border-brand-purple/30"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">Leading Platforms</h3>
                  <div className="divide-y divide-white/10">
                    {leadingPlatforms.map((platform, index) => (
                      <AnimatedSection
                        key={platform.name}
                        variant="pop"
                        delay={0.2 + index * 0.08}
                        className="group flex items-center gap-5 py-5 first:pt-0 last:pb-0 transition-all duration-300"
                      >
                        <div className="relative h-11 w-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                          <Image
                            src={`${PARTNER_LOGO_PATH}/${platform.file}`}
                            alt={platform.name}
                            fill
                            loading="lazy"
                            className="object-contain"
                            sizes="80px"
                          />
                        </div>
                        <div>
                          <p className="text-white font-semibold leading-tight">{platform.name}</p>
                          <p className="text-slate-400 text-sm mt-1">{platform.detail}</p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </>
      )}

      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <AnimatedSection variant="pop" className="h-full">
            <div className="premium-card flex h-full flex-col p-7 transition-shadow duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-navy-950">Key benefits</h2>
              <div className="mt-6">
                <AnimatedList items={solution.benefits} />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" delay={0.08} className="h-full">
            <div className="premium-card flex h-full flex-col p-7 transition-shadow duration-300 hover:shadow-lg">
              <h2 className="text-2xl font-semibold text-navy-950">Industries served</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {solution.industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full bg-brand-lavender px-4 py-2 text-sm font-medium text-brand-purple transition-transform duration-200 hover:scale-105"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-600">
                Each deployment can be tailored for performance, security, compliance, uptime and long-term support requirements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded">
          <AnimatedSection variant="pop">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-navy-950">Related solutions</h2>
          </AnimatedSection>
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