"use client";

import Image from "next/image";
import { motion } from "motion/react";

type FloatingImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export function FloatingImage({ src, alt, className = "", sizes = "(max-width: 1024px) 100vw, 33vw" }: FloatingImageProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-card shadow-card ${className}`}
      animate={{ y: [0, 0, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      <div className="absolute inset-0 rounded-card ring-1 ring-inset ring-white/10" />
    </motion.div>
  );
}