import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Stripe Atlas Refresh',
    description: 'Reimagined onboarding and dashboard IA to reduce time-to-incorporation by 32%.',
    tags: ['Design Systems', 'IA', 'Experimentation'],
    gradient: 'from-violet-500/30 to-blue-500/30',
  },
  {
    title: 'AI Insights for Fintech',
    description: 'Turned noisy telemetry into human, actionable insights adopted by 300+ PMs.',
    tags: ['AI', 'Data Viz', 'UX Writing'],
    gradient: 'from-cyan-400/30 to-fuchsia-400/30',
  },
  {
    title: 'Marketplace 0 → 1',
    description: 'Shipped a two-sided marketplace from concept to $40M GMV in 18 months.',
    tags: ['0→1', 'Research', 'Growth'],
    gradient: 'from-emerald-400/30 to-sky-400/30',
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-100/70">Selected Work</p>
            <h3 className="mt-2 text-3xl font-bold text-white">Impact over aesthetics</h3>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-blue-100/80 hover:text-white">
            View full archive
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className={`absolute -inset-10 bg-gradient-to-br ${p.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-white">{p.title}</h4>
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 transition-transform group-hover:translate-x-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-3 text-blue-100/80">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-lg bg-white/10 px-2.5 py-1 text-xs text-blue-100/80 ring-1 ring-white/15">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
