"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroBlock } from "@/components/sections/HeroBlock";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { ImageTextBanner } from "@/components/sections/ImageTextBanner";
import { Wrench, Clock, Shield, CheckCircle2, Users, Award, FileText } from "lucide-react";

export function RepairServicingContent() {
  const processSteps = [
    "Submit a repair/service request online through our contact form",
    "Our team arranges a consultation call to discuss the issue and next steps",
    "For crash or physical damage, send drone to us for inspection and quote",
    "Repair plan executed with certified DJI technicians",
    "Quality testing and service report provided"
  ];

  const servicingFeatures = [
    "Full visual inspection of all drone components",
    "Functional and performance testing",
    "Latest firmware updates installed",
    "Comprehensive inspection/service report",
    "Recommendations for any additional repairs needed"
  ];

  const repairFeatures = [
    "DJI Enterprise and Agras range drone repairs",
    "Crash and physical damage assessment",
    "Gimbal and camera repair services",
    "Motor and ESC diagnostics and repair",
    "Flight controller and GPS module servicing"
  ];

  const registrationBadges = [
    "Business Registration",
    "VAT Registration",
    "MOD Registration",
    "CAASL Registration"
  ];

  const workshopGallery = [
    {
      image: "/images/uav/repair services/diagnostic.webp",
      alt: "Diagnostic equipment",
      title: "Diagnostic Tools",
      description: "DJI-recommended diagnostic equipment for precise, fast fault detection."
    },
    {
      image: "/images/uav/repair services/workstation drone.webp",
      alt: "Repair workstation",
      title: "Repair Workstations",
      description: "Dedicated benches equipped for detailed, component-level repairs."
    },
    {
      image: "/images/uav/repair services/drone test.jpg",
      alt: "Testing facility",
      title: "Testing Facility",
      description: "Rigorous flight and performance testing before every handover."
    }
  ];

  const statsData = [
    { value: 10, suffix: "", label: "Working Days", sub: "Standard turnaround" },
    { value: 2, suffix: "×", label: "Per Year", sub: "Recommended servicing" },
    { value: 100, suffix: "%", label: "DJI Scope", sub: "Enterprise & Agras" },
    { value: 25, suffix: "+", label: "Years", sub: "Technical expertise" }
  ];

  function StatCounter({ value, suffix, label, sub }: { value: number; suffix: string; label: string; sub: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible) return;
      const duration = 2000;
      const start = performance.now();

      let frame: number;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }, [isVisible, value]);

    return (
      <div ref={ref} className="text-center animate-in fade-in duration-1000">
        <div className="text-5xl font-normal text-white sm:text-6xl lg:text-7xl">
          {count}{suffix}
        </div>
        <div className="mt-2 text-sm font-medium uppercase tracking-widest text-gold-500">{label}</div>
        <div className="mt-1 text-sm text-slate-200">{sub}</div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs items={[
        { label: "Geospatial Solutions", href: "/uav-solutions" },
        { label: "Repair & Servicing" }
      ]} />

      <HeroBlock
        title="Repair & Servicing"
        description="Professional DJI drone repair, maintenance, and after-sales support. Sumathi IT - Geo Spatial Engineering Solutions provides in-house repair, maintenance, and after-sales support for DJI drone systems."
        image="/images/uav/repair services/drone test.jpg"
        primaryCta={{ label: "Contact Us for Service", href: "/contact-us" }}
        useVideo={true}
      />

      {/* How It Works — rebalanced: numbered timeline (left) vs framed image + floating badge (right) */}
      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader
            title="How It Works"
            description="Simple process to get your drone serviced or repaired"
          />

          <div className="mt-10 grid items-center gap-12 md:mt-14 md:grid-cols-2 md:gap-16">
            {/* Left - Numbered timeline */}
            <div className="flex h-full flex-col justify-center">
              <div className="relative space-y-8">
                <div
                  className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue/40 via-brand-purple/30 to-transparent"
                  aria-hidden="true"
                />
                {processSteps.map((step, index) => (
                  <AnimatedSection key={index} delay={index * 0.08} variant="pop">
                    <div className="relative flex items-start gap-5">
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-purple text-sm font-semibold text-white shadow-glow">
                        {index + 1}
                      </div>
                      <p className="pt-2 text-base leading-relaxed text-slate-600">{step}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Right - Image with decorative glow + floating info card */}
            <div className="relative flex h-full items-center justify-center">
              <div
                className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-brand-lavender/50 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-brand-blue/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-glow">
                <Image
                  src="/images/uav/repair services/how it works.png"
                  alt="Drone servicing and repair process"
                  width={1200}
                  height={1099}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band - Key Metrics */}
      <section className="relative overflow-hidden bg-brand-purple">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/90 via-brand-purple/80 to-brand-purple" />
        </div>
        <div className="container-padded relative py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {statsData.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} sub={stat.sub} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicing Packages */}
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            title="Servicing Packages"
            description="Regular maintenance to keep your drone performing at its best"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0.1} variant="pop">
              <div className="premium-card flex h-full flex-col overflow-hidden bg-white shadow-soft">
                <div className="flex-1 p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-brand-purple">
                    <Wrench className="h-9 w-9" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-navy-950">Basic & Standard Servicing</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Basic and Standard servicing packages available for each DJI enterprise-range drone model. Pricing depends on the drone model and scope of service required — a quote is provided based on your specific requirement.
                  </p>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    We recommend servicing your drone <strong className="text-navy-950">twice a year</strong> to maintain optimal performance.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} variant="pop">
              <div className="premium-card flex h-full flex-col overflow-hidden bg-white shadow-soft">
                <div className="flex-1 p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-brand-purple">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-navy-950">What&apos;s Included</h3>
                  <div className="mt-6">
                    <AnimatedList items={servicingFeatures} iconColor="text-brand-purple" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Repair & Crash Support - Image Banner */}
      <ImageTextBanner
        image="/images/uav/repair services/workstation drone.webp"
        eyebrow="Expert Repair"
        heading="Repair & Crash Support"
        text="Comprehensive repair services for DJI Enterprise and Agras range drones, including crash damage and physical repairs with certified technicians."
        align="left"
      />

      {/* Repair Services — rebalanced: left column now has heading + copy + list to match visual weight of the right image */}
      <section className="section-padding bg-white">
        <div className="container-padded">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <span className="inline-flex items-center rounded-full bg-brand-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-purple">
                Expert Repair Capabilities
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl">
                Repair Services
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                From minor component faults to full crash assessments, our certified
                technicians restore your DJI drone systems to manufacturer-spec
                performance using genuine parts and proper diagnostic procedures.
              </p>

              <div className="mt-8 border-t border-brand-line pt-8">
                <AnimatedList items={repairFeatures} iconColor="text-brand-blue" />
              </div>

              <div className="mt-8">
                <a
                  href="/contact-us"
                  className="inline-flex items-center rounded-full bg-brand-purple px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-brand-purpleDark"
                >
                  Get a Repair Quote
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <AnimatedSection delay={0.15} variant="pop">
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-brand-blue/15 blur-3xl"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-brand-purple/15 blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
                    <Image
                      src="/images/uav/repair services/DJI Drone Png.png"
                      alt="DJI drone repair components on workbench"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-full w-full object-contain p-4 transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Support */}
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            title="Warranty Support"
            description="Warranty services for drones purchased through Sumathi Information Technologies"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <AnimatedSection delay={0.1} variant="pop">
              <div className="premium-card flex h-full flex-col bg-white p-8 shadow-soft">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-brand-purple">
                  <Shield className="h-9 w-9" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy-950">Warranty Status Check</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  We offer a warranty status check and support service for drones purchased through Sumathi Information Technologies (Pvt) Ltd — contact us to confirm your drone&apos;s warranty status.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} variant="pop">
              <div className="premium-card flex h-full flex-col bg-white p-8 shadow-soft">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-brand-purple">
                  <FileText className="h-9 w-9" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy-950">Warranty Repairs</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Warranty repairs themselves are carried out following DJI&apos;s standard procedures with certified technicians and genuine parts.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Annual Maintenance Contract — background image shifted further left so watermark text isn't clipped, height trimmed slightly */}
      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader
            title="Annual Maintenance Contract"
            description="Ongoing scheduled servicing and support for your drone fleet"
          />
          <AnimatedSection delay={0.1} variant="pop">
            <div className="mt-8 relative min-h-[340px] overflow-hidden rounded-card bg-gradient-to-br from-brand-purple to-brand-purpleDark p-8 text-white shadow-glow sm:min-h-[400px] sm:p-12">
              <div className="absolute inset-0">
                <Image
                  src="/images/uav/repair services/amc.png"
                  alt="AMC background"
                  fill
                  sizes="100vw"
                  className="h-full w-full object-cover opacity-20"
                  style={{ objectPosition: "left -40px center" }}
                />
              </div>
              <div className="relative flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:gap-6 md:text-left">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <Clock className="h-10 w-10" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-semibold leading-snug">
                    Scheduled Maintenance for Your Fleet
                    <span className="ml-2 text-base font-medium text-slate-200">(AMC)</span>
                  </h3>
                  <p className="mt-4 text-slate-200 leading-relaxed">
                    AMC is available on request for customers who want ongoing scheduled servicing and support. Ensure your drone fleet stays operational with regular maintenance schedules, priority service, and dedicated support.
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start">
                    <a href="/contact-us" className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-brand-purple transition hover:bg-slate-100">
                      Contact Us to Enquire
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Sumathi IT — DJI logo enlarged, pushed further above the card, and given a higher z-index than the card itself */}
      <section className="section-padding relative overflow-hidden bg-slate-50">
        <div className="container-padded relative">
          <SectionHeader
            title="Why Choose Sumathi IT"
            description="Authorized DJI dealer with certified expertise"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0.1} variant="pop">
              <div className="premium-card flex h-full flex-col bg-white p-8 shadow-soft">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-brand-purple">
                  <Award className="h-9 w-9" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy-950">Certified Expertise</h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Authorized DJI Dealer in Sri Lanka",
                    "DJI-certified technicians and electronics specialists",
                    "Fully equipped testing facility with DJI-recommended diagnostic tools"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} variant="pop">
              <div className="premium-card relative z-0 flex h-full flex-col overflow-visible bg-white p-8 shadow-soft">
                {/* DJI badge - enlarged, floats further above the card, z-index raised above the card surface */}
                <div className="absolute -right-6 -top-16 z-30 flex h-32 w-32 items-center justify-center sm:-top-24 sm:h-52 sm:w-52">
                  <Image
                    src="/images/uav/repair services/dji logo.png"
                    alt="DJI Authorized Dealer"
                    fill
                    sizes="176px"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-brand-purple">
                  <Users className="h-9 w-9" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy-950">Fully Registered Service Center</h3>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {registrationBadges.map((badge) => (
                    <div key={badge} className="flex items-center gap-2 rounded-lg border border-brand-line bg-brand-soft px-4 py-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-blue" />
                      <span className="text-sm font-medium text-slate-700">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image Gallery - Workshop & Equipment — added captions with hover overlay for better UX */}
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            title="Our Workshop & Equipment"
            description="State-of-the-art facility with DJI-certified diagnostic tools"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {workshopGallery.map((item, index) => (
              <AnimatedSection key={item.alt} delay={index * 0.1} variant="pop">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-card shadow-soft">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-1 text-sm text-slate-200">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need Drone Repair or Servicing?"
        description="Contact us today to discuss your requirements and get a quote"
      />
    </>
  );
}
