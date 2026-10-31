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
    <section id="reach-us" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">Reach Us</p>
          <h2 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">Request a Conversation</h2>
          <p className="mt-4 max-w-xl text-stone-soft">
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
                className={`rounded-lg px-4 py-3 text-sm ${
                  status === "success" ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-charcoal transition hover:bg-gold-deep hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {submitting ? "Sending…" : "Request a Call"}
            </button>
          </form>
        </div>

        <aside className="rounded-3xl bg-charcoal p-8 text-white lg:p-10">
          <h3 className="font-display text-2xl">Visit or Call</h3>
          <ul className="mt-8 space-y-5 text-sm text-white/80">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-gold" aria-hidden="true" />
              <a href={company.phoneHref} className="hover:text-gold">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-gold" aria-hidden="true" />
              <a href={company.emailHref} className="hover:text-gold">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-gold" aria-hidden="true" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-gold" aria-hidden="true" />
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
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-charcoal">
        {label} <span className="text-gold-deep">*</span>
      </label>
      <input
        id={id}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink placeholder:text-stone-400 transition focus:border-gold ${
          error ? "border-red-400" : "border-sand"
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

