import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60">© {new Date().getFullYear()} Steven Setiawan — Creative Designer</p>
        <p className="text-white/40">Crafted with intention. Minimal by design.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-[Inter]">
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
