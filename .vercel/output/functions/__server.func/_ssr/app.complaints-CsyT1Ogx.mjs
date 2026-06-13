import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C1Pcpexm.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { b as complaints, g as complaintCategories } from "./dummy-data-BxK9Y167.mjs";
import { x as Search, $ as Plus, b as Sparkles } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, P as PieChart, b as Pie, C as Cell, T as Tooltip } from "../_libs/recharts.mjs";
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
const priorityColor = {
  High: "bg-destructive/15 text-destructive border-destructive/30",
  Medium: "bg-warning/15 text-warning border-warning/30",
  Low: "bg-info/15 text-info border-info/30"
};
const statusColor = {
  "Open": "bg-muted text-muted-foreground",
  "Assigned": "bg-info/15 text-info",
  "In Progress": "bg-warning/15 text-warning",
  "Resolved": "bg-success/15 text-success"
};
function ComplaintsPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [query, setQuery] = reactExports.useState("");
  const filtered = complaints.filter((c) => filter === "All" || c.status === filter).filter((c) => c.title.toLowerCase().includes(query.toLowerCase()) || c.student.toLowerCase().includes(query.toLowerCase()) || c.room.toLowerCase().includes(query.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Complaint Management", subtitle: "AI-categorized · priority-ranked · SLA tracked" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm text-muted-foreground", children: "Total Active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-4xl font-bold", children: complaints.filter((c) => c.status !== "Resolved").length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs text-success", children: "▼ 18% vs last week" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm text-muted-foreground", children: "Avg. Resolution Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-4xl font-bold", children: "4.2h" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs text-success", children: "▼ 32% with AI routing" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm text-muted-foreground", children: "SLA Compliance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-4xl font-bold", children: "98.4%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs text-success", children: "▲ 4.1% this month" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Complaints Feed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center gap-2 rounded-2xl border border-glass-border px-3 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search complaints", className: "w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-xl border border-glass-border bg-glass p-1", children: ["All", "Open", "In Progress", "Resolved"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(s), className: `rounded-lg px-3 py-1 text-xs font-medium transition ${filter === s ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`, children: s }, s)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 rounded-xl bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
              " New"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-4 transition hover:border-primary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: c.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${priorityColor[c.priority]}`, children: c.priority })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
                c.student,
                " · ",
                c.room,
                " · ",
                c.date
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: c.aiScore }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "urgency" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs font-medium ${statusColor[c.status]}`, children: c.status })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between border-t border-glass-border pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-md bg-white/5 px-2 py-1 text-xs", children: [
              "📂 ",
              c.category
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs font-medium text-primary-glow hover:underline", children: "View thread →" })
          ] })
        ] }, c.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "AI Categorization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Auto-detected this week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-52", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: complaintCategories, dataKey: "value", innerRadius: 45, outerRadius: 75, paddingAngle: 3, children: complaintCategories.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: e.color }, e.name)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
              background: "oklch(0.22 0.05 265)",
              border: "1px solid oklch(1 0 0 / 12%)",
              borderRadius: 12
            } })
          ] }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: complaintCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
                background: c.color
              } }),
              " ",
              c.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
              c.value,
              "%"
            ] })
          ] }, c.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "AI Suggestion" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "Electrical complaints up 28%" }),
            " in Block B this week — likely related to recent AC servicing. Recommend preventive inspection in B-300 series."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-3 rounded-lg bg-gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow", children: "Create work order" })
        ] })
      ] })
    ] })
  ] });
}
export {
  ComplaintsPage as component
};
