import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { complaints, complaintCategories } from "@/lib/dummy-data";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Sparkles, Filter, Plus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/app/complaints")({ component: ComplaintsPage });

const priorityColor: Record<string, string> = {
  High: "bg-destructive/15 text-destructive border-destructive/30",
  Medium: "bg-warning/15 text-warning border-warning/30",
  Low: "bg-info/15 text-info border-info/30",
};
const statusColor: Record<string, string> = {
  "Open": "bg-muted text-muted-foreground",
  "Assigned": "bg-info/15 text-info",
  "In Progress": "bg-warning/15 text-warning",
  "Resolved": "bg-success/15 text-success",
};

function ComplaintsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? complaints : complaints.filter(c => c.status === filter);

  return (
    <>
      <PageHeader title="Complaint Management" subtitle="AI-categorized · priority-ranked · SLA tracked" />

      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard>
          <h3 className="text-sm text-muted-foreground">Total Active</h3>
          <div className="mt-1 text-4xl font-bold">{complaints.filter(c => c.status !== "Resolved").length}</div>
          <div className="mt-3 text-xs text-success">▼ 18% vs last week</div>
        </GlassCard>
        <GlassCard>
          <h3 className="text-sm text-muted-foreground">Avg. Resolution Time</h3>
          <div className="mt-1 text-4xl font-bold">4.2h</div>
          <div className="mt-3 text-xs text-success">▼ 32% with AI routing</div>
        </GlassCard>
        <GlassCard>
          <h3 className="text-sm text-muted-foreground">SLA Compliance</h3>
          <div className="mt-1 text-4xl font-bold">98.4%</div>
          <div className="mt-3 text-xs text-success">▲ 4.1% this month</div>
        </GlassCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">Complaints Feed</h3>
            <div className="flex items-center gap-2">
              <div className="flex rounded-xl border border-glass-border bg-glass p-1">
                {["All", "Open", "In Progress", "Resolved"].map((s) => (
                  <button key={s} onClick={() => setFilter(s)}
                    className={`rounded-lg px-3 py-1 text-xs font-medium transition ${filter === s ? "bg-gradient-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                    {s}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-1.5 rounded-xl bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow">
                <Plus className="h-3.5 w-3.5" /> New
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {filtered.map((c) => (
              <div key={c.id} className="glass rounded-xl p-4 transition hover:border-primary/40">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-muted-foreground">{c.id}</span>
                      <span className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${priorityColor[c.priority]}`}>{c.priority}</span>
                    </div>
                    <div className="mt-1 font-semibold">{c.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{c.student} · {c.room} · {c.date}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="glass flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs">
                      <Sparkles className="h-3 w-3 text-accent" />
                      <span className="font-mono">{c.aiScore}</span>
                      <span className="text-muted-foreground">urgency</span>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor[c.status]}`}>{c.status}</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-glass-border pt-3">
                  <span className="rounded-md bg-white/5 px-2 py-1 text-xs">📂 {c.category}</span>
                  <button className="text-xs font-medium text-primary-glow hover:underline">View thread →</button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard>
            <h3 className="text-lg font-semibold">AI Categorization</h3>
            <p className="text-xs text-muted-foreground">Auto-detected this week</p>
            <div className="mt-3 h-52">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={complaintCategories} dataKey="value" innerRadius={45} outerRadius={75} paddingAngle={3}>
                    {complaintCategories.map((e) => <Cell key={e.name} fill={e.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "oklch(0.22 0.05 265)", border: "1px solid oklch(1 0 0 / 12%)", borderRadius: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1.5">
              {complaintCategories.map((c) => (
                <div key={c.name} className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: c.color }} /> {c.name}</span>
                  <span className="font-mono">{c.value}%</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-semibold">AI Suggestion</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">Electrical complaints up 28%</span> in Block B this week — likely related to recent AC servicing. Recommend preventive inspection in B-300 series.
            </p>
            <button className="mt-3 rounded-lg bg-gradient-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow">Create work order</button>
          </GlassCard>
        </div>
      </div>
    </>
  );
}
