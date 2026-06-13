import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { StatCard } from "@/components/StatCard";
import { occupancyData } from "@/lib/dummy-data";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LineChart, Line, CartesianGrid } from "recharts";
import { Download, Plus, Search } from "lucide-react";

export const Route = createFileRoute("/app/admin")({ component: AdminDashboard });

const students = [
  { id: "21CS101", name: "Aarav Kumar", room: "B-302", branch: "CSE", fee: "Paid", elec: "142u" },
  { id: "21EC044", name: "Sneha Reddy", room: "A-204", branch: "ECE", fee: "Paid", elec: "98u" },
  { id: "22ME011", name: "Mohit Sharma", room: "C-118", branch: "MECH", fee: "Due", elec: "118u" },
  { id: "21CH077", name: "Riya Patel", room: "A-110", branch: "CHEM", fee: "Paid", elec: "76u" },
  { id: "23CS019", name: "Vikram Nair", room: "B-405", branch: "CSE", fee: "Paid", elec: "165u" },
  { id: "22EE055", name: "Ananya Singh", room: "A-307", branch: "EEE", fee: "Due", elec: "121u" },
];

function AdminDashboard() {
  return (
    <>
      <PageHeader title="Administrator Console" subtitle="Campus-wide control · 12 hostels · 4,820 residents" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon="Building2" label="Total Hostels" value="12" change="2 new this year" />
        <StatCard icon="Users" label="Residents" value="4,820" change="+3.4%" />
        <StatCard icon="IndianRupee" label="Fees Collected" value="₹4.2 Cr" change="+18% YoY" />
        <StatCard icon="Zap" label="Power Saved" value="14,200 kWh" change="AI optimization" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Annual Occupancy Trend</h3>
            <button className="flex items-center gap-1.5 rounded-lg border border-glass-border px-3 py-1.5 text-xs hover:border-primary/40">
              <Download className="h-3.5 w-3.5" /> Export
            </button>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={occupancyData}>
                <CartesianGrid stroke="oklch(1 0 0 / 6%)" vertical={false} />
                <XAxis dataKey="month" stroke="oklch(0.7 0.04 250)" fontSize={12} />
                <YAxis stroke="oklch(0.7 0.04 250)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.22 0.05 265)", border: "1px solid oklch(1 0 0 / 12%)", borderRadius: 12 }} />
                <Bar dataKey="occupancy" fill="oklch(0.68 0.18 245)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="mb-4 text-lg font-semibold">Room Allocation</h3>
          <div className="space-y-3">
            {[
              { block: "Block A", filled: 184, total: 200, color: "oklch(0.72 0.17 155)" },
              { block: "Block B", filled: 176, total: 200, color: "oklch(0.78 0.16 230)" },
              { block: "Block C", filled: 52, total: 80, color: "oklch(0.80 0.17 80)" },
              { block: "Block D (New)", filled: 120, total: 160, color: "oklch(0.72 0.17 195)" },
            ].map((b) => (
              <div key={b.block}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-medium">{b.block}</span>
                  <span className="text-muted-foreground">{b.filled}/{b.total}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full" style={{ width: `${(b.filled / b.total) * 100}%`, background: b.color }} />
                </div>
              </div>
            ))}
          </div>
          <button className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-primary py-2 text-sm font-semibold text-primary-foreground shadow-glow">
            <Plus className="h-4 w-4" /> Allocate Room
          </button>
        </GlassCard>
      </div>

      <GlassCard className="mt-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">Student Management</h3>
          <div className="flex items-center gap-2">
            <div className="glass flex items-center gap-2 rounded-xl px-3 py-1.5">
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
              <input placeholder="Search students…" className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </div>
            <button className="rounded-xl bg-gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow">+ Add</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-glass-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-2">Roll No.</th><th>Name</th><th>Room</th><th>Branch</th><th>Fee</th><th>Electricity</th><th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id} className="border-b border-glass-border last:border-0 hover:bg-white/5">
                  <td className="py-3 font-mono text-xs">{s.id}</td>
                  <td className="font-medium">{s.name}</td>
                  <td>{s.room}</td>
                  <td className="text-muted-foreground">{s.branch}</td>
                  <td><span className={`rounded-full px-2.5 py-1 text-xs ${s.fee === "Paid" ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`}>{s.fee}</span></td>
                  <td>{s.elec}</td>
                  <td><button className="text-xs text-primary-glow hover:underline">View →</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          { title: "Fee Reports", value: "₹4.2 Cr", sub: "98.2% collection rate" },
          { title: "Electricity Reports", value: "₹6.8 L", sub: "Nov billing cycle" },
          { title: "Mess Reports", value: "92%", sub: "Avg. satisfaction" },
        ].map((r) => (
          <GlassCard key={r.title}>
            <div className="text-sm text-muted-foreground">{r.title}</div>
            <div className="mt-2 text-3xl font-bold">{r.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{r.sub}</div>
            <button className="mt-4 flex items-center gap-1.5 rounded-lg border border-glass-border px-3 py-1.5 text-xs hover:border-primary/40">
              <Download className="h-3.5 w-3.5" /> Download CSV
            </button>
          </GlassCard>
        ))}
      </div>
    </>
  );
}
