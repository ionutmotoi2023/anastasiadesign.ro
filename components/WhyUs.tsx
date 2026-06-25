const reasons = [
  {
    title: "Viziune Artistică",
    description:
      "Fiecare proiect este tratat ca o operă de artă — combinăm estetica cu funcționalitatea pentru rezultate memorabile.",
    number: "01",
  },
  {
    title: "Atenție la Detalii",
    description:
      "De la alegerea materialelor până la finisajele finale, fiecare element este gândit cu precizie și grijă.",
    number: "02",
  },
  {
    title: "Experiență Locală",
    description:
      "Cunoaștem piața din Constanța și Mamaia — adaptăm designul la contextul local și la nevoile clienților noștri.",
    number: "03",
  },
  {
    title: "Parteneriat de Încredere",
    description:
      "Lucrăm transparent, respectăm termenele și bugetele stabilite, și suntem alături de tine la fiecare pas.",
    number: "04",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm tracking-[0.3em] text-gold uppercase">
              De ce noi
            </p>
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl lg:text-5xl">
              Diferența
              <br />
              <span className="text-gold-dark italic">ANASTASIA DESIGN</span>
            </h2>
            <div className="mt-4 h-1 w-16 bg-gold" />
            <p className="mt-8 leading-relaxed text-charcoal/70">
              Nu creăm doar spații frumoase — creăm experiențe. Cu o abordare
              personalizată și o pasiune autentică pentru design, transformăm
              viziunea ta în realitate.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="group rounded-sm border border-charcoal/10 bg-white p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
              >
                <span className="font-serif text-3xl text-gold/30 transition-colors group-hover:text-gold/60">
                  {reason.number}
                </span>
                <h3 className="mt-3 font-serif text-lg text-charcoal">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
