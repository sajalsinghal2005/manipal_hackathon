import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C1Pcpexm.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { S as StatCard } from "./StatCard-DDN_2lbr.mjs";
import { Q as QRBlock } from "./QRBlock-BtrQhMAH.mjs";
import { e as electricityUsage, l as leaveRequests, n as notifications } from "./dummy-data-BxK9Y167.mjs";
import { J as Download, K as Plane, I as Icons, y as Bell, N as MessageSquarePlus, O as Wallet, R as BedDouble } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, A as AreaChart, X as XAxis, Y as YAxis, T as Tooltip, a as Area } from "../_libs/recharts.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function StudentDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Welcome back, Sajal 👋", subtitle: "Room B-302 · Bhaskara Hostel · Block B", actions: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hidden rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow md:inline-flex", children: "New Request" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "BedDouble", label: "Room", value: "B-302", change: "2-bed shared", trend: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "Wallet", label: "Fee Status", value: "₹0 due", change: "Paid 12 Nov", trend: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "Zap", label: "Electricity (Nov)", value: "142 units", change: "12% lower", trend: "up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "MessageSquareWarning", label: "Open Tickets", value: "2", change: "1 in progress", trend: "down" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Weekly Electricity Usage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Real-time per-room metering" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success", children: "Within limit" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: electricityUsage, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "elec", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.78 0.16 230)", stopOpacity: 0.6 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.78 0.16 230)", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "day", stroke: "oklch(0.7 0.04 250)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "oklch(0.7 0.04 250)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "oklch(0.22 0.05 265)",
            border: "1px solid oklch(1 0 0 / 12%)",
            borderRadius: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "units", stroke: "oklch(0.78 0.16 230)", strokeWidth: 2, fill: "url(#elec)" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Digital Gate Pass" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs text-muted-foreground", children: "Valid till 18 Dec 2026, 10:00 PM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-pulse-glow rounded-2xl p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QRBlock, { size: 170, seed: "sajal-b302-1218" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 w-full space-y-1 text-left text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Pass ID", value: "GP-AK-99182" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Issued", value: "14 Dec, 09:12 AM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Status", value: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-success", children: "Approved" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary py-2 text-sm font-semibold text-primary-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Download"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Leave Requests" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 rounded-lg border border-glass-border px-3 py-1.5 text-xs hover:border-primary/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { className: "h-3.5 w-3.5" }),
            " New Leave"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: leaveRequests.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center justify-between rounded-xl p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: l.reason }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              l.from,
              " → ",
              l.to,
              " · ",
              l.id
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { status: l.status })
        ] }, l.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-lg font-semibold", children: "Notifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: notifications.map((n) => {
          const Ic = Icons[n.icon] ?? Bell;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 rounded-xl p-2 hover:bg-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ic, { className: "h-4 w-4 text-primary-glow" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium", children: n.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: n.desc })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: n.time })
          ] }, n.title);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { icon: MessageSquarePlus, label: "File a Complaint", desc: "Plumbing, electrical, mess, Wi-Fi…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { icon: Wallet, label: "Pay Fees", desc: "UPI · Card · Net Banking" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Action, { icon: BedDouble, label: "Request Room Change", desc: "Roommate preferences supported" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Recent activity timeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Campus events and AI notifications from the last 24 hours." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground", children: "Live feed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
        time: "Just now",
        title: "Gate pass validated",
        desc: "Gate A verified your QR pass for evening outing.",
        tone: "success"
      }, {
        time: "1h ago",
        title: "Complaint updated",
        desc: "AC repair scheduled for 7:00 PM in B-302.",
        tone: "info"
      }, {
        time: "3h ago",
        title: "Mess alert",
        desc: "Dinner menu updated with extra protein options.",
        tone: "accent"
      }, {
        time: "5h ago",
        title: "Electricity report",
        desc: "Your room usage was 12% lower than yesterday.",
        tone: "success"
      }].map((event) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex flex-col gap-3 rounded-3xl p-4 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: event.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: event.desc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-full px-3 py-1 text-xs ${event.tone === "success" ? "bg-success/15 text-success" : event.tone === "info" ? "bg-info/15 text-info" : "bg-accent/15 text-accent"}`, children: event.time })
      ] }, event.time)) })
    ] }),
    "    "
  ] });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-glass-border py-1.5 last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value })
  ] });
}
function Badge({
  status
}) {
  const map = {
    Approved: "bg-success/15 text-success",
    Pending: "bg-warning/15 text-warning",
    Rejected: "bg-destructive/15 text-destructive"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-medium ${map[status] ?? "bg-muted text-muted-foreground"}`, children: status });
}
function Action({
  icon: Icon,
  label,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "glass group flex items-center gap-4 rounded-2xl p-5 text-left transition-all hover:border-primary/40 hover:shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary-foreground" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: desc })
    ] })
  ] });
}
export {
  StudentDashboard as component
};
