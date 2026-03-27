"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!isInView) return;
    // Only animate simple patterns like "500+" or "5 Dil" (leading number + suffix)
    const match = target.match(/^(\d+)(.*)$/);
    if (!match) {
      // Complex patterns like "7/24" — just show immediately
      setDisplay(target);
      return;
    }
    const numericValue = parseInt(match[1]);
    const textSuffix = match[2];
    const duration = 1500;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * numericValue);
      setDisplay(String(current) + textSuffix);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(target);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const metrics = [
  {
    value: "500+",
    label: "Misafir Mesajı Karşılandı",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    value: "7/24",
    label: "Kesintisiz Hizmet",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "5 Dil",
    label: "Otomatik Dil Desteği",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="bg-off-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-0 md:divide-x md:divide-border-warm will-change-transform"
        >
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 px-8 md:px-16"
            >
              <span className="text-teal">{metric.icon}</span>
              <span className="font-[family-name:var(--font-heading)] text-[40px] font-bold text-navy md:text-[48px]">
                <AnimatedCounter target={metric.value} />
              </span>
              <span className="text-center text-sm text-muted">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
