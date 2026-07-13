import Image from "next/image";
import { Globe2, ShieldCheck, UsersRound } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { enterpriseSolutions } from "@/data/enterprise-solutions";
import { blogs } from "@/data/blogs";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AnimatedList } from "@/components/common/AnimatedList";
import { ButtonLink } from "@/components/common/ButtonLink";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { LegacyBand } from "@/components/sections/LegacyBand";
import { ImageBand } from "@/components/sections/ImageBand";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialSlider } from "@/components/common/TestimonialSlider";
import { ProcessShowcase } from "@/components/sections/Processshowcase";
import { GlobalPartners } from "@/components/sections/GlobalPartners";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";

export const metadata = buildMetadata({
  title: "Enterprise IT, UAV and System Integration Solutions",
  description: "Sumathi IT delivers enterprise IT infrastructure, system integration, cybersecurity, data center, UAV, geospatial, and digital transformation solutions in Sri Lanka.",
  keywords: ["Sumathi IT website", "IT system integration Colombo", "enterprise IT Sri Lanka"]
});

const processSteps = [
  { title: "Understand Your Needs", description: "We begin every project by carefully understanding your unique business goals, challenges, and audience. This deep discovery process ensures we create a solution that's not only relevant but also built around your specific needs and expectations." },
  { title: "Design Tailored Solutions", description: "Our team transforms insights into strategic, creative, and scalable solutions. Every element is customized to align with your vision, ensuring the final product is both impactful and functional—designed to solve real problems and deliver measurable results." },
  { title: "Deliver And Support", description: "We focus on delivering high-quality, on-time results with a seamless process. Post-launch, we remain committed through ongoing support, improvements, and optimization—ensuring your investment continues to perform and adapt to evolving business needs." }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 !h-[49rem]">
        {/* Background Video */}
        <BackgroundVideo />
        {/* Optional white overlay to soften the video even more */}
        <div className="absolute inset-0 bg-white/30" />
        {/* Content */}
        <div className="relative z-10 container-padded">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center mt-6">
            <AnimatedSection>
              <p className="inline-flex rounded-full px-4 py-2 text-md font-semibold uppercase tracking-[0.22em] text-brand-purple">
                Sumathi IT
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-normal text-navy-950 sm:text-5xl lg:text-6xl">
                Reliable IT Services for Your Organisation.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/enterprise-solutions">
                  Explore Solutions
                </ButtonLink>
                <ButtonLink href="/contact-us" variant="secondary">
                  Talk to an Expert
                </ButtonLink>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15} variant="pop" className="relative">
  <div
    className="absolute -right-12 -top-12 z-10 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-card animate-fade-in-up opacity-0"
    style={{ animationDelay: "0.4s" }}
  >
    <p className="text-4xl tracking-normal text-brand-purple">30+</p>
    <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">
      Years of IT experience
    </p>
  </div>

  <div
    className="absolute -left-12 -bottom-12 z-10 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-card animate-fade-in-up opacity-0"
    style={{ animationDelay: "1.2s" }}
  >
    <p className="text-4xl tracking-normal text-brand-purple">99%</p>
    <p className="text-xs font-semibold uppercase tracking-normal text-slate-500">
      Happy Customers
    </p>
  </div>

  <div
    className="relative h-[360px] overflow-hidden rounded-card bg-brand-lavender shadow-soft sm:h-[480px] animate-fade-in-up opacity-0"
    style={{ animationDelay: "0s" }}
  >
    <Image
      src="/images/home/SumathiIT-Hero-Image.jpg"
      alt="Sumathi IT team and technology solutions"
      fill
      className="object-cover transition duration-1000 hover:scale-[1.03]"
      priority
    />
  </div>
