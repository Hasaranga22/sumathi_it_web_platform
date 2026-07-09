import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-padded pt-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <li>
          <Link href="/" className="transition hover:text-brand-blue">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-slate-300" />
            {item.href ? (
              <Link href={item.href} className="transition hover:text-brand-blue">{item.label}</Link>
            ) : (
              <span className="font-medium text-navy-950">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
