"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "", label: "Years in Business", prefix: "" },
  { value: 2, suffix: "", label: "Core Business Lines", prefix: "" },
  { value: 8, suffix: "+", label: "Service Areas Across Navi Mumbai", prefix: "" },
  { value: 4, suffix: "", label: "Panel Types Manufactured In-House", prefix: "" },
];

function useCountUp(target: number, duration = 1800, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;
    let fired = false;
    const start = () => {
      if (fired) return;
      fired = true;
      setStarted(true);
    };
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    // Fallback: start after 2s even if observer doesn't fire
    const timer = setTimeout(start, 2000);
    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { count, ref };
}

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useCountUp(stat.value, 1600 + index * 200);

  return (
    <div
      ref={ref}
      className={`stat-card ${index < stats.length - 1 ? "md:border-r md:border-ind-700/50" : ""}`}
    >
      <div className="stat-number animate-counter-in" style={{ animationDelay: `${index * 0.1}s` }}>
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section
      className="bg-ind-dark py-14 md:py-16 relative overflow-hidden"
      aria-label="Company statistics"
    >
      <div className="absolute inset-0 circuit-pattern opacity-60" aria-hidden="true" />
      {/* Top edge accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-haz-500/30 to-transparent" aria-hidden="true" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, idx) => (
            <StatItem key={stat.label} stat={stat} index={idx} />
          ))}
        </div>
      </div>

      {/* Bottom edge accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cir-500/20 to-transparent" aria-hidden="true" />
    </section>
  );
}
