import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C1Pcpexm.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { i as heatmap, g as complaintCategories, o as occupancyData } from "./dummy-data-BxK9Y167.mjs";
import { a3 as TrendingUp, v as TriangleAlert, k as Activity, b as Sparkles } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, L as LineChart, c as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, d as Line, e as RadarChart, f as PolarGrid, g as PolarAngleAxis, h as PolarRadiusAxis, i as Radar } from "../_libs/recharts.mjs";
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
const predict = occupancyData.map((d, i) => ({
  ...d,
  predicted: Math.min(100, d.occupancy + (i > 8 ? 4 : 2) + Math.random() * 3)
}));
const radar = [{
  metric: "Cleanliness",
  A: 88,
  B: 76
}, {
  metric: "Mess",
  A: 82,
  B: 70
}, {
  metric: "Wi-Fi",
  A: 74,
  B: 88
}, {
  metric: "Security",
  A: 92,
  B: 84
}, {
  metric: "Maintenance",
  A: 78,
  B: 82
}, {
  metric: "Staff",
  A: 86,
  B: 80
}];
function AnalyticsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "AI Analytics", subtitle: "Predictive intelligence across every hostel metric" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Insight, { icon: TrendingUp, label: "Predicted occupancy (Jan)", value: "92%", tone: "success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Insight, { icon: TriangleAlert, label: "Crowd alert (mess @ 8 PM)", value: "High", tone: "destructive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Insight, { icon: Activity, label: "Anomaly detections", value: "7", tone: "warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Insight, { icon: Sparkles, label: "AI models running", value: "14", tone: "info" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 text-lg font-semibold", children: "Occupancy Forecast" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs text-muted-foreground", children: "Actual vs AI predicted (12-mo LSTM)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: predict, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "oklch(1 0 0 / 6%)", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", stroke: "oklch(0.7 0.04 250)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "oklch(0.7 0.04 250)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            background: "oklch(0.22 0.05 265)",
            border: "1px solid oklch(1 0 0 / 12%)",
            borderRadius: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "occupancy", stroke: "oklch(0.68 0.18 245)", strokeWidth: 2.5, dot: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "predicted", stroke: "oklch(0.72 0.17 195)", strokeWidth: 2, strokeDasharray: "6 4", dot: false })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 text-lg font-semibold", children: "Block A vs Block B" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs text-muted-foreground", children: "Resident satisfaction radar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RadarChart, { data: radar, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, { stroke: "oklch(1 0 0 / 10%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { dataKey: "metric", tick: {
            fill: "oklch(0.7 0.04 250)",
            fontSize: 11
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PolarRadiusAxis, { stroke: "oklch(1 0 0 / 10%)", tick: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { name: "A", dataKey: "A", stroke: "oklch(0.68 0.18 245)", fill: "oklch(0.68 0.18 245)", fillOpacity: 0.4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Radar, { name: "B", dataKey: "B", stroke: "oklch(0.72 0.17 195)", fill: "oklch(0.72 0.17 195)", fillOpacity: 0.3 })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Campus Heatmap" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Crowd density across 24h × 7 days" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            "Low ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-24 rounded-full", style: {
              background: "linear-gradient(90deg, oklch(0.30 0.05 250), oklch(0.68 0.18 245), oklch(0.72 0.17 30))"
            } }),
            " High"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block min-w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", style: {
          gridTemplateColumns: `60px repeat(24, minmax(18px, 1fr))`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
          Array.from({
            length: 24
          }).map((_, h) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-[9px] text-muted-foreground", children: h }, h)),
          ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].flatMap((day, r) => [/* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pr-2 text-right text-xs text-muted-foreground", children: day }, `label-${day}`), ...heatmap[r].map((cell) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-px aspect-square rounded-sm transition hover:scale-125", style: {
            background: `oklch(${0.3 + cell.v * 0.45} ${0.06 + cell.v * 0.16} ${250 - cell.v * 220})`,
            opacity: 0.4 + cell.v * 0.6
          }, title: `${day} ${cell.h}:00 · ${Math.round(cell.v * 100)}%` }, `${r}-${cell.h}`))])
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-1 text-lg font-semibold", children: "Complaint Trends" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs text-muted-foreground", children: "Top 5 categories — last 30 days" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: complaintCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono", children: [
              c.value,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-2 overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full", style: {
            width: `${c.value * 2.5}%`,
            background: c.color
          } }) })
        ] }, c.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { className: "mt-6 border-accent/40 bg-accent/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "AI Insight of the Day" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
          "Friday-evening mess footfall is forecast to rise ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "38% above baseline" }),
          ". Recommend opening counter 4 and pre-cooking 240 extra meals to maintain < 6 min wait time."
        ] })
      ] })
    ] }) })
  ] });
}
function Insight({
  icon: Icon,
  label,
  value,
  tone
}) {
  const tones = {
    success: "text-success",
    warning: "text-warning",
    destructive: "text-destructive",
    info: "text-info"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-10 w-10 place-items-center rounded-xl bg-white/5 ${tones[tone]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", children: value })
    ] })
  ] }) });
}
export {
  AnalyticsPage as component
};
