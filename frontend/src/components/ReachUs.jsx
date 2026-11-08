import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../data/site";
import SocialIcons from "./SocialIcons";

const initial = { fullName: "", email: "", phone: "" };

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
        }, 900);
      });
      setStatus("success");
      setMessage("Thank you. An advisor will call you shortly.");
      setValues(initial);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section id="reach-us" className="bg-[#F8FAFC] py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0F766E]">Reach Us</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Request a Conversation</h2>
          <p className="mt-4 max-w-xl leading-7 text-[#64748B]">
            Share a few details and we will call you to understand your goals, preferred locations, and
            timeline — with no obligation.
          </p>

          <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
            <FormField
              id="fullName"
              name="fullName"
              label="Full Name"
              placeholder="Alexandra Bennett"
              value={values.fullName}
              error={errors.fullName}
              onChange={onChange}
              autoComplete="name"
            />
            <FormField
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="you@example.com"
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
              placeholder="+1 (212) 555-0182"
              value={values.phone}
              error={errors.phone}
              onChange={onChange}
              autoComplete="tel"
            />

            {message && (
              <p
                role="status"
                className={`rounded-xl border px-4 py-3 text-sm ${
                  status === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-[#1E3A8A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {submitting ? "Sending…" : "Request a Call"}
            </button>
          </form>
        </div>

        <aside className="rounded-2xl border border-[#E2E8F0] bg-white p-8 text-[#0F172A] shadow-[0_4px_16px_-2px_rgba(30,58,138,0.04),0_2px_6px_-1px_rgba(15,23,42,0.03)] lg:p-10">
          <span className="inline-flex rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[#1E3A8A]">Contact details</span>
          <h3 className="mt-4 font-display text-2xl font-bold">Visit or Call</h3>
          <ul className="mt-8 space-y-5 text-sm text-[#475569]">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-[#0F766E]" aria-hidden="true" />
              <a href={company.phoneHref} className="hover:text-[#1E3A8A]">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-[#0F766E]" aria-hidden="true" />
              <a href={company.emailHref} className="hover:text-[#1E3A8A]">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[#0F766E]" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-[#0F766E]" aria-hidden="true" />
              <span>{company.hours}</span>
            </li>
          </ul>

          <div className="mt-10">
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
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-[#0F172A]">
        {label} <span className="text-[#0F766E]">*</span>
      </label>
      <input
        id={id}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] transition focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
          error ? "border-red-400" : "border-[#E2E8F0]"
        }`}
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
