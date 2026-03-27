"use client";

import { motion } from "framer-motion";

const chatMessages = [
  { role: "guest", lang: "TR", text: "Merhaba, havuz kaçta kapanıyor?" },
  {
    role: "ai",
    text: "Merhaba! 🏊 Havuzumuz her gün 08:00 - 20:00 arası açıktır. Havuz başında ücretsiz şezlong ve havlu hizmeti mevcuttur. İyi yüzmeler! 😊",
  },
  { role: "guest", lang: "EN", text: "Can I get extra pillows for room 312?" },
  {
    role: "ai",
    text: "Absolutely! I've forwarded your request to our housekeeping team. Extra pillows will be delivered to Room 312 within 15 minutes. Is there anything else I can help with? 🛏️",
  },
];

const telegramLines = [
  "👤 Misafir: Sarah Johnson",
  "🚪 Oda: 312",
  "📋 Talep: Ekstra yastık",
  "⏰ Saat: 14:32",
];

export default function LiveDemo() {
  return (
    <section className="noise-bg relative overflow-hidden bg-navy py-28 md:py-32 lg:py-36">
      {/* Background floating particles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-teal/[0.08]" />
        <div className="absolute left-[25%] top-[70%] h-3 w-3 rounded-full bg-gold/[0.06]" />
        <div className="absolute right-[15%] top-[30%] h-2.5 w-2.5 rounded-full bg-teal/[0.06]" />
        <div className="absolute right-[30%] top-[80%] h-2 w-2 rounded-full bg-gold/[0.08]" />
        <div className="absolute left-[50%] top-[15%] h-1.5 w-1.5 rounded-full bg-teal/[0.1]" />
        <div className="absolute right-[8%] top-[60%] h-3 w-3 rounded-full bg-gold/[0.05]" />
        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-teal/[0.04] blur-[100px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="mb-14 text-center font-[family-name:var(--font-heading)] text-3xl font-extrabold text-white md:text-[40px] will-change-transform"
        >
          Gerçek Bir Sohbeti İzleyin
        </motion.h2>

        {/* Side-by-side Layout */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:gap-0">
          {/* LEFT — WhatsApp Chat */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="will-change-transform w-full overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.2),0_0_60px_rgba(42,157,143,0.15)] md:flex-1"
          >
            {/* WhatsApp Header */}
            <div className="flex items-center gap-3 bg-[#075E54] px-5 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#128C7E] text-sm font-bold text-white">
                AI
              </div>
              <div>
                <p className="text-sm font-semibold text-white">AI Assistant</p>
                <p className="text-xs text-[#b5d9d3]">çevrimiçi</p>
              </div>
              <div className="ml-auto flex gap-4 text-white/60">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z" /></svg>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4z" /></svg>
              </div>
            </div>

            {/* Chat Body */}
            <div
              className="flex flex-col gap-3 px-4 py-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cfc4' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundColor: "#E5DDD5",
              }}
            >
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  className={`flex will-change-transform ${msg.role === "ai" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-[13.5px] leading-relaxed shadow-sm ${msg.role === "ai" ? "rounded-tr-none bg-[#DCF8C6] text-[#111]" : "rounded-tl-none bg-white text-[#111]"}`}>
                    {msg.role === "guest" && msg.lang && (
                      <span className="mb-1 inline-block rounded bg-navy/10 px-1.5 py-0.5 text-[10px] font-semibold text-navy">{msg.lang}</span>
                    )}
                    {msg.role === "ai" && (
                      <span className="mb-1 inline-block rounded bg-teal/15 px-1.5 py-0.5 text-[10px] font-semibold text-teal">AI</span>
                    )}
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#999]">
                      14:32
                      {msg.role === "ai" && (
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="#53bdeb"><path d="M11.071.653a.457.457 0 00-.304-.102.493.493 0 00-.381.178l-6.19 7.636-2.011-2.095a.463.463 0 00-.659.003.423.423 0 00.003.625l2.388 2.489a.463.463 0 00.659.004l6.557-8.084a.422.422 0 00-.062-.654z" /><path d="M14.757.653a.457.457 0 00-.305-.102.493.493 0 00-.38.178l-6.19 7.636-1.166-1.214-.463.57 1.577 1.644a.463.463 0 00.66.004l6.556-8.084a.422.422 0 00-.289-.632z" /></svg>
                      )}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-2 border-t border-[#e0dcd5] bg-[#f0ede6] px-3 py-2">
              <div className="flex-1 rounded-full bg-white px-4 py-2 text-xs text-muted">Bir mesaj yazın...</div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#075E54] text-white">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </div>
            </div>
          </motion.div>

          {/* MIDDLE — Arrow connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-4 px-6 py-6 md:px-12 will-change-transform"
          >
            <span className="text-center text-sm font-medium leading-tight text-light-gray">
              Bu sırada<br />personelin<br />ekranında...
            </span>
            {/* Arrow — animated pulse */}
            <div className="animate-pulse">
              <svg width="48" height="28" viewBox="0 0 48 28" fill="none" className="hidden text-gold md:block">
                <path d="M2 14h38M32 5l9 9-9 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg width="28" height="48" viewBox="0 0 28 48" fill="none" className="text-gold md:hidden">
                <path d="M14 2v38M5 32l9 9 9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>

          {/* RIGHT — Telegram Panel */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="will-change-transform flex w-full flex-col overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.2),0_0_60px_rgba(200,164,90,0.12)] md:flex-1"
          >
            {/* Telegram Header */}
            <div className="flex items-center gap-3 bg-[#2AABEE] px-5 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">✈️</div>
              <div>
                <p className="text-sm font-semibold text-white">Personel Bildirim Grubu</p>
                <p className="text-xs text-white/70">Otel Otomasyon Botu</p>
              </div>
            </div>

            {/* Telegram Body */}
            <div className="flex flex-1 flex-col justify-center bg-[#0E1621] p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="rounded-xl bg-[#182533] p-5 will-change-transform"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-lg">🔔</span>
                  <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-gold">YENİ TALEP</span>
                </div>
                {telegramLines.map((line, i) => (
                  <p key={i} className="py-0.5 text-sm text-white/80">{line}</p>
                ))}
                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3">
                  <div className="h-2 w-2 rounded-full bg-teal" />
                  <span className="text-xs text-teal">Talep iletildi • 14:32</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="mt-4 rounded-xl bg-[#182533]/60 p-5 will-change-transform"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-lg">🔔</span>
                  <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-gold/60">TAMAMLANDI</span>
                </div>
                <p className="text-sm text-white/40">👤 Misafir: Hans Müller</p>
                <p className="text-sm text-white/40">🚪 Oda: 408 • 📋 Minibar yenileme</p>
                <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
                  <div className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="text-xs text-white/30">Tamamlandı • 13:15</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider to off-white pricing */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0 40C360 90 720 70 1080 40C1260 25 1380 10 1440 20V80H0V40Z" fill="#F7F5F0" />
        </svg>
      </div>
    </section>
  );
}
