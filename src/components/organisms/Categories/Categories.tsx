import { Book, Calculator, Atom, Binary, Dna, TrendingUp } from 'lucide-react';

const categories = [
  {
    name: 'Matematika',
    sub: 'Kalkulus, Aljabar, Statistika',
    icon: Calculator,
    count: 124,
    color: 'bg-amber-500/20 text-amber-300',
    border: 'border-amber-400/10',
    glow: 'from-amber-500/20',
  },
  {
    name: 'Fisika',
    sub: 'Mekanika, Listrik, Termodinamika',
    icon: Atom,
    count: 98,
    color: 'bg-blue-500/20 text-amber-300',
    border: 'border-blue-400/10',
    glow: 'from-amber-500/20',
  },
  {
    name: 'Pemrograman',
    sub: 'Struktur Data, OOP, Algoritma',
    icon: Binary,
    count: 156,
    color: 'bg-emerald-500/20 text-emerald-300',
    border: 'border-emerald-400/10',
    glow: 'from-emerald-500/20',
  },
  {
    name: 'Biologi',
    sub: 'Genetika, Ekologi, Anatomi',
    icon: Dna,
    count: 67,
    color: 'bg-rose-500/20 text-rose-300',
    border: 'border-rose-400/10',
    glow: 'from-rose-500/20',
  },
  {
    name: 'Ekonomi',
    sub: 'Mikro, Makro, Ekonometrika',
    icon: TrendingUp,
    count: 42,
    color: 'bg-amber-500/20 text-amber-300',
    border: 'border-amber-400/10',
    glow: 'from-amber-500/20',
  },
  {
    name: 'Umum',
    sub: 'Pengantar, Metodologi, Etika',
    icon: Book,
    count: 210,
    color: 'bg-cyan-500/20 text-cyan-300',
    border: 'border-cyan-400/10',
    glow: 'from-cyan-500/20',
  },
];

export function Categories() {
  return (
    <section id="kategori" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Kategori <span className="text-gradient">Mata Kuliah</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
              Organisir catatan berdasarkan bidang studi dengan tampilan yang bersih dan terstruktur.
            </p>
          </div>
          <a href="#template" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors">
            Lihat Semua Template
            <span className="w-4 h-[1px] bg-amber-300/50" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href="#"
              className={`group relative rounded-3xl glass card-shimmer p-6 sm:p-7 flex flex-col gap-5 border ${cat.border} hover:border-opacity-40`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Subtle glow top */}
              <div className={`absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent`} />
              <div className={`absolute top-0 left-0 right-0 h-16 bg-gradient-to-b ${cat.glow} to-transparent rounded-t-3xl opacity-60`} />

              <div className="flex items-start justify-between">
                <div className={`w-11 h-11 rounded-2xl ${cat.color} flex items-center justify-center shadow-inner shadow-white/5`}>
                  <cat.icon className="w-5.5 h-5.5 text-white/90" />
                </div>
                <span className="text-3xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors">{String(cat.count).padStart(3, '0')}</span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-amber-100 transition-colors">{cat.name}</h3>
                <p className="text-sm text-zinc-500">{cat.sub}</p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-600">{cat.count} catatan</span>
                <span className="text-xs font-bold text-amber-300/80 group-hover:translate-x-1 transition-transform">Lihat →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
