import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0f0d] px-5 text-center">
      <h1 className="font-serif text-[8rem] leading-none text-text md:text-[12rem]">
        404<span className="text-emerald-400">.</span>
      </h1>
      <p className="mt-4 font-mono text-sm uppercase tracking-widest text-emerald-400">
        Page not found
      </p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-white/50">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-text px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95"
      >
        Go back home
      </Link>
    </div>
  );
}