"use client";

export function BackgroundVideo() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover opacity-[0.7] pointer-events-none"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/videos/home-hero.mp4" type="video/mp4" />
    </video>
  );
}
