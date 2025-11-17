import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('Thanks — I’ll get back to you shortly.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white">Let’s build something meaningful</h3>
          <p className="mt-2 text-blue-100/80">Have a project or need advisory? Tell me a bit about it.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <input name="company" placeholder="Company (optional)" className="w-full rounded-xl bg.white/5 px-4 py-3 text-white placeholder:text-blue-200/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <textarea name="message" required rows="4" placeholder="What are you building?" className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/50 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" />
            <motion.button whileTap={{ scale: 0.98 }} className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 ring-1 ring-white/20">
              Send message
            </motion.button>
          </form>

          {status && <p className="mt-4 text-sm text-blue-100/80">{status}</p>}
        </div>
      </div>
    </section>
  );
}
