import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./PageHeader-C1Pcpexm.mjs";
import { G as GlassCard } from "./GlassCard-BmtJLot-.mjs";
import { h as chatMessages } from "./dummy-data-BxK9Y167.mjs";
import { b as Sparkles, a0 as User, a1 as Bot, a2 as Send } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const suggestions = ["When are mess timings?", "How do I file a complaint?", "What's my electricity bill?", "Show leave application steps", "How does QR gate pass work?"];
const cannedReplies = {
  default: "I'd be happy to help with that. Could you provide a bit more detail so I can give you the most accurate answer?"
};
function AssistantPage() {
  const [msgs, setMsgs] = reactExports.useState(chatMessages);
  const [input, setInput] = reactExports.useState("");
  const [typing, setTyping] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    ref.current?.scrollTo({
      top: 999999,
      behavior: "smooth"
    });
  }, [msgs, typing]);
  function send(text) {
    if (!text.trim()) return;
    setMsgs((m) => [...m, {
      role: "user",
      text
    }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, {
        role: "ai",
        text: cannedReplies.default
      }]);
      setTyping(false);
    }, 900);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "AI Assistant", subtitle: "Your 24/7 hostel concierge — powered by HostelX-LLM" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[1fr_280px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "flex h-[640px] flex-col p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-glass-border p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "HostelX AI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-success animate-pulse" }),
              " Online · avg response < 1s"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "flex-1 space-y-4 overflow-y-auto p-4", children: [
          msgs.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-8 w-8 shrink-0 place-items-center rounded-lg ${m.role === "user" ? "bg-gradient-primary" : "bg-white/5"}`, children: m.role === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-primary-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary-glow" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "bg-gradient-primary text-primary-foreground" : "glass"}`, children: m.text })
          ] }, i)),
          typing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary-glow" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center gap-1 rounded-2xl px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow", style: {
                animationDelay: "0.2s"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary-glow", style: {
                animationDelay: "0.4s"
              } })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-glass-border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-center gap-2 rounded-2xl p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && send(input), placeholder: "Ask anything about your hostel…", className: "flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => send(input), className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 text-primary-foreground" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-sm font-semibold", children: "Quick prompts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: suggestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => send(s), className: "glass w-full rounded-xl px-3 py-2 text-left text-xs transition hover:border-primary/40", children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-2 text-sm font-semibold", children: "Smart Recommendations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "💡 Pay November fees before Dec 20 to avoid late charge." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "⚡ Your AC usage is 22% above peers — try eco mode." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "🍽 Mess attendance form is due tomorrow." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  AssistantPage as component
};
