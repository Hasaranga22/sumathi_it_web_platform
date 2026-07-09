"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { ButtonLink } from "@/components/common/ButtonLink";

const missionSlides = [
  {
    label: "Our Mission",
    text: "We go into every engagement to be genuine and thorough, not to sell the biggest package. Good IT work is invisible \u2014 you only notice it when it's missing.",
  },
  {
    label: "Our Promise",
    text: "Mistakes happen, to everyone. When something breaks, we're already on the call fixing it \u2014 no blame games, no billing surprises.",
  },
  {
    label: "Our Approach",
    text: "We size every solution to the problem in front of you, then build in room to grow, so today's fix doesn't become tomorrow's bottleneck.",
  },
];

const checklist = [
  "Certified engineers across every major vendor stack",
  "Solutions scoped around your business, not our shelf",
  "Support that stays engaged long after go-live",
];

export function LegacyBand() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setActive((prev) => (prev + 1) % missionSlides.length);
  const prev = () => setActive((prev) => (prev - 1 + missionSlides.length) % missionSlides.length);

  // Auto-transition through Mission / Promise / Approach, pauses while hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % missionSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-padded">
        {/* Header row */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <AnimatedSection variant="slide-right" className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-purple">
              Three Decades of Delivery
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.15] text-navy-950 sm:text-4xl lg:text-5xl">
              Done right, with <span className="text-brand-purple">precision and care.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.1} className="lg:col-span-5">
            <p className="text-base leading-8 text-slate-600">
              For over 30 years, Sumathi IT has been the technology partner Sri Lankan
              enterprises turn to when systems absolutely have to work. We don&apos;t just
              install infrastructure &mdash; we stay accountable for it.
            </p>
          </AnimatedSection>
        </div>

        {/* Image + mission card */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <AnimatedSection variant="pop" className="relative lg:col-span-7">
            <div className="relative h-[320px] overflow-hidden rounded-card shadow-soft sm:h-[420px] lg:h-full lg:min-h-[440px]">
              <Image
                src="/images/about/legacy-team.jpg"
                alt="Sumathi IT engineers collaborating on a client deployment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-transparent" />
            </div>

            {/* Experience badge - static, no float/pulse animation */}
            <div className="absolute -bottom-6 left-6 z-10 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-card sm:left-10">
              <span className="text-3xl font-bold leading-none text-brand-purple">30+</span>
              <span className="text-[11px] font-semibold uppercase leading-tight tracking-wide text-slate-500">
                Years of
                <br />
                IT Excellence
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slide-left" delay={0.1} className="flex lg:col-span-5">
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="relative flex w-full flex-col justify-between overflow-hidden rounded-card bg-gradient-to-br from-brand-purple to-navy-950 p-8 text-white sm:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl"
              />
              <Quote className="h-9 w-9 text-white/30" strokeWidth={1.5} />

              <div className="mt-6 min-h-[168px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <h3 className="text-lg font-semibold">{missionSlides[active].label}</h3>
                    <p className="mt-3 text-sm leading-7 text-blue-50/90">
                      {missionSlides[active].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {missionSlides.map((slide, index) => (
                    <button
                      key={slide.label}
                      onClick={() => setActive(index)}
                      aria-label={`Show ${slide.label}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === active ? "w-6 bg-white" : "w-1.5 bg-white/30"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition hover:bg-white/10"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition hover:bg-white/10"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Supporting copy + checklist + CTA */}
        <div className="mt-10 grid gap-8 border-t border-slate-200 pt-8 lg:grid-cols-12">
          <AnimatedSection variant="fade-up" className="lg:col-span-7">
            <p className="text-sm leading-7 text-slate-600">
              With over three decades of proven excellence, Sumathi System Integration
              Solutions has earned its place as one of Sri Lanka&apos;s most trusted
              technology partners. Every engagement is handled by engineers who&apos;ve
              seen the edge cases before &mdash; so your systems stay online when it
              matters most.
            </p>
            <div className="mt-6">
              <AnimatedList items={checklist} />
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.1} className="flex items-end lg:col-span-5 lg:justify-end">
            <ButtonLink href="/about-us">Read More About Us</ButtonLink>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}