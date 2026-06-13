import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { s as stats, f as features, u as universityLogos, p as pricingPlans, t as testimonials, c as contactCards, a as faqs } from "./dummy-data-BxK9Y167.mjs";
import { B as Building2, A as ArrowRight, b as Sparkles, g as CircleCheck, C as ChartColumn, h as MessageSquare, S as ShieldCheck, Z as Zap, Q as QrCode, i as Brain, j as Shield, k as Activity, l as Cpu, D as DollarSign, m as Star, P as Phone, n as Mic, o as Layers, W as Wifi, p as Mail, q as MapPin, r as ChevronDown, s as Github, T as Twitter, t as Linkedin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const iconMap = {
  Brain,
  QrCode,
  Zap,
  ShieldCheck,
  MessageSquare,
  BarChart3: ChartColumn
};
const architectureSteps = [{
  icon: Building2,
  title: "Student data capture",
  desc: "Room profiles, fee status, complaints and visitor logs flow into one secure campus record."
}, {
  icon: Shield,
  title: "Warden coordination",
  desc: "AI-powered approvals, emergency alerts, and complaint routing keep operations aligned."
}, {
  icon: Activity,
  title: "Admin analytics",
  desc: "Revenue, occupancy, electricity and mess metrics are visualized for fast decisions."
}, {
  icon: Cpu,
  title: "AI database sync",
  desc: "Trends, heatmaps and predictions are generated from real-time hostel telemetry."
}];
const futureScopeItems = [{
  icon: Phone,
  title: "Mobile app",
  desc: "Native student and warden experiences for campus, mess and visitor flows."
}, {
  icon: Zap,
  title: "IoT meters",
  desc: "Smart electricity metering and predictive billing inputs deliver deep energy insights."
}, {
  icon: Mic,
  title: "Voice assistant",
  desc: "Voice-based hostel helpdesk for queries, leave requests and emergency support."
}, {
  icon: ShieldCheck,
  title: "RFID attendance",
  desc: "Touchless attendance, secure access and real-time presence for every hostel wing."
}, {
  icon: Layers,
  title: "Smart allocation",
  desc: "AI room placement, roommate matching and capacity balancing across hostels."
}, {
  icon: Wifi,
  title: "Predictive maintenance",
  desc: "AI alerts identify plumbing, power and infrastructure hotspots before issues escalate."
}];
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg pointer-events-none opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSkeletons, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Showcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Architecture, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UniversityLogos, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FutureScope, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-glass-border backdrop-blur-xl bg-background/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-bold", children: [
        "HostelX ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "AI" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden gap-8 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground", children: "Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#showcase", className: "hover:text-foreground", children: "Showcase" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pricing", className: "hover:text-foreground", children: "Pricing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#testimonials", className: "hover:text-foreground", children: "Universities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-foreground", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-foreground", children: "FAQ" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/student", className: "group flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105", children: [
      "Launch App ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mx-auto max-w-7xl px-6 pb-24 pt-20 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-10 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-xs font-medium", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Trusted by 248 universities across India" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "animate-fade-up mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl", style: {
      animationDelay: "0.1s"
    }, children: [
      "The Operating System for",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Modern Hostels." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground", style: {
      animationDelay: "0.2s"
    }, children: "HostelX AI replaces clipboards, WhatsApp groups, and spreadsheets with one intelligent platform — QR gate passes, predictive analytics, AI complaint routing, and face verification." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up mt-8 flex flex-wrap justify-center gap-3", style: {
      animationDelay: "0.3s"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/student", className: "group rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105", children: "Open Live Demo →" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "glass rounded-xl px-6 py-3 text-sm font-semibold hover:border-primary/40", children: "Explore Features" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-fade-up mx-auto mt-16 max-w-5xl", style: {
      animationDelay: "0.4s"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-strong relative rounded-3xl border border-glass-border p-2 shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-background/80 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-warning/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-xs text-muted-foreground", children: "app.hostelx.ai/dashboard" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-3", children: stats.slice(0, 3).map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass animate-fade-up rounded-xl p-4 text-left", style: {
        animationDelay: `${0.5 + i * 0.1}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-bold", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-success", children: [
          "▲ ",
          s.change
        ] })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-3 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass h-32 rounded-xl p-4 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Live Occupancy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex h-16 items-end gap-1", children: [60, 72, 58, 80, 92, 65, 88, 95, 78, 84, 90, 70].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 rounded-t bg-gradient-primary", style: {
            height: `${v}%`
          } }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass h-32 rounded-xl p-4 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Recent Complaints" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 space-y-1.5", children: ["AC repair · B-302", "Wi-Fi · west wing", "Mess feedback"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3 text-success" }),
            " ",
            t
          ] }, t)) })
        ] })
      ] })
    ] }) }) })
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-glass-border bg-glass", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gradient font-display text-4xl font-bold md:text-5xl", children: s.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: s.label })
  ] }, s.label)) }) });
}
function LoadingSkeletons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Pitch-ready polish" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "See the experience before you build it." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Premium startup landing pages use motion and thoughtful details to turn vision into belief." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-3", children: Array.from({
      length: 3
    }).map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass animate-fade-up rounded-3xl p-6 shadow-elegant", style: {
      animationDelay: `${index * 0.05}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-20 rounded-full bg-muted/30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-10 rounded-full bg-muted/30" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-3/4 rounded-full bg-muted/20 animate-shimmer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-full rounded-full bg-muted/20 animate-shimmer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5/6 rounded-full bg-muted/20 animate-shimmer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-muted/20 animate-shimmer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-muted/20 animate-shimmer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-muted/20 animate-shimmer" })
        ] })
      ] })
    ] }, index)) })
  ] });
}
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "features", className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: [
        "Everything a hostel needs.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Nothing it doesn't." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: features.map((f, i) => {
      const Icon = iconMap[f.icon];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "group animate-fade-up", style: {
        animationDelay: `${i * 0.05}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.desc })
      ] }, f.title);
    }) })
  ] });
}
function Showcase() {
  const items = [{
    role: "Student",
    desc: "Track fees, electricity, complaints, and generate QR gate passes.",
    to: "/app/student"
  }, {
    role: "Warden",
    desc: "Approve leaves, monitor occupancy, respond to emergencies.",
    to: "/app/warden"
  }, {
    role: "Administrator",
    desc: "Allocate rooms, run reports, see campus-wide analytics.",
    to: "/app/admin"
  }, {
    role: "Visitor",
    desc: "QR registration, identity capture, parent-meeting workflow.",
    to: "/app/visitors"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "showcase", className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Built for every stakeholder" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: [
        "One platform.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Four tailored experiences." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: it.to, className: "glass group relative overflow-hidden rounded-2xl p-6 shadow-elegant transition-all hover:border-primary/40 hover:shadow-glow animate-fade-up", style: {
      animationDelay: `${i * 0.05}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-accent", children: it.role }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-lg font-semibold", children: it.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-2 text-sm font-medium text-primary-glow", children: [
        "Open dashboard ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl transition-opacity group-hover:opacity-80" })
    ] }, it.role)) })
  ] });
}
function Architecture() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Student → Warden → Admin → Analytics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "HostelX AI connects every role through secure event-driven flows, predictive insights, and one-click actions." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-4", children: architectureSteps.map((step, index) => {
      const Icon = step.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "animate-fade-up", style: {
        animationDelay: `${index * 0.05}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold", children: step.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: step.desc })
      ] }, step.title);
    }) })
  ] });
}
function UniversityLogos() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Trusted by leading campuses" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Campus-ready adoption in every zone." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "HostelX AI is already being pitched, piloted, and adopted by top technical and residential campuses." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: universityLogos.map((logo, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center justify-between rounded-3xl border border-glass-border p-6 shadow-elegant animate-fade-up", style: {
      animationDelay: `${index * 0.04}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: logo }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-muted-foreground", children: "Early adopter" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary-glow", children: logo[0] })
    ] }, logo)) })
  ] });
}
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Pricing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Designed to fit campus budgets and scale." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Choose a plan for pilot deployment or full enterprise rollout with the flexibility modern universities need." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 xl:grid-cols-3", children: pricingPlans.map((plan, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `glass rounded-3xl border ${plan.highlight ? "border-primary/40 bg-primary/5" : "border-glass-border"} p-8 shadow-elegant animate-fade-up`, style: {
      animationDelay: `${index * 0.05}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-[0.2em] text-accent", children: plan.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-bold", children: plan.price })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "h-5 w-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground", children: plan.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: plan.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-1 h-4 w-4 text-success" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
      ] }, feature)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: `mt-8 w-full rounded-2xl py-3 text-sm font-semibold transition ${plan.highlight ? "bg-gradient-primary text-primary-foreground shadow-glow" : "bg-glass text-foreground hover:border-primary/30 hover:bg-primary/5"}`, children: plan.highlight ? "Most popular" : "Select plan" })
    ] }, plan.name)) })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Let's bring your campus vision alive." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Talk to our team about pilots, integrations, or setting up a live campus demo." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 lg:grid-cols-3", children: contactCards.map((card, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-3xl border border-glass-border p-6 shadow-elegant animate-fade-up", style: {
      animationDelay: `${index * 0.05}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary-glow", children: card.type === "email" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-sm font-semibold", children: card.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-foreground", children: card.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: card.detail })
    ] }, card.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 rounded-[2rem] border border-glass-border bg-glass p-8 shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-widest text-accent", children: "Start your pilot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-semibold", children: "Fast onboarding, campus-grade support." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Our team helps your campus transition in weeks, not months. We handle data mapping, training, and product launch guidance." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-3xl border border-glass-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/40", placeholder: "Your name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full rounded-3xl border border-glass-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary/40", placeholder: "Your email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-3xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5", children: "Request demo" })
      ] })
    ] }) })
  ] });
}
function FutureScope() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Future scope" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Hackathon-ready roadmap" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: futureScopeItems.map((item, index) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "animate-fade-up", style: {
        animationDelay: `${index * 0.05}s`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: item.title }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: item.desc })
      ] }, item.title);
    }) })
  ] });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "testimonials", className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Loved by universities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold md:text-5xl", children: "Real teams. Real impact." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-3", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "animate-fade-up", style: {
      animationDelay: `${i * 0.08}s`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex gap-0.5", children: Array.from({
        length: 5
      }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-accent text-accent" }, j)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3 border-t border-glass-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-bold text-primary-foreground", children: t.name[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] })
    ] }, t.name)) })
  ] });
}
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "faq", className: "mx-auto max-w-3xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-bold", children: "Questions, answered." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? -1 : i), className: "glass w-full rounded-2xl p-5 text-left transition-all hover:border-primary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}` })
      ] }),
      open === i && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: f.a })
    ] }, f.q)) })
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-5xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong relative overflow-hidden rounded-3xl p-12 text-center shadow-elegant", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-primary opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-bold md:text-5xl", children: "Ready to modernize your hostels?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Spin up a live demo in seconds. No setup. No credit card. Just see it work." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/student", className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105", children: [
        "Launch HostelX AI ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" })
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-glass-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-bold", children: [
            "HostelX ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "AI" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "The intelligent operating system for university residences." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground", children: "Features" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/analytics", className: "hover:text-foreground", children: "Analytics" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/assistant", className: "hover:text-foreground", children: "AI Assistant" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Roles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/student", className: "hover:text-foreground", children: "Students" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/warden", className: "hover:text-foreground", children: "Wardens" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/admin", className: "hover:text-foreground", children: "Administrators" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "glass grid h-9 w-9 place-items-center rounded-lg hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "glass grid h-9 w-9 place-items-center rounded-lg hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "glass grid h-9 w-9 place-items-center rounded-lg hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-glass-border px-6 py-5 text-center text-xs text-muted-foreground", children: "© 2026 HostelX AI · Built for the future of campus living" })
  ] });
}
export {
  Landing as component
};
