
const stats = [
  { value: '2.400+', label: 'Catatan Dibuat' },
  { value: '8', label: 'Mata Kuliah' },
  { value: '4', label: 'Format Template' },
  { value: '92%', label: 'Pengguna Aktif' },
];

export function Stats() {
  return (
    <section id="tentang" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="rounded-[2.5rem] glass border border-white/[0.06] p-10 sm:p-14 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/15 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/15 rounded-full blur-[80px]" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center fade-up" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'backwards' }}>
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-2 tracking-tight">{s.value}</div>
                <div className="text-sm text-zinc-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
