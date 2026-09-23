import { Sparkles, Layers, Search, Tag, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Ringkasan Otomatis',
    desc: 'Ubah catatan panjang menjadi ringkasan cepat dengan poin-poin kunci yang mudah diingat.',
    color: 'from-amber-400/20 to-amber-400/5',
  },
  {
    icon: Layers,
    title: 'Organisasi Kategori',
    desc: 'Kelompokkan catatan berdasarkan mata kuliah dengan struktur visual yang jelas dan intuitif.',
    color: 'from-amber-400/20 to-amber-400/5',
  },
  {
    icon: Search,
    title: 'Pencarian Instan',
    desc: 'Temukan catatan lama dalam hitungan detik menggunakan tag, judul, atau isi teks.',
    color: 'from-cyan-400/20 to-cyan-400/5',
  },
  {
    icon: Tag,
    title: 'Sistem Tag Cerdas',
    desc: 'Labeli setiap catatan dengan topik, bab, atau tingkat kesulitan untuk navigasi cepat.',
    color: 'from-fuchsia-400/20 to-fuchsia-400/5',
  },
  {
    icon: Zap,
    title: 'Template Siap Pakai',
    desc: 'Pilih dari berbagai format: ringkasan, peta konsep, kartu belajar, atau kuis interaktif.',
    color: 'from-amber-400/20 to-amber-400/5',
  },
];

export function Features() {
  return (
    <section id="fitur" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
            Dibuat untuk <span className="text-gradient">mahasiswa</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Setiap fitur dirancang berdasarkan kebiasaan belajar mahasiswa Indonesia — praktis, cepat, dan tanpa gangguan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <a
              key={f.title}
              href="#kategori"
              className="group relative rounded-3xl glass card-shimmer p-8 flex flex-col gap-6 hover:border-amber-400/20"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Top glow */}
              <div className={`absolute top-0 left-0 right-0 h-[1px] rounded-t-3xl bg-gradient-to-r ${f.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-40`} />
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-inner shadow-white/5`}>
                <f.icon className="w-6 h-6 text-white/90" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">{f.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300/80 mt-auto pt-4 border-t border-white/[0.04] group-hover:text-amber-300 transition-colors">
                <span>Pelajari</span>
                <span className="w-3 h-[1px] bg-amber-300/40 group-hover:w-6 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
