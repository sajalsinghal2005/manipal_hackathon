import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export function GlassCard({ className, children, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cn("glass rounded-2xl p-6 shadow-elegant transition-all hover:border-primary/40", className)}
      {...props}
    >
      {children}
    </div>
  );
}
