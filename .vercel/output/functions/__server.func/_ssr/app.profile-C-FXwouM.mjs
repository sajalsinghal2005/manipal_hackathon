import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C1Pcpexm.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { S as StatCard } from "./StatCard-DDN_2lbr.mjs";
import { d as userProfile } from "./dummy-data-BxK9Y167.mjs";
import { S as ShieldCheck, _ as Link2, y as Bell } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function ProfilePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Profile", subtitle: "Manage your account, access level, and smart preferences" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[300px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-16 w-16 place-items-center rounded-3xl bg-gradient-primary text-primary-foreground text-2xl font-bold shadow-glow", children: userProfile.initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: userProfile.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: userProfile.role })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "Email", value: userProfile.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "Phone", value: userProfile.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "Room", value: userProfile.room }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "Joined", value: userProfile.joined }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "Campus", value: userProfile.hostel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow", children: "Edit profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl border border-glass-border px-4 py-3 text-sm hover:border-primary/40", children: "Manage linked accounts" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Account overview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "All your hostel access and status in one place." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-success" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "UserCircle2", label: "Profile completeness", value: "100%", change: "All systems green" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "CreditCard", label: "Gate access", value: "Active", change: "Valid through Jun 2027" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Connected apps" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: userProfile.integrations.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center justify-between rounded-2xl px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-2xl bg-white/5 text-sm", children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: item.status })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "h-4 w-4 text-muted-foreground" })
          ] }, item.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { className: "border-accent/40 bg-accent/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-5 w-5 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Smart recommendations enabled" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "HostelX will suggest fee savings, room swaps, and energy optimizations." })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function Detail({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: value })
  ] });
}
export {
  ProfilePage as component
};
