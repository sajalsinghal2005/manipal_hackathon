import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GlassCard } from "@/components/GlassCard";
import { chatMessages } from "@/lib/dummy-data";
import { Sparkles, Send, Bot, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/app/assistant")({ component: AssistantPage });

const suggestions = [
  "When are mess timings?",
  "How do I file a complaint?",
  "What's my electricity bill?",
  "Show leave application steps",
  "How does QR gate pass work?",
];

const cannedReplies: Record<string, string> = {
  default: "I'd be happy to help with that. Could you provide a bit more detail so I can give you the most accurate answer?",
};

function AssistantPage() {
  const [msgs, setMsgs] = useState(chatMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => { ref.current?.scrollTo({ top: 999999, behavior: "smooth" }); }, [msgs, typing]);

  function send(text: string) {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "ai", text: cannedReplies.default }]);
      setTyping(false);
    }, 900);
  }

  return (
    <>
      <PageHeader title="AI Assistant" subtitle="Your 24/7 hostel concierge — powered by HostelX-LLM" />

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <GlassCard className="flex h-[640px] flex-col p-0">
          <div className="flex items-center gap-3 border-b border-glass-border p-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">HostelX AI</div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" /> Online · avg response &lt; 1s
              </div>
            </div>
          </div>

          <div ref={ref} className="flex-1 space-y-4 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${m.role === "user" ? "bg-gradient-primary" : "bg-white/5"}`}>
                  {m.role === "user" ? <User className="h-4 w-4 text-primary-foreground" /> : <Bot className="h-4 w-4 text-primary-glow" />}
                </div>
                <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "bg-gradient-primary text-primary-foreground" : "glass"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5"><Bot className="h-4 w-4 text-primary-glow" /></div>
                <div className="glass flex items-center gap-1 rounded-2xl px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow" style={{ animationDelay: "0.2s" }} />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-glass-border p-4">
            <div className="glass flex items-center gap-2 rounded-2xl p-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask anything about your hostel…"
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button onClick={() => send(input)} className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Send className="h-4 w-4 text-primary-foreground" />
              </button>
            </div>
          </div>
        </GlassCard>

        <div className="space-y-4">
          <GlassCard>
            <h3 className="mb-3 text-sm font-semibold">Quick prompts</h3>
            <div className="space-y-2">
              {suggestions.map((s) => (
                <button key={s} onClick={() => send(s)} className="glass w-full rounded-xl px-3 py-2 text-left text-xs transition hover:border-primary/40">
                  {s}
                </button>
              ))}
            </div>
          </GlassCard>
          <GlassCard>
            <h3 className="mb-2 text-sm font-semibold">Smart Recommendations</h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>💡 Pay November fees before Dec 20 to avoid late charge.</li>
              <li>⚡ Your AC usage is 22% above peers — try eco mode.</li>
              <li>🍽 Mess attendance form is due tomorrow.</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </>
  );
}
