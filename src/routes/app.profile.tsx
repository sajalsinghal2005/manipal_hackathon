import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { StatCard } from "@/components/StatCard";
import { ShieldCheck, UserCircle2, CreditCard, Settings, Bell, Link2 } from "lucide-react";
import { userProfile } from "@/lib/dummy-data";

export const Route = createFileRoute("/app/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <>
      <PageHeader title="Profile" subtitle="Manage your account, access level, and smart preferences" />

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <GlassCard className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-primary text-primary-foreground text-2xl font-bold shadow-glow">{userProfile.initials}</div>
            <div>
              <h2 className="text-xl font-semibold">{userProfile.name}</h2>
              <p className="text-sm text-muted-foreground">{userProfile.role}</p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <Detail label="Email" value={userProfile.email} />
            <Detail label="Phone" value={userProfile.phone} />
            <Detail label="Room" value={userProfile.room} />
            <Detail label="Joined" value={userProfile.joined} />
            <Detail label="Campus" value={userProfile.hostel} />
          </div>
          <div className="grid gap-3">
            <button className="rounded-xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow">Edit profile</button>
            <button className="rounded-xl border border-glass-border px-4 py-3 text-sm hover:border-primary/40">Manage linked accounts</button>
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">Account overview</h3>
                <p className="text-xs text-muted-foreground">All your hostel access and status in one place.</p>
              </div>
              <ShieldCheck className="h-5 w-5 text-success" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <StatCard icon="UserCircle2" label="Profile completeness" value="100%" change="All systems green" />
              <StatCard icon="CreditCard" label="Gate access" value="Active" change="Valid through Jun 2027" />
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-semibold">Connected apps</h3>
            <div className="mt-4 space-y-3">
              {userProfile.integrations.map((item) => (
                <div key={item.name} className="glass flex items-center justify-between rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white/5 text-sm">{item.icon}</div>
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.status}</div>
                    </div>
                  </div>
                  <Link2 className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="border-accent/40 bg-accent/5">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Smart recommendations enabled</div>
                <p className="text-xs text-muted-foreground">HostelX will suggest fee savings, room swaps, and energy optimizations.</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
