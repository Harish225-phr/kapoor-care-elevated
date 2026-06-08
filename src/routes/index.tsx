import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  Phone, MapPin, Mail, Clock, Stethoscope, Baby, HeartPulse, Microscope,
  Activity, ShieldCheck, Award, Users, Hospital, Sparkles, ChevronRight,
  ChevronLeft, ArrowUp, MessageCircle, Calendar, Star, Plus, Minus, Menu, X,
  Pill, Accessibility, Bed, Syringe, FlaskConical, ScanLine, CheckCircle2,
} from "lucide-react";
import otTeam from "@/assets/ot-team.png.asset.json";
import corridor from "@/assets/corridor.png.asset.json";
import room from "@/assets/room.png.asset.json";
import anesthesia from "@/assets/anesthesia.png.asset.json";
import surgery from "@/assets/surgery.png.asset.json";
import solan from "@/assets/solan.png.asset.json";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import maternity from "@/assets/maternity.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kapoor Nursing Home | Best Nursing Home in Solan" },
      { name: "description", content: "Kapoor Nursing Home, Solan — Advanced Women's Healthcare, Gynecology & Laparoscopic Surgery Centre. 24×7 Emergency. Ayushman Bharat PM-JAY approved." },
      { property: "og:title", content: "Kapoor Nursing Home | Best Nursing Home in Solan" },
      { property: "og:description", content: "Advanced Women's Healthcare & Laparoscopic Surgery Centre in Solan led by Dr. Amrish Kapoor." },
      { property: "og:image", content: otTeam.url },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Hospital", "MedicalOrganization", "LocalBusiness"],
          name: "Kapoor Nursing Home",
          description: "Advanced Women's Healthcare & Laparoscopic Surgery Centre in Solan.",
          telephone: "+91-94180-29067",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near Mohan Park, Kotla",
            addressLocality: "Solan",
            addressRegion: "Himachal Pradesh",
            postalCode: "173213",
            addressCountry: "IN",
          },
          medicalSpecialty: ["Gynecology", "Obstetrics", "LaparoscopicSurgery"],
          openingHours: "Mo-Su 00:00-23:59",
          founder: { "@type": "Person", name: "Dr. Amrish Kapoor" },
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "+91 94180 29067";
const PHONE_TEL = "+919418029067";
const WHATSAPP = "https://wa.me/919418029067";
const ADDRESS = "Near Mohan Park, Kotla, Solan, Himachal Pradesh – 173213";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Kapoor+Nursing+Home+Kotla+Solan";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Doctor />
        <Specialities />
        <WhyUs />
        <Facilities />
        <Journey />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

/* ───────────── HEADER ───────────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"], ["Doctor", "#doctor"], ["Services", "#specialities"],
    ["Facilities", "#facilities"], ["Gallery", "#gallery"], ["Contact", "#contact"],
  ];
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-[0_4px_30px_-10px_rgba(0,0,0,0.1)]" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center shadow-luxe">
              <Plus className="w-6 h-6 text-primary-foreground" strokeWidth={3} />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold animate-pulse" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg md:text-xl font-semibold text-ink">Kapoor</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-primary">Nursing Home</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-ink/70 hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full">
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-sm font-semibold text-ink">
            <span className="w-9 h-9 rounded-full bg-primary/10 grid place-items-center"><Phone className="w-4 h-4 text-primary" /></span>
            <span className="hidden xl:inline">{PHONE}</span>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-sm font-semibold shadow-luxe hover:scale-105 transition-transform">
            Book Appointment <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-ink" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass overflow-hidden">
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map(([l, h]) => (
                <a key={h} href={h} onClick={() => setOpen(false)} className="text-base font-medium text-ink py-1">{l}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold">Book Appointment</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ───────────── HERO ───────────── */
const SLIDES = [
  {
    eyebrow: "Best Nursing Home in Solan",
    title: ["Kapoor", "Nursing Home"],
    desc: "Advanced Women's Healthcare & Laparoscopic Surgery Centre. 24×7 Emergency Support for the families of Solan.",
    image: otTeam.url,
  },
  {
    eyebrow: "Region's First Advanced Facility",
    title: ["3D Laparoscopic", "Surgery Centre"],
    desc: "Region's first advanced gynecological laparoscopic surgery facility with 3D camera technology and minimally invasive procedures.",
    image: surgery.url,
  },
  {
    eyebrow: "For Women & Families",
    title: ["Trusted Care,", "Compassionate Hands"],
    desc: "Experienced specialists, modern technology and compassionate treatment for every woman who walks through our doors.",
    image: maternity,
  },
];

