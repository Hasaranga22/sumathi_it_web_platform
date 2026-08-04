"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

interface ConfettiPiece {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  color: string;
  shape: "rect" | "dot";
}

interface AnniversaryCelebrationProps {
  children: ReactNode;
  /** URL of the company logo. If omitted, a monogram placeholder is shown in the logo frame. */
  logoSrc?: string;
  logoAlt?: string;
  /** Shown under the tagline, e.g. "Ferrand & Cole" */
  companyName?: string;
  /** The milestone number the medallion counts up to. Defaults to 25. */
  years?: number;
  tagline?: string;
  /** Small label above the medallion, e.g. "CELEBRATING" */
  eyebrow?: string;
}

const CONFETTI_COLORS = ["#D4AF37", "#F1D592", "#F4E9D0", "#8A6A1E"];

function generateConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 4 + Math.random() * 6,
    duration: 3.6 + Math.random() * 2.2,
    delay: 0.3 + Math.random() * 2,
    rotation: Math.random() * 360,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    shape: Math.random() > 0.6 ? "dot" : "rect"
  }));
}

/**
 * Plays a brief victory/celebration reveal on page load — a gold medallion
 * that mints the milestone number into place with a coin-stamp impact,
 * flanked by a logo slot and gently falling confetti — then hands off to
 * the page content beneath it. Respects prefers-reduced-motion.
 *
 * Timing overview (from mount):
 *   0.00s        overlay appears
 *   0.00–0.50s   logo + ring + rays settle in
 *   0.50–2.70s   number counts up 0 -> years, eased
 *   2.70s        impact flash / shockwave
 *   3.20s        caption rises in
 *   3.40s        company name rises in
 *   5.40s        overlay begins fading out
 *   6.00s        overlay removed, page content revealed
 *
 * IMPORTANT: the whole reveal is gated behind a `mounted` flag. Nothing
 * that belongs to the intro (medallion number, caption copy, company name)
 * is rendered on the very first paint/hydration pass — only a plain gold
 * flash to the same navy backdrop is shown, then the real reveal fades in
 * once React has mounted and the animations are wired up.
 */
