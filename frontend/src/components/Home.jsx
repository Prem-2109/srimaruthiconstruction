import { ArrowUpRight, Building2, PhoneCall, ShieldCheck } from "lucide-react";
import { company, images } from "../data/site";

export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50 text-slate-900"
    >
      {/* Background Subtle Gradient & Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
        
        {/* Left Column: Content */}
        <div className="relative z-10 order-2 lg:order-1 lg:col-span-6">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-900 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" aria-hidden="true" />
            Building with purpose
          </p>

          <h1 className="max-w-xl font-sans text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            A stronger foundation for the life{" "}
            <span className="text-blue-700">
              you imagine.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            Thoughtfully designed homes and spaces, built with care by{" "}
            <span className="font-semibold text-slate-800">{company.name}</span>.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-700/20 transition-all hover:bg-blue-800 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.98]"
            >
              Explore our projects
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={company.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-100 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.98]"
            >
              <PhoneCall className="h-4 w-4 text-blue-700" aria-hidden="true" />
              Talk to our team
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200/80 pt-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold leading-5 text-slate-700">
                A trusted partner for your next chapter
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold leading-5 text-slate-700">
                Uncompromising Quality & Transparency
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Block */}
        <div className="relative order-1 lg:order-2 lg:col-span-6">
          {/* Decorative Offset Background Frame */}
          <div
            className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-blue-900/10 sm:-bottom-6 sm:-right-6"
            aria-hidden="true"
          />

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl sm:aspect-[5/4]">
            <img
              src={images.hero}
              alt="Contemporary home framed by a landscaped garden"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              fetchPriority="high"
            />
            
            {/* Soft Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent"
              aria-hidden="true"
            />

            {/* Overlapping Glassmorphism Floating Badge */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">
                Made for modern living
              </span>
              <p className="mt-0.5 text-sm font-bold text-slate-900">
                Thoughtful spaces. Lasting value.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}