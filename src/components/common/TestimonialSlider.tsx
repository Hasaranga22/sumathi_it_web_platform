"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="w-full flex-shrink-0 px-4">
              <div className="mx-auto max-w-3xl rounded-card bg-white p-8 shadow-card md:p-10">
                <div className="grid gap-8 md:grid-cols-[200px_1fr] md:items-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-brand-lavender mx-auto md:mx-0">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div className="text-center md:text-left">
                    <Quote className="mx-auto h-10 w-10 text-brand-purple md:mx-0" />
                    <p className="mt-4 text-lg leading-8 text-slate-700">"{testimonial.quote}"</p>
                    <p className="mt-6 font-semibold text-navy-950">{testimonial.name}</p>
                    <p className="text-sm text-brand-purple">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 flex items-center justify-center gap-3">
        <button 
          onClick={prev}
          className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-brand-purple hover:text-white"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition ${index === currentIndex ? 'bg-brand-purple' : 'bg-slate-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={next}
          className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-brand-purple hover:text-white"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
