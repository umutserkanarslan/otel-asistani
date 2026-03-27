"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#nasil-calisir", label: "Nasıl Çalışır" },
    { href: "#ozellikler", label: "Özellikler" },
    { href: "#fiyatlandirma", label: "Fiyatlandırma" },
    { href: "#iletisim", label: "İletişim" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(10,22,40,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className={`font-[family-name:var(--font-brand)] text-xl font-bold tracking-wider transition-colors duration-300 ${scrolled ? "text-navy" : "text-[#ecd6ad]"}`}>
            UMELIA
          </span>
          <span className={`transition-colors duration-300 ${scrolled ? "text-border-warm" : "text-white/30"}`}>|</span>
          <span className={`text-sm transition-colors duration-300 ${scrolled ? "text-muted" : "text-white/60"}`}>Otel Çözümleri</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${scrolled ? "text-body-text hover:text-navy" : "text-white/80 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.37 0-4.557-.7-6.396-1.9l-.459-.296-2.652.889.889-2.652-.296-.459A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Demo Talep Et
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menü"
        >
          <span
            className={`h-0.5 w-6 transition-all duration-300 ${scrolled ? "bg-navy" : "bg-white"} ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 transition-all duration-300 ${scrolled ? "bg-navy" : "bg-white"} ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 transition-all duration-300 ${scrolled ? "bg-navy" : "bg-white"} ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-0 right-0 top-full border-t border-border-warm bg-white/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-body-text transition-colors hover:bg-off-white hover:text-navy"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3 text-base font-semibold text-navy"
            >
              Demo Talep Et
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
