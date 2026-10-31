import { useEffect, useRef, useState } from "react";
import { images } from "../data/site";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Properties Sold" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative mb-10">
          <img
            src={images.about}
            alt="Bright living room in a contemporary residence"
            className="h-[420px] w-full rounded-3xl object-cover shadow-[0_24px_50px_rgba(28,25,23,0.16)] sm:h-[520px]"
            loading="lazy"
          />
          <aside className="absolute -bottom-8 right-4 w-[min(100%,18rem)] rounded-2xl bg-charcoal p-5 text-white shadow-xl sm:right-8">
            <p className="font-display text-3xl text-gold">15+</p>
            <p className="mt-1 text-sm text-white/80">Years helping clients find homes they are proud of.</p>
          </aside>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">About Us</p>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            Building Better Spaces for Better Living
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-soft">
            EstatePro is a boutique real estate practice built on trust, market knowledge, and a calm,
            considered process. We listen first, then present properties that fit how you actually live
            and invest — not a long list of listings that miss the mark.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-soft">
            Our advisors stay with you from the first viewing through negotiation and handover, so every
            decision feels informed and every home feels like it belongs to you.
          </p>
          <a
            href="#services"
            className="mt-8 inline-flex rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-charcoal"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label }) {
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
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * progress));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <article ref={ref} className="rounded-2xl bg-ivory p-6 shadow-sm ring-1 ring-sand">
      <p className="font-display text-4xl text-charcoal">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-stone-soft">{label}</p>
    </article>
  );
}
