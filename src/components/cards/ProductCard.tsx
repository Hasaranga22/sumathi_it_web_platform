import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";

export function ProductCard({ title, summary, image, href, category }: { title: string; summary: string; image: string; href: string; category: string }) {
  return (
    <Link href={href} className="group premium-card block overflow-hidden">
      <div className="relative h-56 overflow-hidden bg-brand-lavender">
        <Image src={image} alt={title} fill className="object-cover transition duration-1000 group-hover:scale-110" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple shadow-card">
          <Box className="h-4 w-4" /> {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-navy-950">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
          View product details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
