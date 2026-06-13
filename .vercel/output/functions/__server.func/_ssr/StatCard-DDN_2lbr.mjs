import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { I as Icons, k as Activity } from "../_libs/lucide-react.mjs";
function StatCard({ icon, label, value, change, trend = "up" }) {
  const Icon = Icons[icon] ?? Activity;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary-foreground" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold tracking-tight", children: value }),
    change && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-xs font-medium ${trend === "up" ? "text-success" : "text-destructive"}`, children: [
      trend === "up" ? "▲" : "▼",
      " ",
      change,
      " vs last month"
    ] })
  ] });
}
export {
  StatCard as S
};
