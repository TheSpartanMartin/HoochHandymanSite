import { useEffect, useState } from "react";

const BRAND = {
  name: "Hooch Handyman Services LLC",
  tagline: "Reliable, local handyman work — done right the first time.",
  phone: "770-468-4947",
  email: "hooch.handyman@gmail.com",
  owner: "Robert Gasaway",
  serviceArea: "Greater Peachtree City area",
  address: "Peachtree City, GA",
  cta: "Get a Free Estimate",
  facebook: "https://www.facebook.com/HoochHandyman",
};

const COLORS = {
  primary: "#3B2B1F",
  primaryMuted: "#5A4132",
  accent: "#C1875A",
  bg: "#F4F0EB",
  text: "#2E2E2E",
  card: "#ffffff",
};

const PHOTOS = [
  {
    src: "/photos/deck-before.jpg",
    alt: "Deck - Before",
    caption: "Deck - Before",
  },
  {
    src: "/photos/deck-after.jpg",
    alt: "Deck - After",
    caption: "Deck - After",
  },
  {
    src: "/photos/shower-before.jpg",
    alt: "Shower - Before",
    caption: "Shower - Before",
  },
  {
    src: "/photos/shower-after.jpg",
    alt: "Shower - After",
    caption: "Shower - After",
  },
];

