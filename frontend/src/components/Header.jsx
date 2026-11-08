import { useEffect, useState } from "react";
import { Building2, Menu, X } from "lucide-react";
import { company, navLinks } from "../data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#E2E8F0]/80 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 shadow-[0_20px_32px_-6px_rgba(15,23,42,0.10)] backdrop-blur-xl"
          : "bg-white/85 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5 text-[#0F172A]" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E3A8A] text-white">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-base font-bold tracking-tight sm:text-lg">{company.name}</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-sm font-semibold text-[#475569] transition hover:text-[#0F766E]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#reach-us"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1E3A8A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
          >
            Book a consultation
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[#1E3A8A] transition hover:bg-[#EFF6FF] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[#E2E8F0] bg-white lg:hidden transition-[max-height,opacity] duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-3 py-3 text-base font-medium text-[#475569] transition hover:bg-[#F1F5F9] hover:text-[#1E3A8A]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reach-us"
            onClick={closeMenu}
            className="mt-2 rounded-xl bg-[#1E3A8A] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Book a consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
