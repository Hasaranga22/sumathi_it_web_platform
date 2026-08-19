"use client";

import Image from "next/image";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HeroBlock } from "@/components/sections/HeroBlock";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ImageTextBanner } from "@/components/sections/ImageTextBanner";
import { products } from "@/data/products";
import {
  ScanLine,
  Building2,
  Box,
  Ruler,
  FileCheck2,
  AlertTriangle,
  RefreshCw,
  Compass,
  CalendarClock,
  CircleDollarSign,
  Satellite,
  Users,
  Clock4,
  HardHat,
  Hammer,
  Landmark,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export function BimContent() {
  // Quick-nav capability pills shown floating beneath the hero
  const capabilityPills = [
    { icon: Box, label: "Revit BIM" },
    { icon: ScanLine, label: "Scan-to-BIM" },
    { icon: AlertTriangle, label: "Clash Detection" },
    { icon: CalendarClock, label: "4D BIM" },
    { icon: CircleDollarSign, label: "5D BIM" },
    { icon: Satellite, label: "Reality Capture" },
  ];

  // What BIM helps clients achieve
  const outcomes = [
    {
      icon: Box,
      title: "3D Visualization",
      description:
        "Clear 3D models for better understanding and decision making",
    },
    {
      icon: AlertTriangle,
      title: "Clash Detection",
      description:
        "Identify and resolve conflicts to avoid costly delays",
    },
    {
      icon: RefreshCw,
      title: "Reduced Rework",
      description:
        "Accurate models save valuable time",
    },
    {
      icon: Compass,
      title: "Better Coordination",
      description:
        "Aligned teams with centralized, data-rich information",
    },
    {
      icon: CalendarClock,
      title: "Construction Planning",
      description:
        "Plan sequences and resources with 4D scheduling",
    },
    {
      icon: CircleDollarSign,
      title: "Cost Visibility",
      description:
        "Improve cost control with 5D estimating and quantity takeoff",
    },
  ];

  // End-to-end BIM services
  const bimServices = [
    {
      icon: Box,
      title: "BIM Modelling (Revit)",
      description:
        "High-quality, intelligent 3D models using Revit, built to global standards.",
    },
    {
      icon: Clock4,
      title: "4D & 5D BIM",
      description:
        "Link models with time and cost for accurate planning, sequencing, and budgeting.",
    },
    {
      icon: ScanLine,
      title: "Scan-to-BIM",
      description:
        "Convert point clouds into accurate, parametric BIM models of existing structures.",
    },
    {
      icon: Satellite,
      title: "Reality Capture for BIM",
      description:
        "LiDAR, SLAM, and UAV capture for accurate as-built data and models.",
    },
    {
      icon: Users,
      title: "BIM Coordination",
      description:
        "Detect clashes, coordinate disciplines, and deliver coordinated, clash-free models.",
    },
    {
      icon: FileCheck2,
      title: "As-Built Documentation",
      description:
        "Create accurate as-built drawings and models for operations and maintenance.",
    },
  ];

  // Reality capture to BIM process
  const processSteps = [
    {
      image: "/images/uav/BIM/camera-drone.png",
      label: "LiDAR / SLAM / UAV Capture",
    },
    {
      image: "/images/uav/BIM/printing.png",
      label: "Point Cloud Processing",
    },
    {
      image: "/images/uav/BIM/building.png",
      label: "BIM Modelling",
    },
    {
      image: "/images/uav/BIM/mentoring.png",
      label: "Coordination & Validation",
    },
    {
      image: "/images/uav/BIM/document-file.png",
      label: "Drawings / Handover",
    },
  ];

  // Industries served
  const industries = [
    { icon: Landmark, label: "Architecture" },
    { icon: HardHat, label: "Construction" },
    { icon: Ruler, label: "Engineering" },
    { icon: Hammer, label: "Renovation" },
    { icon: Building2, label: "Existing Buildings" },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "UAV Solutions", href: "/uav-solutions" },
          { label: "BIM & Digital Construction" },
        ]}
      />

      {/* Hero */}
      <div className="relative">
        <HeroBlock
          eyebrow="BIM & Digital Construction"
          title="BIM & Digital Construction Solutions"
          description="Delivering coordinated, data-rich models for better decisions. From laser scan to BIM, we help you design, plan, build, and operate with confidence."
          image="/images/uav/banner-bim.jpg"
          primaryCta={{ label: "Talk to an Expert", href: "/contact-us" }}
          secondaryCta={{ label: "Explore Services", href: "#bim-services" }}
          useVideo={true}
        />

        {/* Floating capability pill bar */}
        <div className="container-padded relative z-10 -mt-10 hidden md:block">
          <AnimatedSection delay={0.1} variant="pop">
            <div className="premium-card grid grid-cols-3 gap-px overflow-hidden rounded-card bg-slate-100 shadow-soft sm:grid-cols-6">
              {capabilityPills.map((pill) => (
                <div
                  key={pill.label}
                  className="flex flex-col items-center gap-3 bg-white px-4 py-8 text-center transition hover:bg-brand-lavender/40"
                >
                  <pill.icon className="h-8 w-8 text-brand-purple" />
                  <span className="text-sm font-semibold text-navy-950">
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ========================================================= */}
      {/* WHAT BIM HELPS YOU ACHIEVE - EDITORIAL FRAME CARDS */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="container-padded">

          {/* Section Header */}
          <AnimatedSection delay={0.05} variant="fade-up">
            <div className="mx-auto max-w-3xl text-center">

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
                What BIM Helps You Achieve
              </span>

              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-navy-950 sm:text-5xl">
                Smarter Projects.{" "}
                <span className="text-brand-purple">
                  Better Outcomes.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                A single source of truth that keeps design, construction,
                and operations teams aligned.
              </p>
            </div>
          </AnimatedSection>

          {/* ===================================================== */}
          {/* FEATURE GRID */}
          {/* ===================================================== */}

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, index) => (
              <AnimatedSection
                key={item.title}
                delay={0.1 + index * 0.08}
                variant="fade-up"
              >
                <article
                  className="
              group relative isolate
              min-h-[290px]
              overflow-hidden
              rounded-xl
              border-[1.5px] border-slate-300
              bg-white
              px-7 py-7
              transition-colors duration-500
              hover:border-brand-purple/40
              motion-reduce:transition-none
            "
                >
                  {/* ================================================= */}
                  {/* PURPLE HOVER CIRCLE */}
                  {/* ================================================= */}

                  <div
                    aria-hidden="true"
                    className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                border-[1.5px]
                border-brand-purple/60
                bg-brand-purple/[0.035]
                opacity-0
                scale-50
                translate-x-8
                -translate-y-8
                transition-all
                duration-700
                ease-out
                group-hover:scale-100
                group-hover:translate-x-0
                group-hover:translate-y-0
                group-hover:opacity-100
                motion-reduce:transition-none
              "
                  />

                  {/* Second subtle circle */}
                  <div
                    aria-hidden="true"
                    className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-80
                w-80
                rounded-full
                border
                border-brand-purple/10
                opacity-0
                scale-75
                transition-all
                duration-[1000ms]
                ease-out
                group-hover:scale-100
                group-hover:opacity-100
                motion-reduce:transition-none
              "
                  />

                  {/* ================================================= */}
                  {/* CARD CONTENT */}
                  {/* ================================================= */}

                  <div className="relative z-10 flex h-full flex-col">

                    {/* Top Row */}
                    <div className="flex items-start justify-between">

                      {/* Icon */}
                      <div
                        className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    text-navy-950
                    transition-all
                    duration-500
                    group-hover:border-brand-purple
                    group-hover:text-brand-purple
                    group-hover:rotate-[-4deg]
                    motion-reduce:transition-none
                    motion-reduce:transform-none
                  "
                      >
                        {/* Small purple orbit */}
                        <span
                          aria-hidden="true"
                          className="
                      absolute
                      inset-[-5px]
                      rounded-full
                      border
                      border-brand-purple/0
                      transition-all
                      duration-500
                      group-hover:inset-[-8px]
                      group-hover:border-brand-purple/30
                      motion-reduce:transition-none
                    "
                        />

                        <item.icon className="relative h-6 w-6" />
                      </div>

                      {/* Number */}
                      <div className="relative flex flex-col items-end">
                        <span
                          className="
                      text-3xl
                      font-light
                      leading-none
                      tracking-tight
                      text-slate-300
                      transition-colors
                      duration-500
                      group-hover:text-brand-purple/70
                    "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className="
                      mt-2
                      h-px
                      w-7
                      bg-slate-300
                      transition-all
                      duration-500
                      group-hover:w-12
                      group-hover:bg-brand-purple
                    "
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-auto pt-16">

                      <h3
                        className="
                    text-xl
                    font-semibold
                    tracking-tight
                    text-navy-950
                    transition-colors
                    duration-300
                    group-hover:text-brand-purple
                  "
                      >
                        {item.title}
                      </h3>

                      {/* Editorial divider */}
                      <div className="mt-4 flex items-center gap-3">
                        <span
                          className="
                      h-px
                      w-8
                      bg-navy-950
                      transition-all
                      duration-500
                      group-hover:w-14
                      group-hover:bg-brand-purple
                    "
                        />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          BIM Advantage
                        </span>
                      </div>

                      <p
                        className="
                    mt-4
                    max-w-sm
                    text-sm
                    leading-6
                    text-slate-600
                  "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom corner detail */}
                    <div
                      aria-hidden="true"
                      className="
                  absolute
                  bottom-0
                  right-0
                  h-3
                  w-3
                  border-b
                  border-r
                  border-slate-300
                  transition-colors
                  duration-500
                  group-hover:border-brand-purple
                "
                    />

                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* ===================================================== */}
          {/* BOTTOM STATEMENT */}
          {/* ===================================================== */}

          
        </div>
      </section>

      {/* Expert BIM Support - Image Banner */}
      <ImageTextBanner
        image="/images/uav/BIM/bim-2.jpg"
        eyebrow="Expert Support"
        heading="BIM Consulting & Implementation"
        text="Comprehensive BIM consulting services to help your organization adopt digital construction workflows, from strategy development to full implementation and team training."
        align="left"
      />

      {/* End-to-End BIM Services */}
      <section id="bim-services" className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Our BIM Services"
            title="End-to-End BIM Services for Every Project Stage"
            description="From reality capture to as-built handover, every service your project needs in one place"
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bimServices.map((service, index) => (
              <AnimatedSection
                key={service.title}
                delay={index * 0.08}
                variant="pop"
              >
                <div className="premium-card flex h-full flex-col bg-white p-9 shadow-soft">
                  <service.icon className="h-10 w-10 text-brand-purple" />

                  <h3 className="mt-5 text-lg font-semibold text-navy-950">
                    {service.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* From Reality Capture to BIM - process flow */}
      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Our Process"
            title="From Reality Capture to BIM"
            description="A clear, repeatable workflow that takes you from site to model to drawings"
            align="center"
          />

          <div className="mt-16">
            <div className="relative flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-4">
              {/* Dashed connector line */}
              <div className="absolute left-0 right-0 top-10 hidden border-t-2 border-dashed border-brand-lavender md:block" />

              {processSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="relative flex flex-col items-center gap-3 text-center md:w-40"
                >
                  <AnimatedSection
                    delay={index * 0.12}
                    variant="fade-up"
                  >
                    <div className="relative z-10 flex items-center justify-center">
                      <Image
                        src={step.image}
                        alt={step.label}
                        width={80}
                        height={80}
                        className="h-20 w-20 object-contain"
                      />
                    </div>
                  </AnimatedSection>

                  <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
                    Step {index + 1}
                  </span>

                  <p className="text-sm font-semibold text-navy-950">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scan-to-BIM feature banner */}
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <AnimatedSection delay={0.1} variant="pop">
            <div className="grid overflow-hidden rounded-card shadow-soft lg:grid-cols-2">
              <div className="relative min-h-[320px] overflow-hidden bg-navy-950">
                <Image
                  src="/images/uav/BIM/bim model.png"
                  alt="Point cloud converted into a BIM wireframe model"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center bg-white p-8 sm:p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">
                  Scan-to-BIM
                </span>

                <h3 className="mt-6 text-2xl font-semibold text-navy-950">What&apos;s Included</h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Our Scan-to-BIM services convert laser scan data into
                  accurate 3D models — perfect for renovation, retrofit, and
                  documentation of existing buildings.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "High accuracy",
                    "Faster turnaround",
                    "Data you can trust",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-sm font-medium text-navy-950"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-6 py-3 font-semibold text-white transition hover:bg-brand-purpleDark"
                  >
                    Explore Scan-to-BIM
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INDUSTRIES WE SERVE - REDESIGNED */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-navy-950 py-20 md:py-28">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/[0.04]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/[0.04]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl"
        />

        <div className="container-padded relative">
          {/* Header */}
          <AnimatedSection delay={0.05} variant="fade-up">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-purple" />

                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-purple">
                    Industries We Serve
                  </span>
                </div>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Built for
                  <br />
                  <span className="text-white/45">Every Industry.</span>
                </h2>
              </div>

              <div className="max-w-md">
                <div className="mb-4 flex items-center gap-2 text-brand-purple">
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    Built Around Your Workflow
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                  We offer a warranty status check and support service for drones purchased through Sumathi Information Technologies (Pvt) Ltd — contact us to confirm your drone&apos;s warranty status.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Industry directory */}
          <div className="mt-14 border-t border-white/10">
            {industries.map((industry, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <AnimatedSection
                  key={industry.label}
                  delay={0.1 + index * 0.08}
                  variant="fade-up"
                >
                  <div className="group relative flex min-h-[110px] items-center border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.035]">
                    {/* Number */}
                    <div className="w-16 shrink-0 sm:w-24">
                      <span className="text-sm font-bold tracking-[0.15em] text-white/25 transition-colors duration-300 group-hover:text-brand-purple">
                        {number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mr-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-500 group-hover:border-brand-purple/50 group-hover:bg-brand-purple group-hover:text-white sm:mr-8 sm:h-14 sm:w-14">
                      <industry.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    {/* Industry name */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-2xl font-medium tracking-tight text-white/75 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white sm:text-3xl lg:text-4xl">
                        {industry.label}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:border-brand-purple/50 group-hover:bg-brand-purple group-hover:text-white sm:h-12 sm:w-12">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>

                    {/* Bottom hover line */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-brand-purple transition-all duration-700 group-hover:w-full" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Bottom statement */}
          <AnimatedSection delay={0.5} variant="fade-up">
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-relaxed text-white/40">
                One digital construction approach. Different project
                requirements. Our workflows scale with your needs.
              </p>

              <a
                href="/contact-us"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                Discuss your project
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-brand-purple group-hover:bg-brand-purple">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================================= */}
      {/* BIM PRODUCTS & SERVICES */}
      {/* ========================================================= */}

      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Our BIM Services"
            title="BIM Solutions & Services"
            description="Comprehensive BIM services and solutions for every stage of your project"
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {products
              .filter((product) => product.category === "bim")
              .map((product, index) => (
                <AnimatedSection
                  key={product.slug}
                  delay={index * 0.1}
                  variant="fade-up"
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-purple/30 hover:shadow-lg hover:shadow-brand-purple/10 md:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                      {/* Image */}
                      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 md:h-32 md:w-32">
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          fill
                          sizes="(min-width: 768px) 128px, 100vw"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-navy-950 md:text-xl">
                          {product.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {product.summary}
                        </p>

                        {/* Features */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {product.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center rounded-full bg-brand-lavender/40 px-3 py-1 text-xs font-medium text-brand-purple"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        <a
                          href={`/products/${product.slug}`}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:gap-3"
                        >
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Transform Your Project with Scan-to-BIM?"
        description="Contact us today to discuss your reality capture requirements and get started with accurate as-built documentation"
      />
    </>
  );
}
