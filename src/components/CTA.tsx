"use client";

import { motion } from "framer-motion";

const trustItems = [
  { icon: "🔒", text: "KVKK Uyumlu" },
  { icon: "⚡", text: "3-5 Günde Hazır" },
  { icon: "🎯", text: "14 gün ücretsiz" },
];

export default function CTA() {
  return (
    <section id="iletisim" className="noise-bg relative overflow-hidden bg-navy py-28 md:py-32 lg:py-36">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[600px] rounded-full bg-gold/[0.06] blur-[100px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[700px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="will-change-transform"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-extrabold text-white md:text-[40px] lg:text-[48px]">
            14 Gün Ücretsiz Deneyin, <span className="text-gold">Farkı Görün</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[500px] text-base leading-relaxed text-light-gray md:text-lg" style={{ lineHeight: 1.65 }}>
            Ücretsiz demo ile sistemi test edin. Ekibiniz daha mutlu, misafirleriniz daha memnun.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center will-change-transform"
        >
          <a
            href="https://wa.me/905316745900"
            className="inline-flex items-center gap-2.5 rounded-xl bg-gold px-8 py-4 text-base font-bold text-navy shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(200,164,90,0.45)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.37 0-4.557-.7-6.396-1.9l-.459-.296-2.652.889.889-2.652-.296-.459A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Ücretsiz Deneyin
          </a>
          <a
            href="tel:+905316745900"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-navy"
          >
            📞 Hemen Arayın
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10 will-change-transform"
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[15px] text-light-gray">
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
