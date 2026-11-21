import { ArrowRight, Briefcase, Building, CheckCircle2, Home, Landmark, Trees } from "lucide-react";
import { services } from "../data/site";

const icons = {
  residential: Home,
  plots: Trees,
  commercial: Building,
  management: Briefcase,
  investment: Landmark,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-50/70 py-20 lg:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
            Our Services in Veppampattu
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Complete Real Estate & Construction Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Whether buying an individual villa, purchasing an approved residential plot, or constructing on your own land in Veppampattu, we provide end-to-end guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.id] || Home;
            return (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow duration-300 hover:border-amber-500/50 hover:shadow-xl"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 transition-colors duration-300 group-hover:bg-amber-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-amber-600/30">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <span className="mt-6 block text-[11px] font-bold uppercase tracking-wider text-amber-700">
                    {service.tagline}
                  </span>
                  
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  {service.features && (
                    <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-8 border-t border-slate-100 pt-5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 transition group-hover:text-amber-700"
                  >
                    Inquire Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-display text-lg font-bold text-slate-900">Have a plot in Veppampattu and want to build?</h4>
            <p className="text-sm text-slate-600 mt-1">Our engineering team provides comprehensive blueprints, estimation, and bank loan approvals.</p>
          </div>
          <a
            href="#reach-us"
            className="shrink-0 inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600 shadow-sm"
          >
            Request Free Estimation
          </a>
        </div>
      </div>
    </section>
  );
}
