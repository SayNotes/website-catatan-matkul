import { Sparkles, Code2, Globe, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-450/90 to-amber-450/90 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Sparkles className="w-4 h-4 text-white" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Catatan<span className="text-gradient">Matkul</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Catatan kuliah modern untuk mahasiswa Indonesia. Terstruktur, visual, dan siap pakai.
            </p>
          </div>
          <div className="flex gap-3">
            {[
              { icon: Code2, label: 'GitHub' },
              { icon: Globe, label: 'Twitter' },
              { icon: MessageCircle, label: 'Instagram' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.07] hover:border-white/10 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} CatatanMatkul. Dibuat untuk mahasiswa Indonesia.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privasi</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Syarat</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Kontak</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
