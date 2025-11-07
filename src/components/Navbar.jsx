import { useEffect, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-neutral-900/50 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-400 to-rose-500 text-neutral-900 font-black flex items-center justify-center shadow-md shadow-amber-500/20">
            SS
          </div>
          <div className="leading-tight">
            <p className="text-sm text-white/70">Creative Designer</p>
            <p className="text-white font-semibold tracking-wide">Steven Setiawan</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-white/70">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white px-4 py-2 transition-colors">
            <Mail className="h-4 w-4" />
            <span>Get in touch</span>
          </a>
          <div className="flex items-center gap-2 text-white/70">
            <a aria-label="LinkedIn" href="#" className="p-2 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="GitHub" href="#" className="p-2 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
