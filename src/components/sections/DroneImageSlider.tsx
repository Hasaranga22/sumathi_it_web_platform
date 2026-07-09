"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { cn } from "@/lib/utils";

export type DroneSlide = {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
};

// Dummy placeholders — replace `image` with your uploaded photography.
// Slide copy already reflects the real drone use-cases you provided.
const defaultSlides: DroneSlide[] = [
  {
    image: "/images/uav/slider-agriculture.svg",
    eyebrow: "Agriculture",
    title: "Revolutionizing agave farming with Agras T50",
    text: "Agave, the resilient desert plant behind tequila, is grown across Jalisco's Tequila region. Precision spraying drones cut input waste while keeping crews out of harsh field conditions."
  },
  {
    image: "/images/uav/slider-mapping.svg",
    eyebrow: "Mapping",
    title: "Field-ready mapping for every terrain",
    text: "From orchard rows to open plots, automated flight paths turn raw aerial imagery into usable survey and inspection data in a fraction of the time."
  },
  {
    image: "/images/uav/slider-inspection.svg",
    eyebrow: "Inspection",
    title: "Consistent, repeatable inspection flights",
    text: "Dock-based and enterprise platforms fly the same mission every time, so infrastructure and crop health data stays comparable season over season."
  },
  {
    image: "/images/uav/slider-publicsafety.svg",
    eyebrow: "Public safety",
    title: "Rapid response from the air",
    text: "Enterprise UAVs support emergency teams with fast deployment, live feeds, and thermal payloads when minutes matter."
  }
];

export function DroneImageSlider({
  slides = defaultSlides,
  intervalMs = 5000
}: {
  slides?: DroneSlide[];
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  const current = slides[active];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-padded">
        <AnimatedSection variant="pop">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-navy-950 shadow-card">
            <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/10" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                      {current.eyebrow}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                      {current.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-blue-100/85 md:text-base">
                      {current.text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-navy-950 py-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.image}
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    index === active ? "w-8 bg-[var(--gold)]" : "w-4 bg-white/25 hover:bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
        <p className="mt-3 text-xs text-slate-400">
          Placeholder imagery — swap the SVGs in <code className="text-slate-500">public/images/uav/slider-*.svg</code> for your uploaded drone photography.
        </p>
      </div>
    </section>
  );
}