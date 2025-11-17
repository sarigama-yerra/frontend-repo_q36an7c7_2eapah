import { motion } from 'framer-motion';

const quotes = [
  {
    quote: 'Alex brought calm to chaos. The system we shipped scaled to 50+ surfaces without slowing shipping speed.',
    author: 'VP Product, Fintech Unicorn'
  },
  {
    quote: 'The most cross-functional designer I’ve worked with. Partners deeply with eng and PM to land outcomes.',
    author: 'Head of Engineering, Series C SaaS'
  },
  {
    quote: 'Turns ambiguous spaces into focused roadmaps. Our activation rose 23% after the redesign.',
    author: 'Founder & CEO, AI Startup'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-blue-100/80"
            >
              <p className="text-lg leading-relaxed text-blue-50/90">“{q.quote}”</p>
              <footer className="mt-4 text-sm text-blue-200/70">— {q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
