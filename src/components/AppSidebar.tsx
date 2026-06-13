import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard, MessageSquareWarning, ShieldCheck, Users2, BarChart3,
  Sparkles, Lock, Building2, Menu, X, GraduationCap, LogOut, UserCircle2, Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/app/student", label: "Student", icon: GraduationCap, role: "Student" },
  { to: "/app/complaints", label: "Complaints", icon: MessageSquareWarning, role: "All" },
  { to: "/app/warden", label: "Warden", icon: ShieldCheck, role: "Warden" },
  { to: "/app/admin", label: "Admin", icon: LayoutDashboard, role: "Admin" },
  { to: "/app/visitors", label: "Visitors", icon: Users2, role: "Guard" },
  { to: "/app/analytics", label: "AI Analytics", icon: BarChart3, role: "All" },
  { to: "/app/assistant", label: "AI Assistant", icon: Sparkles, role: "All" },
  { to: "/app/security", label: "Security", icon: Lock, role: "Security" },
  { to: "/app/profile", label: "Profile", icon: UserCircle2, role: "You" },
  { to: "/app/settings", label: "Settings", icon: Settings, role: "App" },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile topbar */}
      <div className="glass-strong sticky top-0 z-40 flex items-center justify-between px-4 py-3 lg:hidden">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
            <Building2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold">HostelX <span className="text-gradient">AI</span></span>
        </Link>
        <button onClick={() => setOpen(!open)} className="rounded-md p-2 hover:bg-white/5">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "glass-strong fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-glass-border transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="hidden items-center gap-2 px-6 py-6 lg:flex">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
            <Building2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <div className="font-display text-lg font-bold leading-none">HostelX <span className="text-gradient">AI</span></div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Smart Hostel OS</div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition-all",
                  active
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                <span className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
                <span className={cn(
                  "rounded-md px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider",
                  active ? "bg-black/20" : "bg-white/5 text-muted-foreground"
                )}>{item.role}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-glass-border p-4">
          <div className="glass flex items-center gap-3 rounded-xl p-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">SS</div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">Sajal Singhal</div>
              <div className="truncate text-xs text-muted-foreground">Room B-302 · CS '26</div>
            </div>
            <button className="rounded-md p-1.5 text-muted-foreground hover:bg-white/5 hover:text-foreground">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {open && <div className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={() => setOpen(false)} />}
    </>
  );
}
