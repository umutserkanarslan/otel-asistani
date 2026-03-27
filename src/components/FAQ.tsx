"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Misafirlerim WhatsApp kullanmıyorsa ne olacak?",
    a: "WhatsApp dünya genelinde en yaygın mesajlaşma uygulaması → özellikle turist bölgelerinde misafirlerin %90'ından fazlası kullanıyor. Kullanmayan misafirleriniz için resepsiyon hizmeti her zamanki gibi devam eder. Sistem ek bir kanal, mevcut hizmetin yerine geçmez.",
  },
  {
    q: "AI yanlış bilgi verirse ne olur?",
    a: "AI yalnızca sizin tanımladığınız otel bilgileriyle yanıt verir. Kahvaltı saati, WiFi şifresi, havuz saatleri → hepsi sizin onayladığınız veritabanından gelir. Emin olmadığı konularda misafiri otomatik olarak resepsiyona yönlendirir.",
  },
  {
    q: "Kurulum ne kadar sürer?",
    a: "Ortalama 3-5 iş günü. Otel bilgilerinizi alır, sistemi yapılandırır, birlikte test eder ve canlıya alırız. Ekibinize kısa bir eğitim de dahil.",
  },
  {
    q: "Mevcut sistemlerimle entegre olur mu?",
    a: "Google Sheets, Telegram ve WhatsApp Business API ile doğrudan entegre çalışır. Otel yönetim sisteminizle (PMS) entegrasyon gerekiyorsa özel çözüm sunuyoruz.",
  },
  {
    q: "Verilerimiz güvende mi?",
    a: "Tüm veriler şifreli kanallar üzerinden iletilir. Misafir bilgileri yalnızca konaklama süresi boyunca saklanır, check-out sonrası otomatik silinir. KVKK uyumlu çalışıyoruz → verileriniz asla üçüncü taraflarla paylaşılmaz.",
  },
  {
    q: "Aylık maliyet dışında ek ücret var mı?",
    a: "Hayır. Aylık abonelik ve tek seferlik kurulum bedeli dışında gizli maliyet yoktur. Güncelleme, bakım ve teknik destek aylık ücrete dahildir.",
  },
  {
    q: "Beğenmezsem iptal edebilir miyim?",
    a: "Elbette. 14 günlük ücretsiz deneme süresinde hiçbir ücret alınmaz. Deneme sonrası devam etmek istemezseniz tek bir mesajla iptal edebilirsiniz, taahhüt yoktur.",
  },
  {
    q: "AI misafirle ne kadar doğal konuşuyor?",
    a: "AI, resepsiyon görevlisi gibi sıcak ve doğal bir dilde yanıt verir. Robotik veya kalıp cümleler kullanmaz. Misafirler çoğu zaman gerçek bir kişiyle konuştuklarını düşünür.",
  },
  {
    q: "Mevcut WhatsApp numaramızı kullanabilir miyiz?",
    a: "Evet. Otelinizin mevcut WhatsApp numarasını sisteme bağlarız, yeni numara almanıza gerek yoktur. Misafirleriniz alışık oldukları numaraya yazmaya devam eder.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-28 md:py-32 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16 lg:gap-20">
          {/* Left Title — 35% */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="md:w-[35%] md:flex-shrink-0 will-change-transform"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-extrabold text-navy md:text-[40px]">
              Sıkça Sorulan Sorular
            </h2>
            <p className="mt-4 text-base text-body-text md:text-lg" style={{ lineHeight: 1.65 }}>
              Henüz ikna olmadınız mı? Cevaplar burada.
            </p>
          </motion.div>

          {/* Right Accordion — 65% */}
          <div className="flex-1">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`border-b border-[#E0DCD5] transition-colors duration-200 will-change-transform ${isOpen ? "bg-[#FDFCF9]" : ""}`}
                  style={isOpen ? { borderLeft: "3px solid #C8A45A", paddingLeft: "20px" } : { paddingLeft: "23px" }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between py-6 text-left"
                  >
                    <span className={`pr-6 text-[16px] transition-all duration-200 ${isOpen ? "font-bold text-navy" : "font-semibold text-[#3A3A3A]"}`}>
                      {faq.q}
                    </span>
                    <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xl font-medium text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-[15px] text-[#4A4A4A]" style={{ lineHeight: 1.7 }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Wave divider to navy CTA */}
      <div className="mt-28 md:mt-32">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 0V40C240 80 480 80 720 50C960 20 1200 0 1440 30V0H0Z" fill="#FFFFFF" />
          <path d="M0 40C240 80 480 80 720 50C960 20 1200 0 1440 30V80H0V40Z" fill="#0A1628" />
        </svg>
      </div>
    </section>
  );
}
