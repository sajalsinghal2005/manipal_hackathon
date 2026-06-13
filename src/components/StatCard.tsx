import { GlassCard } from "./GlassCard";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function StatCard({ icon, label, value, change, trend = "up" }: {
  icon: keyof typeof Icons; label: string; value: string; change?: string; trend?: "up" | "down";
}) {
  const Icon = (Icons[icon] as LucideIcon) ?? Icons.Activity;
  return (
    <GlassCard className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
      </div>
      <div className="text-3xl font-bold tracking-tight">{value}</div>
      {change && (
        <div className={`text-xs font-medium ${trend === "up" ? "text-success" : "text-destructive"}`}>
          {trend === "up" ? "▲" : "▼"} {change} vs last month
        </div>
      )}
    </GlassCard>
  );
}
