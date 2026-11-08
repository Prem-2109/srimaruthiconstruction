import { useEffect, useRef, useState } from "react";
import { company, images } from "../data/site";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Properties Sold" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative mb-10">
          <img
            src={images.about}
            alt="Bright living room in a contemporary residence"
            className="h-[420px] w-full rounded-2xl object-cover shadow-[0_20px_40px_-16px_rgba(15,23,42,0.22)] sm:h-[520px]"
            loading="lazy"
          />
          <aside className="absolute -bottom-8 right-4 w-[min(100%,18rem)] rounded-2xl border border-[#E2E8F0] bg-white p-5 text-[#0F172A] shadow-[0_12px_28px_-4px_rgba(30,58,138,0.08)] sm:right-8">
            <p className="font-display text-3xl font-extrabold text-[#1E3A8A]">15+</p>
            <p className="mt-1 text-sm text-[#64748B]">Years helping clients find homes they are proud of.</p>
          </aside>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0F766E]">About Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            Building Better Spaces for Better Living
          </h2>
          <p className="mt-5 text-base leading-7 text-[#64748B]">
            {company.name} is committed to thoughtful spaces, clear guidance, and a considered process.
            We listen first, then help you explore properties that fit how you want to live and invest.
          </p>
          <p className="mt-4 text-base leading-7 text-[#64748B]">
            From the first conversation through the next steps, our team works to make each decision
            feel informed and every space feel right for you.
          </p>
          <a
            href="#services"
            className="mt-8 inline-flex rounded-xl bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
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
    <article ref={ref} className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_16px_-2px_rgba(30,58,138,0.04),0_2px_6px_-1px_rgba(15,23,42,0.03)]">
      <p className="font-display text-4xl font-bold text-[#1E3A8A]">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-[#64748B]">{label}</p>
    </article>
  );
}
