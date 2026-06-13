import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C1Pcpexm.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { S as StatCard } from "./StatCard-DDN_2lbr.mjs";
import { o as occupancyData } from "./dummy-data-BxK9Y167.mjs";
import { J as Download, $ as Plus, x as Search } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, B as BarChart, c as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, j as Bar } from "../_libs/recharts.mjs";
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
const students = [{
  id: "21CS101",
  name: "Sajal Singhal",
  room: "B-302",
  branch: "CSE",
  fee: "Paid",
  elec: "142u"
}, {
  id: "21EC044",
  name: "Sneha Reddy",
  room: "A-204",
  branch: "ECE",
  fee: "Paid",
  elec: "98u"
}, {
  id: "22ME011",
  name: "Mohit Sharma",
  room: "C-118",
  branch: "MECH",
  fee: "Due",
  elec: "118u"
}, {
  id: "21CH077",
  name: "Riya Patel",
  room: "A-110",
  branch: "CHEM",
  fee: "Paid",
  elec: "76u"
}, {
  id: "23CS019",
  name: "Vikram Nair",
  room: "B-405",
  branch: "CSE",
  fee: "Paid",
  elec: "165u"
}, {
  id: "22EE055",
  name: "Ananya Singh",
  room: "A-307",
  branch: "EEE",
  fee: "Due",
  elec: "121u"
}];
function AdminDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Administrator Console", subtitle: "Campus-wide control · 12 hostels · 4,820 residents" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "Building2", label: "Total Hostels", value: "12", change: "2 new this year" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "Users", label: "Residents", value: "4,820", change: "+3.4%" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "IndianRupee", label: "Fees Collected", value: "₹4.2 Cr", change: "+18% YoY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "Zap", label: "Power Saved", value: "14,200 kWh", change: "AI optimization" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Annual Occupancy Trend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 rounded-lg border border-glass-border px-3 py-1.5 text-xs hover:border-primary/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
            " Export"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: occupancyData, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "oklch(1 0 0 / 6%)", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", stroke: "oklch(0.7 0.04 250)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "oklch(0.7 0.04 250)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "oklch(0.22 0.05 265)",
            border: "1px solid oklch(1 0 0 / 12%)",
            borderRadius: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "occupancy", fill: "oklch(0.68 0.18 245)", radius: [6, 6, 0, 0] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-semibold", children: "Room Allocation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
          block: "Block A",
          filled: 184,
          total: 200,
          color: "oklch(0.72 0.17 155)"
        }, {
          block: "Block B",
          filled: 176,
          total: 200,
          color: "oklch(0.78 0.16 230)"
        }, {
          block: "Block C",
          filled: 52,
          total: 80,
          color: "oklch(0.80 0.17 80)"
        }, {
          block: "Block D (New)",
          filled: 120,
          total: 160,
          color: "oklch(0.72 0.17 195)"
        }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: b.block }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              b.filled,
              "/",
              b.total
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: {
            width: `${b.filled / b.total * 100}%`,
            background: b.color
          } }) })
        ] }, b.block)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-primary py-2 text-sm font-semibold text-primary-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Allocate Room"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Student Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center gap-2 rounded-xl px-3 py-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search students…", className: "w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl bg-gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow", children: "+ Add" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-glass-border text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2", children: "Roll No." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Room" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Branch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Fee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Electricity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: students.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-glass-border last:border-0 hover:bg-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 font-mono text-xs", children: s.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-medium", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: s.room }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: s.branch }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs ${s.fee === "Paid" ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`, children: s.fee }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: s.elec }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs text-primary-glow hover:underline", children: "View →" }) })
        ] }, s.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-6 md:grid-cols-3", children: [{
      title: "Fee Reports",
      value: "₹4.2 Cr",
      sub: "98.2% collection rate"
    }, {
      title: "Electricity Reports",
      value: "₹6.8 L",
      sub: "Nov billing cycle"
    }, {
      title: "Mess Reports",
      value: "92%",
      sub: "Avg. satisfaction"
    }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: r.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-bold", children: r.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: r.sub }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-4 flex items-center gap-1.5 rounded-lg border border-glass-border px-3 py-1.5 text-xs hover:border-primary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
        " Download CSV"
      ] })
    ] }, r.title)) })
  ] });
}
export {
  AdminDashboard as component
};
