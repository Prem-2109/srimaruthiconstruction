import { Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Train } from "lucide-react";
import { company } from "../data/site";
import SocialIcons from "./SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
            Veppampattu Office & Site Visit
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Visit Our Veppampattu Office
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We are conveniently located near the Veppampattu Railway Station on CTH Road. Our team is available 7 days a week to accompany you for free on-site inspections of available villas and plots.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Info Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            <InfoCard icon={Phone} title="Direct Mobile" value={company.phone} href={company.phoneHref} />
            <InfoCard icon={MessageCircle} title="WhatsApp Support" value="+91 99529 95222" href={company.whatsappHref} />
            <InfoCard icon={MapPin} title="Office Address" value={company.address} />
            <InfoCard icon={Clock} title="Working Hours" value={company.hours} />
          </div>

          {/* Map & Landmark Card */}
          <div className="overflow-hidden rounded-3xl border border-amber-900/10 bg-amber-50/40 shadow-sm lg:col-span-6 flex flex-col">
            <div
              className="relative flex-1 min-h-[340px] w-full bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:20px_20px] flex items-center justify-center p-6"
              role="img"
              aria-label={`Office map representation for ${company.name} in Veppampattu`}
            >
              {/* Concentric Signal Rings */}
              <div className="absolute h-64 w-64 rounded-full border border-amber-500/20 animate-ping opacity-25" />
              <div className="absolute h-48 w-48 rounded-full border border-amber-500/30" />

              {/* Central Map Pin Card */}
              <div className="relative z-10 max-w-sm rounded-2xl border border-amber-900/10 bg-white/95 p-6 text-center shadow-xl backdrop-blur-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-600 text-white shadow-md shadow-amber-600/30">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{company.name}</h3>
                <p className="mt-1 text-xs text-slate-700 font-medium">{company.address}</p>
                <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-900 border border-amber-200">
                  <Train className="h-3.5 w-3.5 text-amber-700" />
                  <span>2 Mins from Veppampattu Railway Station</span>
                </div>
                <div className="mt-4 flex justify-center gap-2">
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-600"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Social & Consultation Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-100 bg-slate-50/70 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Connect on Social Media</p>
            <SocialIcons />
          </div>
          <a
            href="#reach-us"
            className="inline-flex rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-amber-600 shadow-sm"
          >
            Schedule Free Veppampattu Site Visit
          </a>
        </div>

      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, value, href }) {
  const content = href ? (
    <a href={href} className="font-semibold text-slate-900 hover:text-amber-700 transition">
      {value}
    </a>
  ) : (
    <span className="font-semibold text-slate-900">{value}</span>
  );

  return (
    <div className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-amber-500/40 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed">{content}</p>
    </div>
  );
}
