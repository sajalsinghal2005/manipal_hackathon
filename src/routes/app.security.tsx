import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { QRBlock } from "@/components/QRBlock";
import { ScanFace, Siren, ShieldCheck, Activity, Lock, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/app/security")({ component: SecurityPage });

function SecurityPage() {
  const [scanning, setScanning] = useState(false);
  const [verified, setVerified] = useState(false);

  function startScan() {
    setScanning(true); setVerified(false);
    setTimeout(() => { setScanning(false); setVerified(true); }, 2400);
  }

  return (
    <>
      <PageHeader title="Security Center" subtitle="Face verification · QR authentication · Emergency SOS" />

      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <ScanFace className="h-5 w-5 text-primary-glow" />
            <h3 className="text-lg font-semibold">Face Verification</h3>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">AI biometric authentication — on-device, AES-256 encrypted.</p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-glass-border bg-black">
              {/* Camera mock */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,oklch(0.4_0.1_265/0.9),transparent_70%)]" />
              <FaceSilhouette />
              {/* scan line */}
              {scanning && (
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-[scan_2.4s_linear]" style={{
                  // @ts-ignore
                  animation: "scan 2.4s linear",
                }} />
              )}
              <div className="absolute left-3 top-3 rounded-md bg-black/50 px-2 py-0.5 font-mono text-[10px] text-success">● REC</div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-white/80">
                <span>CAM-01 · GATE A</span>
                <span>{verified ? "MATCH 99.7%" : scanning ? "ANALYZING…" : "IDLE"}</span>
              </div>
              {/* corner brackets */}
              {["top-0 left-0", "top-0 right-0 rotate-90", "bottom-0 right-0 rotate-180", "bottom-0 left-0 -rotate-90"].map((p, i) => (
                <div key={i} className={`absolute h-6 w-6 border-l-2 border-t-2 border-accent ${p}`} />
              ))}
            </div>

            <div className="flex flex-col justify-center">
              <Step ok={true} label="Camera initialized" />
              <Step ok={scanning || verified} label="Face detected" />
              <Step ok={verified} label="Liveness check passed" />
              <Step ok={verified} label="Identity matched · Aarav Kumar" />
              <Step ok={verified} label="Access granted · Gate A" />
              <button onClick={startScan} disabled={scanning} className="mt-5 rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60">
                {scanning ? "Scanning…" : verified ? "Re-scan" : "Start Verification"}
              </button>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="border-destructive/40 bg-destructive/5">
          <div className="flex items-center gap-2">
            <Siren className="h-5 w-5 text-destructive" />
            <h3 className="text-lg font-semibold">Emergency SOS</h3>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">One-tap alert to warden, guards, and emergency contacts.</p>
          <button className="mt-6 grid w-full aspect-square place-items-center rounded-full bg-destructive text-destructive-foreground shadow-[0_0_60px_-10px_oklch(0.65_0.22_25/0.8)] animate-pulse-glow">
            <div className="text-center">
              <Siren className="mx-auto h-12 w-12" />
              <div className="mt-2 text-xl font-bold">SOS</div>
              <div className="text-[10px] uppercase tracking-widest opacity-80">Press &amp; hold</div>
            </div>
          </button>
          <div className="mt-4 text-xs text-muted-foreground">
            Connected: Warden (Dr. Sharma) · Guard Post · Campus Medical · 1 trusted contact
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="mb-4 text-lg font-semibold flex items-center gap-2"><Lock className="h-5 w-5 text-primary-glow" /> QR Authentication</h3>
          <div className="flex justify-center"><QRBlock size={160} seed="auth-aarav" /></div>
          <p className="mt-3 text-center text-xs text-muted-foreground">Scan at any gate, mess counter, or lab entry</p>
        </GlassCard>

        <GlassCard className="lg:col-span-2">
          <h3 className="mb-3 text-lg font-semibold flex items-center gap-2"><Activity className="h-5 w-5 text-primary-glow" /> Security Event Log</h3>
          <div className="space-y-2">
            {[
              { t: "2 min ago", ok: true, msg: "Face verified · Aarav Kumar entered Gate A" },
              { t: "8 min ago", ok: true, msg: "Visitor VIS-9821 issued QR pass" },
              { t: "14 min ago", ok: false, msg: "Failed face match · retry triggered (Gate B)" },
              { t: "32 min ago", ok: true, msg: "Roll-call completed · 408/412 present" },
              { t: "1 hr ago", ok: true, msg: "Perimeter sensors armed" },
            ].map((e, i) => (
              <div key={i} className="glass flex items-center gap-3 rounded-xl p-3">
                <div className={`grid h-9 w-9 place-items-center rounded-lg ${e.ok ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`}>
                  {e.ok ? <ShieldCheck className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                </div>
                <div className="flex-1 text-sm">{e.msg}</div>
                <div className="text-xs text-muted-foreground">{e.t}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </>
  );
}

function Step({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2 py-1.5 text-sm">
      <div className={`grid h-5 w-5 place-items-center rounded-full text-[10px] ${ok ? "bg-success text-background" : "bg-white/10 text-muted-foreground"}`}>
        {ok ? "✓" : "•"}
      </div>
      <span className={ok ? "" : "text-muted-foreground"}>{label}</span>
    </div>
  );
}

function FaceSilhouette() {
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 m-auto h-3/4 w-3/4 opacity-50">
      <ellipse cx="100" cy="90" rx="55" ry="70" fill="none" stroke="oklch(0.72 0.17 195)" strokeWidth="1.5" strokeDasharray="4 6" />
      <circle cx="80" cy="80" r="3" fill="oklch(0.72 0.17 195)" />
      <circle cx="120" cy="80" r="3" fill="oklch(0.72 0.17 195)" />
      <path d="M80 120 Q100 135 120 120" fill="none" stroke="oklch(0.72 0.17 195)" strokeWidth="1.5" />
    </svg>
  );
}
