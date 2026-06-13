import { createFileRoute, Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { stats, features, testimonials, faqs, universityLogos, pricingPlans, contactCards } from "@/lib/dummy-data";
import {
  Brain, QrCode, Zap, ShieldCheck, MessageSquare, BarChart3, ArrowRight,
  Sparkles, Building2, CheckCircle2, Star, ChevronDown, Github, Twitter, Linkedin,
  Layers, Phone, Wifi, Cpu, Mic, Shield, Activity, Award, Mail, MapPin, DollarSign,
} from "lucide-react";
import { useState } from "react";

const iconMap = { Brain, QrCode, Zap, ShieldCheck, MessageSquare, BarChart3 };
const architectureSteps = [
  { icon: Building2, title: "Student data capture", desc: "Room profiles, fee status, complaints and visitor logs flow into one secure campus record." },
  { icon: Shield, title: "Warden coordination", desc: "AI-powered approvals, emergency alerts, and complaint routing keep operations aligned." },
  { icon: Activity, title: "Admin analytics", desc: "Revenue, occupancy, electricity and mess metrics are visualized for fast decisions." },
  { icon: Cpu, title: "AI database sync", desc: "Trends, heatmaps and predictions are generated from real-time hostel telemetry." },
];

const futureScopeItems = [
  { icon: Phone, title: "Mobile app", desc: "Native student and warden experiences for campus, mess and visitor flows." },
  { icon: Zap, title: "IoT meters", desc: "Smart electricity metering and predictive billing inputs deliver deep energy insights." },
  { icon: Mic, title: "Voice assistant", desc: "Voice-based hostel helpdesk for queries, leave requests and emergency support." },
  { icon: ShieldCheck, title: "RFID attendance", desc: "Touchless attendance, secure access and real-time presence for every hostel wing." },
  { icon: Layers, title: "Smart allocation", desc: "AI room placement, roommate matching and capacity balancing across hostels." },
  { icon: Wifi, title: "Predictive maintenance", desc: "AI alerts identify plumbing, power and infrastructure hotspots before issues escalate." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HostelX AI — Smart Hostel Management for Universities" },
      { name: "description", content: "AI-powered hostel management: QR gate passes, complaint routing, predictive analytics, and face verification — built for modern universities." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      <Nav />
      <Hero />
      <Stats />
      <LoadingSkeletons />
      <Features />
      <Showcase />
      <Architecture />
      <UniversityLogos />
      <Pricing />
      <Testimonials />
      <FutureScope />
      <Contact />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-glass-border backdrop-blur-xl bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
            <Building2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold">HostelX <span className="text-gradient">AI</span></span>
        </Link>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#showcase" className="hover:text-foreground">Showcase</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#testimonials" className="hover:text-foreground">Universities</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <Link to="/app/student" className="group flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
          Launch App <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 text-center">
      <div className="absolute left-1/2 top-10 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-xs font-medium">
        <Sparkles className="h-3.5 w-3.5 text-accent" />
        <span className="text-muted-foreground">Trusted by 248 universities across India</span>
      </div>
      <h1 className="animate-fade-up mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl" style={{ animationDelay: "0.1s" }}>
        The Operating System for
        <br />
        <span className="text-gradient">Modern Hostels.</span>
      </h1>
      <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: "0.2s" }}>
        HostelX AI replaces clipboards, WhatsApp groups, and spreadsheets with one intelligent platform — QR gate passes, predictive analytics, AI complaint routing, and face verification.
      </p>
      <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.3s" }}>
        <Link to="/app/student" className="group rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
          Open Live Demo →
        </Link>
        <a href="#features" className="glass rounded-xl px-6 py-3 text-sm font-semibold hover:border-primary/40">
          Explore Features
        </a>
      </div>

      {/* Mock dashboard preview */}
      <div className="animate-fade-up mx-auto mt-16 max-w-5xl" style={{ animationDelay: "0.4s" }}>
        <div className="glass-strong relative rounded-3xl border border-glass-border p-2 shadow-elegant">
          <div className="rounded-2xl bg-background/80 p-4">
            <div className="flex items-center gap-1.5 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
              <span className="ml-3 text-xs text-muted-foreground">app.hostelx.ai/dashboard</span>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {stats.slice(0, 3).map((s, i) => (
                <div key={s.label} className="glass animate-fade-up rounded-xl p-4 text-left" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className="mt-1 text-2xl font-bold">{s.value}</div>
                  <div className="mt-1 text-xs text-success">▲ {s.change}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="glass h-32 rounded-xl p-4 text-left">
                <div className="text-xs text-muted-foreground">Live Occupancy</div>
                <div className="mt-2 flex h-16 items-end gap-1">
                  {[60, 72, 58, 80, 92, 65, 88, 95, 78, 84, 90, 70].map((v, i) => (
                    <div key={i} className="flex-1 rounded-t bg-gradient-primary" style={{ height: `${v}%` }} />
                  ))}
                </div>
              </div>
              <div className="glass h-32 rounded-xl p-4 text-left">
                <div className="text-xs text-muted-foreground">Recent Complaints</div>
                <div className="mt-2 space-y-1.5">
                  {["AC repair · B-302", "Wi-Fi · west wing", "Mess feedback"].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="h-3 w-3 text-success" /> {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-glass-border bg-glass">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-gradient font-display text-4xl font-bold md:text-5xl">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LoadingSkeletons() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">Pitch-ready polish</div>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">See the experience before you build it.</h2>
        <p className="mt-4 text-sm text-muted-foreground">Premium startup landing pages use motion and thoughtful details to turn vision into belief.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="glass animate-fade-up rounded-3xl p-6 shadow-elegant" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="flex items-center justify-between">
              <div className="h-3 w-20 rounded-full bg-muted/30" />
              <div className="h-3 w-10 rounded-full bg-muted/30" />
            </div>
            <div className="mt-6 space-y-3">
              <div className="h-5 w-3/4 rounded-full bg-muted/20 animate-shimmer" />
              <div className="h-5 w-full rounded-full bg-muted/20 animate-shimmer" />
              <div className="h-5 w-5/6 rounded-full bg-muted/20 animate-shimmer" />
              <div className="mt-4 grid gap-2">
                <div className="h-3 rounded-full bg-muted/20 animate-shimmer" />
                <div className="h-3 rounded-full bg-muted/20 animate-shimmer" />
                <div className="h-3 rounded-full bg-muted/20 animate-shimmer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">Capabilities</div>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Everything a hostel needs.<br /><span className="text-gradient">Nothing it doesn't.</span></h2>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = iconMap[f.icon as keyof typeof iconMap];
          return (
            <GlassCard key={f.title} className="group animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

function Showcase() {
  const items = [
    { role: "Student", desc: "Track fees, electricity, complaints, and generate QR gate passes.", to: "/app/student" },
    { role: "Warden", desc: "Approve leaves, monitor occupancy, respond to emergencies.", to: "/app/warden" },
    { role: "Administrator", desc: "Allocate rooms, run reports, see campus-wide analytics.", to: "/app/admin" },
    { role: "Visitor", desc: "QR registration, identity capture, parent-meeting workflow.", to: "/app/visitors" },
  ];
  return (
    <section id="showcase" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">Built for every stakeholder</div>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">One platform.<br /><span className="text-gradient">Four tailored experiences.</span></h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Link key={it.role} to={it.to} className="glass group relative overflow-hidden rounded-2xl p-6 shadow-elegant transition-all hover:border-primary/40 hover:shadow-glow animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
            <div className="text-xs uppercase tracking-widest text-accent">{it.role}</div>
            <div className="mt-3 text-lg font-semibold">{it.desc}</div>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary-glow">
              Open dashboard <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl transition-opacity group-hover:opacity-80" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">Architecture</div>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Student → Warden → Admin → Analytics</h2>
        <p className="mt-4 text-sm text-muted-foreground">HostelX AI connects every role through secure event-driven flows, predictive insights, and one-click actions.</p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-4">
        {architectureSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <GlassCard key={step.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary shadow-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

function UniversityLogos() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">Trusted by leading campuses</div>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Campus-ready adoption in every zone.</h2>
        <p className="mt-4 text-sm text-muted-foreground">HostelX AI is already being pitched, piloted, and adopted by top technical and residential campuses.</p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {universityLogos.map((logo, index) => (
          <div key={logo} className="glass flex items-center justify-between rounded-3xl border border-glass-border p-6 shadow-elegant animate-fade-up" style={{ animationDelay: `${index * 0.04}s` }}>
            <div>
              <div className="text-sm font-semibold">{logo}</div>
              <div className="mt-2 text-xs text-muted-foreground">Early adopter</div>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary-glow">{logo[0]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">Pricing</div>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Designed to fit campus budgets and scale.</h2>
        <p className="mt-4 text-sm text-muted-foreground">Choose a plan for pilot deployment or full enterprise rollout with the flexibility modern universities need.</p>
      </div>
      <div className="mt-12 grid gap-6 xl:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div key={plan.name} className={`glass rounded-3xl border ${plan.highlight ? 'border-primary/40 bg-primary/5' : 'border-glass-border'} p-8 shadow-elegant animate-fade-up`} style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{plan.name}</div>
                <div className="mt-2 text-3xl font-bold">{plan.price}</div>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary-glow">
                <DollarSign className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-success" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-2xl py-3 text-sm font-semibold transition ${plan.highlight ? 'bg-gradient-primary text-primary-foreground shadow-glow' : 'bg-glass text-foreground hover:border-primary/30 hover:bg-primary/5'}`}>
              {plan.highlight ? 'Most popular' : 'Select plan'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</div>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Let's bring your campus vision alive.</h2>
        <p className="mt-4 text-sm text-muted-foreground">Talk to our team about pilots, integrations, or setting up a live campus demo.</p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {contactCards.map((card, index) => (
          <div key={card.title} className="glass rounded-3xl border border-glass-border p-6 shadow-elegant animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary-glow">
              {card.type === 'email' ? <Mail className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
            </div>
            <div className="mt-5 text-sm font-semibold">{card.title}</div>
            <div className="mt-2 text-sm text-foreground">{card.value}</div>
            <p className="mt-3 text-sm text-muted-foreground">{card.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-[2rem] border border-glass-border bg-glass p-8 shadow-elegant">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-widest text-accent">Start your pilot</div>
            <h3 className="text-3xl font-semibold">Fast onboarding, campus-grade support.</h3>
            <p className="text-sm text-muted-foreground">Our team helps your campus transition in weeks, not months. We handle data mapping, training, and product launch guidance.</p>
          </div>
          <div className="space-y-4">
            <input className="w-full rounded-3xl border border-glass-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/40" placeholder="Your name" />
            <input className="w-full rounded-3xl border border-glass-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/40" placeholder="Your email" />
            <button className="w-full rounded-3xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">Request demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FutureScope() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">Future scope</div>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Hackathon-ready roadmap</h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {futureScopeItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <GlassCard key={item.title} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{item.desc}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">Loved by universities</div>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Real teams. Real impact.</h2>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <GlassCard key={t.name} className="animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <p className="text-sm leading-relaxed">"{t.quote}"</p>
            <div className="mt-5 flex items-center gap-3 border-t border-glass-border pt-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-bold text-primary-foreground">{t.name[0]}</div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">FAQ</div>
        <h2 className="mt-3 font-display text-4xl font-bold">Questions, answered.</h2>
      </div>
      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <button key={f.q} onClick={() => setOpen(open === i ? -1 : i)} className="glass w-full rounded-2xl p-5 text-left transition-all hover:border-primary/40">
            <div className="flex items-center justify-between gap-4">
              <span className="font-semibold">{f.q}</span>
              <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </div>
            {open === i && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
          </button>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-12 text-center shadow-elegant">
        <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        <div className="relative">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Ready to modernize your hostels?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Spin up a live demo in seconds. No setup. No credit card. Just see it work.</p>
          <Link to="/app/student" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
            Launch HostelX AI <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-glass-border">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">HostelX <span className="text-gradient">AI</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">The intelligent operating system for university residences.</p>
        </div>
        <div>
          <div className="text-sm font-semibold">Product</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><Link to="/app/analytics" className="hover:text-foreground">Analytics</Link></li>
            <li><Link to="/app/assistant" className="hover:text-foreground">AI Assistant</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Roles</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/app/student" className="hover:text-foreground">Students</Link></li>
            <li><Link to="/app/warden" className="hover:text-foreground">Wardens</Link></li>
            <li><Link to="/app/admin" className="hover:text-foreground">Administrators</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Connect</div>
          <div className="mt-3 flex gap-3 text-muted-foreground">
            <a href="#" className="glass grid h-9 w-9 place-items-center rounded-lg hover:text-foreground"><Github className="h-4 w-4" /></a>
            <a href="#" className="glass grid h-9 w-9 place-items-center rounded-lg hover:text-foreground"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="glass grid h-9 w-9 place-items-center rounded-lg hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-glass-border px-6 py-5 text-center text-xs text-muted-foreground">
        © 2026 HostelX AI · Built for the future of campus living
      </div>
    </footer>
  );
}
