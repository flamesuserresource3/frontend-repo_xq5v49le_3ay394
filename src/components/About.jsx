export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Design with restraint. Impact with precision.</h2>
          <p className="mt-6 text-white/80 leading-relaxed">
            I create elevated visual systems that feel timeless—rooted in photography, modernist typography, and a refined use of color and motion. My work spans branding, editorial art direction, and digital product design for startups and established brands.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="text-4xl font-extrabold text-amber-300">8+</p>
              <p className="text-white/70">Years crafting brand experiences</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-rose-300">40+</p>
              <p className="text-white/70">Projects delivered across industries</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
            <h3 className="font-semibold text-white/90">Capabilities</h3>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/70">
              <li>Brand Identity</li>
              <li>Art Direction</li>
              <li>Editorial Design</li>
              <li>Website & Product UI</li>
              <li>Motion & Interaction</li>
              <li>Photography & Styling</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
            <h3 className="font-semibold text-white/90">Approach</h3>
            <p className="mt-2 text-white/70">
              Minimal inputs. Distinct outputs. I reduce noise, define clear visual rules, and deliver systems that scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
