import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { StatCard } from "@/components/StatCard";
import { QRBlock } from "@/components/QRBlock";
import { electricityUsage, notifications, leaveRequests } from "@/lib/dummy-data";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, AreaChart, Area } from "recharts";
import * as Icons from "lucide-react";
import { BedDouble, Wallet, Zap, Plane, MessageSquarePlus, Download } from "lucide-react";

export const Route = createFileRoute("/app/student")({
  component: StudentDashboard,
});

function StudentDashboard() {
  return (
    <>
      <PageHeader
        title="Welcome back, Aarav 👋"
        subtitle="Room B-302 · Bhaskara Hostel · Block B"
        actions={
          <button className="hidden rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow md:inline-flex">
            New Request
          </button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon="BedDouble" label="Room" value="B-302" change="2-bed shared" trend="up" />
        <StatCard icon="Wallet" label="Fee Status" value="₹0 due" change="Paid 12 Nov" trend="up" />
        <StatCard icon="Zap" label="Electricity (Nov)" value="142 units" change="12% lower" trend="up" />
        <StatCard icon="MessageSquareWarning" label="Open Tickets" value="2" change="1 in progress" trend="down" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Weekly Electricity Usage</h3>
              <p className="text-xs text-muted-foreground">Real-time per-room metering</p>
            </div>
            <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success">Within limit</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={electricityUsage}>
                <defs>
                  <linearGradient id="elec" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.16 230)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="oklch(0.78 0.16 230)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="oklch(0.7 0.04 250)" fontSize={12} />
                <YAxis stroke="oklch(0.7 0.04 250)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.22 0.05 265)", border: "1px solid oklch(1 0 0 / 12%)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="units" stroke="oklch(0.78 0.16 230)" strokeWidth={2} fill="url(#elec)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold">Digital Gate Pass</h3>
          <p className="mb-4 text-xs text-muted-foreground">Valid till 18 Dec 2026, 10:00 PM</p>
          <div className="animate-pulse-glow rounded-2xl p-2">
            <QRBlock size={170} seed="aarav-b302-1218" />
          </div>
          <div className="mt-4 w-full space-y-1 text-left text-xs">
            <Row label="Pass ID" value="GP-AK-99182" />
            <Row label="Issued" value="14 Dec, 09:12 AM" />
            <Row label="Status" value={<span className="text-success">Approved</span>} />
          </div>
          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary py-2 text-sm font-semibold text-primary-foreground shadow-glow">
            <Download className="h-4 w-4" /> Download
          </button>
        </GlassCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Leave Requests</h3>
            <button className="flex items-center gap-1.5 rounded-lg border border-glass-border px-3 py-1.5 text-xs hover:border-primary/40">
              <Plane className="h-3.5 w-3.5" /> New Leave
            </button>
          </div>
          <div className="space-y-2">
            {leaveRequests.map((l) => (
              <div key={l.id} className="glass flex items-center justify-between rounded-xl p-3">
                <div className="min-w-0">
                  <div className="text-sm font-medium">{l.reason}</div>
                  <div className="text-xs text-muted-foreground">{l.from} → {l.to} · {l.id}</div>
                </div>
                <Badge status={l.status} />
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="mb-3 text-lg font-semibold">Notifications</h3>
          <div className="space-y-2">
            {notifications.map((n) => {
              const Ic = (Icons as any)[n.icon] ?? Icons.Bell;
              return (
                <div key={n.title} className="flex gap-3 rounded-xl p-2 hover:bg-white/5">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-primary/30">
                    <Ic className="h-4 w-4 text-primary-glow" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{n.title}</div>
                    <div className="truncate text-xs text-muted-foreground">{n.desc}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{n.time}</div>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Action icon={MessageSquarePlus} label="File a Complaint" desc="Plumbing, electrical, mess, Wi-Fi…" />
        <Action icon={Wallet} label="Pay Fees" desc="UPI · Card · Net Banking" />
        <Action icon={BedDouble} label="Request Room Change" desc="Roommate preferences supported" />
      </div>
    </>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between border-b border-glass-border py-1.5 last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Badge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Approved: "bg-success/15 text-success",
    Pending: "bg-warning/15 text-warning",
    Rejected: "bg-destructive/15 text-destructive",
  };
  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${map[status] ?? "bg-muted text-muted-foreground"}`}>{status}</span>;
}

function Action({ icon: Icon, label, desc }: { icon: any; label: string; desc: string }) {
  return (
    <button className="glass group flex items-center gap-4 rounded-2xl p-5 text-left transition-all hover:border-primary/40 hover:shadow-glow">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div>
        <div className="font-semibold">{label}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </button>
  );
}
