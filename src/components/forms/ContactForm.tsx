"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const serviceOptions = [
  "Networking and System Integration",
  "Data Center Solution",
  "Information Security",
  "Unified Communication",
  "Smart Infrastructure",
  "Managed Services",
  "End User Devices",
  "Repairing",
  "Other"
];

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: serviceOptions[0], message: "" });

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Website Inquiry - ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} className="premium-card relative overflow-hidden p-6 sm:p-8">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] bg-brand-lavender" />
      <div className="relative">
        {/* Logo — replace the path below if your logo asset lives elsewhere */}
        <div className="relative mb-6 h-10 w-40">
          <Image
            src="/images/logo/sumathi-it-logo.png"
            alt="Sumathi IT"
            fill
            className="object-contain object-left"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-navy-950">Request a consultation</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Share your requirement and our team will send a prepared reply to the right specialist.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name">
            <input required placeholder="Name*" value={form.name} onChange={(e) => update("name", e.target.value)} className="form-input" />
          </Field>
          <Field label="Phone number">
            <input required placeholder="Phone number*" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="form-input" />
          </Field>
          <Field label="Email">
            <input required type="email" placeholder="Email*" value={form.email} onChange={(e) => update("email", e.target.value)} className="form-input" />
          </Field>
          <Field label="What can we help you with?">
            <select value={form.service} onChange={(e) => update("service", e.target.value)} className="form-input">
              {serviceOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </Field>
        </div>
        <Field label="Message" className="mt-4">
          <textarea required placeholder="Briefly describe your challenge or goals..." rows={6} value={form.message} onChange={(e) => update("message", e.target.value)} className="form-input min-h-40 resize-y" />
        </Field>
        <button className="group mt-6 inline-flex items-center gap-3 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-card transition-colors hover:bg-brand-purple" type="submit">
          <span className="button-flip-text"><span>Get Your Free Consultation</span><span aria-hidden="true">Get Your Free Consultation</span></span>
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
        <p className="mt-4 text-xs leading-6 text-slate-500">Your data is used only to prepare the inquiry email. Backend submission can be connected in the next phase.</p>
      </div>
    </form>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`grid gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 ${className}`}>
      {label}
      {children}
    </label>
  );
}