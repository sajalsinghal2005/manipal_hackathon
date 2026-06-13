import { Bell, Search } from "lucide-react";
import type { ReactNode } from "react";

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="animate-fade-up">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        <div className="glass hidden items-center gap-2 rounded-xl px-3 py-2 md:flex">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search…" className="w-48 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </div>
        <button className="glass relative grid h-10 w-10 place-items-center rounded-xl hover:border-primary/40">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
        </button>
        {actions}
      </div>
    </div>
  );
}
