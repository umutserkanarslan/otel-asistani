"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import WhatsAppMockup from "./WhatsAppMockup";

function AnimatedCounter({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!isInView) return;
    const match = target.match(/^(\d+)(.*)$/);
    if (!match) {
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

  return <span ref={ref}>{display}</span>;
}

const heroMessages = [
  {
    type: "incoming" as const,
    text: "Merhaba, kahvaltı saat kaçta başlıyor?",
    time: "09:14",
  },
  {
    type: "outgoing" as const,
    text: "Merhaba! 🌅 Kahvaltı her gün 07:30 - 10:30 arası açık büfe olarak sunulmaktadır. Teras katımızda deniz manzaralı köşemizi özellikle tavsiye ederim. Afiyet olsun! 😊",
    time: "09:14",
    aiBadge: true,
  },
  {
    type: "incoming" as const,
    text: "Room service for 2 teas please, room 205",
    time: "09:16",
  },
  {
    type: "outgoing" as const,
    text: "Of course! 🍵 Your order has been received. 2 teas will be delivered to Room 205 shortly. Estimated time: ~10 minutes.",
    time: "09:16",
    aiBadge: true,
  },
];

const metrics = [
  {
    value: "500+",
    label: "Misafir Mesajı Karşılandı",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    value: "7/24",
    label: "Kesintisiz Hizmet",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "50+",
    label: "Dil Desteği",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="noise-bg relative overflow-hidden bg-navy">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-teal/[0.06] blur-3xl" />
        <div className="absolute left-[5%] top-[60%] h-48 w-48 rounded-full bg-gold/[0.04] blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-6 pb-12 pt-28 md:flex-row md:gap-8 md:pb-16 md:pt-32 lg:pb-20 lg:pt-36">
        {/* Left Side — Text */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-[55] text-center md:text-left will-change-transform"
        >
          <span className="mb-6 inline-block rounded-full border border-gold/50 px-4 py-1.5 text-xs font-medium tracking-wide text-gold">
            Butik Oteller İçin
          </span>

          <h1 className="font-[family-name:var(--font-heading)] text-[32px] font-extrabold leading-[1.12] text-white md:text-[44px] lg:text-[54px]" style={{ maxWidth: 600 }}>
            Misafirlerinize 7/24 Yanıt Veren{" "}
            <span className="text-gold">Dijital Resepsiyonistiniz</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-relaxed text-light-gray md:text-lg lg:text-[19px]" style={{ lineHeight: 1.65 }}>
            Yapay zeka destekli WhatsApp asistanı → misafirleriniz soruyor,
            sistem anında yanıtlıyor, ekibiniz sadece gerçek taleplere
            odaklanıyor.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-semibold text-navy transition-transform hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(200,164,90,0.4)] active:scale-[0.98]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.37 0-4.557-.7-6.396-1.9l-.459-.296-2.652.889.889-2.652-.296-.459A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Demo Talep Et
            </a>
            <a
              href="#nasil-calisir"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-navy"
            >
              Nasıl Çalışır? ↓
            </a>
          </div>
        </motion.div>

        {/* Right Side — Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          className="relative flex-[45] will-change-transform"
        >
          <div className="pointer-events-none absolute -right-8 -top-8 z-0">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              {[0, 1, 2, 3, 4].map((row) =>
                [0, 1, 2, 3, 4].map((col) => (
                  <circle key={`${row}-${col}`} cx={12 + col * 24} cy={12 + row * 24} r="3" fill="#2A9D8F" opacity="0.12" />
                ))
              )}
            </svg>
          </div>
          <div className="animate-float relative z-10 mx-auto w-fit">
            <div className="rounded-[36px] border-[3px] border-white/10 bg-[#1a1a1a] p-2 shadow-[0_16px_60px_rgba(0,0,0,0.3)]">
              <div className="relative">
                <div className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[#1a1a1a]" />
              </div>
              <div className="overflow-hidden rounded-[28px]">
                <WhatsAppMockup messages={heroMessages} statusText="✓ Personel bilgilendirildi" compact />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Proof Bar — Inside Hero on Navy */}
      <div className="relative z-20 mx-auto max-w-[1200px] px-6 pb-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mx-auto flex w-fit flex-col items-center justify-center gap-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-10 py-8 backdrop-blur-sm md:flex-row md:gap-0 md:divide-x md:divide-white/[0.15] md:px-10 md:py-7 will-change-transform"
        >
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center gap-2 px-6 md:px-12 lg:px-16">
              <span className="text-gold">{metric.icon}</span>
              <span className="font-[family-name:var(--font-heading)] text-[40px] font-extrabold text-white md:text-[48px]">
                <AnimatedCounter target={metric.value} />
              </span>
              <span className="text-center text-sm text-light-gray">{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 60C240 120 480 120 720 80C960 40 1200 0 1440 40V120H0V60Z" fill="#F7F5F0" />
        </svg>
      </div>
    </section>
  );
}
