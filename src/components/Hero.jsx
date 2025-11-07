import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for new projects
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Steven Setiawan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-fuchsia-400">Creative Designer</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            I design premium, minimalist brand identities and digital experiences shaped by photography, motion, and technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-amber-50 transition-colors">
              View Selected Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-6 py-3 font-medium text-white transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-transparent to-neutral-950/80" />
    </section>
  );
}
