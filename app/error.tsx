"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0f0d] px-5 text-center">
      <h2 className="font-serif text-6xl text-text md:text-8xl">
        Oops<span className="text-gold">.</span>
      </h2>
      <p className="mt-4 font-mono text-sm uppercase tracking-widest text-gold">
        Something went wrong
      </p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-white/50">
        An unexpected error occurred. You can try refreshing the page or going back home.
      </p>
      <button
        onClick={() => reset()}
        className="mt-10 rounded-full bg-text px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95"
      >
        Try again
      </button>
    </div>
  );
}