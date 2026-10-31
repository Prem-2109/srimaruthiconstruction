import { useState } from "react";
import { Search } from "lucide-react";
import { images } from "../data/site";

const locations = ["New York", "Brooklyn", "Westchester", "Jersey City", "Greenwich"];
const types = ["Residential", "Commercial", "Villas", "Apartments"];
const budgets = ["Under $500k", "$500k – $1M", "$1M – $3M", "$3M+"];

export default function Hero() {
  const [query, setQuery] = useState({
    location: "",
    type: "",
    budget: "",
  });

  const handleSearch = (event) => {
    event.preventDefault();
    const projects = document.getElementById("projects");
    projects?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-end pb-16 pt-28 sm:items-center sm:pb-0">
      <img
        src={images.hero}
        alt="Luxury modern home with a landscaped courtyard at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-charcoal/55" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 inline-flex rounded-full border border-gold/50 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-gold">
            YOUR TRUSTED REAL ESTATE PARTNER
          </p>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Find a Place You&apos;ll Love to Call Home
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            From city apartments to private estates, we match you with properties that feel right —
            thoughtfully presented, carefully vetted, and ready for your next chapter.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-gold-deep hover:text-white"
            >
              Explore Properties
            </a>
            <a
              href="#contact"
              className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* <form
          onSubmit={handleSearch}
          className="mt-12 grid w-full gap-4 rounded-2xl bg-ivory p-5 shadow-[0_20px_50px_rgba(28,25,23,0.28)] sm:grid-cols-2 lg:grid-cols-4 lg:items-end"
          aria-label="Property search"
        >
          <Field label="Location" htmlFor="search-location">
            <select
              id="search-location"
              value={query.location}
              onChange={(e) => setQuery((q) => ({ ...q, location: e.target.value }))}
              className="w-full rounded-lg border border-sand bg-white px-3 py-3 text-sm text-ink focus:border-gold"
            >
              <option value="">Any location</option>
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Property Type" htmlFor="search-type">
            <select
              id="search-type"
              value={query.type}
              onChange={(e) => setQuery((q) => ({ ...q, type: e.target.value }))}
              className="w-full rounded-lg border border-sand bg-white px-3 py-3 text-sm text-ink focus:border-gold"
            >
              <option value="">Any type</option>
              {types.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Budget" htmlFor="search-budget">
            <select
              id="search-budget"
              value={query.budget}
              onChange={(e) => setQuery((q) => ({ ...q, budget: e.target.value }))}
              className="w-full rounded-lg border border-sand bg-white px-3 py-3 text-sm text-ink focus:border-gold"
            >
              <option value="">Any budget</option>
              {budgets.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <button
            type="submit"
            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-lg bg-charcoal px-5 text-sm font-semibold text-white transition hover:bg-ink"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </form> */}
      </div>
    </section>
  );
}

// function Field({ label, htmlFor, children }) {
//   return (
//     <div>
//       <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-soft">
//         {label}
//       </label>
//       {children}
//     </div>
//   );
// }
