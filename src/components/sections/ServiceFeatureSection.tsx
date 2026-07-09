"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";

export function ServiceFeatureSection({
  title,
  description,
  items,
  image,
  imageAlt,
  reverse = false
}: {
  title: string;
  description?: string;
  items: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section className="section-padding bg-white">
      <div className="container-padded">
        <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          <AnimatedSection variant={reverse ? "slide-left" : "slide-right"} className={reverse ? "lg:order-2" : ""}>
            <div className="relative h-[300px] overflow-hidden rounded-card shadow-soft lg:h-[400px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection variant={reverse ? "slide-right" : "slide-left"} className={reverse ? "lg:order-1" : ""}>
            <h2 className="text-2xl font-semibold text-navy-950 lg:text-3xl">{title}</h2>
            {description && (
              <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
            )}
            <div className="mt-6">
              <AnimatedList items={items} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
