import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { O as Outlet, d as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { B as Building2, X, M as Menu, G as GraduationCap, a as MessageSquareWarning, S as ShieldCheck, L as LayoutDashboard, U as UsersRound, C as ChartColumn, b as Sparkles, c as Lock, d as CircleUserRound, e as Settings, f as LogOut } from "../_libs/lucide-react.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const nav = [
  { to: "/app/student", label: "Student", icon: GraduationCap, role: "Student" },
  { to: "/app/complaints", label: "Complaints", icon: MessageSquareWarning, role: "All" },
  { to: "/app/warden", label: "Warden", icon: ShieldCheck, role: "Warden" },
  { to: "/app/admin", label: "Admin", icon: LayoutDashboard, role: "Admin" },
  { to: "/app/visitors", label: "Visitors", icon: UsersRound, role: "Guard" },
  { to: "/app/analytics", label: "AI Analytics", icon: ChartColumn, role: "All" },
  { to: "/app/assistant", label: "AI Assistant", icon: Sparkles, role: "All" },
  { to: "/app/security", label: "Security", icon: Lock, role: "Security" },
  { to: "/app/profile", label: "Profile", icon: CircleUserRound, role: "You" },
  { to: "/app/settings", label: "Settings", icon: Settings, role: "App" }
];
function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong sticky top-0 z-40 flex items-center justify-between px-4 py-3 lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold", children: [
          "HostelX ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "AI" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "rounded-md p-2 hover:bg-white/5", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: cn(
          "glass-strong fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-glass-border transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 px-6 py-6 lg:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-lg font-bold leading-none", children: [
                "HostelX ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "AI" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Smart Hostel OS" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 space-y-1 overflow-y-auto px-3 py-2", children: nav.map((item) => {
            const active = pathname === item.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: item.to,
                onClick: () => setOpen(false),
                className: cn(
                  "group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition-all",
                  active ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }),
                    item.label
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn(
                    "rounded-md px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider",
                    active ? "bg-black/20" : "bg-white/5 text-muted-foreground"
                  ), children: item.role })
                ]
              },
              item.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-glass-border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center gap-3 rounded-xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground", children: "SS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium", children: "Sajal Singhal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: "Room B-302 · CS '26" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md p-1.5 text-muted-foreground hover:bg-white/5 hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }) })
          ] }) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-20 bg-black/50 lg:hidden", onClick: () => setOpen(false) })
  ] });
}
function AppLayout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative lg:pl-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) })
  ] });
}
export {
  AppLayout as component
};
