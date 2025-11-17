import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-1">
              <h3 className="text-2xl font-bold text-white">A designer shaped by systems</h3>
              <p className="mt-2 text-blue-100/70">and softened by play.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 space-y-4 text-blue-100/80">
              <p>
                I’ve led cross-functional teams from zero to one and evolved mature products serving millions. My practice blends research, systems design, and tasteful craft—grounded in measurable outcomes.
              </p>
              <p>
                I partner best with founders and product leaders who value momentum and clarity. Together we design artifacts that align teams and accelerate decision-making.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Design systems','Product strategy','AI-assisted UX','Experimentation','Team leadership','Design ops'].map((s) => (
                  <div key={s} className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 text-blue-100/80">{s}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
