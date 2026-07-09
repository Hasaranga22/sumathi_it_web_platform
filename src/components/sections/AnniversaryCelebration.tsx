"use client";

import { useEffect, useState, type ReactNode } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  color: string;
}

const CONFETTI_COLORS = ["#D4AF37", "#F4E4BA", "#111111", "#FFFFFF"];

function generateConfetti(count: number): ConfettiPiece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 6 + Math.random() * 8,
    duration: 2.6 + Math.random() * 1.6,
    delay: Math.random() * 0.6,
    rotation: Math.random() * 360,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length]
  }));
}

/**
 * Plays a brief victory/celebration reveal on page load (gold ring + "25" mark,
 * falling confetti), then hands off to the chairman's message beneath it.
 * Respects prefers-reduced-motion by skipping straight to the content.
 */
export function AnniversaryCelebration({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<"intro" | "leaving" | "done">("intro");
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setSkip(true);
      setPhase("done");
      return;
    }

    setConfetti(generateConfetti(46));

    const leaveTimer = setTimeout(() => setPhase("leaving"), 2600);
    const doneTimer = setTimeout(() => setPhase("done"), 3100);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (skip) {
    return <>{children}</>;
  }

  return (
    <>
      {phase !== "done" && (
        <div
          aria-hidden="true"
          className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#0b0b0b] transition-opacity duration-500 ease-out ${
            phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {confetti.map((piece) => (
              <span
                key={piece.id}
                className="absolute top-[-5%] block rounded-[2px]"
                style={{
                  left: `${piece.left}%`,
                  width: piece.size,
                  height: piece.size * 0.4,
                  backgroundColor: piece.color,
                  animation: `confetti-fall ${piece.duration}s ease-in ${piece.delay}s forwards`,
                  transform: `rotate(${piece.rotation}deg)`
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center text-center">
            <span className="anniversary-ring flex h-32 w-32 items-center justify-center rounded-full border border-gold-300/70 sm:h-40 sm:w-40">
              <span className="anniversary-number text-4xl font-semibold tracking-tight text-gold-200 sm:text-5xl">
                25
              </span>
            </span>
            <p className="anniversary-caption mt-6 text-xs uppercase tracking-[0.35em] text-gold-100/80 sm:text-sm">
              Years of Trust &amp; Excellence
            </p>
          </div>
        </div>
      )}

      <div
        className={`transition-all duration-700 ease-out ${
          phase === "done" ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {children}
      </div>

      <style jsx global>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(320deg); opacity: 0.9; }
        }
        .anniversary-ring {
          animation: ring-pop 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .anniversary-number {
          animation: number-shimmer 0.6s ease-out 0.2s both;
        }
        .anniversary-caption {
          animation: caption-rise 0.6s ease-out 0.5s both;
        }
        @keyframes ring-pop {
          0% { transform: scale(0.6); opacity: 0; }
          70% { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes number-shimmer {
          0% { transform: translateY(8px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes caption-rise {
          0% { transform: translateY(6px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .anniversary-ring, .anniversary-number, .anniversary-caption {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}