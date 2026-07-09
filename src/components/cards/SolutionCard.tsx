import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function SolutionCard({ title, summary, image, href }: { title: string; summary: string; image: string; href: string }) {
  return (
    <Link href={href} className="group block">
      <Card className="overflow-hidden transition duration-500 hover:-translate-y-1 hover:border-brand-purple/30 hover:shadow-glow">
        <div className="relative h-52 overflow-hidden bg-brand-lavender">
          <Image src={image} alt={title} fill className="object-cover transition duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-navy-950">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{summary}</p>
        </CardContent>
        <CardFooter className="px-6 pb-6">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
            Explore solution <ArrowRight className="h-4 w-4 transition duration-500 group-hover:translate-x-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
