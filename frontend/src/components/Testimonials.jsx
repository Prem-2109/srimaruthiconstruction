import { CheckCircle2, Quote, Star } from "lucide-react";
import { testimonials } from "../data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-slate-900 py-20 lg:py-28 overflow-hidden text-white">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-300">
            Client Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Trusted by Homeowners in Veppampattu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Hear first-hand from the families who purchased individual villas and approved plots from Sri Maruthi Construction.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-colors hover:border-amber-500/40 hover:bg-white/[0.07]"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-teal-400/40" />
                </div>

                {/* Quote Text */}
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-200 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 flex items-center gap-3.5 border-t border-white/10 pt-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-teal-500/40"
                  loading="lazy"
                  decoding="async"
                  width="48"
                  height="48"
                />
                <div>
                  <h4 className="flex items-center gap-1.5 text-sm font-bold text-white">
                    {item.name}
                    {item.verified && (
                      <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" title="Verified Client" />
                    )}
                  </h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-400 text-xs font-semibold tracking-wider uppercase">
            <div>✓ 100% Clear Land Titles</div>
            <div>✓ Near Railway Station</div>
            <div>✓ Sweet Ground Water</div>
            <div>✓ 85% Bank Loan Support</div>
          </div>
        </div>

      </div>
    </section>
  );
}
