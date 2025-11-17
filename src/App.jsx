import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      {/* Background subtle grid */}
      <div className="pointer-events-none fixed inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]" />

      <Navbar />
      <Hero />
      <SelectedWork />
      <About />
      <Testimonials />
      <Contact />

      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-sm text-blue-200/60">
        © {new Date().getFullYear()} Alex — Senior Product Designer. Built with care.
      </footer>
    </div>
  );
}

export default App;
