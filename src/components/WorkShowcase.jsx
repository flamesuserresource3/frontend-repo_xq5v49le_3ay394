import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Monochrome Atelier',
    tag: 'Brand Identity',
    img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Noir Camera Co.',
    tag: 'Art Direction',
    img: 'https://images.unsplash.com/photo-1526178613959-99f1b4f68a87?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Frame Studio',
    tag: 'Website Design',
    img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-amber-300/80 font-medium">Selected Work</p>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Elegance meets utility</h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:text-white">Start a project</a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-neutral-900"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-white/70 text-sm">{p.tag}</p>
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
