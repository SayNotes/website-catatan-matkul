import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Search } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Fitur', href: '#fitur' },
    { label: 'Kategori', href: '#kategori' },
    { label: 'Template', href: '#template' },
    { label: 'Tentang', href: '#tentang' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-450/90 to-amber-450/90 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
            <Sparkles className="w-5 h-5 text-white" />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Catatan<span className="text-gradient">Matkul</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-zinc-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative group hover:text-white transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-450 to-amber-450 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Cari catatan..."
              className="pl-9 pr-4 py-2.5 rounded-full text-sm bg-white/5 text-white border border-white/10 placeholder:text-zinc-500 focus:outline-none focus:border-amber-450/50 focus:bg-white/10 transition-colors w-56 lg:w-72"
            />
          </div>
          <a
            href="#fitur"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-br from-amber-450 to-amber-450 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all"
          >
            Upload Catatan
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-zinc-300 hover:text-white text-base font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Cari catatan..."
              className="w-full pl-9 pr-4 py-3 rounded-xl text-sm bg-white/5 text-white border border-white/10 placeholder:text-zinc-500 focus:outline-none focus:border-amber-450/50 focus:bg-white/10 transition-colors"
            />
          </div>
          <a href="#fitur" onClick={() => setMobileOpen(false)} className="mt-2 px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-br from-amber-450 to-amber-450 text-white text-center">
            Upload Catatan
          </a>
        </div>
      )}
    </nav>
  );
}
