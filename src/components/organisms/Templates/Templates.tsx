import { FileText, Lightbulb, ListChecks, LayoutGrid } from 'lucide-react';

const templates = [
  {
    icon: FileText,
    title: 'Ringkasan',
    desc: 'Catatan ringkas dengan poin-poin utama, cocok untuk mengulang materi sebelum ujian.',
    tag: 'Paling Populer',
  },
  {
    icon: Lightbulb,
    title: 'Peta Konsep',
    desc: 'Visualisasi hubungan antar topik dengan diagram node untuk pemahaman mendalam.',
    tag: 'Visual',
  },
  {
    icon: ListChecks,
    title: 'Kartu Belajar',
    desc: 'Format pertanyaan-jawaban interaktif untuk menguji pemahaman secara mandiri.',
    tag: 'Interaktif',
  },
  {
    icon: LayoutGrid,
    title: 'Tabel Perbandingan',
    desc: 'Bandingkan konsep berpasangan dalam tabel terstruktur untuk memudahkan analisis.',
    tag: 'Analisis',
  },
];

export function Templates() {
  return (
    <section id="template" className="relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 py-32 relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
            Pilih <span className="text-gradient">Format Catatan</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Setiap mata kuliah berbeda — pilih format yang sesuai dengan cara belajar kamu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((t, i) => (
            <a
              key={t.title}
              href="#"
              className="group relative rounded-[2rem] glass card-shimmer overflow-hidden p-8 flex flex-col gap-5 hover:border-amber-400/20"
            >
              {/* Background decorative number */}
              <span className="absolute top-4 right-6 text-[8rem] font-black text-white/[0.02] leading-none select-none group-hover:text-white/[0.03] transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex items-center justify-between relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-400/5 flex items-center justify-center">
                  <t.icon className="w-5.5 h-5.5 text-amber-300" />
                </div>
                <span className="text-xs font-bold tracking-wide uppercase text-amber-300/70 bg-amber-400/10 px-3 py-1 rounded-full">{t.tag}</span>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-amber-100 transition-colors">{t.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{t.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