function Hero() {
  const [i, setI] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);
  const slide = SLIDES[i];
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      <motion.img src={heroBg} alt="" style={{ y }} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-12">
        <div>
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-6">
                <Sparkles className="w-3.5 h-3.5" /> {slide.eyebrow}
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-ink mb-6">
                {slide.title[0]} <br />
                <span className="text-gradient italic font-medium">{slide.title[1]}</span>
              </h1>
              <p className="text-lg text-ink/70 max-w-xl mb-8 leading-relaxed">{slide.desc}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold shadow-luxe hover:scale-[1.03] transition-transform">
              <Calendar className="w-5 h-5" /> Book Appointment
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white/70 backdrop-blur border border-primary/20 text-ink font-semibold hover:bg-white transition-colors">
              <Phone className="w-5 h-5 text-primary" /> Call Now
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            {SLIDES.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-primary" : "w-4 bg-primary/25"}`} />
            ))}
          </div>
        </div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe">
              <img src={slide.image} alt="Kapoor Nursing Home" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/90 grid place-items-center text-ink"><Award className="w-6 h-6" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold-soft">Approved</div>
                    <div className="font-semibold">Ayushman Bharat PM-JAY</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}
            className="hidden md:flex absolute -left-6 top-10 glass rounded-2xl p-4 items-center gap-3 shadow-luxe">
            <div className="w-10 h-10 rounded-full bg-primary/15 grid place-items-center"><HeartPulse className="w-5 h-5 text-primary" /></div>
            <div className="text-sm"><div className="font-semibold text-ink">24×7 Emergency</div><div className="text-xs text-ink/60">Always here for you</div></div>
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}
            className="hidden md:flex absolute -right-4 bottom-24 glass rounded-2xl p-4 items-center gap-3 shadow-luxe">
            <div className="w-10 h-10 rounded-full bg-gold/20 grid place-items-center"><Stethoscope className="w-5 h-5 text-gold" /></div>
            <div className="text-sm"><div className="font-semibold text-ink">Senior Specialist</div><div className="text-xs text-ink/60">Dr. Amrish Kapoor</div></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── TRUST BAR / COUNTERS ───────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

