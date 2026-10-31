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
    <section id="services" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">Our Services</p>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">
            Expertise Across Every Property Journey
          </h2>
          <p className="mt-4 text-stone-soft">
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
                className="group rounded-2xl border border-sand bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand text-gold-deep transition group-hover:bg-gold group-hover:text-charcoal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl text-charcoal">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-soft">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep transition group-hover:gap-2"
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
