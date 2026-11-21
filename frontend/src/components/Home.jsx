import { ArrowUpRight, Award, Compass, Droplets, MapPin, MessageCircle, PhoneCall, ShieldCheck, Train } from "lucide-react";
import { company, images } from "../data/site";

export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        
        {/* Left Column: Hero Content */}
        <div className="relative z-10 order-2 lg:order-1 lg:col-span-7">
          {/* Veppampattu Location Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-300/80 bg-amber-50/90 px-4 py-2 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-600 shrink-0" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-950">
              <MapPin className="h-3.5 w-3.5 text-amber-700 shrink-0" aria-hidden="true" />
              <span>Veppampattu, Thiruvallur</span>
            </span>
            <span className="h-3.5 w-[1px] bg-amber-300 shrink-0" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800">
              <Train className="h-3.5 w-3.5 text-teal-700 shrink-0" aria-hidden="true" />
              <span>Near Railway Station</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Individual Villas & Approved Plots in{" "}
            <span className="bg-gradient-to-r from-amber-700 via-orange-600 to-teal-800 bg-clip-text text-transparent">
              Veppampattu
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Looking for an independent dream home or DTCP/CMDA approved residential plot in <strong className="text-slate-900 font-semibold">Veppampattu</strong>?{" "}
            <span className="font-semibold text-slate-900">{company.name}</span> offers premium 2BHK & 3BHK villas with sweet ground water, 100% Vaastu, and walking distance to the railway station.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/15 transition-colors hover:bg-amber-600"
            >
              Explore Veppampattu Sites
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-50/80 px-6 py-3.5 text-sm font-bold text-emerald-800 shadow-sm transition-colors hover:bg-emerald-100"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600 fill-emerald-600" aria-hidden="true" />
              Get Price List on WhatsApp
            </a>
          </div>

          {/* Veppampattu Advantages */}
          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-8 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber-200/80">
                <Train className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Near Railway Station</p>
                <p className="text-[11px] text-slate-500">2-5 Mins Walkable Sites</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-200/80">
                <Droplets className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Sweet Drinking Water</p>
                <p className="text-[11px] text-slate-500">Pure Ground Water at 25ft</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-700 ring-1 ring-orange-200/80">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">85% Bank Loans</p>
                <p className="text-[11px] text-slate-500">SBI & HDFC Approved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div className="relative order-1 lg:order-2 lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl sm:aspect-[4/5] lg:aspect-[4/5]">
            <img
              src={images.hero}
              alt="Sri Maruthi Green Enclave Individual Villa in Veppampattu"
              className="h-full w-full object-cover"
              width="600"
              height="750"
              fetchPriority="high"
            />
            
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"
              aria-hidden="true"
            />

            {/* Top Floating Badge */}
            <div className="absolute top-5 right-5 rounded-full border border-white/20 bg-slate-900/80 px-3.5 py-1 text-xs font-medium text-white">
              📍 Veppampattu Railway Station Vicinity
            </div>

            {/* Overlapping Glassmorphism Card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/95 p-5 shadow-2xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">
              <div className="flex items-center justify-between">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-700">
                  Sri Maruthi Green Enclave
                </span>
                <span className="text-xs font-extrabold text-slate-900">₹38 Lakhs Onwards</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                Ready to move 2BHK/3BHK independent villas with separate borewell & compound wall.
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                <span className="text-emerald-700 font-bold">✓ Direct Builder Price</span>
                <a href="#projects" className="inline-flex items-center gap-1 font-bold text-amber-700 hover:underline">
                  View Sites →
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
