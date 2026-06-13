import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C1Pcpexm.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { e as Settings, Z as Zap, S as ShieldCheck, V as SunMedium, y as Bell } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function SettingsPage() {
  const [autoOptimize, setAutoOptimize] = reactExports.useState(true);
  const [quietHours, setQuietHours] = reactExports.useState(false);
  const [secureLogin, setSecureLogin] = reactExports.useState(true);
  const [smsAlerts, setSmsAlerts] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Settings", subtitle: "Customize your HostelX AI experience" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[360px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Preferences" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Fine-tune alerts, automation, and accessibility." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "AI energy optimization", value: autoOptimize, onChange: () => setAutoOptimize((v) => !v), icon: Zap }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Secure login reminders", value: secureLogin, onChange: () => setSecureLogin((v) => !v), icon: ShieldCheck }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "Quiet hour notifications", value: quietHours, onChange: () => setQuietHours((v) => !v), icon: SunMedium }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { label: "SMS emergency alerts", value: smsAlerts, onChange: () => setSmsAlerts((v) => !v), icon: Bell })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-widest text-accent", children: "Account security" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Keep your hostel accounts and access secure with these options." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SettingRow, { label: "Require biometric login", value: "Enabled" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SettingRow, { label: "Auto-lock session", value: "10 min" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SettingRow, { label: "Guest access", value: "Disabled" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-glass-border bg-background/70 p-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Note" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2", children: "Settings are saved locally and reflected instantly in your dashboard experience." })
        ] })
      ] })
    ] })
  ] });
}
function Toggle({
  label,
  value,
  onChange,
  icon: Icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onChange, className: "glass flex items-center justify-between gap-3 rounded-2xl p-4 text-left hover:border-primary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-2xl bg-white/5 text-primary-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: value ? "On" : "Off" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex h-6 w-12 items-center rounded-full px-1 transition ${value ? "bg-gradient-primary" : "bg-white/10"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-4 w-4 rounded-full bg-background transition-all ${value ? "translate-x-5" : "translate-x-0"}` }) })
  ] });
}
function SettingRow({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-glass-border px-4 py-3 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: value })
  ] });
}
export {
  SettingsPage as component
};
