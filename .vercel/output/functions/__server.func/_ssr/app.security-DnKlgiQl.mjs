import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C1Pcpexm.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { Q as QRBlock } from "./QRBlock-BtrQhMAH.mjs";
import { Y as ScanFace, u as Siren, c as Lock, k as Activity, S as ShieldCheck, v as TriangleAlert } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function SecurityPage() {
  const [scanning, setScanning] = reactExports.useState(false);
  const [verified, setVerified] = reactExports.useState(false);
  function startScan() {
    setScanning(true);
    setVerified(false);
    setTimeout(() => {
      setScanning(false);
      setVerified(true);
    }, 2400);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Security Center", subtitle: "Face verification · QR authentication · Emergency SOS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScanFace, { className: "h-5 w-5 text-primary-glow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Face Verification" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "AI biometric authentication — on-device, AES-256 encrypted." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden rounded-2xl border border-glass-border bg-black", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,oklch(0.4_0.1_265/0.9),transparent_70%)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaceSilhouette, {}),
            scanning && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-[scan_2.4s_linear]", style: {
              // @ts-ignore
              animation: "scan 2.4s linear"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-3 rounded-md bg-black/50 px-2 py-0.5 font-mono text-[10px] text-success", children: "● REC" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-white/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CAM-01 · GATE A" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: verified ? "MATCH 99.7%" : scanning ? "ANALYZING…" : "IDLE" })
            ] }),
            ["top-0 left-0", "top-0 right-0 rotate-90", "bottom-0 right-0 rotate-180", "bottom-0 left-0 -rotate-90"].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute h-6 w-6 border-l-2 border-t-2 border-accent ${p}` }, i))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { ok: true, label: "Camera initialized" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { ok: scanning || verified, label: "Face detected" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { ok: verified, label: "Liveness check passed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { ok: verified, label: "Identity matched · Sajal Singhal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Step, { ok: verified, label: "Access granted · Gate A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: startScan, disabled: scanning, className: "mt-5 rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60", children: scanning ? "Scanning…" : verified ? "Re-scan" : "Start Verification" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "border-destructive/40 bg-destructive/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, { className: "h-5 w-5 text-destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Emergency SOS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "One-tap alert to warden, guards, and emergency contacts." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-6 grid w-full aspect-square place-items-center rounded-full bg-destructive text-destructive-foreground shadow-[0_0_60px_-10px_oklch(0.65_0.22_25/0.8)] animate-pulse-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Siren, { className: "mx-auto h-12 w-12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xl font-bold", children: "SOS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest opacity-80", children: "Press & hold" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs text-muted-foreground", children: "Connected: Warden (Dr. Sharma) · Guard Post · Campus Medical · 1 trusted contact" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-4 text-lg font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5 text-primary-glow" }),
          " QR Authentication"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QRBlock, { size: 160, seed: "auth-aarav" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: "Scan at any gate, mess counter, or lab entry" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-3 text-lg font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5 text-primary-glow" }),
          " Security Event Log"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [{
          t: "2 min ago",
          ok: true,
          msg: "Face verified · Sajal Singhal entered Gate A"
        }, {
          t: "8 min ago",
          ok: true,
          msg: "Visitor VIS-9821 issued QR pass"
        }, {
          t: "14 min ago",
          ok: false,
          msg: "Failed face match · retry triggered (Gate B)"
        }, {
          t: "32 min ago",
          ok: true,
          msg: "Roll-call completed · 408/412 present"
        }, {
          t: "1 hr ago",
          ok: true,
          msg: "Perimeter sensors armed"
        }].map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center gap-3 rounded-xl p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-9 w-9 place-items-center rounded-lg ${e.ok ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`, children: e.ok ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 text-sm", children: e.msg }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: e.t })
        ] }, i)) })
      ] })
    ] })
  ] });
}
function Step({
  ok,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 py-1.5 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-5 w-5 place-items-center rounded-full text-[10px] ${ok ? "bg-success text-background" : "bg-white/10 text-muted-foreground"}`, children: ok ? "✓" : "•" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: ok ? "" : "text-muted-foreground", children: label })
  ] });
}
function FaceSilhouette() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "absolute inset-0 m-auto h-3/4 w-3/4 opacity-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "100", cy: "90", rx: "55", ry: "70", fill: "none", stroke: "oklch(0.72 0.17 195)", strokeWidth: "1.5", strokeDasharray: "4 6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "80", r: "3", fill: "oklch(0.72 0.17 195)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "120", cy: "80", r: "3", fill: "oklch(0.72 0.17 195)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M80 120 Q100 135 120 120", fill: "none", stroke: "oklch(0.72 0.17 195)", strokeWidth: "1.5" })
  ] });
}
export {
  SecurityPage as component
};
