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
          <AnimatedSection variant="pop" className="grid gap-8 rounded-card bg-brand-lavender p-8 shadow-card lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-purple">Enterprise Endpoints</p>
              <h2 className="mt-3 text-2xl font-semibold text-navy-950">Comprehensive End User Device Solutions</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <p>End user devices encompass enterprise computing endpoints such as desktops, notebooks, workstations, and intelligent client devices designed for secure access, data processing, and application delivery across modern IT environments. At Sumathi IT, we provide enterprise-grade endpoint solutions combined with lifecycle and managed services to ensure performance, security, and operational continuity across the organization.</p>
                <p>Our device portfolio is engineered to support heterogeneous enterprise environments, enabling integration with on-premises infrastructure, virtual desktop environments (VDI/DaaS), and cloud-first architectures. This ensures users can operate efficiently across distributed workforces while maintaining centralized control, policy enforcement, and security compliance.</p>
                <p>We work with a broad ecosystem of global OEMs and technology providers including Lenovo, Apple, HP, Dell, and Centerm, among others. This multi-vendor approach enables us to align device selection with workload requirements, ranging from knowledge worker laptops and high-performance engineering workstations to secure thin clients and mobility-first devices.</p>
                <p>Through our End User Devices & Managed Services portfolio, Sumathi IT delivers end-to-end services including device provisioning, standard image deployment, endpoint management (MDM/UEM), patching, asset lifecycle management, and secure configuration aligned with enterprise security frameworks.</p>
                <p>This ensures organizations benefit from standardized, secure, and scalable endpoint ecosystems that reduce operational overhead while improving user productivity and IT governance.</p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-card bg-white">
              <img src="/images/enterprise/end-user-devices.svg" alt="End User Devices" className="h-full w-full object-cover" />
            </div>
          </AnimatedSection>
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
