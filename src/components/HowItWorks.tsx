"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Misafir Yazıyor ✓",
    desc: "Misafir otelin WhatsApp numarasına mesaj atar → uygulama indirmeye gerek yok.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="18" height="30" rx="4" />
        <path d="M15 7h6" />
        <path d="M14 24h8M14 28h5" />
        <rect x="12" y="11" width="12" height="9" rx="2" fill="#2A9D8F" fillOpacity="0.1" stroke="none" />
        <path d="M15 15.5l2 2 3.5-3.5" />
      </svg>
    ),
  },
  {
    num: 2,
    title: "Misafiri Tanıyor",
    desc: "Telefon numarasından misafiri tanıyor, oda numarası ve ismini eşleştiriyor.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="26" height="22" rx="4" />
        <circle cx="18" cy="16" r="4.5" />
        <path d="M12 26c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "AI Yanıtlıyor ✓",
    desc: "AI misafirin dilinde, doğal ve sıcak bir üslupla anında yanıt verir.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 5l2.5 5 5.5.8-4 3.9 1 5.5L18 17.5l-5 2.7 1-5.5-4-3.9 5.5-.8z" />
        <path d="M9 23h18" />
        <path d="M11 27h14" />
        <path d="M13 31h10" />
      </svg>
    ),
  },
  {
    num: 4,
    title: "Ekibiniz Bilgileniyor",
    desc: "Oda servisi, arıza gibi talepler ekibinize anlık iş emri olarak iletilir.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 5H12a3 3 0 00-3 3v20a3 3 0 003 3h12a3 3 0 003-3V11l-5-6z" />
        <path d="M22 5v6h5" />
        <path d="M14 18h8M14 22h8M14 26h4" />
        <circle cx="27" cy="12" r="4.5" fill="#C8A45A" stroke="none" />
        <path d="M25 12l1.5 1.5L29 11" stroke="white" strokeWidth="1.4" />
      </svg>
    ),
  },
];

/* Reusable wave divider component */
function WaveDividerTop({ fillColor }: { fillColor: string }) {
  return (
    <div className="absolute left-0 right-0 top-0 z-10 -translate-y-[99%]">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
        <path d="M0 80V40C240 0 480 0 720 30C960 60 1200 80 1440 50V80H0Z" fill={fillColor} />
      </svg>
    </div>
  );
}

export { WaveDividerTop };

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="relative bg-off-white py-28 md:py-32 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="mb-16 text-center will-change-transform"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-extrabold text-navy md:text-[40px]">
            Nasıl Çalışır?
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-base text-body-text md:text-lg">
            Misafirden talep, personelinize iş emri → 4 adımda.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          {/* Connecting dashed line (desktop) */}
          <div className="absolute left-0 right-0 top-[56px] z-0 hidden md:block">
            <div className="mx-[60px] border-t-2 border-dashed border-gold/40" />
          </div>
          {/* Connecting dashed line (mobile - vertical) */}
          <div className="absolute bottom-0 left-1/2 top-0 z-0 -translate-x-1/2 md:hidden">
            <div className="h-full border-l-2 border-dashed border-gold/30" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="will-change-transform group relative z-10 flex flex-col items-center rounded-[20px] border border-border-warm bg-white px-7 py-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-t-[3px] hover:border-t-gold hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
            >
              {/* Step Number */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold font-[family-name:var(--font-heading)] text-base font-bold text-navy shadow-[0_0_0_4px_rgba(200,164,90,0.2)]">
                {step.num}
              </div>

              {/* Icon */}
              <div className="mb-5">{step.icon}</div>

              {/* Title */}
              <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl font-bold text-navy">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-body-text" style={{ lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
