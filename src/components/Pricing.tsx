"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Başlangıç",
    price: "₺9.999",
    setup: "₺9.999",
    recommended: false,
    features: [
      "WhatsApp AI Asistanı ✓",
      "Çoklu dil desteği",
      "Misafiri otomatik tanıma",
      "Anlık iş emri bildirimi",
      "Google Sheets entegrasyonu ✓",
      "Hafta içi destek ✓",
    ],
  },
  {
    name: "Profesyonel",
    price: "₺13.999",
    setup: "₺9.999",
    recommended: true,
    features: [
      "WhatsApp AI Asistanı ✓",
      "Çoklu dil desteği",
      "Misafiri otomatik tanıma",
      "Anlık iş emri bildirimi",
      "Google Sheets entegrasyonu ✓",
      "Akıllı mesaj birleştirme",
      "Spam koruması ✓",
      "Özel karşılama mesajları ✓",
      "Aylık performans raporu ✓",
      "7/24 öncelikli destek ✓",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="fiyatlandirma" className="relative bg-off-white py-28 md:py-32 lg:py-36">
      <div className="mx-auto max-w-[900px] px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="mb-16 text-center will-change-transform"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-extrabold text-navy md:text-[40px]">
            Şeffaf Fiyatlandırma
          </h2>
          <p className="mt-4 text-base text-body-text md:text-lg">
            Gizli maliyet yok. Ne alacağınızı biliyorsunuz.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col items-stretch gap-8 md:flex-row">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`will-change-transform relative flex flex-1 flex-col rounded-2xl p-8 transition-all duration-300 md:p-10 ${
                plan.recommended
                  ? "border-2 border-gold bg-white shadow-[0_16px_48px_rgba(0,0,0,0.12)] z-10"
                  : "border border-[#E0DCD5] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              }`}
              style={plan.recommended ? { backgroundImage: "linear-gradient(to bottom, rgba(200,164,90,0.06) 0%, transparent 30%)" } : {}}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-5 py-1.5 text-xs font-bold text-navy shadow-md">
                  Tavsiye Edilen
                </div>
              )}

              {/* Plan Name */}
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-navy">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-heading)] text-[44px] font-extrabold leading-none text-navy">
                  {plan.price}
                </span>
                <span className="text-base text-muted">/ay</span>
              </div>
              <p className="mt-2 text-sm text-muted">
                + {plan.setup} kurulum bedeli (tek seferlik)
              </p>

              {/* Divider */}
              <div className="my-6 border-t border-[#E8E6E0]" />

              {/* Features */}
              <ul className="mb-8 flex flex-col gap-3.5">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-[15px] text-[#3A3A3A]">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal text-white">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 6l2.5 2.5L9.5 4" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#iletisim"
                className={`mt-auto block rounded-xl py-4 text-center text-base font-bold transition-all duration-300 ${
                  plan.recommended
                    ? "bg-gold text-navy shadow-md hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(200,164,90,0.4)]"
                    : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                }`}
              >
                14 Gün Ücretsiz Başlayın
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trial Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-10 flex justify-center will-change-transform"
        >
          <div className="inline-flex items-center gap-2 rounded-full border-l-[3px] border-teal bg-teal/[0.08] px-6 py-2.5 text-sm font-medium text-teal">
            ✨ Beğenmezseniz iptal edin. Ödeme yok
          </div>
        </motion.div>
      </div>
    </section>
  );
}
