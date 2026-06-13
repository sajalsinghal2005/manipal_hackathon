import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { useState, type ComponentType } from "react";
import { Settings, SunMedium, Bell, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/app/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  const [autoOptimize, setAutoOptimize] = useState(true);
  const [quietHours, setQuietHours] = useState(false);
  const [secureLogin, setSecureLogin] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);

  return (
    <>
      <PageHeader title="Settings" subtitle="Customize your HostelX AI experience" />

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <GlassCard>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
              <Settings className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Preferences</h2>
              <p className="text-sm text-muted-foreground">Fine-tune alerts, automation, and accessibility.</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <Toggle label="AI energy optimization" value={autoOptimize} onChange={() => setAutoOptimize((v) => !v)} icon={Zap} />
            <Toggle label="Secure login reminders" value={secureLogin} onChange={() => setSecureLogin((v) => !v)} icon={ShieldCheck} />
            <Toggle label="Quiet hour notifications" value={quietHours} onChange={() => setQuietHours((v) => !v)} icon={SunMedium} />
            <Toggle label="SMS emergency alerts" value={smsAlerts} onChange={() => setSmsAlerts((v) => !v)} icon={Bell} />
          </div>
        </GlassCard>

        <GlassCard className="space-y-6">
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-accent">Account security</div>
            <p className="mt-2 text-sm text-muted-foreground">Keep your hostel accounts and access secure with these options.</p>
          </div>
          <div className="space-y-4">
            <SettingRow label="Require biometric login" value="Enabled" />
            <SettingRow label="Auto-lock session" value="10 min" />
            <SettingRow label="Guest access" value="Disabled" />
          </div>
          <div className="rounded-3xl border border-glass-border bg-background/70 p-4 text-sm text-muted-foreground">
            <div className="font-semibold">Note</div>
            <p className="mt-2">Settings are saved locally and reflected instantly in your dashboard experience.</p>
          </div>
        </GlassCard>
      </div>
    </>
  );
}

function Toggle({ label, value, onChange, icon: Icon }: { label: string; value: boolean; onChange: () => void; icon: ComponentType<any>; }) {
  return (
    <button onClick={onChange} className="glass flex items-center justify-between gap-3 rounded-2xl p-4 text-left hover:border-primary/40">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 text-primary-glow">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="font-medium">{label}</div>
          <div className="text-xs text-muted-foreground">{value ? "On" : "Off"}</div>
        </div>
      </div>
      <span className={`inline-flex h-6 w-12 items-center rounded-full px-1 transition ${value ? "bg-gradient-primary" : "bg-white/10"}`}>
        <span className={`h-4 w-4 rounded-full bg-background transition-all ${value ? "translate-x-5" : "translate-x-0"}`} />
      </span>
    </button>
  );
}

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-glass-border px-4 py-3 text-sm">
      <span>{label}</span>
      <span className="text-muted-foreground">{value}</span>
    </div>
  );
}
