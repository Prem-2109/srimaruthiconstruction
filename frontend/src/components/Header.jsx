import { useEffect, useState } from "react";
import { Building2, Menu, MessageCircle, PhoneCall, X } from "lucide-react";
import { company, navLinks } from "../data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 shadow-sm backdrop-blur-md border-b border-slate-200/80 py-3.5"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Brand Logo - Clean & Crisp without location clutter */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-slate-900 transition focus-visible:outline-none"
          onClick={closeMenu}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-600 to-amber-700 text-white shadow-md shadow-amber-950/15 transition-transform duration-300 group-hover:scale-105">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight sm:text-lg text-slate-900 leading-tight">
              {company.name}
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
              Builders & Promoters
            </span>
          </div>
        </a>

        {/* Clean Desktop Navigation */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-amber-700 focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Action CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-50 px-3.5 py-2 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100"
          >
            <MessageCircle className="h-3.5 w-3.5 text-emerald-600 fill-emerald-600" />
            <span>WhatsApp</span>
          </a>
          <a
            href="#reach-us"
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-amber-600"
          >
            <span>Book Site Visit</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-700 transition hover:bg-slate-100 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100 py-4 shadow-xl" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-2.5 text-base font-medium text-slate-700 transition hover:bg-amber-50 hover:text-amber-800"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 border-t border-slate-100 pt-3 flex flex-col gap-2.5">
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white py-2.5 text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-800"
            >
              <PhoneCall className="h-4 w-4 text-amber-600" />
              <span>{company.phone}</span>
            </a>
            <a
              href="#reach-us"
              onClick={closeMenu}
              className="rounded-xl bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Book Site Visit
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
