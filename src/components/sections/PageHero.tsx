import Image from "next/image";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
}

export function PageHero({ title, description, breadcrumbs, backgroundImage = "/images/hero/page-hero-bg.svg" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 opacity-20">
        <Image src={backgroundImage} alt="" fill className="object-cover" priority />
      </div>
      <div className="container-padded relative">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
