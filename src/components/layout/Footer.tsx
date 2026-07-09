import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { enterpriseSolutions } from "@/data/enterprise-solutions";
import { uavCategories } from "@/data/uav-categories";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 tech-grid-bg opacity-20" />
      <div className="container-padded relative py-16">
        <div className="rounded-card border border-white/10 bg-white/[0.04] p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-100">Start with clarity</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Need a reliable IT solution partner?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100">Talk to Sumathi IT for enterprise infrastructure, UAV, cybersecurity, data center, end-user devices, and system integration support.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/contact-us" className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition hover:bg-gold-100">
                Contact Sumathi IT <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <Phone className="h-4 w-4" /> {siteConfig.contact.phone}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1fr]">
          <div>
            <Image src="/images/logo/logo_white.png" alt="Sumathi IT" width={380} height={54} className=" p-2" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100">
              Sri Lankan IT solutions and system integration partner for enterprise infrastructure, UAV solutions, cybersecurity, data center, geospatial, and digital transformation services.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-blue-100">
              <span className="inline-flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold-300" /> {siteConfig.contact.address}</span>
              <a className="inline-flex items-center gap-3 hover:text-white" href={`mailto:${siteConfig.contact.email}`}><Mail className="h-4 w-4 text-gold-300" /> {siteConfig.contact.email}</a>
              <a className="inline-flex items-center gap-3 hover:text-white" href="tel:+94115553311"><Phone className="h-4 w-4 text-gold-300" /> {siteConfig.contact.phone}</a>
            </div>
          </div>

          <FooterColumn title="Quick Links">
            <Link href="/about-us">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/news">News & Blog</Link>
            <Link href="/contact-us">Contact Us</Link>
          </FooterColumn>

          <FooterColumn title="Enterprise Solutions">
            {enterpriseSolutions.slice(0, 5).map((item) => (
              <Link key={item.slug} href={`/enterprise-solutions/${item.slug}`}>{item.title}</Link>
            ))}
          </FooterColumn>

          <div>
            <FooterColumn title="UAV Solutions">
              {uavCategories.map((item) => (
                <Link key={item.slug} href={`/uav-solutions/${item.slug}`}>{item.title}</Link>
              ))}
            </FooterColumn>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Get updates from Sumathi IT</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-blue-100 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sumathi IT. All rights reserved.</p>
          <p>Built for 25 years of trust, technology and service excellence.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-100">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm text-blue-100 [&_a]:transition [&_a:hover]:translate-x-1 [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}
