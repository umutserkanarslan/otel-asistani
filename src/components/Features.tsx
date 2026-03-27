"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Çoklu Dil, Otomatik Algılama",
    desc: "Misafir hangi dilde yazarsa yazsın sistem kendi dilinde yanıtlar. Türkçe, İngilizce, Rusça, Almanca, Arapça ve çok daha fazlası.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="11" />
        <line x1="3" y1="14" x2="25" y2="14" />
        <path d="M14 3a17 17 0 014.5 11A17 17 0 0114 25a17 17 0 01-4.5-11A17 17 0 0114 3z" />
        <path d="M7 7h5M9 7v3M18 19l2 2 3-3" />
      </svg>
    ),
  },
  {
    title: "Sadece Doğru Bilgi",
    desc: "AI sadece sizin tanımladığınız bilgilerle yanıt verir. Kahvaltı saati, WiFi şifresi, havuz saatleri → hepsi doğru, hepsi güncel.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V7l9-4z" />
        <path d="M10 14l2.5 2.5L17 12" />
      </svg>
    ),
  },
  {
    title: "Misafiri Otomatik Tanır",
    desc: "Telefon numarasından misafiri tanır, adını ve odasını bilir. Her misafir kişisel bir karşılama alır.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="10" r="4" />
        <path d="M7 23c0-4 3.1-7 7-7s7 3 7 7" />
        <rect x="18" y="3" width="7" height="10" rx="2" />
        <path d="M20 6h3M20 8h3" />
      </svg>
    ),
  },
  {
    title: "Akıllı Mesaj Birleştirme",
    desc: "Misafir peş peşe 5 mesaj atsa bile hepsi tek talep olarak algılanır. Ekibiniz gereksiz bildirimlerle boğulmaz.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="12" rx="2" />
        <rect x="8" y="12" width="16" height="12" rx="2" />
        <path d="M12 10h4M12 16h8M12 20h5" />
      </svg>
    ),
  },
  {
    title: "Ekibinize Anlık İş Emri",
    desc: "Oda servisi, ekstra yastık, teknik arıza → talep geldiğinde ekibinize formatlanmış iş emri düşer: misafir adı, oda numarası, talep detayı.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6H8a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V12l-4-6z" />
        <path d="M18 6v6h4" />
        <circle cx="21" cy="9" r="5" fill="#C8A45A" fillOpacity="0.2" stroke="#C8A45A" />
        <path d="M21 7v4M21 13v0" />
        <path d="M10 16h8M10 20h5" />
      </svg>
    ),
  },
  {
    title: "Spam Koruması ✓",
    desc: "Dakikada 5'ten fazla mesaj gönderen numaralar otomatik filtrelenir. Sisteminiz trollerden ve spam'dan korunur.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#2A9D8F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V7l9-4z" />
        <path d="M10 14l4-4M14 14l-4-4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="ozellikler" className="bg-white py-28 md:py-32 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="mb-16 will-change-transform"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-extrabold text-navy md:text-[40px]">
            Neden Bu Sistem?
          </h2>
          <p className="mt-4 text-base text-body-text md:text-lg">
            Her özellik, gerçek otel ihtiyaçlarından doğdu.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="will-change-transform group flex gap-5 rounded-2xl border border-[#E0DCD5] bg-[#F9F7F3] p-7 shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.01] hover:border-gold hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] md:p-7"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-teal/[0.12]">
                {feature.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-bold text-navy">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[#4A4A4A]" style={{ lineHeight: 1.65 }}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave divider to navy LiveDemo */}
      <div className="mt-28 md:mt-32">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 0V40C240 80 480 80 720 50C960 20 1200 0 1440 30V0H0Z" fill="#FFFFFF" />
          <path d="M0 40C240 80 480 80 720 50C960 20 1200 0 1440 30V80H0V40Z" fill="#0A1628" />
        </svg>
      </div>
    </section>
  );
}
