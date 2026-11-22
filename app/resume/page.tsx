import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0f0d]">
      <header className="flex items-center justify-between border-b border-white/10 p-4 md:p-6">
        <Link href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <a href="/resume.pdf" download className="flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-emerald-300">
          <Download size={16} /> Download PDF
        </a>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <object data="/resume.pdf" type="application/pdf" className="h-full w-full rounded-xl border border-white/10 bg-white/5">
          <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            <p className="mb-4 text-white/60">Your browser does not support PDF embedding.</p>
            <a href="/resume.pdf" className="text-emerald-400 underline">Click here to download the PDF</a>
          </div>
        </object>
      </main>
    </div>
  );
}