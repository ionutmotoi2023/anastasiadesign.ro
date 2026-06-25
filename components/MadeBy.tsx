import Image from "next/image";

export default function MadeBy() {
  return (
    <div className="border-t border-white/5 bg-charcoal">
      <div className="container-max px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <span className="text-[10px] tracking-[0.25em] text-white/25 uppercase">
            Website realizat de
          </span>

          <a
            href="https://mindloop.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-sm border border-white/5 bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
          >
            <Image
              src="/mindloop-logo.png"
              alt="AI Mindloop SRL"
              width={36}
              height={36}
              className="rounded-sm object-contain"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide">
                <span className="text-cyan-400">AI</span>
                <span className="text-white/80"> MINDLOOP </span>
                <span className="text-cyan-400">SRL</span>
              </span>
              <span className="text-[10px] text-white/30 transition-colors group-hover:text-white/50">
                Viitorul afacerii tale se interconectează cu AI
              </span>
            </div>
          </a>

          <div className="hidden h-8 w-px bg-white/10 sm:block" />

          <div className="flex items-center gap-4 text-[11px] text-white/35">
            <a
              href="tel:+40726327192"
              className="flex items-center gap-1.5 transition-colors hover:text-cyan-400/80"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0726 327 192
            </a>
            <a
              href="mailto:office@mindloop.ro"
              className="flex items-center gap-1.5 transition-colors hover:text-cyan-400/80"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              office@mindloop.ro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