function TrustBar() {
  const stats = [
    { n: 20, suffix: "+", label: "Years of Service", icon: Award },
    { n: 15000, suffix: "+", label: "Patients Served", icon: Users },
    { n: 24, suffix: "×7", label: "Emergency Care", icon: HeartPulse },
    { n: 100, suffix: "%", label: "Ayushman Approved", icon: ShieldCheck },
  ];
  return (
    <section className="relative -mt-12 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl shadow-luxe p-6 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-gold/15 grid place-items-center shrink-0">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-semibold text-ink">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-ink/60 uppercase tracking-wider">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── ABOUT ───────────── */
function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-ink/65 text-lg leading-relaxed">{sub}</p>}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe">
            <img src={corridor.url} alt="Kapoor Nursing Home corridor" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-10 w-48 h-48 lg:w-64 lg:h-64 rounded-[2rem] overflow-hidden shadow-luxe border-4 border-cream">
            <img src={solan.url} alt="Solan Himachal Pradesh" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-6 -left-6 glass rounded-2xl p-5 shadow-luxe max-w-[200px]">
            <div className="text-gold font-display text-3xl font-bold">A+</div>
            <div className="text-xs text-ink/70 mt-1">Patient Care Rating</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> About Us
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight mb-6">
            A trusted name in <span className="text-gradient italic">women's healthcare</span> across Solan.
          </h2>
          <p className="text-ink/70 text-lg leading-relaxed mb-5">
            Kapoor Nursing Home is one of Solan's most respected healthcare centers — offering advanced women's
            healthcare, gynecology services, laparoscopic surgeries, maternity care, diagnostics and inpatient
            facilities under one roof.
          </p>
          <p className="text-ink/60 leading-relaxed mb-8">
            We are known for patient-focused treatment, modern infrastructure and surgical excellence — combining
            decades of clinical experience with compassionate, dignified care.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Patient-First", "Care designed around your needs"],
              ["Modern OT", "Advanced laparoscopic suite"],
              ["24×7 Emergency", "Always available"],
              ["Ayushman Bharat", "PM-JAY approved facility"],
            ].map(([t, s]) => (
              <div key={t} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div><div className="font-semibold text-ink">{t}</div><div className="text-sm text-ink/60">{s}</div></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────── DOCTOR ───────────── */
function Doctor() {
  return (
    <section id="doctor" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-cream to-gold/5" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-16 items-center">
        <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-2 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-primary-glow to-gold rounded-[2.5rem] blur-2xl opacity-30" />
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe">
            <img src={doctorPortrait} alt="Dr. Amrish Kapoor — Senior Gynecologist & Laparoscopic Surgeon" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-soft">Senior Specialist</div>
              <div className="font-display text-2xl font-semibold">Dr. Amrish Kapoor</div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Stethoscope className="w-3.5 h-3.5" /> Meet The Doctor
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight mb-3">
            Dr. Amrish Kapoor
          </h2>
          <div className="text-primary font-semibold mb-6">Senior Gynecologist & Laparoscopic Surgeon</div>
          <p className="text-ink/70 text-lg leading-relaxed mb-8">
            With extensive clinical experience and a deep commitment to women's wellbeing, Dr. Amrish Kapoor leads
            Kapoor Nursing Home with an unwavering focus on advanced, minimally invasive, and patient-centered care.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Extensive Clinical Experience", Award],
              ["Advanced Gynecological Procedures", Microscope],
              ["Women's Health Expert", HeartPulse],
              ["Laparoscopic Specialist", Activity],
              ["High-Risk Pregnancy Care", Baby],
              ["Patient-Centered Approach", Users],
            ].map(([t, Icon]) => (
              <div key={t as string} className="group flex items-center gap-3 p-4 rounded-2xl glass hover:shadow-luxe transition-all hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground">
                  {/* @ts-ignore */}<Icon className="w-5 h-5" />
                </div>
                <div className="font-medium text-ink text-sm">{t as string}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-glow transition-colors">
              <Calendar className="w-4 h-4" /> Schedule Consultation
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-ink font-semibold hover:bg-primary/5 transition-colors">
              <Phone className="w-4 h-4 text-primary" /> {PHONE}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────── SPECIALITIES ───────────── */
const SPECIALITIES = [
  ["Advanced Laparoscopic Surgery", Microscope, "3D camera, minimally invasive."],
  ["High-Risk Pregnancy Care", Baby, "Specialised antenatal monitoring."],
  ["Maternity Services", HeartPulse, "Safe, dignified deliveries."],
  ["Gynecology Consultation", Stethoscope, "Personalised women's care."],
  ["Women's Health Programs", Sparkles, "Wellness across every stage."],
  ["Infertility Consultation", Activity, "Compassionate guidance."],
  ["Pelvic Endometriosis Surgery", ScanLine, "Expert laparoscopic excision."],
  ["Ovarian Tumor Management", FlaskConical, "Diagnosis to treatment."],
  ["Total Laparoscopic Hysterectomy", Syringe, "Minimal-scar, fast recovery."],
  ["Laparoscopic Myomectomy", Microscope, "Fibroid removal, fertility-sparing."],
  ["Emergency Women's Care", ShieldCheck, "24×7 obstetric emergencies."],
  ["Post Surgical Recovery", Bed, "Comfortable inpatient stay."],
] as const;

function Specialities() {
  return (
    <section id="specialities" className="py-24 sm:py-32 bg-gradient-to-b from-background to-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Specialities" title={<>Comprehensive care, <span className="text-gradient italic">crafted for women.</span></>} sub="From routine consultations to advanced laparoscopic procedures — every service is delivered with surgical precision and human warmth." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECIALITIES.map(([title, Icon, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: (i % 3) * 0.08 }}
              className="group relative p-6 rounded-3xl bg-card border border-border/60 hover:shadow-luxe hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink mb-2">{title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── WHY US ───────────── */
const WHY = [
  ["Advanced 3D Laparoscopy", Microscope],
  ["Experienced Medical Team", Users],
  ["24×7 Emergency Care", HeartPulse],
  ["Patient-Focused Treatment", Sparkles],
  ["Safe & Hygienic Environment", ShieldCheck],
  ["Ayushman Bharat PM-JAY", Award],
  ["Wheelchair Accessible", Accessibility],
  ["Modern Operation Theatre", Hospital],
  ["Affordable Healthcare", CheckCircle2],
] as const;

function WhyUs() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-ink" aria-hidden />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `radial-gradient(circle at 20% 30%, oklch(0.42 0.08 178) 0%, transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.72 0.12 80 / 0.4) 0%, transparent 50%)` }} aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-14 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gold-soft text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Why Choose Us
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
            A standard of care that <span className="text-gold italic">families remember.</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY.map(([title, Icon], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08 }}
              className="group flex items-center gap-4 p-5 rounded-2xl glass-dark hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-glow to-gold grid place-items-center text-ink shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <div className="font-medium text-white">{title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── FACILITIES ───────────── */
const FACILITIES = [
  { t: "Operation Theatre", d: "Modern, sterile, fully equipped.", img: surgery.url, icon: Microscope, big: true },
  { t: "Anesthesia Suite", d: "Advanced monitoring systems.", img: anesthesia.url, icon: Activity },
  { t: "Inpatient Rooms", d: "Calm, comfortable recovery spaces.", img: room.url, icon: Bed },
  { t: "Consultation & Waiting", d: "Welcoming patient-first design.", img: corridor.url, icon: Users },
];

function Facilities() {
  return (
    <section id="facilities" className="py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Facilities" title={<>Built for <span className="text-gradient italic">healing & dignity.</span></>} sub="Every corner of Kapoor Nursing Home is designed to support both clinical excellence and human comfort." />
        <div className="grid lg:grid-cols-3 gap-5">
          {FACILITIES.map((f, i) => (
            <motion.div key={f.t} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden shadow-luxe ${f.big ? "lg:col-span-2 lg:row-span-2 min-h-[420px]" : "min-h-[260px]"}`}>
              <img src={f.img} alt={f.t} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="w-11 h-11 rounded-xl glass-dark grid place-items-center mb-3">
                  <f.icon className="w-5 h-5 text-gold-soft" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">{f.t}</h3>
                <p className="text-sm text-white/75">{f.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            ["Diagnostics", FlaskConical], ["Emergency", HeartPulse], ["Pharmacy", Pill],
            ["Wheelchair Access", Accessibility], ["Patient Monitoring", Activity],
          ].map(([t, Icon]) => (
            <div key={t as string} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border">
              {/* @ts-ignore */}<Icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-medium text-ink">{t as string}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── JOURNEY ───────────── */
const JOURNEY = [
  "Book Appointment", "Consultation", "Diagnosis", "Treatment Plan", "Procedure", "Recovery", "Follow-Up Care",
];
function Journey() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Patient Journey" title={<>From your first call to <span className="text-gradient italic">complete recovery.</span></>} />
        <div className="relative">
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {JOURNEY.map((step, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center">
                <div className="relative w-[72px] h-[72px] rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground font-display text-2xl font-semibold shadow-luxe mb-4 animate-pulse-ring">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-medium text-ink text-sm">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── GALLERY ───────────── */
const GALLERY = [
  { src: otTeam.url, alt: "Operation Theatre team", h: "tall" },
  { src: surgery.url, alt: "Laparoscopic surgery", h: "short" },
  { src: anesthesia.url, alt: "Anesthesia equipment", h: "tall" },
  { src: room.url, alt: "Inpatient room", h: "short" },
  { src: corridor.url, alt: "Hospital corridor", h: "short" },
  { src: maternity, alt: "Maternity care", h: "tall" },
  { src: doctorPortrait, alt: "Dr. Amrish Kapoor", h: "short" },
  { src: solan.url, alt: "Solan, Himachal Pradesh", h: "tall" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Gallery" title={<>A glimpse inside <span className="text-gradient italic">Kapoor Nursing Home.</span></>} />
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {GALLERY.map((g, i) => (
            <motion.button key={i} onClick={() => setOpen(i)} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.06 }}
              className="group mb-4 block w-full break-inside-avoid relative overflow-hidden rounded-2xl shadow-luxe">
              <img src={g.src} alt={g.alt} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${g.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-left text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{g.alt}</div>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {open !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm grid place-items-center p-6" onClick={() => setOpen(null)}>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={GALLERY[open].src} alt={GALLERY[open].alt} className="max-w-full max-h-[85vh] rounded-2xl shadow-luxe" />
            <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass-dark text-white grid place-items-center" onClick={() => setOpen(null)}><X /></button>
            <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark text-white grid place-items-center" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + GALLERY.length) % GALLERY.length); }}><ChevronLeft /></button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark text-white grid place-items-center" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % GALLERY.length); }}><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ───────────── TESTIMONIALS ───────────── */
const REVIEWS = [
  { n: "Anjali Sharma", r: "Mother of two", q: "Dr. Kapoor and the entire team made my delivery feel safe and personal. The care here is exceptional — modern facilities with a human touch.", s: 5 },
  { n: "Pooja Verma", r: "Laparoscopic Surgery", q: "I had my surgery here last year. Minimally invasive, almost no scar and I was home in two days. Truly grateful to Dr. Amrish and the OT team.", s: 5 },
  { n: "Ritu Thakur", r: "Maternity Patient", q: "Clean, calm and very respectful staff. They treated me like family throughout my pregnancy and after.", s: 5 },
  { n: "Sunita Negi", r: "Gynecology Consultation", q: "Honest, clear advice and no rushing. Dr. Kapoor takes his time and explains everything beautifully.", s: 5 },
];
function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((p) => (p + 1) % REVIEWS.length), 6500); return () => clearInterval(t); }, []);
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-cream to-gold/10" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title={<>Stories from <span className="text-gradient italic">our patients.</span></>} />
        <div className="relative h-[340px] sm:h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}
              className="absolute inset-0 glass rounded-3xl p-8 sm:p-12 shadow-luxe flex flex-col justify-center">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: REVIEWS[i].s }).map((_, k) => <Star key={k} className="w-5 h-5 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-2xl sm:text-3xl text-ink leading-snug italic mb-6">"{REVIEWS[i].q}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground font-semibold">{REVIEWS[i].n[0]}</div>
                <div><div className="font-semibold text-ink">{REVIEWS[i].n}</div><div className="text-sm text-ink/60">{REVIEWS[i].r}</div></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, k) => (
            <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-primary" : "w-4 bg-primary/25"}`} aria-label={`Review ${k + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── FAQ ───────────── */
const FAQS = [
  ["What gynecology services does Kapoor Nursing Home offer?", "We provide routine gynecology consultations, women's wellness programs, infertility consultations, high-risk pregnancy care, maternity services, and advanced laparoscopic gynecological surgery."],
  ["Do you perform laparoscopic / 3D minimally invasive surgery?", "Yes. Kapoor Nursing Home is the region's first advanced gynecological laparoscopic surgery facility, equipped with 3D camera technology for precise, minimally invasive procedures."],
  ["How can I book an appointment with Dr. Amrish Kapoor?", "You can book directly by calling +91 94180 29067, sending a WhatsApp message, or using the contact form on this page. Walk-ins are also welcome during clinic hours."],
  ["Is emergency care available 24×7?", "Yes. We offer round-the-clock emergency support for women's and obstetric emergencies, including high-risk pregnancies and post-surgical care."],
  ["Is Ayushman Bharat PM-JAY accepted here?", "Yes. Kapoor Nursing Home is an Ayushman Bharat PM-JAY approved healthcare facility. Please carry your PM-JAY card and valid ID at the time of admission."],
  ["Where is Kapoor Nursing Home located in Solan?", "We are located Near Mohan Park, Kotla, Solan, Himachal Pradesh – 173213. Use the map in the contact section for directions."],
];
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title={<>Questions, <span className="text-gradient italic">answered.</span></>} />
        <div className="space-y-3">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <motion.div key={q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className={`rounded-2xl border ${isOpen ? "border-primary/40 bg-card shadow-luxe" : "border-border bg-card"} transition-all`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold text-ink">{q}</span>
                  <span className={`w-9 h-9 rounded-full grid place-items-center shrink-0 transition-colors ${isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden">
                      <div className="px-5 pb-5 text-ink/70 leading-relaxed">{a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────── CONTACT ───────────── */
function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-cream to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Get in Touch" title={<>We're here, <span className="text-gradient italic">whenever you need us.</span></>} />
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, t: "Visit Us", v: ADDRESS },
              { icon: Phone, t: "Call Us", v: PHONE, href: `tel:${PHONE_TEL}` },
              { icon: Clock, t: "Emergency", v: "Available 24×7" },
              { icon: Mail, t: "WhatsApp", v: "Chat with us instantly", href: WHATSAPP },
            ].map(({ icon: Icon, t, v, href }) => (
              <a key={t} href={href ?? "#"} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:shadow-luxe hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-ink/50 mb-0.5">{t}</div>
                  <div className="font-semibold text-ink">{v}</div>
                </div>
              </a>
            ))}
            <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-ink text-cream font-semibold hover:bg-ink/90 transition-colors">
              <MapPin className="w-4 h-4" /> Get Directions
            </a>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will get in touch with you shortly."); }} className="lg:col-span-3 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-luxe">
            <h3 className="font-display text-2xl font-semibold text-ink mb-1">Book an Appointment</h3>
            <p className="text-sm text-ink/60 mb-6">Share your details and our team will reach out shortly.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" />
              <Field label="Phone Number" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" />
              <Field label="Service Required" name="service" placeholder="e.g. Gynecology Consultation" />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-ink/60 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" placeholder="How can we help you?" />
            </div>
            <button type="submit" className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold shadow-luxe hover:scale-[1.02] transition-transform">
              <Calendar className="w-4 h-4" /> Send Request
            </button>
          </form>
        </div>
        <div className="mt-10 rounded-3xl overflow-hidden shadow-luxe border border-border h-[400px]">
          <iframe title="Kapoor Nursing Home location" src="https://www.google.com/maps?q=Kotla+Solan+Himachal+Pradesh&output=embed" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}
function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-ink/60 mb-2">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
    </div>
  );
}

/* ───────────── FOOTER ───────────── */
function Footer() {
  return (
    <footer className="bg-ink text-cream/80 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.62 0.13 170) 0%, transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-glow to-gold grid place-items-center"><Plus className="w-6 h-6 text-ink" strokeWidth={3} /></div>
            <div className="leading-tight">
              <div className="font-display text-xl font-semibold text-cream">Kapoor</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold-soft">Nursing Home</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed">Advanced Women's Healthcare & Laparoscopic Surgery Centre in Solan. Trusted by families for compassionate, modern care.</p>
        </div>
        <div>
          <div className="font-display text-lg text-cream mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {[["About", "#about"], ["Doctor", "#doctor"], ["Services", "#specialities"], ["Facilities", "#facilities"], ["Gallery", "#gallery"], ["FAQ", "#faq"]].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-gold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display text-lg text-cream mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            <li>Laparoscopic Surgery</li><li>Gynecology</li><li>Maternity Care</li>
            <li>High-Risk Pregnancy</li><li>Women's Wellness</li><li>Emergency Care</li>
          </ul>
        </div>
        <div>
          <div className="font-display text-lg text-cream mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />{ADDRESS}</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" /><a href={`tel:${PHONE_TEL}`} className="hover:text-gold">{PHONE}</a></li>
            <li className="flex gap-3"><HeartPulse className="w-4 h-4 text-gold shrink-0 mt-0.5" />Emergency 24×7</li>
          </ul>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/60">
        <div>© {new Date().getFullYear()} Kapoor Nursing Home. All rights reserved.</div>
        <div>Ayushman Bharat PM-JAY Approved Healthcare Facility</div>
      </div>
    </footer>
  );
}

/* ───────────── FLOATING BUTTONS ───────────── */
function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-luxe hover:scale-110 transition-transform animate-float">
        <MessageCircle className="w-6 h-6" />
      </a>
      <a href={`tel:${PHONE_TEL}`} aria-label="Call"
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground grid place-items-center shadow-luxe hover:scale-110 transition-transform animate-pulse-ring">
        <Phone className="w-6 h-6" />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full glass-dark text-white grid place-items-center shadow-luxe hover:scale-110 transition-transform">
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
