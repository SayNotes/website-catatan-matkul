import { Sparkles } from 'lucide-react';

export function About() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-8 leading-tight">
          Catatan yang <span className="text-gradient">teratur</span> <br />
          membuat belajar <span className="text-gradient">lebih mudah</span>.
        </h2>
        <p className="text-zinc-400 leading-relaxed text-base sm:text-lg mb-10">
          CatatanMatkul bukan sekadar aplikasi — ini adalah sistem mencatat yang dibangun untuk cara belajar mahasiswa Indonesia. Dengan kombinasi struktur, visualisasi, dan kecepatan akses, setiap catatan menjadi fondasi pemahaman yang lebih dalam.
        </p>
        <a href="#fitur" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-br from-amber-450 to-amber-450 text-white font-bold shadow-xl shadow-amber-600/20 hover:shadow-amber-600/40 hover:scale-[1.03] transition-all duration-300">
          <Sparkles className="w-4 h-4" />
          Mulai Sekarang
        </a>
      </div>
    </section>
  );
}
