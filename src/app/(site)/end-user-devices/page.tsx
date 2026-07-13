import Image from "next/image";
import { Laptop, Monitor, TabletSmartphone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CtaBand } from "@/components/sections/CtaBand";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { GlobalPartners } from "@/components/sections/GlobalPartners";

export const metadata = buildMetadata({
  title: "End User Devices - Business Laptops, Workstations & Tablets",
  description:
    "High-performance computing devices for professionals, businesses, and educational institutions. Business laptops, workstations, and tablets from HP, Dell, Lenovo, Apple, ASUS, and MSI in Sri Lanka.",
  path: "/end-user-devices",
  keywords: [
    "business laptops Sri Lanka",
    "enterprise devices Sri Lanka",
    "workstations Colombo",
    "HP Dell Lenovo laptops Sri Lanka",
    "Apple MacBook supplier Sri Lanka",
    "gaming PC Sri Lanka",
  ],
});

const offerings = [
  {
    title: "Laptops",
    icon: Laptop,
    text: "Business, gaming, and ultraportable laptop models for modern teams, from everyday productivity to demanding creative and technical workloads.",
  },
  {
    title: "Desktops & Workstations",
    icon: Monitor,
    text: "Custom-built desktops and workstations for CAD, AI, 3D visualization, and multimedia production, sized for professionals, businesses, and educational institutions.",
  },
  {
    title: "Tablets & Hybrid Devices",
    icon: TabletSmartphone,
    text: "Portable devices for fieldwork, presentations, and flexible work, built for teams that move between the office and the field.",
  },
];

export default function EndUserDevicesPage() {
  return (
    <>
      <PageHero
        title="End User Devices"
        description="Business-ready devices for every team and workload"
        breadcrumbs={[{ label: "End User Devices" }]}
        backgroundImage="/images/end user devices/hero image end user devices.jpg"
      />

      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            title="Our offerings"
            description="High-performance computing devices for professionals, businesses, and educational institutions — structured for quotation-driven B2B users who need reliable supply, brand options, and practical guidance."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {offerings.map((item, index) => {
              const Icon = item.icon;

              return (
                <AnimatedSection
                  key={item.title}
                  delay={index * 0.06}
                  variant="pop"
                >
                  <div className="premium-card flex h-full flex-col p-7">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-lavender text-brand-purple">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-navy-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Endpoints */}
      <section className="section-padding bg-white  ">
        <div className="container-padded ">
          <AnimatedSection
            // variant="pop"
            className="grid gap-10 rounded-card bg-brand-lavender p-8 shadow-card lg:grid-cols-[0.9fr_1.1fr] lg:items-center !w-[90rem]"
          >
            {/* Text Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-purple">
                Enterprise Endpoints
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-navy-950">
                Comprehensive End User Device Solutions
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <p>
                  We provide high-performance computing devices for
                  professionals, businesses, and educational institutions across
                  Sri Lanka. End user devices encompass enterprise computing
                  endpoints such as desktops, notebooks, workstations, and
                  intelligent client devices designed for secure access, data
                  processing, and application delivery across modern IT
                  environments.
                </p>

                <p>
                  Our device portfolio is engineered to support heterogeneous
                  enterprise environments, enabling integration with on-premises
                  infrastructure, virtual desktop environments (VDI/DaaS), and
                  cloud-first architectures. This ensures users can operate
                  efficiently across distributed workforces while maintaining
                  centralized control, policy enforcement, and security
                  compliance.
                </p>

                <p>
                  We supply business laptops from HP, Dell, and Lenovo, Apple
                  MacBooks for creative professionals, and ASUS and MSI machines
                  for gaming and high-performance computing — alongside
                  custom-built desktops and workstations for CAD, AI, 3D
                  visualization, and multimedia, plus tablets and hybrid devices
                  for fieldwork and presentations.
                </p>

                <p>
                  Through our End User Devices &amp; Managed Services portfolio,
                  Sumathi IT delivers end-to-end services including device
                  provisioning, standard image deployment, endpoint management
                  (MDM/UEM), patching, asset lifecycle management, and secure
                  configuration aligned with enterprise security frameworks —
                  giving organizations a standardized, secure, and scalable
                  endpoint ecosystem that reduces operational overhead while
                  improving user productivity and IT governance.
                </p>
              </div>
            </div>

            {/* Larger Image */}
            <div className="relative h-[700px] overflow-hidden rounded-card bg-white">
              <Image
                src="/images/end user devices/laptops.jpg"
                alt="End User Devices"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <GlobalPartners />

      <CtaBand title="Need a device supply quotation?" />
    </>
  );
}