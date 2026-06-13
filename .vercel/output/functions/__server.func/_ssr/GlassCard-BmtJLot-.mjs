import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
function GlassCard({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("glass rounded-2xl p-6 shadow-elegant transition-all hover:border-primary/40", className),
      ...props,
      children
    }
  );
}
export {
  GlassCard as G
};
