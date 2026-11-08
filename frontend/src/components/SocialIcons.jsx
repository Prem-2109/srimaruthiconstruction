import { socialLinks } from "../data/site";

const icons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
};

export default function SocialIcons({ variant = "light" }) {
  const className =
    variant === "dark"
      ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#5EEAD4] hover:text-[#5EEAD4]"
      : "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#1E3A8A] shadow-sm transition hover:border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white";

  return (
    <div className="flex gap-3">
      {socialLinks.map((item) => {
        const Icon = icons[item.name];
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.name === "X" ? "X / Twitter" : item.name}
            className={className}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.7.5-1.1 1.2-1.1H17V3h-2.3C12.2 3 11 4.4 11 6.6v1.9H9v2.7h2V21h3.5v-9.8h2.4l.4-2.7h-2.8Z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.5 9.5H4V20h2.5V9.5ZM5.25 4A1.65 1.65 0 1 0 5.26 7.3 1.65 1.65 0 0 0 5.25 4ZM20 20h-2.5v-5.3c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.7 1.3-.1.2-.1.6-.1.9V20H11.4s.05-8.9 0-9.8H14v1.4c.4-.6 1.2-1.6 2.9-1.6 2.1 0 3.1 1.4 3.1 4.3V20Z" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L5.2 22H1.94l8.02-9.16L1.5 2h6.75l4.66 6.18L18.244 2Zm-1.16 18h1.8L7.01 3.89H5.08L17.084 20Z" />
    </svg>
  );
}
