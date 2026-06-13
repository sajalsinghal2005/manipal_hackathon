import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { visitors } from "@/lib/dummy-data";
import { QRBlock } from "@/components/QRBlock";
import { UserPlus, Camera, Phone, Clock, LogIn, LogOut } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/visitors")({ component: VisitorPage });

function VisitorPage() {
  const [generated, setGenerated] = useState(false);
  return (
    <>
      <PageHeader title="Visitor Management" subtitle="QR-based registration · live entry log · ID verification" />

      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-1">
          <h3 className="mb-4 text-lg font-semibold flex items-center gap-2"><UserPlus className="h-5 w-5 text-primary-glow" /> Register Visitor</h3>
          <div className="space-y-3">
            <Field label="Full Name" placeholder="e.g. Rahul Mehta" />
            <Field label="Phone Number" placeholder="+91 …" />
            <Field label="Visiting Student" placeholder="Name or Roll No." />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Purpose" placeholder="Family visit" />
              <Field label="Expected Duration" placeholder="2 hours" />
            </div>
            <button className="glass flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm hover:border-primary/40">
              <Camera className="h-4 w-4" /> Capture ID Proof
            </button>
            <button onClick={() => setGenerated(true)} className="w-full rounded-xl bg-gradient-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
              Generate QR Pass
            </button>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold">QR Visitor Pass</h3>
          <p className="mb-4 text-xs text-muted-foreground">{generated ? "Valid for 2 hours · scan at gate" : "Fill the form to generate"}</p>
          <div className={`rounded-2xl p-2 transition-all ${generated ? "animate-pulse-glow" : "opacity-40 grayscale"}`}>
            <QRBlock size={180} seed={generated ? "vis-" + Date.now() : "preview"} />
          </div>
          {generated && (
            <div className="mt-4 text-center">
              <div className="font-mono text-sm">VIS-9822</div>
              <div className="text-xs text-muted-foreground">Issued at {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
            </div>
          )}
        </GlassCard>

        <GlassCard>
          <h3 className="mb-3 text-lg font-semibold">Today's Snapshot</h3>
          <div className="space-y-3">
            <Stat icon={LogIn} label="Check-ins" value="23" color="text-success" />
            <Stat icon={LogOut} label="Check-outs" value="21" color="text-info" />
            <Stat icon={Clock} label="Avg. duration" value="58 min" color="text-warning" />
            <Stat icon={Phone} label="Pending verifications" value="2" color="text-destructive" />
          </div>
        </GlassCard>
      </div>

      <GlassCard className="mt-6">
        <h3 className="mb-4 text-lg font-semibold">Entry Logs</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-glass-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-2">Pass ID</th><th>Visitor</th><th>Phone</th><th>Visiting</th><th>Purpose</th><th>Time</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((v) => (
                <tr key={v.id} className="border-b border-glass-border last:border-0 hover:bg-white/5">
                  <td className="py-3 font-mono text-xs">{v.id}</td>
                  <td className="font-medium">{v.name}</td>
                  <td className="text-muted-foreground">{v.phone}</td>
                  <td>{v.visiting}</td>
                  <td>{v.purpose}</td>
                  <td>{v.checkIn}</td>
                  <td><span className={`rounded-full px-2.5 py-1 text-xs ${v.status === "Inside" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}>{v.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-muted-foreground">{label}</label>
      <input placeholder={placeholder} className="glass w-full rounded-xl px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60" />
    </div>
  );
}
function Stat({ icon: Icon, label, value, color }: any) {
  return (
    <div className="glass flex items-center gap-3 rounded-xl p-3">
      <div className={`grid h-9 w-9 place-items-center rounded-lg bg-white/5 ${color}`}><Icon className="h-4 w-4" /></div>
      <div className="flex-1 text-sm">{label}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
}
