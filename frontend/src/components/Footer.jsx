import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks, services } from "../data/site";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#home" className="inline-flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-charcoal">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl tracking-wide">{company.name}</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{company.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {services.map((service) => (
              <li key={service.id}>
                <a href="#services" className="hover:text-gold">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-gold" aria-hidden="true" />
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-gold" aria-hidden="true" />
              <a href={company.emailHref}>{company.email}</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
          </ul>
          <div className="mt-5">
            <SocialIcons variant="dark" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/55">
        © 2026 EstatePro. All Rights Reserved.
      </div>
    </footer>
  );
}

