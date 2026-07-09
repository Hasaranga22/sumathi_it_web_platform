"use client";

import { AnimatedSection } from "@/components/common/AnimatedSection";

export function CategoryVideoHeader({
  videoUrl,
  poster,
  eyebrow,
  title,
  description
}: {
  videoUrl: string;
  poster?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-navy-950">
      <div className="relative aspect-[16/7] w-full min-h-[340px] md:min-h-[460px]">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-transparent" />

        <div className="container-padded relative z-10 flex h-full items-end pb-10 md:pb-14">
          <AnimatedSection variant="slide-right">
            <div className="max-w-2xl">
              {eyebrow && (
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {eyebrow}
                </span>
              )}
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                {title}
              </h2>
              {description && (
                <p className="mt-4 text-sm leading-7 text-blue-100/85 md:text-base">
                  {description}
                </p>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
      <p className="container-padded py-3 text-xs text-slate-400">
        Replace the placeholder video file at <code className="text-slate-500">{videoUrl}</code> with the final drone footage.
      </p>
    </section>
  );
}