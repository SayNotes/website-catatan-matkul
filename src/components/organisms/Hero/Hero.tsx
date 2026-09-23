import { ArrowRight, BookOpen, PenLine, Search, Tag } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-[72px]">
      {/* Background grid + orbs */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-amber-450/30 rounded-full blur-[140px] glow-orb" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-450/25 rounded-full blur-[120px] glow-orb" style={{ animationDelay: '-7s', animationDuration: '25s' }} />
      <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] bg-amber-450/15 rounded-full blur-[100px] glow-orb" style={{ animationDelay: '-10s', animationDuration: '30s' }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center z-[100]">
        {/* Badge */}
        <a href="#fitur" className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-zinc-300 mb-8 hover:border-white/20 hover:bg-white/[0.07] transition-all shadow-inner shadow-white/5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Catatan Kuliah Modern
        </a>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1] mb-8 fade-up">
          <span className="block text-white/90">Catatan Kuliah</span>
          <span className="block text-gradient">untuk Belajar Bersama</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light fade-up" style={{ animationDelay: '0.15s', animationFillMode: 'backwards' }}>
          Catatan untuk bantu kamu belajar — kamu bisa cari catatan atau berbagi catatanmu untuk membantu mahasiswa lain. Satu catatan, ribuan kebaikan.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 mb-20 fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
          <a href="#fitur" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-br from-amber-450 to-amber-450 text-white font-bold text-base shadow-2xl shadow-amber-600/25 hover:shadow-amber-600/50 hover:scale-[1.03] transition-all duration-300">
            Jelajahi Fitur
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#kategori" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full glass text-white font-semibold text-base hover:bg-white/[0.07] transition-all duration-300">
            Lihat Kategori
          </a>
        </div>

        {/* Feature quick pills */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 text-zinc-500 fade-up" style={{ animationDelay: '0.45s', animationFillMode: 'backwards' }}>
          {[
            { icon: BookOpen, label: 'Catatan Terstruktur' },
            { icon: Tag, label: 'Tag & Filter' },
            { icon: Search, label: 'Pencarian Cepat' },
            { icon: PenLine, label: 'Template Siap Pakai' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm sm:text-base">
              <Icon className="w-4 h-4 text-zinc-600" />
              <span className="hidden sm:inline">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
