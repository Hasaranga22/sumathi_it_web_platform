import { Laptop, Monitor, TabletSmartphone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata = buildMetadata({
  title: "End User Devices",
  description: "Business laptops, desktops, workstations, tablets, hybrid devices, and branded end-user technology from HP, Dell, Lenovo, Apple, ASUS, and MSI.",
  path: "/end-user-devices",
  keywords: ["business laptops Sri Lanka", "enterprise devices Sri Lanka", "workstations Colombo"]
});

const offerings = [
  { title: "Laptops", icon: Laptop, text: "Business, gaming, and ultraportable models for modern teams." },
  { title: "Desktops & Workstations", icon: Monitor, text: "Custom-built for CAD, AI, multimedia, and enterprise workloads." },
  { title: "Tablets & Hybrid Devices", icon: TabletSmartphone, text: "Portable devices for fieldwork, presentations, and flexible work." }
];

const brands = ["HP", "Dell", "Lenovo", "Apple MacBooks", "ASUS", "MSI"];

export default function EndUserDevicesPage() {
  return (
    <>
      <PageHero
        title="End User Devices"
        description="Business-ready devices for every team and workload"
        breadcrumbs={[{ label: "End User Devices" }]}
      />
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader title="Our offerings" description="The page is structured for quotation-driven B2B users who need reliable supply, brand options, and practical guidance." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {offerings.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.06} variant="pop">
                  <div className="premium-card p-7">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-lavender text-brand-purple"><Icon className="h-6 w-6" /></div>
                    <h3 className="mt-5 text-xl font-semibold text-navy-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionHeader title="Top brands we supply" description="Business laptops, creative workstations, gaming/high-performance PCs, and enterprise devices from trusted global brands." />
          <div className="mt-8 flex flex-wrap gap-3">
            {brands.map((brand) => <span key={brand} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-purple hover:text-brand-purple">{brand}</span>)}
          </div>
        </div>
      </section>
      <CtaBand title="Need a device supply quotation?" />
    </>
  );
}
