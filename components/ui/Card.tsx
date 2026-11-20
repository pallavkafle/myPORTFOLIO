import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 ${className ?? ""}`}
      {...props}
    />
  );
}