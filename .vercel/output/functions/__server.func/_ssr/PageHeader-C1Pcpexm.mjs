import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { x as Search, y as Bell } from "../_libs/lucide-react.mjs";
function PageHeader({ title, subtitle, actions }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight md:text-4xl", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: subtitle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass hidden items-center gap-2 rounded-xl px-3 py-2 md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Search…", className: "w-48 bg-transparent text-sm outline-none placeholder:text-muted-foreground" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "glass relative grid h-10 w-10 place-items-center rounded-xl hover:border-primary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 top-2 h-2 w-2 rounded-full bg-accent animate-pulse-glow" })
      ] }),
      actions
    ] })
  ] });
}
export {
  PageHeader as P
};
