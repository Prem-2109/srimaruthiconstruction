import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../data/site";
import SocialIcons from "./SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">Contact Us</p>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">We Would Be Glad to Meet You</h2>
          <p className="mt-4 text-stone-soft">
            Visit our Park Avenue office or schedule a private consultation. Our advisors are available
            throughout the week to walk you through available homes and investment opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard icon={Phone} title="Phone" value={company.phone} href={company.phoneHref} />
            <InfoCard icon={Mail} title="Email" value={company.email} href={company.emailHref} />
            <InfoCard icon={MapPin} title="Office Location" value={company.address} />
            <InfoCard icon={Clock} title="Opening Hours" value={company.hours} />
          </div>

          <div className="overflow-hidden rounded-3xl bg-sand ring-1 ring-sand">
            <div
              className="relative h-[320px] w-full bg-[linear-gradient(#d9ead3_1px,transparent_1px),linear-gradient(90deg,#d9ead3_1px,transparent_1px)] bg-[size:28px_28px] bg-white"
              role="img"
              aria-label="Map placeholder for EstatePro office on Park Avenue, New York"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(176,137,104,0.18),transparent_55%)]" />
              <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-4 text-center shadow-lg">
                <MapPin className="mx-auto h-6 w-6 text-gold-deep" aria-hidden="true" />
                <p className="mt-2 font-display text-lg text-charcoal">EstatePro Office</p>
                <p className="mt-1 text-sm text-stone-soft">{company.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-sand pt-8 sm:flex-row sm:items-center">
          <SocialIcons />
          <a
            href="#reach-us"
            className="inline-flex rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-charcoal"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, value, href }) {
  const content = href ? (
    <a href={href} className="hover:text-gold-deep">
      {value}
    </a>
  ) : (
    value
  );

  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sand">
      <Icon className="h-5 w-5 text-gold-deep" aria-hidden="true" />
      <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-stone-soft">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal">{content}</p>
    </article>
  );
}

