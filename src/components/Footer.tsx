"use client";

export default function Footer() {
  return (
    <footer className="bg-[#060F1D] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-brand)] text-xl font-bold tracking-wider text-[#ecd6ad]">
                UMELIA
              </span>
              <span className="text-white/20">|</span>
              <span className="text-sm text-white/40">Otel Çözümleri</span>
            </div>
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-white/40" style={{ lineHeight: 1.7 }}>
              Bodrum'un otellerine özel AI çözümleri. Misafir memnuniyetinizi artırıyor, ekibinizin yükünü hafifletiyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wider text-white/60">
              Bağlantılar
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "#nasil-calisir", label: "Nasıl Çalışır" },
                { href: "#ozellikler", label: "Özellikler" },
                { href: "#fiyatlandirma", label: "Fiyatlandırma" },
                { href: "#iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-bold uppercase tracking-wider text-white/60">
              İletişim
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/40">
              <li>📧 serkan@weareumelia.com</li>
              <li>📱 +90 531 674 59 00</li>
              <li>📍 Bodrum, Muğla</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/[0.08] pt-8 text-center text-xs text-white/30">
          © 2026 UMELIA. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
