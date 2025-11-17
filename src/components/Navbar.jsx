import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Praise" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" className="group inline-flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 ring-1 ring-white/20 shadow-[0_0_30px_rgba(99,102,241,0.35)]" />
              <div>
                <p className="text-sm uppercase tracking-widest text-blue-200/70">Portfolio</p>
                <h1 className="-mt-1 text-base font-semibold text-white">Senior Product Designer</h1>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Let’s collaborate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </nav>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-blue-100/90 hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-white ring-1 ring-white/15"
              >
                Let’s collaborate
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
