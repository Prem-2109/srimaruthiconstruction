import { useMemo, useState } from "react";
import { ArrowUpRight, Building2, Calendar, CheckCircle2, Droplets, MapPin, Train } from "lucide-react";
import { projectFilters, projects } from "../data/site";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(
      (project) => project.tags.includes(filter) || project.category === filter
    );
  }, [filter]);

  return (
    <section id="projects" className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
              Veppampattu & Surrounding Locations
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Available Villas & Plots Near Veppampattu
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Browse our ready-to-move individual houses, duplex villas, and approved residential plots situated in prime Veppampattu neighborhoods.
            </p>
          </div>

          {/* Filter Pills */}
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
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    active
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-shadow duration-300 hover:border-amber-500/40 hover:shadow-xl"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={`${project.name} - ${project.location}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="250"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    {project.status || project.category}
                  </span>
                </div>

                {/* Price / Units Pill */}
                {project.priceRange && (
                  <div className="absolute bottom-4 right-4 rounded-xl border border-white/20 bg-white/95 px-3 py-1 text-xs font-extrabold text-slate-900 backdrop-blur-md">
                    {project.priceRange}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-amber-700 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.year && (
                      <span className="flex items-center gap-1 text-[11px]">
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {project.name}
                  </h3>

                  <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                    <MapPin className="h-3.5 w-3.5 text-amber-600 shrink-0" aria-hidden="true" />
                    {project.location}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.units && (
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <Building2 className="h-3.5 w-3.5 text-amber-600" />
                      <span>{project.units}</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <a
                    href="#reach-us"
                    className="inline-flex items-center justify-between w-full rounded-xl bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-800 transition hover:bg-amber-600 hover:text-white"
                  >
                    <span>Request Site Visit & Plan</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global Veppampattu CTA Banner */}
        <div className="mt-16 rounded-2xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-display text-lg font-bold text-slate-900">Do you already own a plot in Veppampattu?</h4>
            <p className="text-sm text-slate-600 mt-1">We construct individual houses on your land with materials, bank loan support, and guaranteed handover.</p>
          </div>
          <a
            href="#reach-us"
            className="shrink-0 inline-flex rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-600 shadow-sm"
          >
            Get Construction Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
