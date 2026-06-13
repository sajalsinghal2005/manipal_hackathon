import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C1Pcpexm.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { S as StatCard } from "./StatCard-DDN_2lbr.mjs";
import { b as complaints, l as leaveRequests, v as visitors } from "./dummy-data-BxK9Y167.mjs";
import { u as Siren, g as CircleCheck, v as TriangleAlert, w as CircleX } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function WardenDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Warden Control Center", subtitle: "Bhaskara Hostel · 412 residents · 6 staff on duty" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "BedDouble", label: "Occupancy", value: "412 / 480", change: "86% full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "MessageSquareWarning", label: "Open Complaints", value: "14", change: "3 high priority", trend: "down" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "Plane", label: "Pending Leaves", value: "7", change: "2 medical" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: "Users2", label: "Visitors Today", value: "23", change: "2 inside now" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { className: "mt-6 border-destructive/40 bg-destructive/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-destructive/20 animate-pulse-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, { className: "h-6 w-6 text-destructive" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Emergency SOS active — Block C, Floor 3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Triggered by Mohit Sharma (C-118) · 38 seconds ago" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground", children: "Dispatch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "glass rounded-xl px-4 py-2 text-sm", children: "Call student" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-semibold", children: "Pending Complaints" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: complaints.filter((c) => c.status !== "Resolved").slice(0, 5).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-start justify-between gap-3 rounded-xl p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              c.room,
              " · ",
              c.student
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-8 w-8 place-items-center rounded-lg bg-success/15 text-success hover:bg-success/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-8 w-8 place-items-center rounded-lg bg-warning/15 text-warning hover:bg-warning/25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }) })
          ] })
        ] }, c.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-semibold", children: "Leave Approvals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: leaveRequests.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center justify-between gap-3 rounded-xl p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
              l.student,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                "· ",
                l.room
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
              l.reason,
              " · ",
              l.from,
              "–",
              l.to
            ] })
          ] }),
          l.status === "Pending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-8 w-8 place-items-center rounded-lg bg-success/20 text-success", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-8 w-8 place-items-center rounded-lg bg-destructive/20 text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4" }) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-success/15 px-2.5 py-1 text-xs text-success", children: "Approved" })
        ] }, l.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-semibold", children: "Live Visitor Entries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-glass-border text-left text-xs uppercase tracking-wider text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2", children: "Visitor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Visiting" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Purpose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Check-in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: visitors.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-glass-border last:border-0 hover:bg-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: v.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: v.id })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: v.visiting }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: v.purpose }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: v.checkIn }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 text-xs ${v.status === "Inside" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`, children: v.status }) })
          ] }, v.id)) })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  WardenDashboard as component
};
