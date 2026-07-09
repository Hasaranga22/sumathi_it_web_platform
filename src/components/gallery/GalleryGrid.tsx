"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems } from "@/data/gallery";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ImageLightbox } from "@/components/common/ImageLightbox";

export function GalleryGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const images = galleryItems.map(item => item.image);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="container-padded grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <AnimatedSection key={item.title} delay={index * 0.04} variant="pop">
            <div className="group premium-card overflow-hidden p-0 cursor-pointer" onClick={() => openLightbox(index)}>
              <div className="relative h-72 overflow-hidden bg-brand-lavender">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-1000 group-hover:scale-110" />
              </div>
              <div className="bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">{item.category}</p>
                <h3 className="mt-2 font-semibold text-navy-950">{item.title}</h3>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
      {lightboxOpen && (
        <ImageLightbox 
          images={images} 
          initialIndex={lightboxIndex} 
          onClose={() => setLightboxOpen(false)} 
        />
      )}
    </>
  );
}
