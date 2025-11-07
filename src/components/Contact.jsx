import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-neutral-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
          <Mail className="h-4 w-4" />
          Let's build something remarkable
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Start a project with Steven</h2>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Tell me about your brand, timeline, and goals. I reply within 24 hours.
        </p>
        <form className="mt-10 grid gap-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400/40" />
            <input required placeholder="Email" type="email" className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400/40" />
          </div>
          <input placeholder="Company (optional)" className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400/40" />
          <textarea required placeholder="Project brief" rows={5} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400/40" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-amber-50 transition-colors">
            Send inquiry
            <Send className="h-4 w-4" />
          </button>
        </form>
        <p className="mt-6 text-white/60">Or email directly: <a href="mailto:hello@stevensetiawan.design" className="underline decoration-white/30 hover:decoration-white">hello@stevensetiawan.design</a></p>
      </div>
    </section>
  );
}
