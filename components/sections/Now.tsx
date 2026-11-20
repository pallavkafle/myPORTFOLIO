import { nowData } from "@/lib/data/now";

export default function Now() {
  return (
    <div className="relative w-full border-y border-white/5 bg-black/40 py-4 overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5 font-mono text-xs text-white/60 md:justify-start lg:px-8">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
          </span>
          <span className="font-semibold uppercase tracking-widest text-emerald-400">Now</span>
        </div>
        
        <span className="hidden text-white/20 sm:inline">|</span>
        
        <span className="flex items-center gap-1.5">
          Building <strong className="font-medium text-white">{nowData.building}</strong>
        </span>
        
        <span className="hidden text-white/20 md:inline">|</span>
        
        <span className="hidden items-center gap-1.5 md:flex">
          Learning <strong className="font-medium text-white">{nowData.learning}</strong>
        </span>
      </div>
    </div>
  );
}