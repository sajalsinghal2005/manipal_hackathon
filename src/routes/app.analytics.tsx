import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { occupancyData, complaintCategories, heatmap } from "@/lib/dummy-data";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area } from "recharts";
import { Sparkles, TrendingUp, AlertTriangle, Activity } from "lucide-react";

export const Route = createFileRoute("/app/analytics")({ component: AnalyticsPage });

const predict = occupancyData.map((d, i) => ({ ...d, predicted: Math.min(100, d.occupancy + (i > 8 ? 4 : 2) + Math.random() * 3) }));
const radar = [
  { metric: "Cleanliness", A: 88, B: 76 },
  { metric: "Mess", A: 82, B: 70 },
  { metric: "Wi-Fi", A: 74, B: 88 },
  { metric: "Security", A: 92, B: 84 },
  { metric: "Maintenance", A: 78, B: 82 },
  { metric: "Staff", A: 86, B: 80 },
];

function AnalyticsPage() {
  return (
    <>
      <PageHeader title="AI Analytics" subtitle="Predictive intelligence across every hostel metric" />

      <div className="grid gap-4 md:grid-cols-4">
        <Insight icon={TrendingUp} label="Predicted occupancy (Jan)" value="92%" tone="success" />
        <Insight icon={AlertTriangle} label="Crowd alert (mess @ 8 PM)" value="High" tone="destructive" />
        <Insight icon={Activity} label="Anomaly detections" value="7" tone="warning" />
        <Insight icon={Sparkles} label="AI models running" value="14" tone="info" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <h3 className="mb-1 text-lg font-semibold">Occupancy Forecast</h3>
          <p className="mb-4 text-xs text-muted-foreground">Actual vs AI predicted (12-mo LSTM)</p>
          <div className="h-72">
            <ResponsiveContainer>
              <LineChart data={predict}>
                <CartesianGrid stroke="oklch(1 0 0 / 6%)" vertical={false} />
                <XAxis dataKey="month" stroke="oklch(0.7 0.04 250)" fontSize={12} />
                <YAxis stroke="oklch(0.7 0.04 250)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.22 0.05 265)", border: "1px solid oklch(1 0 0 / 12%)", borderRadius: 12 }} />
                <Line type="monotone" dataKey="occupancy" stroke="oklch(0.68 0.18 245)" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="predicted" stroke="oklch(0.72 0.17 195)" strokeWidth={2} strokeDasharray="6 4" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="mb-1 text-lg font-semibold">Block A vs Block B</h3>
          <p className="mb-4 text-xs text-muted-foreground">Resident satisfaction radar</p>
          <div className="h-72">
            <ResponsiveContainer>
              <RadarChart data={radar}>
                <PolarGrid stroke="oklch(1 0 0 / 10%)" />
                <PolarAngleAxis dataKey="metric" tick={{ fill: "oklch(0.7 0.04 250)", fontSize: 11 }} />
                <PolarRadiusAxis stroke="oklch(1 0 0 / 10%)" tick={false} />
                <Radar name="A" dataKey="A" stroke="oklch(0.68 0.18 245)" fill="oklch(0.68 0.18 245)" fillOpacity={0.4} />
                <Radar name="B" dataKey="B" stroke="oklch(0.72 0.17 195)" fill="oklch(0.72 0.17 195)" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Campus Heatmap</h3>
              <p className="text-xs text-muted-foreground">Crowd density across 24h × 7 days</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              Low <div className="h-3 w-24 rounded-full" style={{ background: "linear-gradient(90deg, oklch(0.30 0.05 250), oklch(0.68 0.18 245), oklch(0.72 0.17 30))" }} /> High
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="grid" style={{ gridTemplateColumns: `60px repeat(24, minmax(18px, 1fr))` }}>
                <div />
                {Array.from({ length: 24 }).map((_, h) => (
                  <div key={h} className="text-center text-[9px] text-muted-foreground">{h}</div>
                ))}
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].flatMap((day, r) => [
                  <div key={`label-${day}`} className="pr-2 text-right text-xs text-muted-foreground">{day}</div>,
                  ...heatmap[r].map((cell) => (
                    <div
                      key={`${r}-${cell.h}`}
                      className="m-px aspect-square rounded-sm transition hover:scale-125"
                      style={{
                        background: `oklch(${0.30 + cell.v * 0.45} ${0.06 + cell.v * 0.16} ${250 - cell.v * 220})`,
                        opacity: 0.4 + cell.v * 0.6,
                      }}
                      title={`${day} ${cell.h}:00 · ${Math.round(cell.v * 100)}%`}
                    />
                  )),
                ])}
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="mb-1 text-lg font-semibold">Complaint Trends</h3>
          <p className="mb-4 text-xs text-muted-foreground">Top 5 categories — last 30 days</p>
          <div className="space-y-3">
            {complaintCategories.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-xs">
                  <span>{c.name}</span><span className="font-mono">{c.value}%</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full" style={{ width: `${c.value * 2.5}%`, background: c.color }} />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard className="mt-6 border-accent/40 bg-accent/5">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">AI Insight of the Day</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Friday-evening mess footfall is forecast to rise <span className="font-semibold text-foreground">38% above baseline</span>. Recommend opening counter 4 and pre-cooking 240 extra meals to maintain &lt; 6 min wait time.
            </p>
          </div>
        </div>
      </GlassCard>
    </>
  );
}

function Insight({ icon: Icon, label, value, tone }: any) {
  const tones: any = {
    success: "text-success", warning: "text-warning", destructive: "text-destructive", info: "text-info",
  };
  return (
    <GlassCard className="p-5">
      <div className="flex items-center gap-3">
        <div className={`grid h-10 w-10 place-items-center rounded-xl bg-white/5 ${tones[tone]}`}><Icon className="h-5 w-5" /></div>
        <div className="min-w-0">
          <div className="truncate text-xs text-muted-foreground">{label}</div>
          <div className="text-xl font-bold">{value}</div>
        </div>
      </div>
    </GlassCard>
  );
}
