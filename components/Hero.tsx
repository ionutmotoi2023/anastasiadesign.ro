import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />

      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 container-max px-4 py-32 text-center sm:px-6 lg:px-8">
        <p className="animate-fade-in mb-6 text-sm tracking-[0.4em] text-gold uppercase">
          {COMPANY.city} · Mamaia
        </p>

        <h1 className="animate-fade-in-up font-serif text-4xl leading-tight font-light text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Design care
          <br />
          <span className="text-gold-gradient font-medium italic">
            inspiră & transformă
          </span>
        </h1>

        <p className="animate-fade-in-up animation-delay-200 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {COMPANY.description}
        </p>

        <div className="animate-fade-in-up animation-delay-400 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-sm bg-gold px-8 py-4 text-sm font-medium tracking-widest text-charcoal uppercase transition-all hover:bg-gold-light sm:w-auto"
          >
            Solicită o consultație
          </a>
          <a
            href="#portofoliu"
            className="w-full rounded-sm border border-white/30 px-8 py-4 text-sm tracking-widest text-white uppercase transition-all hover:border-gold hover:text-gold sm:w-auto"
          >
            Vezi portofoliul
          </a>
        </div>

        <div className="animate-fade-in animation-delay-600 mt-20 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gold/50" />
          <span className="text-xs tracking-[0.3em] text-white/50 uppercase">
            Interior · Exterior
          </span>
          <div className="h-px w-12 bg-gold/50" />
        </div>
      </div>

      <a
        href="#despre"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce"
        aria-label="Scroll la secțiunea Despre"
      >
        <svg
          className="h-6 w-6 text-gold/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
}