export default function HoochHandymanSite() {
  type Photo = { src: string; alt: string; caption?: string };
  const [lightbox, setLightbox] = useState<Photo | null>(null);


  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
      }
    }; 
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [lightbox]);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text }}
    >
      <header
        className="sticky top-0 z-20 border-b"
        style={{ background: COLORS.card, borderColor: "#e5e7eb" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/hooch-logo.jpg"
              alt="Hooch Handyman Logo"
              className="h-12 w-12 rounded-lg object-contain"
            />
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                {BRAND.name}
              </h1>
              <p className="text-sm opacity-70">{BRAND.tagline}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm hover:opacity-80">
              Services
            </a>
            <a href="#about" className="text-sm hover:opacity-80">
              About
            </a>
            <a href="#gallery" className="text-sm hover:opacity-80">
              Gallery
            </a>
            <a href="#contact" className="text-sm hover:opacity-80">
              Contact
            </a>
            <a
              href={BRAND.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-80"
            >
              Facebook
            </a>
            <a
              href={`tel:${BRAND.phone.replace(/[^\\d]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-white shadow"
              style={{ background: COLORS.primary }}
            >
              {" "}
              <PhoneIcon /> Call Now
            </a>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/hooch-logo full.jpeg"
              alt="Hooch the Dog Logo"
              className="h-40 w-auto mb-6 rounded-xl object-contain shadow-md"
            />
            <h2
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
              style={{ color: COLORS.primary }}
            >
              Honest Work. Fair Pricing.
            </h2>
            <p className="mt-4 text-lg opacity-80">
              From small repairs to full punch lists, Hooch Handyman Services
              offers dependable help you can trust — backed by Robert’s
              craftsmanship and inspired by his loyal dog, Hooch.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow"
                style={{ background: COLORS.primary }}
              >
                {BRAND.cta}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="rounded-2xl px-5 py-3 text-sm font-semibold"
                style={{ background: COLORS.accent, color: COLORS.text }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h3
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ color: COLORS.primary }}
          >
            Services
          </h3>
          <p className="mt-2 opacity-80">
            Tailored handyman work across carpentry, painting, repairs,
            installs, and more.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div
              className="rounded-2xl border p-6 shadow-sm bg-white"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-xl grid place-items-center text-white"
                  style={{ background: COLORS.primary }}
                >
                  <HammerIcon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">Carpentry & Repairs</h4>
              </div>
              <ul className="mt-4 grid gap-2 text-sm opacity-90">
                <li>• Trim & molding</li>
                <li>• Door & lock fixes</li>
                <li>• Shelving & storage</li>
              </ul>
            </div>
            <div
              className="rounded-2xl border p-6 shadow-sm bg-white"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-xl grid place-items-center text-white"
                  style={{ background: COLORS.primary }}
                >
                  <PaintbrushIcon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">Painting & Finishes</h4>
              </div>
              <ul className="mt-4 grid gap-2 text-sm opacity-90">
                <li>• Touch-ups & rooms</li>
                <li>• Drywall patching</li>
                <li>• Caulk & seal</li>
              </ul>
            </div>
            <div
              className="rounded-2xl border p-6 shadow-sm bg-white"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-xl grid place-items-center text-white"
                  style={{ background: COLORS.primary }}
                >
                  <WrenchIcon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-semibold">Honey‑Do Lists</h4>
              </div>
              <ul className="mt-4 grid gap-2 text-sm opacity-90">
                <li>• Furniture assembly</li>
                <li>• Fixture swaps</li>
                <li>• Small installs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-14 md:py-20"
        style={{ background: COLORS.card }}
      >
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold tracking-tight"
              style={{ color: COLORS.primary }}
            >
              Meet Robert & Hooch
            </h3>
            <p className="mt-4 opacity-80">
              Robert Gasaway started Hooch Handyman Services out of a passion
              for fixing things right — the first time. Named after his beloved
              dog, Hooch, the business represents loyalty, trust, and hard work.
              Whether you need a wall patched, a room painted, or fixtures
              installed, Robert brings integrity and care to every project.
            </p>
            <ul className="mt-4 grid gap-2 text-sm">
              <li>• Locally owned and operated</li>
              <li>• Fully insured</li>
              <li>• Free quotes and flexible scheduling</li>
            </ul>
          </div>
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: "#e5e7eb", background: COLORS.bg }}
          >
            <h4 className="font-semibold">Service Area</h4>
            <p className="mt-2 text-sm opacity-80">
              Serving homeowners and small businesses in the greater Peachtree
              City region.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {["Peachtree City", "Fayetteville", "Tyrone", "Senoia"].map(
                (n, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-white border p-3"
                    style={{ borderColor: "#e5e7eb" }}
                  >
                    {n}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h3
            className="text-3xl font-bold mb-8"
            style={{ color: COLORS.primary }}
          >
            Recent Work
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PHOTOS.map((p, i) => (
              <button
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border bg-white"
                style={{ borderColor: "#e5e7eb" }}
                onClick={() => setLightbox(p)}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {p.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-black/50 text-white text-xs px-2 py-1">
                    {p.caption}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16" style={{ background: COLORS.bg }}>
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3
              className="text-3xl font-bold"
              style={{ color: COLORS.primary }}
            >
              Get in Touch
            </h3>
            <p className="mt-3 text-lg opacity-80">
              Ready to start your next project? Call, email, or message us on
              Facebook for a fast response.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-xl grid place-items-center text-white"
                  style={{ background: COLORS.primaryMuted }}
                >
                  <PhoneIcon className="h-4 w-4" />
                </div>
                <a href={`tel:${BRAND.phone.replace(/[^\d]/g, "")}`}>
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-xl grid place-items-center text-white"
                  style={{ background: COLORS.primaryMuted }}
                >
                  <MailIcon className="h-4 w-4" />
                </div>
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-xl grid place-items-center text-white"
                  style={{ background: COLORS.primaryMuted }}
                >
                  <FacebookIcon className="h-4 w-4" />
                </div>
                <a href={BRAND.facebook} target="_blank" rel="noreferrer">
                  Facebook.com/HoochHandyman
                </a>
              </li>
            </ul>
          </div>
          <form
            id="estimate-form"
            action="https://formspree.io/f/mldzzlwv"
            method="POST"
            className="rounded-2xl p-6 shadow-xl bg-white"
          >
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="rounded-xl border p-3"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-xl border p-3"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Phone</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="(770) 555-1234"
                  className="rounded-xl border p-3"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Project Details</span>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us what you need help with…"
                  className="rounded-xl border p-3 min-h-[120px]"
                  style={{ borderColor: "#e5e7eb" }}
                />
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  form="estimate-form"
                  className="rounded-2xl px-5 py-3 text-sm font-semibold text-white"
                  style={{ background: COLORS.primary }}                      
                >
                  Request Estimate
                </button>
                <a
                  href={BRAND.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white"
                  style={{ background: COLORS.accent }}
                >
                  <FacebookIcon className="h-4 w-4" /> Message on Facebook
                </a>
              </div>
              <p className="text-xs opacity-60">
                By submitting, you agree to be contacted about your request.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderColor: "#e5e7eb", background: COLORS.card }}>
        <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-8 items-start text-sm">
          {/* --- Left Column --- */}
          <div className="flex items-center gap-3">
            <img
              src="/hooch-logo.jpg"
              alt="Hooch Handyman Logo"
              className="h-12 w-12 rounded-lg object-contain"
            />
            <div>
              <p className="font-semibold">{BRAND.name}</p>
              <p className="text-sm opacity-70">{BRAND.tagline}</p>
            </div>
          </div>

          {/* --- Middle Column --- */}
          <div className="text-sm">
            <p className="font-semibold mb-2">Quick Links</p>
            <div className="grid gap-1">
              <a className="hover:underline" href="#services">
                Services
              </a>
              <a className="hover:underline" href="#about">
                About
              </a>
              <a className="hover:underline" href="#gallery">
                Gallery
              </a>
              <a className="hover:underline" href="#contact">
                Contact
              </a>
            </div>
          </div>

          {/* --- Right Column --- */}
          <div className="text-sm">
            <p className="font-semibold mb-2">Connect</p>
            <a
              href={BRAND.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <FacebookIcon className="h-4 w-4" /> Facebook
            </a>
            <p className="mt-3 opacity-70">
              {BRAND.address} • {BRAND.serviceArea}
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-xs opacity-70 pb-2">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>

        {/* ⭐ SPARTAN MARTIN CREDIT */}
        <div className="text-center text-xs opacity-70 pb-6">
          Website by{" "}
          <a
            href="https://spartanmartinwds.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 font-semibold hover:underline hover:text-amber-400 transition"
          >
            Spartan Martin Web Design Studio
          </a>
        </div>
      </footer>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-4 right-4 rounded-full p-2 text-white/90 hover:text-white bg-black/40 hover:bg-black/60"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto rounded-xl shadow-xl"
            />
            {lightbox.caption && (
              <div className="mt-2 text-center text-white text-sm">
                {lightbox.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Inline SVG icons (no external dependency)
function PhoneIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 8.63 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.34 1.7.66 2.49a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.59-1.18a2 2 0 0 1 2.11-.45c.79.32 1.63.54 2.49.66A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
function HammerIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4 9 9" />
      <path d="m6 6 5 5" />
      <path d="M2 22l8-8" />
      <path d="M18 2 22 6 12 16 8 12 18 2z" />
    </svg>
  );
}
function PaintbrushIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2h6v6L8 20H2v-6L14 2z" />
      <path d="M16 4l4 4" />
    </svg>
  );
}
function WrenchIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.66 5.66L3 18l3 3 6.04-6.04a4 4 0 0 0 5.66-5.66" />
      <circle cx="17" cy="7" r="1" />
    </svg>
  );
}
function FacebookIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.04H7.9v-2.9h2.54V9.86c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.77l-.44 2.9h-2.33V22c4.78-.75 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

