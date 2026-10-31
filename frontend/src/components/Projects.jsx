import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { projectFilters, projects } from "../data/site";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.tags.includes(filter) || project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">Portfolio</p>
            <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">
              Explore Our Recent Projects
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {projectFilters.map((item) => {
              const active = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-charcoal text-white"
                      : "bg-white text-stone-soft ring-1 ring-sand hover:text-charcoal"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} in ${project.location}`}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-deep">
                  {project.category}
                </span>
                <h3 className="mt-2 font-display text-2xl text-charcoal">{project.name}</h3>
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-stone-soft">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {project.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-soft">{project.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex text-sm font-semibold text-charcoal underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold-deep"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
