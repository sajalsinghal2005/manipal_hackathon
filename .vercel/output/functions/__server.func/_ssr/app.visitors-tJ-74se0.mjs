import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C1Pcpexm.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { v as visitors } from "./dummy-data-BxK9Y167.mjs";
import { Q as QRBlock } from "./QRBlock-BtrQhMAH.mjs";
import { z as UserPlus, E as Camera, F as LogIn, f as LogOut, H as Clock, P as Phone } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function VisitorPage() {
  const [generated, setGenerated] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Visitor Management", subtitle: "QR-based registration · live entry log · ID verification" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-4 text-lg font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-5 w-5 text-primary-glow" }),
          " Register Visitor"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", placeholder: "e.g. Rahul Mehta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone Number", placeholder: "+91 …" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Visiting Student", placeholder: "Name or Roll No." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Purpose", placeholder: "Family visit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Expected Duration", placeholder: "2 hours" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "glass flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm hover:border-primary/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4" }),
            " Capture ID Proof"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setGenerated(true), className: "w-full rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-glow", children: "Generate QR Pass" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "QR Visitor Pass" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs text-muted-foreground", children: generated ? "Valid for 2 hours · scan at gate" : "Fill the form to generate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-2xl p-2 transition-all ${generated ? "animate-pulse-glow" : "opacity-40 grayscale"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(QRBlock, { size: 180, seed: generated ? "vis-" + Date.now() : "preview" }) }),
        generated && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm", children: "VIS-9822" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            "Issued at ",
            (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-lg font-semibold", children: "Today's Snapshot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: LogIn, label: "Check-ins", value: "23", color: "text-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: LogOut, label: "Check-outs", value: "21", color: "text-info" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Clock, label: "Avg. duration", value: "58 min", color: "text-warning" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { icon: Phone, label: "Pending verifications", value: "2", color: "text-destructive" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-semibold", children: "Entry Logs" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-glass-border text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2", children: "Pass ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Visitor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Visiting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: visitors.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-glass-border last:border-0 hover:bg-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-mono text-xs", children: v.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-medium", children: v.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: v.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: v.visiting }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: v.purpose }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: v.checkIn }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs ${v.status === "Inside" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`, children: v.status }) })
        ] }, v.id)) })
      ] }) })
    ] })
  ] });
}
function Field({
  label,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder, className: "glass w-full rounded-xl px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60" })
  ] });
}
function Stat({
  icon: Icon,
  label,
  value,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center gap-3 rounded-xl p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-9 w-9 place-items-center rounded-lg bg-white/5 ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-sm", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: value })
  ] });
}
export {
  VisitorPage as component
};
