import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send, Train } from "lucide-react";
import { company } from "../data/site";
import SocialIcons from "./SocialIcons";

const initial = { fullName: "", email: "", phone: "", interest: "Individual Villa in Veppampattu" };

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "Please enter at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (digits.length < 10) {
    errors.phone = "Enter a valid phone number with at least 10 digits.";
  }

  return errors;
}

export default function ReachUs() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const submitting = status === "submitting";

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      setMessage("Please correct the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (values.email.toLowerCase().includes("fail@")) reject(new Error("network"));
          else resolve();
        }, 800);
      });
      setStatus("success");
      setMessage("Thank you! Our Veppampattu site manager will call you to schedule your free site visit.");
      setValues(initial);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section id="reach-us" className="relative bg-slate-50/70 py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        
        {/* Left Form Block */}
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
            Book Free Site Visit
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Schedule a Free Veppampattu Site Inspection
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Interested in viewing our ready-to-move individual villas or DTCP approved plots near Veppampattu railway station? Free car pick-up and drop available.
          </p>

          <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
            <FormField
              id="fullName"
              name="fullName"
              label="Full Name"
              placeholder="e.g. Ramesh Kumar"
              value={values.fullName}
              error={errors.fullName}
              onChange={onChange}
              autoComplete="name"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                id="email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="ramesh@example.com"
                value={values.email}
                error={errors.email}
                onChange={onChange}
                autoComplete="email"
              />
              <FormField
                id="phone"
                name="phone"
                type="tel"
                label="Phone Number"
                placeholder="+91 99529 95222"
                value={values.phone}
                error={errors.phone}
                onChange={onChange}
                autoComplete="tel"
              />
            </div>

            <div>
              <label htmlFor="interest" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-800">
                Property Interested In
              </label>
              <select
                id="interest"
                name="interest"
                value={values.interest}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 transition-all focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
              >
                <option value="Individual Villa in Veppampattu">Ready to Move Individual Villa (2BHK / 3BHK)</option>
                <option value="DTCP Approved Plot in Veppampattu">DTCP / CMDA Approved Plot</option>
                <option value="Construction on My Own Plot">Construction on My Own Plot in Veppampattu</option>
                <option value="Duplex House Near Railway Station">Duplex House Near Railway Station</option>
              </select>
            </div>

            {message && (
              <div
                role="status"
                className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
                  status === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {status === "success" && <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />}
                <span>{message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition-all hover:bg-amber-600 hover:shadow-amber-600/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              <span>{submitting ? "Booking..." : "Confirm Free Site Visit"}</span>
            </button>
          </form>
        </div>

        {/* Right Contact Details Aside */}
        <aside className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-900 p-8 sm:p-10 text-white shadow-xl">
          <div>
            <span className="inline-flex rounded-full bg-amber-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300">
              Veppampattu Branch
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
              Connect With Local Office
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Drop by our office or call us directly to view ready model villas and approved layouts near Veppampattu railway station.
            </p>

            <ul className="mt-8 space-y-6 text-sm text-slate-300">
              <li className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Phone</span>
                  <a href={company.phoneHref} className="text-sm font-bold text-white hover:text-amber-300 transition">
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</span>
                  <a href={company.emailHref} className="text-sm font-bold text-white hover:text-amber-300 transition">
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Office Location</span>
                  <span className="text-sm text-slate-200">{company.address}</span>
                  <span className="block text-[11px] text-amber-400 mt-0.5">2 Mins from Veppampattu Railway Station</span>
                </div>
              </li>
              <li className="flex gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Working Hours</span>
                  <span className="text-sm text-slate-200">{company.hours}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Follow Us</p>
            <SocialIcons variant="dark" />
          </div>
        </aside>

      </div>
    </section>
  );
}

function FormField({ id, label, error, ...inputProps }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-800">
        {label} <span className="text-amber-600">*</span>
      </label>
      <input
        id={id}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20 ${
          error ? "border-red-400 bg-red-50/20" : "border-slate-200"
        }`}
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-semibold text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
