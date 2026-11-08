import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../data/site";
import SocialIcons from "./SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0F766E]">Contact Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">We Would Be Glad to Meet You</h2>
          <p className="mt-4 leading-7 text-[#64748B]">
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

          <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_4px_16px_-2px_rgba(30,58,138,0.04),0_2px_6px_-1px_rgba(15,23,42,0.03)]">
            <div
              className="relative h-[320px] w-full bg-[linear-gradient(#e2e8f0_1px,transparent_1px),linear-gradient(90deg,#e2e8f0_1px,transparent_1px)] bg-[size:28px_28px] bg-[#F8FAFC]"
              role="img"
              aria-label={`Map placeholder for ${company.name} at ${company.address}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.14),transparent_55%)]" />
              <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#E2E8F0] bg-white p-4 text-center shadow-[0_12px_28px_-4px_rgba(30,58,138,0.08)]">
                <MapPin className="mx-auto h-6 w-6 text-[#0F766E]" aria-hidden="true" />
                <p className="mt-2 font-display text-lg font-semibold text-[#0F172A]">{company.name}</p>
                <p className="mt-1 text-sm text-[#64748B]">{company.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-[#E2E8F0] pt-8 sm:flex-row sm:items-center">
          <SocialIcons />
          <a
            href="#reach-us"
            className="inline-flex rounded-xl bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
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
    <article className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_16px_-2px_rgba(30,58,138,0.04),0_2px_6px_-1px_rgba(15,23,42,0.03)]">
      <Icon className="h-5 w-5 text-[#0F766E]" aria-hidden="true" />
      <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#64748B]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#0F172A]">{content}</p>
    </article>
  );
}
