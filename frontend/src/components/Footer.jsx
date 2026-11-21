import { Building2, ChevronRight, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Train } from "lucide-react";
import { company, navLinks, services } from "../data/site";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t border-slate-900">
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-amber-600/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:px-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-4">
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-600/20">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold tracking-tight text-white leading-tight">
                {company.name}
              </span>
              <span className="text-[10px] font-bold tracking-wider text-amber-400 uppercase">
                Veppampattu · Builders & Promoters
              </span>
            </div>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
            {company.description}
          </p>

          <div className="mt-6 flex flex-col gap-2 text-xs text-amber-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>DTCP & CMDA Approved Layouts in Veppampattu</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Train className="h-4 w-4 text-amber-500" />
              <span>2 Mins from Veppampattu Railway Station</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <ChevronRight className="h-3 w-3 text-amber-500/60" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services in Veppampattu */}
        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Veppampattu Properties
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  <ChevronRight className="h-3 w-3 text-amber-500/60" />
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact details */}
        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Veppampattu Office
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <a href={company.phoneHref} className="hover:text-white transition">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition">
                WhatsApp: +91 99529 95222
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <a href={company.emailHref} className="hover:text-white transition">
                {company.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
          </ul>

          <div className="mt-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Social Links
            </p>
            <SocialIcons variant="dark" />
          </div>
        </div>

      </div>

      {/* Copyright Sub-bar */}
      <div className="border-t border-white/5 bg-black/40 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-xs text-slate-500 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {company.name}. Leading Builders in Veppampattu, Thiruvallur. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#vaastu" className="hover:text-slate-300 transition">Vaastu Guide</a>
            <a href="#projects" className="hover:text-slate-300 transition">Veppampattu Sites</a>
            <a href="#reach-us" className="hover:text-slate-300 transition">Free Site Visit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