export function AnniversaryCelebration({
  children,
  logoSrc,
  logoAlt = "Company logo",
  companyName,
  years = 25,
  tagline = "Years of Trust & Excellence",
  eyebrow = "Celebrating"
}: AnniversaryCelebrationProps) {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"intro" | "leaving" | "done">("intro");
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [skip, setSkip] = useState(false);
  const [count, setCount] = useState(0);
  const [impact, setImpact] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setSkip(true);
      setPhase("done");
      setCount(years);
      return;
    }

    setConfetti(generateConfetti(46));

    // Count the medallion number up from 0, eased, then trigger the impact flash.
    const countDelayMs = 500;
    const countDurationMs = 2200;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start - countDelayMs;
      if (elapsed < 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / countDurationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * years));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setImpact(true);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    const leaveTimer = setTimeout(() => setPhase("leaving"), 5400);
    const doneTimer = setTimeout(() => setPhase("done"), 6000);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, [years]);

  if (skip) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Seamless placeholder shown only until React mounts — same backdrop, no text, no numbers. */}
      {!mounted && <div aria-hidden="true" className="anniv-overlay anniv-preload" />}

      {mounted && phase !== "done" && (
        <div
          aria-hidden="true"
          className={`anniv-overlay ${phase === "leaving" ? "anniv-overlay-leave" : ""}`}
        >
          <div className="anniv-vignette" />
          <div className="anniv-glow" />

          <div className="anniv-confetti">
            {confetti.map((piece) => (
              <span
                key={piece.id}
                className={`anniv-confetti-piece ${piece.shape === "dot" ? "is-dot" : ""}`}
                style={{
                  left: `${piece.left}%`,
                  width: piece.size,
                  height: piece.shape === "dot" ? piece.size : piece.size * 0.4,
                  backgroundColor: piece.color,
                  animationDuration: `${piece.duration}s`,
                  animationDelay: `${piece.delay}s`,
                  transform: `rotate(${piece.rotation}deg)`
                }}
              />
            ))}
          </div>

          <div className="anniv-stage">
            <div className="anniv-logo-frame">
              {logoSrc ? (
                <Image src={logoSrc} alt={logoAlt} className="anniv-logo-img" width={100} height={100} />
              ) : (
                <span className="anniv-logo-fallback">{companyName?.[0]?.toUpperCase() ?? "✦"}</span>
              )}
            </div>

            {eyebrow && <p className="anniv-eyebrow">{eyebrow}</p>}

            <div className="anniv-medallion">
              <div className="anniv-rays">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span
                    key={i}
                    className="anniv-ray"
                    style={{
                      transform: `rotate(${i * 15}deg)`,
                      animationDelay: `${0.55 + i * 0.02}s`
                    }}
                  />
                ))}
              </div>

              <div className={`anniv-ring ${impact ? "is-impact" : ""}`}>
                <span className="anniv-ring-inner" />
                <span className="anniv-shockwave" />
                <span className="anniv-shockwave anniv-shockwave-delay" />
                <div className="anniv-number-wrap">
                  <span className="anniv-number">{count}</span>
                  <span className="anniv-number-label">Years</span>
                </div>
              </div>
            </div>

            <div className="anniv-caption-wrap">
              <span className="anniv-rule" />
              <p className="anniv-caption">{tagline}</p>
              <span className="anniv-rule" />
            </div>

            {companyName && <p className="anniv-company">{companyName}</p>}
          </div>
        </div>
      )}

      <div className={`anniv-content ${phase === "done" ? "is-visible" : ""}`}>{children}</div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap");

        :root {
          --anniv-ink: #0a0a0a;
          --anniv-ink-soft: #141210;
          --anniv-gold: #d4af37;
          --anniv-gold-light: #f1d592;
          --anniv-gold-pale: #f4e9d0;
          --anniv-gold-deep: #8a6a1e;
        }

        .anniv-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 50% 42%, var(--anniv-ink-soft) 0%, var(--anniv-ink) 70%);
          opacity: 1;
          transition: opacity 0.7s ease-out;
          overflow: hidden;
        }
        .anniv-overlay-leave {
          opacity: 0;
          pointer-events: none;
        }
        .anniv-preload {
          /* Identical backdrop to .anniv-overlay so the hand-off from
             preload -> real reveal is invisible to the eye. */
        }

        .anniv-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.55) 100%);
          pointer-events: none;
        }

        .anniv-glow {
          position: absolute;
          width: min(70vw, 640px);
          height: min(70vw, 640px);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, rgba(212, 175, 55, 0) 70%);
          animation: anniv-glow-pulse 3s ease-in-out infinite;
        }

        .anniv-confetti {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .anniv-confetti-piece {
          position: absolute;
          top: -6%;
          display: block;
          border-radius: 2px;
          opacity: 0;
          animation-name: anniv-confetti-fall;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;
          box-shadow: 0 0 6px rgba(212, 175, 55, 0.25);
        }
        .anniv-confetti-piece.is-dot {
          border-radius: 50%;
        }

        .anniv-stage {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1.5rem;
        }

        /* Logo slot */
        .anniv-logo-frame {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(88px, 13vw, 116px);
          height: clamp(88px, 13vw, 116px);
          margin-bottom: clamp(16px, 3vw, 22px);
          border-radius: 50%;
          background: rgba(244, 233, 208, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.45);
          box-shadow: 0 0 0 6px rgba(212, 175, 55, 0.06);
          opacity: 0;
          animation: anniv-logo-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.05s both;
        }
        .anniv-logo-img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }
        .anniv-logo-fallback {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(22px, 4vw, 28px);
          color: var(--anniv-gold-light);
        }

        .anniv-eyebrow {
          margin: 0 0 clamp(10px, 2vw, 16px);
          font-family: "Inter", sans-serif;
          font-size: clamp(11px, 1.8vw, 13px);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.38em;
          color: rgba(241, 213, 146, 0.65);
          opacity: 0;
          animation: anniv-caption-rise 0.6s ease-out 0.3s both;
        }

        /* Medallion */
        .anniv-medallion {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(190px, 36vw, 250px);
          height: clamp(190px, 36vw, 250px);
        }

        .anniv-rays {
          position: absolute;
          inset: 0;
        }
        .anniv-ray {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1px;
          height: clamp(105px, 22vw, 145px);
          margin-left: -0.5px;
          transform-origin: top center;
          background: linear-gradient(to bottom, rgba(212, 175, 55, 0.55), rgba(212, 175, 55, 0));
          opacity: 0;
          animation: anniv-ray-open 0.5s ease-out both;
        }

        .anniv-ring {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(150px, 28vw, 190px);
          height: clamp(150px, 28vw, 190px);
          border-radius: 50%;
          background: var(--anniv-ink);
          border: 1px solid rgba(212, 175, 55, 0.55);
          box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.15) inset, 0 0 32px rgba(212, 175, 55, 0.18);
          opacity: 0;
          animation: anniv-ring-pop 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
        }
        .anniv-ring::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            rgba(212, 175, 55, 0) 0%,
            rgba(241, 213, 146, 0.9) 8%,
            rgba(212, 175, 55, 0) 20%
          );
          animation: anniv-ring-sheen 4s linear infinite;
        }
        .anniv-ring-inner {
          position: absolute;
          inset: 10px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.28);
          pointer-events: none;
        }
        .anniv-ring.is-impact {
          animation: anniv-ring-punch 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.35) inset, 0 0 50px rgba(212, 175, 55, 0.42);
        }

        .anniv-shockwave {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.55);
          opacity: 0;
        }
        .anniv-ring.is-impact .anniv-shockwave {
          animation: anniv-shockwave-expand 1.1s ease-out;
        }
        .anniv-ring.is-impact .anniv-shockwave-delay {
          animation-delay: 0.15s;
        }

        .anniv-number-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .anniv-number {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(64px, 12vw, 88px);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.01em;
          background: linear-gradient(
            120deg,
            var(--anniv-gold-pale) 0%,
            var(--anniv-gold) 30%,
            #fff7e0 50%,
            var(--anniv-gold) 70%,
            var(--anniv-gold-pale) 100%
          );
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.45));
          animation: anniv-number-shimmer 2.8s linear infinite;
        }

        .anniv-number-label {
          font-family: "Inter", sans-serif;
          font-size: clamp(10px, 1.6vw, 12px);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: rgba(244, 233, 208, 0.55);
        }

        .anniv-caption-wrap {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-top: clamp(26px, 4.5vw, 36px);
          opacity: 0;
          animation: anniv-caption-rise 0.6s ease-out 3.2s both;
        }
        .anniv-rule {
          width: clamp(20px, 4vw, 36px);
          height: 1px;
          background: linear-gradient(to right, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.7));
        }
        .anniv-rule:last-child {
          background: linear-gradient(to left, rgba(212, 175, 55, 0), rgba(212, 175, 55, 0.7));
        }
        .anniv-caption {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(14px, 2.4vw, 18px);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.24em;
          color: var(--anniv-gold-pale);
        }

        .anniv-company {
          margin: 0.75rem 0 0;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(16px, 2.6vw, 20px);
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(244, 233, 208, 0.75);
          opacity: 0;
          animation: anniv-caption-rise 0.6s ease-out 3.4s both;
        }

        .anniv-content {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .anniv-content.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes anniv-glow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes anniv-confetti-fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          8% { opacity: 1; }
          100% { transform: translateY(112vh) rotate(320deg); opacity: 0.8; }
        }
        @keyframes anniv-logo-in {
          0% { opacity: 0; transform: translateY(-6px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes anniv-ray-open {
          0% { opacity: 0; transform: scaleY(0); }
          100% { opacity: 1; transform: scaleY(1); }
        }
        @keyframes anniv-ring-pop {
          0% { transform: scale(0.55); opacity: 0; }
          70% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes anniv-ring-sheen {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes anniv-ring-punch {
          0% { transform: scale(1); }
          40% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes anniv-shockwave-expand {
          0% { transform: scale(1); opacity: 0.9; border-width: 2px; }
          100% { transform: scale(2.7); opacity: 0; border-width: 1px; }
        }
        @keyframes anniv-number-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 220% 50%; }
        }
        @keyframes anniv-caption-rise {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .anniv-glow,
          .anniv-confetti-piece,
          .anniv-logo-frame,
          .anniv-eyebrow,
          .anniv-ray,
          .anniv-ring,
          .anniv-ring::before,
          .anniv-shockwave,
          .anniv-number,
          .anniv-caption-wrap,
          .anniv-company {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}