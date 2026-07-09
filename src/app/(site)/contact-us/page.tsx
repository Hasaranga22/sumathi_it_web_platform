import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Contact Sumathi IT for enterprise IT solutions, UAV solutions, cybersecurity, data center, system integration, and support inquiries.",
  path: "/contact-us",
  keywords: ["contact Sumathi IT", "IT solutions Colombo", "Sumathi IT phone"]
});

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Send your inquiry and our team will guide you toward the right enterprise, UAV, or end-user technology solution."
        breadcrumbs={[{ label: "Contact Us" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-padded overflow-hidden rounded-card bg-brand-purple p-8 text-white shadow-glow sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <AnimatedSection variant="slide-right">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/80">Get in touch</span>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Let's talk about your project</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-blue-100/85">
                Reach us directly, or fill out the form and we'll route your inquiry to the right team.
              </p>
              <div className="mt-8 grid max-w-xl gap-4 text-sm text-blue-50">
                <Info icon={<Phone className="h-4 w-4" />} text={siteConfig.contact.phone} />
                <Info icon={<Mail className="h-4 w-4" />} text={siteConfig.contact.email} />
                <Info icon={<MapPin className="h-4 w-4" />} text={siteConfig.contact.address} />
              </div>
              <div className="relative mt-10 h-56 max-w-md opacity-90">
                <Image src="/images/contact/contact-hero.svg" alt="Sumathi IT contact" fill className="object-contain" />
              </div>
            </AnimatedSection>
            <AnimatedSection variant="pop"><ContactForm /></AnimatedSection>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-padded grid gap-5 lg:grid-cols-2">
          <OfficeCard title="Sumathi IT - System Integration Solutions" image="/images/enterprise/data-center.svg" linkText="Open in Google Maps" />
          <OfficeCard title="Sumathi IT Geospatial Engineering Solutions" image="/images/uav/uav-hero.svg" linkText="Explore Sumathi Geospatial Engineering solutions" />
        </div>
      </section>
      <section className="pb-20">
        <div className="container-padded">
          <div className="rounded-card overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.726698734475!2d79.850000!3d6.927000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMzcuMiJOIDc5wrA1MCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sumathi IT Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-white/12 text-[var(--gold)]">{icon}</span>
      {text}
    </div>
  );
}

function OfficeCard({ title, image, linkText }: { title: string; image: string; linkText: string }) {
  return (
    <AnimatedSection variant="pop" className="h-full">
      <div className="premium-card flex h-full flex-col gap-6 p-6 sm:grid sm:grid-cols-[1fr_220px] sm:items-stretch">
        <div className="flex flex-col">
          <h2 className="min-h-[3.5rem] text-xl font-semibold leading-snug text-navy-950">{title}</h2>
          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            <p>Address: {siteConfig.contact.address}</p>
            <p>{siteConfig.contact.phone}</p>
            <p>{siteConfig.contact.email}</p>
            <p>Working Hours: 08:15AM to 05:30PM</p>
          </div>
          <a
            className="mt-auto pt-5 inline-flex text-sm font-semibold text-brand-purple underline underline-offset-8"
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            {linkText}
          </a>
        </div>
        <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-brand-lavender sm:h-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </AnimatedSection>
  );
}