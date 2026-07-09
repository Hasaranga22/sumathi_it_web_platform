"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SolutionCard({
  title,
  summary,
  image,
  href
}: {
  title: string;
  summary: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-[28px] border border-slate-200 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10" />
      </div>

      <div className="relative z-10 flex items-center justify-between p-6">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
            UAV Solution
          </span>
          <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-2 max-w-xs text-sm leading-6 text-blue-100/90 line-clamp-2">
            {summary}
          </p>
        </div>
      </div>

      <span className="absolute right-6 top-6 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:bg-[var(--gold)] group-hover:text-navy-950 group-hover:rotate-45">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </Link>
  );
}