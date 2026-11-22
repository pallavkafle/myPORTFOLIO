import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0a0f0d]/80 ${className ?? ""}`}
      {...props}
    />
  );
}