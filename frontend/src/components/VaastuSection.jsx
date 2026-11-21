import { CheckCircle2, Compass } from "lucide-react";
import { company, tamilNaduHighlights } from "../data/site";

const vaastuFeatures = [
  {
    corner: "North-East (Water & Prosperity Zone)",
    purpose: "Prayer Room & Underground Water Sump",
    detail: "Maintained completely open and light to welcome prosperity, health, and abundant positive cosmic energy.",
  },
  {
    corner: "South-East (Fire Energy Zone)",
    purpose: "Kitchen & Utility Area",
    detail: "Positioned directly in the fire quadrant with east-facing cooking platforms for family health and nourishment.",
  },
  {
    corner: "South-West (Stability & Wealth Zone)",
    purpose: "Master Bedroom & Heavy Structure",
    detail: "Constructed at the highest elevation and heaviest structural point ensuring stability, leadership, and wealth retention.",
  },
  {
    corner: "North-West (Air & Motion Zone)",
    purpose: "Guest Rooms, Living & Staircase",
    detail: "Facilitates continuous cross-ventilation, dynamic air flow, and harmony among guests and family members.",
  },
];

export default function VaastuSection() {
  return (
    <section id="vaastu" className="relative bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 py-20 lg:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 shadow-sm">
            <Compass className="h-4 w-4 text-amber-700" />
            100% Vaastu Compliant Construction
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Authentic Vaastu Shastra & Quality Standards
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A home is a sanctuary of wellbeing. At {company.name}, our in-house civil architects ensure that every blueprint follows authentic Vaastu proportions for peace, health, and generational prosperity.
          </p>
        </div>

        {/* 4 Vaastu Corners Breakdown */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vaastuFeatures.map((item) => (
            <div
              key={item.corner}
              className="group rounded-2xl border border-amber-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-amber-500 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                  Quadrant
                </span>
                <Compass className="h-4 w-4 text-amber-600" />
              </div>
              <h3 className="mt-4 text-base font-extrabold text-slate-900">{item.corner}</h3>
              <p className="mt-1 text-xs font-bold text-amber-900">{item.purpose}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Key Engineering Standards */}
        <div className="mt-16 rounded-3xl border border-amber-200/60 bg-gradient-to-r from-amber-900 via-stone-900 to-slate-900 p-8 text-white shadow-xl lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Civil Engineering Excellence
              </span>
              <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl text-white">
                Engineered for Regional Weather & Soil
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                From coastal conditions in Chennai to the red soil of Coimbatore and river plains of Trichy, we customize foundation depths, waterproofing layers, and thermal insulation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 font-semibold text-amber-300">
                  Fe-550D TMT Steel
                </span>
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 font-semibold text-amber-300">
                  Tested M-Sand Grade Concretes
                </span>
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 font-semibold text-amber-300">
                  Teak Wood Joinery
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {tamilNaduHighlights.map((hl) => (
                <div key={hl.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400">{hl.subtitle}</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  </div>
                  <h4 className="mt-2 text-sm font-bold text-white">{hl.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">{hl.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
