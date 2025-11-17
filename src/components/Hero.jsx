import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 overflow-hidden">
      {/* 3D Spline scene */}
      <div className="absolute inset-0"> 
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth - don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(99,102,241,0.25),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(56,189,248,0.2),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-24">
          <div className="col-span-7">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-100/70">Crafting products that feel inevitable</p>
              <h2 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
                Hi, I’m Alex. I design products that ship and scale.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-blue-100/80">
                Senior product designer with 10+ years across SaaS, fintech, and AI. I blend systems thinking with playful exploration to turn ambiguity into lovable experiences.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-[0_10px_30px_rgba(255,255,255,0.1)] ring-1 ring-white/20">
                  Explore selected work
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/15 hover:bg-white/15">
                  Get in touch
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-blue-100/70">
                <span>Ex-Stripe</span>
                <span>Design Systems</span>
                <span>0 → 1 and 1 → n</span>
              </div>
            </motion.div>
          </div>

          <div className="col-span-5">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}>
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Case studies', stat: '12+' },
                    { label: 'Filed patents', stat: '3' },
                    { label: 'Users impacted', stat: '10M+' },
                    { label: 'Teams led', stat: '4' },
                    { label: 'Countries worked', stat: '6' },
                    { label: 'Awards', stat: '8' },
                  ].map((i) => (
                    <div key={i.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-bold text-white">{i.stat}</p>
                      <p className="mt-1 text-xs text-blue-100/70">{i.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-blue-100/60">Available for advisory and selective projects in 2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