</AnimatedSection>
          </div>
        </div>
      </section>
      <GlobalPartners />

      {/* NEW: "Done right, with precision and care" band */}
      <LegacyBand />

      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <AnimatedSection variant="slide-right">
            <SectionHeader
              eyebrow="How We Work"
              title="How We Deliver Innovation and Excellence"
              description="We transform ideas into powerful digital solutions through a structured, collaborative approach."
            />
            <div className="mt-7 rounded-card bg-brand-lavender p-6">
              <AnimatedList items={["Deep understanding of your business needs", "Customized solutions aligned with your vision", "Ongoing support and optimization"]} />
            </div>
          </AnimatedSection>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.06} variant="pop">
                <div className="premium-card flex items-start gap-4 p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-purple text-sm font-bold text-white">{index + 1}</span>
                  <div>
                    <h3 className="font-semibold text-navy-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ImageBand />

      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-8 lg:grid-cols-2">
          <AnimatedSection variant="pop">
            <div className="premium-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">Our Mission</h2>
              <p className="mt-4 leading-8 text-slate-600">Being in the people business can mean difficult decisions and tough conversations. We believe in going into every meeting with a desire and ability to be genuine and compassionate. We are all people, and people make mistakes. We&apos;re here to help you fix those, without risk or judgment, and move forward. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="pop" delay={0.08}>
            <div className="premium-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">Our Vision & Our Purpose</h2>
              <p className="mt-4 leading-8 text-slate-600">At SumathiIT, we are a renowned global consulting firm committed to collaborating with business and societal leaders in overcoming their most critical challenges and seizing their greatest opportunities. Our achievements are rooted in fostering deep collaboration and cultivating a global community of diverse individuals who are dedicated.</p>
              <p className="mt-4 leading-8 text-slate-600">We have highly skilled engineers with excellent technical knowledge and experience in using the latest software standards. We have built a large pool of knowledge that we apply to deliver solutions that meet client&apos;s needs, expectations and budget.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <AnimatedSection variant="slide-left">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Your Trusted Technology Partner"
              description="We combine deep technical expertise with a customer-first approach to deliver solutions that drive real business results."
            />
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-lavender text-brand-purple">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950">Certified Experts</h4>
                  <p className="mt-1 text-sm text-slate-600">Our team holds certifications from leading technology vendors.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-lavender text-brand-purple">
                  <UsersRound className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950">24/7 Support</h4>
                  <p className="mt-1 text-sm text-slate-600">Round-the-clock technical support for critical systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-lavender text-brand-purple">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950">Global Reach</h4>
                  <p className="mt-1 text-sm text-slate-600">Partnerships with world-leading technology providers.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative h-[400px] overflow-hidden rounded-card bg-brand-lavender shadow-soft" variant="pop">
            <Image src="/images/home/Sumathiit-home-image3.jpg" alt="Technology solutions" fill className="object-cover transition duration-700 hover:scale-[1.03]" />
          </AnimatedSection>
        </div>
      </section>

      <ProcessShowcase />
      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader
            eyebrow="Customer Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from businesses we've helped transform."
          />
          <div className="mt-8">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* REDESIGNED: replaces the old "Trust Backed by 30 Years of Legacy" purple panel */}
      <WhyChooseUs />

      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader eyebrow="Enterprise capability" title="Solutions built for critical business environments" description="From network foundations to secure data center environments, our solution areas are structured for long-term reliability." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enterpriseSolutions.slice(0, 3).map((solution, index) => (
              <AnimatedSection key={solution.slug} delay={index * 0.06} variant="pop">
                <SolutionCard {...solution} href={`/enterprise-solutions/${solution.slug}`} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
  <div className="container-padded grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <AnimatedSection
      className="overflow-hidden rounded-card shadow-soft h-[500px] lg:h-[650px]"
      variant="pop"
    >
      <Image
        src="/images/home/sumathiit-home-image7.jpg"
        alt="UAV solutions and drone technology"
        width={1200}
        height={900}
        className="w-full h-full object-cover transition duration-700 hover:scale-[1.03]"
        priority
      />
    </AnimatedSection>

    <AnimatedSection variant="slide-left">
      <SectionHeader
        eyebrow="UAV and geospatial"
        title="Drone, mapping, GNSS, BIM and scanning workflows in one ecosystem"
        description="Support your field teams with practical UAV solutions, product guidance, software, and geospatial workflows."
      />

      <div className="mt-6">
        <AnimatedList
          items={[
            "Enterprise drones and dock-based deployment",
            "Mapping and photogrammetry software",
            "GNSS, BIM, scanners, and UAV services",
          ]}
        />
      </div>

      <ButtonLink href="/uav-solutions" className="mt-8">
        Explore UAV Solutions
      </ButtonLink>
    </AnimatedSection>
  </div>
</section>

      <section className="section-padding bg-slate-50">
        <div className="container-padded">
          <SectionHeader eyebrow="Insights" title="Latest news and technology updates" description="Keep this section updated using JSON now, then migrate to Supabase CMS in the next phase." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogs.map((blog, index) => (
              <AnimatedSection key={blog.slug} delay={index * 0.06} variant="pop">
                <ArticleCard {...blog} href={`/news/${blog.slug}`} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}