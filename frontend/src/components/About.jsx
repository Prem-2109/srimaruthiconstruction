import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Compass, Droplet, Home, Layers, MapPin, ShieldCheck, Train } from "lucide-react";
import { company, images } from "../data/site";

const stats = [
  { value: 15, suffix: "+", label: "Years in Veppampattu", description: "Trusted local builders since 2011" },
  { value: 120, suffix: "+", label: "Villas & Plots Handed Over", description: "In and around Veppampattu" },
  { value: 850, suffix: "+", label: "Happy Homeowners", description: "Commuters, families & investors" },
  { value: 100, suffix: "%", label: "Clear Title & Vaastu", description: "DTCP / CMDA Approved" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Top Grid: Image + Story */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Visual Showcase */}
          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
              <img
                src={images.about}
                alt="Individual Villa Project in Veppampattu"
                className="h-[440px] w-full object-cover sm:h-[540px]"
                loading="lazy"
                decoding="async"
                width="600"
                height="540"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Milestone Card */}
            <div className="absolute -bottom-8 right-4 w-[min(100%,20rem)] rounded-2xl border border-amber-900/15 bg-white/95 p-6 shadow-xl backdrop-blur-md sm:right-8">
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 rounded-full bg-amber-600 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Veppampattu Specialists
                </span>
              </div>
              <p className="mt-2 font-display text-3xl font-extrabold text-slate-900">
                15+ <span className="text-lg font-semibold text-slate-500">Years in Local Market</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Developing affordable individual houses, premium duplex villas, and approved residential plots.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
              About Sri Maruthi Construction
            </div>
            
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
              Veppampattu’s Most Trusted Home Builders & Promoters
            </h2>
            
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Based right in <strong className="text-slate-900 font-semibold">Veppampattu, Thiruvallur District</strong>, <strong className="text-slate-900 font-semibold">{company.name}</strong> has helped hundreds of families realize their dream of owning an independent home with their own land, compound wall, and sweet ground water.
            </p>
            
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Veppampattu has become one of Chennai’s most preferred residential hubs due to rapid suburban train connectivity to Chennai Central, excellent schools, and peaceful living. We develop individual villas and residential layouts near the railway station and CTH road with 100% legal clarity.
            </p>

            {/* Core Veppampattu Pillars */}
            <div className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-xl border border-amber-100 bg-amber-50/50 p-4 transition hover:bg-amber-50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-600 text-white shadow-sm">
                  <Train className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Unmatched Railway & Road Connectivity</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Direct local EMU train services every 15-20 minutes to Chennai Central, Avadi, and Thiruvallur. Fast access to CTH Highway.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-slate-100/70">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">100% Clear Documents & Spot Registration</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    DTCP and CMDA sanctioned layouts with verified parent documents, individual patta, and easy loan approvals from nationalized banks.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="inline-flex rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-amber-600"
              >
                View Available Sites in Veppampattu
              </a>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:underline"
              >
                Request Free Site Visit Pick-Up →
              </a>
            </div>
          </div>

        </div>

        {/* Counter Stats Section */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <StatCard key={stat.label} {...stat} delay={idx * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
}

function StatCard({ value, suffix, label, description, delay = 0 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (reduceMotion) {
          setDisplay(value);
          return;
        }
        const duration = 1500;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * easeProgress));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <article ref={ref} className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition duration-300 hover:border-amber-500/50 hover:shadow-lg">
      <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-amber-50/70" />
      <p className="relative font-display text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-amber-700 transition-colors">
        {display}
        <span className="text-amber-600">{suffix}</span>
      </p>
      <h3 className="relative mt-2 text-base font-bold text-slate-800">{label}</h3>
      <p className="relative mt-1 text-xs text-slate-500">{description}</p>
    </article>
  );
}
