import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { StatCard } from "@/components/StatCard";
import { complaints, leaveRequests, visitors } from "@/lib/dummy-data";
import { AlertTriangle, CheckCircle2, XCircle, Siren } from "lucide-react";

export const Route = createFileRoute("/app/warden")({ component: WardenDashboard });

function WardenDashboard() {
  return (
    <>
      <PageHeader title="Warden Control Center" subtitle="Bhaskara Hostel · 412 residents · 6 staff on duty" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon="BedDouble" label="Occupancy" value="412 / 480" change="86% full" />
        <StatCard icon="MessageSquareWarning" label="Open Complaints" value="14" change="3 high priority" trend="down" />
        <StatCard icon="Plane" label="Pending Leaves" value="7" change="2 medical" />
        <StatCard icon="Users2" label="Visitors Today" value="23" change="2 inside now" />
      </div>

      <GlassCard className="mt-6 border-destructive/40 bg-destructive/5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-destructive/20 animate-pulse-glow">
              <Siren className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <div className="font-semibold">Emergency SOS active — Block C, Floor 3</div>
              <div className="text-xs text-muted-foreground">Triggered by Mohit Sharma (C-118) · 38 seconds ago</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="rounded-xl bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground">Dispatch</button>
            <button className="glass rounded-xl px-4 py-2 text-sm">Call student</button>
          </div>
        </div>
      </GlassCard>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <h3 className="mb-4 text-lg font-semibold">Pending Complaints</h3>
          <div className="space-y-2">
            {complaints.filter(c => c.status !== "Resolved").slice(0, 5).map((c) => (
              <div key={c.id} className="glass flex items-start justify-between gap-3 rounded-xl p-3">
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium">{c.title}</div>
                  <div className="text-xs text-muted-foreground">{c.room} · {c.student}</div>
                </div>
                <div className="flex gap-1.5">
                  <button className="grid h-8 w-8 place-items-center rounded-lg bg-success/15 text-success hover:bg-success/25"><CheckCircle2 className="h-4 w-4" /></button>
                  <button className="grid h-8 w-8 place-items-center rounded-lg bg-warning/15 text-warning hover:bg-warning/25"><AlertTriangle className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="mb-4 text-lg font-semibold">Leave Approvals</h3>
          <div className="space-y-2">
            {leaveRequests.map((l) => (
              <div key={l.id} className="glass flex items-center justify-between gap-3 rounded-xl p-3">
                <div className="min-w-0">
                  <div className="text-sm font-medium">{l.student} <span className="text-xs text-muted-foreground">· {l.room}</span></div>
                  <div className="text-xs text-muted-foreground">{l.reason} · {l.from}–{l.to}</div>
                </div>
                {l.status === "Pending" ? (
                  <div className="flex gap-1.5">
                    <button className="grid h-8 w-8 place-items-center rounded-lg bg-success/20 text-success"><CheckCircle2 className="h-4 w-4" /></button>
                    <button className="grid h-8 w-8 place-items-center rounded-lg bg-destructive/20 text-destructive"><XCircle className="h-4 w-4" /></button>
                  </div>
                ) : <span className="rounded-full bg-success/15 px-2.5 py-1 text-xs text-success">Approved</span>}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2">
          <h3 className="mb-4 text-lg font-semibold">Live Visitor Entries</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-glass-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="py-2">Visitor</th><th>Visiting</th><th>Purpose</th><th>Check-in</th><th>Status</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((v) => (
                  <tr key={v.id} className="border-b border-glass-border last:border-0 hover:bg-white/5">
                    <td className="py-3"><div className="font-medium">{v.name}</div><div className="text-xs text-muted-foreground">{v.id}</div></td>
                    <td>{v.visiting}</td>
                    <td>{v.purpose}</td>
                    <td>{v.checkIn}</td>
                    <td>
                      <span className={`rounded-full px-2.5 py-1 text-xs ${v.status === "Inside" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"}`}>{v.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </>
  );
}
