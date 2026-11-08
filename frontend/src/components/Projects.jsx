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
    <section id="projects" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0F766E]">Portfolio</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
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
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-[#F1F5F9] text-[#475569] hover:bg-[#EFF6FF] hover:text-[#1E3A8A]"
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
              className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_4px_16px_-2px_rgba(30,58,138,0.04),0_2px_6px_-1px_rgba(15,23,42,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(30,58,138,0.08)]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} in ${project.location}`}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#0F766E]">
                  {project.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-[#0F172A]">{project.name}</h3>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-[#64748B]">
                  <MapPin className="h-4 w-4 text-[#0F766E]" aria-hidden="true" />
                  {project.location}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">{project.description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#1E3A8A] transition hover:text-[#0F766E]"
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
