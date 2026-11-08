import { ArrowRight, Briefcase, Building, Home, Landmark } from "lucide-react";
import { services } from "../data/site";

const icons = {
  residential: Home,
  commercial: Building,
  management: Briefcase,
  investment: Landmark,
};

export default function Services() {
  return (
    <section id="services" className="bg-[#F8FAFC] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0F766E]">Our Services</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Expertise Across Every Property Journey
          </h2>
          <p className="mt-4 leading-7 text-[#64748B]">
            Whether you are buying a first home, expanding a portfolio, or managing an asset, we bring
            clarity and care to every step.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.id];
            return (
              <article
                key={service.id}
                className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_16px_-2px_rgba(30,58,138,0.04),0_2px_6px_-1px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#93C5FD] hover:shadow-[0_12px_28px_-4px_rgba(30,58,138,0.08)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#1E3A8A] transition group-hover:bg-[#1E3A8A] group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-[#0F172A]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#0F766E] transition group-hover:gap-2"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
