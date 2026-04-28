"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal, Parallax } from "@/components/Reveal";
import {
  ArrowRight,
  QrCode,
  Activity,
  Search,
  MoveVertical,
  Smartphone,
  Cloud,
  Layers,
  Star,
  Check,
  Plus,
  Minus,
  Menu,
} from "lucide-react";

const heroImg = "/images/hero-physio.jpg";
const patientImg = "/images/patient-phone.jpg";

export default function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <LogoStrip />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
      <div className="glass-dark flex items-center justify-between rounded-full border border-white/10 px-4 py-2.5 text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]">
        <Link href="#top" className="flex items-center gap-2 pl-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-white/10">
            <QrCode className="h-4 w-4" />
          </span>
          <span className="font-display text-xl">PhysioQR</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/80 md:flex">
          <Link href="#features" className="hover:text-white">Features</Link>
          <Link href="#how" className="hover:text-white">How it works</Link>
          <Link href="#pricing" className="hover:text-white">Pricing</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-full px-4 py-1.5 text-sm text-white/80 hover:text-white sm:inline-block"
          >
            Log in
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink shadow-sm transition hover:bg-white/90"
          >
            Sign up
          </Link>
          <button className="grid h-9 w-9 place-items-center rounded-full text-white/80 hover:bg-white/10 md:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative w-full overflow-hidden hero-gradient">
        {/* image with subtle ken-burns + parallax-like float */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Physiotherapist smiling in modern clinic"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-80 animate-hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/20" />
          {/* drifting glow accents */}
          <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-drift-slow" />
          <div className="pointer-events-none absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl animate-drift-slower" />
          {/* faint scanning grid line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent animate-scan-line" />
        </div>

        <div className="relative grid min-h-screen grid-cols-1 items-end gap-10 px-6 pb-16 pt-32 md:px-16 md:pb-20 md:pt-40 lg:px-24">
          <div className="max-w-3xl text-white">
            <Reveal variant="up" delay={100}>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                For modern physiotherapists
              </p>
            </Reveal>
            <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] text-balance">
              <Reveal as="span" variant="blur" delay={200} duration={1100} className="block">
                Prescribe <em className="italic text-white/70">exercises.</em>
              </Reveal>
              <Reveal as="span" variant="blur" delay={500} duration={1100} className="block">
                Generate a <span className="italic text-secondary">QR.</span> Done.
              </Reveal>
            </h1>
            <Reveal variant="up" delay={900}>
              <p className="mt-6 max-w-xl text-base text-white/75 md:text-lg">
                PhysioQR lets you build personalised exercise plans and share them with
                patients instantly via QR code — no app, no friction.
              </p>
            </Reveal>
            <Reveal variant="up" delay={1100}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/login"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink shadow-lg transition hover:bg-secondary hover:text-ink"
                >
                  Start for free
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#how"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm text-white backdrop-blur transition hover:bg-white/10"
                >
                  See how it works
                </Link>
              </div>
            </Reveal>
          </div>

          {/* floating mock card */}
          <Reveal
            variant="right"
            delay={700}
            duration={1100}
            className="pointer-events-none absolute right-6 top-28 hidden w-[320px] rotate-1 rounded-2xl bg-white p-4 shadow-2xl md:block lg:right-16 xl:right-24 animate-card-float"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Prescription
                </p>
                <p className="font-display text-xl text-ink">Post-ACL · Week 2</p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-md bg-ink text-white">
                <QrCode className="h-7 w-7" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {[
                ["Quad sets", "3 × 15"],
                ["Heel slides", "3 × 12"],
                ["Calf raises", "2 × 20"],
              ].map(([n, r]) => (
                <div
                  key={n}
                  className="flex items-center justify-between rounded-lg bg-muted px-3 py-2 text-xs"
                >
                  <span className="font-medium text-ink">{n}</span>
                  <span className="text-muted-foreground">{r}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOGO STRIP ---------------- */
function LogoStrip() {
  const items = [
    "MoveWell Clinic",
    "ReFlex Physio",
    "Apex Sports Rehab",
    "Pulse Therapy",
    "OrthoCare",
    "KinesisLab",
  ];
  return (
    <section className="border-b border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fade" className="flex justify-center">
          <span className="rounded-full bg-muted px-4 py-1.5 text-xs text-muted-foreground">
            Trusted by 500+ physiotherapists across 12 countries
          </span>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-6 text-center text-muted-foreground sm:grid-cols-3 md:grid-cols-6">
          {items.map((i, idx) => (
            <Reveal key={i} variant="up" delay={idx * 80} as="span" className="font-display text-lg opacity-70">
              {i}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const items = [
    { icon: Search, title: "Smart Exercise Library", desc: "Search and assign exercises with curated YouTube demos." },
    { icon: QrCode, title: "Instant QR Generation", desc: "One click creates a scannable QR per prescription." },
    { icon: Smartphone, title: "No App for Patients", desc: "Patients scan and view instantly on any phone." },
    { icon: MoveVertical, title: "Drag & Drop Builder", desc: "Reorder exercises with smooth drag-and-drop." },
    { icon: Cloud, title: "Cloud-Stored Records", desc: "Every prescription saved, editable, retrievable." },
    { icon: Layers, title: "Mobile-First Patient View", desc: "Beautifully clean cards optimised for phones." },
  ];
  return (
    <section id="features" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Reveal variant="up">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Features</p>
          </Reveal>
          <Reveal variant="blur" delay={120} duration={1100}>
            <h2 className="mt-3 font-display text-5xl leading-tight text-balance md:text-6xl">
              Built for the way you <em className="italic text-primary">actually</em> prescribe.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Big visual feature card */}
          <Reveal variant="up" duration={1100} className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl bg-ink text-white">
            <Parallax speed={0.12}>
              <img
                src={patientImg}
                alt="Patient viewing exercises on phone"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full max-h-[560px] w-full object-cover opacity-85"
              />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs uppercase tracking-widest text-secondary">Patient view</p>
              <h3 className="mt-2 font-display text-3xl md:text-4xl">
                Scan. View. Recover.
              </h3>
              <p className="mt-2 max-w-md text-sm text-white/70">
                A clean, distraction-free patient page that opens in any browser — no install required.
              </p>
            </div>
          </Reveal>

          {items.slice(0, 4).map(({ icon: Icon, title, desc }, idx) => (
            <Reveal
              key={title}
              variant="up"
              delay={idx * 120}
              className="group relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Build the plan", d: "Add a patient and assemble exercises with sets, reps, and notes." },
    { n: "02", t: "Generate the QR", d: "One tap creates a unique QR for that prescription." },
    { n: "03", t: "Patient scans", d: "They open it on any phone and start their plan instantly." },
  ];
  return (
    <section id="how" className="bg-mist px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal variant="up">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">How it works</p>
            </Reveal>
            <Reveal variant="blur" delay={120} duration={1100}>
              <h2 className="mt-3 font-display text-5xl text-balance md:text-6xl">
                Three steps from <em className="italic text-primary">consult</em> to recovery.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="left" delay={200}>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm hover:bg-muted"
            >
              Try the builder <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <Reveal
              key={s.n}
              variant="up"
              delay={idx * 150}
              duration={1000}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8"
            >
              <span className="font-display text-7xl text-primary/15">{s.n}</span>
              <h3 className="mt-2 font-display text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const quotes = [
    { q: "I cut prescription time in half. Patients actually do their exercises now.", n: "Dr. Anika Rao", c: "MoveWell Clinic, Mumbai" },
    { q: "The QR flow is genius. No more printed sheets, no more confusion.", n: "Dr. Marcus Lee", c: "Apex Sports Rehab, Singapore" },
    { q: "Finally a tool built for physios — not generic clinic software.", n: "Dr. Priya Shah", c: "ReFlex Physio, Bengaluru" },
  ];
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="blur" duration={1100}>
          <h2 className="max-w-3xl font-display text-5xl text-balance md:text-6xl">
            Loved by physiotherapists who <em className="italic text-primary">care</em> about outcomes.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q, idx) => (
            <Reveal
              key={q.n}
              variant="up"
              delay={idx * 140}
              duration={1000}
              as="figure"
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-1 text-secondary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-2xl leading-snug text-foreground">
                “{q.q}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-medium">{q.n}</p>
                <p className="text-sm text-muted-foreground">{q.c}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "₹0",
      sub: "forever",
      features: ["Up to 10 patients", "3 active prescriptions", "Basic exercise library", "QR generation"],
      cta: "Start free",
      featured: false,
    },
    {
      name: "Pro",
      price: "₹999",
      sub: "/ month",
      features: ["Unlimited patients", "Unlimited prescriptions", "Full exercise library", "WhatsApp sharing", "Analytics & insights", "Priority support"],
      cta: "Go Pro",
      featured: true,
    },
  ];
  return (
    <section id="pricing" className="bg-mist px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal variant="up">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Pricing</p>
          </Reveal>
          <Reveal variant="blur" delay={120} duration={1100}>
            <h2 className="mt-3 font-display text-5xl text-balance md:text-6xl">
              Simple, <em className="italic text-primary">honest</em> pricing.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {tiers.map((t, idx) => (
            <Reveal
              key={t.name}
              variant={idx === 0 ? "right" : "left"}
              duration={1000}
              delay={idx * 120}
              className={
                t.featured
                  ? "relative overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-[var(--shadow-soft)]"
                  : "relative overflow-hidden rounded-3xl border border-border bg-card p-8"
              }
            >
              {t.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-ink">
                  Most popular
                </span>
              )}
              <p className={t.featured ? "text-secondary" : "text-primary"}>{t.name}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-6xl">{t.price}</span>
                <span className={t.featured ? "text-white/60" : "text-muted-foreground"}>{t.sub}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 ${t.featured ? "text-secondary" : "text-primary"}`} />
                    <span className={t.featured ? "text-white/85" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/login"
                className={
                  "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition " +
                  (t.featured
                    ? "bg-white text-ink hover:bg-secondary"
                    : "bg-ink text-white hover:bg-primary")
                }
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    { q: "Do my patients need to download an app?", a: "No. They scan the QR and the prescription opens in any phone browser — no install, no account." },
    { q: "Can I edit a prescription after sending it?", a: "Yes. Edits are reflected the next time the patient opens the link, with no need to reissue the QR." },
    { q: "Is patient data secure?", a: "All data is stored with row-level security and encrypted in transit. Only you can access your patients' records." },
    { q: "Can I add my clinic branding?", a: "Yes — upload your clinic logo in Settings and it appears on the patient view." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-ink px-4 py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <Reveal variant="up">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">FAQ</p>
          </Reveal>
          <Reveal variant="blur" delay={120} duration={1100}>
            <h2 className="mt-3 font-display text-5xl text-balance md:text-6xl">
              Frequently asked <em className="italic text-secondary">questions.</em>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={240}>
            <p className="mt-5 max-w-md text-white/60">
              Clear answers to the most common questions about PhysioQR — onboarding, data, and patient experience.
            </p>
          </Reveal>
        </div>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} variant="up" delay={i * 100}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="block w-full py-5 text-left"
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-base text-white/90 md:text-lg">{f.q}</span>
                    {isOpen ? <Minus className="h-4 w-4 text-secondary" /> : <Plus className="h-4 w-4 text-white/60" />}
                  </div>
                  <div
                    className={
                      "grid overflow-hidden text-sm text-white/60 transition-all duration-500 " +
                      (isOpen ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]")
                    }
                  >
                    <div className="min-h-0">{f.a}</div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-ink px-4 pb-10 text-white/80">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.02] p-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-white/10">
                <QrCode className="h-4 w-4" />
              </span>
              <span className="font-display text-2xl text-white">PhysioQR</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Exercise prescription, reimagined. Build, share via QR, and help your patients recover faster.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Product</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><Link href="#features" className="hover:text-white">Features</Link></li>
              <li><Link href="#how" className="hover:text-white">How it works</Link></li>
              <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><Link href="#" className="hover:text-white">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} PhysioQR. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5 text-secondary" />
            Made for physiotherapists worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
