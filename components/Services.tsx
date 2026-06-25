const services = [
  {
    title: "Design Interior",
    description:
      "Amenajări interioare complete — de la concept și planificare spațială până la selecția materialelor, mobilierului și finisajelor premium.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Design Exterior",
    description:
      "Fațade, terase, grădini și spații exterioare — creăm identități vizuale coerente care completează arhitectura clădirii.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Consultanță Design",
    description:
      "Ghidare profesională pentru alegeri estetice și funcționale — palete de culori, materiale, iluminat și soluții personalizate.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Proiectare Completă",
    description:
      "Servicii integrate de la schițe conceptuale și randări 3D până la supravegherea implementării — un singur partener pentru tot proiectul.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicii" className="section-padding bg-charcoal">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-gold uppercase">
            Servicii
          </p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
            Ce oferim
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-gold" />
          <p className="mt-6 text-white/60">
            Soluții complete de design pentru spații interioare și exterioare,
            adaptate nevoilor și viziunii fiecărui client.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-sm border border-white/10 bg-charcoal-light p-8 transition-all duration-300 hover:border-gold/40 hover:bg-charcoal-light/80"
            >
              <div className="mb-6 text-gold transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
