import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ArticleCard({
  title,
  excerpt,
  image,
  href,
  category,
  date
}: {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  category: string;
  date: string;
}) {
  return (
    <Link href={href} className="group block">
      <Card className="overflow-hidden transition duration-500 hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-glow">
        <div className="relative h-52 overflow-hidden bg-brand-lavender">
          <Image src={image} alt={title} fill className="object-cover transition duration-1000 group-hover:scale-110" />
          <div className="absolute bottom-5 left-5 rounded-full bg-white/92 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-purple shadow-card">
            {category}
          </div>
        </div>
        <CardContent className="p-6">
          <time className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{date}</time>
          <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.03em] text-navy-950">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{excerpt}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
            Read more <ArrowRight className="h-4 w-4 transition duration-500 group-hover:translate-x-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
