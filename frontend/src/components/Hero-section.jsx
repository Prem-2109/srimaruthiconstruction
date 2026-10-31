import { useState } from "react";
import { images } from "../data/site";

export default function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // Replace with your WhatsApp number
  // Format: country code + number, without + or spaces
  const whatsappNumber = "918122834869";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello, I would like to make an enquiry.

Name: ${form.name}
Phone: ${form.phone}

Message:
${form.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      phone: "",
      message: "",
    });

    setIsContactOpen(false);
  };

  return (
    <>
      {/* Hero */}
      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-6 lg:px-8"
      >
        <img
          src={images.hero}
          alt="Luxury modern home with a landscaped courtyard at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-charcoal/55" aria-hidden="true" />

        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-gold/50 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-gold">
              WEBSITE UNDER CONSTRUCTION
            </p>

            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              We&apos;re Building Something New
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              Our new website is currently being built. We&apos;re working to
              create a better experience for you and look forward to welcoming
              you soon.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              Have a question or an enquiry? We&apos;d be happy to hear from
              you. Please get in touch with us for any information or
              assistance.
            </p>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="inline-flex rounded-full bg-gold px-7 py-3 text-sm font-semibold text-charcoal transition hover:bg-gold-deep hover:text-white sm:px-8 sm:py-3.5"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay */}
      {isContactOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
          onClick={() => setIsContactOpen(false)}
        >
          {/* Right Side Drawer */}
          <div
            className="absolute right-0 top-0 flex h-full w-full max-w-2xl flex-col overflow-y-auto bg-charcoal shadow-2xl sm:w-[90%] lg:w-[760px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Get In Touch
                </p>

                <h2 className="mt-1 font-display text-2xl text-white sm:text-3xl">
                  Contact Us
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsContactOpen(false)}
                aria-label="Close contact form"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white transition hover:border-gold hover:text-gold"
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">
              {/* Office Details */}
              <div className="flex flex-col justify-center border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <p className="text-sm uppercase tracking-[0.2em] text-gold">
                  Our Office
                </p>

                <h3 className="mt-3 font-display text-3xl text-white">
                  Let&apos;s Talk
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  We&apos;d love to hear from you. Whether you have a question,
                  an enquiry, or would like to know more about our projects, our
                  team is here to help.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      📍
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40">
                        Office Address
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/80">
                        123 Business Avenue,
                        <br />
                        Chennai, Tamil Nadu
                        <br />
                        India - 600001
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      ☎
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40">
                        Phone
                      </p>

                      <a
                        href="tel:+919952995222"
                        className="mt-1 block text-sm text-white/80 transition hover:text-gold"
                      >
                        +91 9952995222
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      ✉
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40">
                        Email
                      </p>

                      <a
                        href="mailto:info@example.com"
                        className="mt-1 block text-sm text-white/80 transition hover:text-gold"
                      >
                        info@srimaruthibuilders.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      ◷
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40">
                        Working Hours
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/80">
                        Monday - Saturday
                        <br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.2em] text-gold">
                  Send An Enquiry
                </p>

                <h3 className="mt-3 font-display text-2xl text-white">
                  How can we help?
                </h3>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-white/70"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-gold/60 focus:bg-white/10"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm text-white/70"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-gold/60 focus:bg-white/10"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm text-white/70"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-gold/60 focus:bg-white/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-semibold text-charcoal transition hover:bg-gold-deep hover:text-white"
                  >
                    Send via WhatsApp
                    <span>→</span>
                  </button>

                  <p className="text-center text-xs leading-5 text-white/35">
                    Your enquiry will open in WhatsApp so you can send it
                    directly to our team.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
