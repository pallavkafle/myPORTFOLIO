import { ReactNode } from "react";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({ label, title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-2xl ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px w-8 bg-accent" />
        <p className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent">
          {label}
        </p>
        <div className="h-px flex-1 bg-white/5" />
      </div>
      <h2 className="mb-4 text-4xl font-serif font-normal leading-[1.05] tracking-tight md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-sm text-white/50 md:text-base">{subtitle}</p>
      )}
    </div>
  );
}