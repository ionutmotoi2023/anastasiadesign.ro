import { COMPANY } from "@/lib/constants";

export default function About() {
  return (
    <section id="despre" className="section-padding bg-cream">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80')",
                }}
              />
            </div>
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-sm border-2 border-gold/30 lg:-right-8 lg:-bottom-8" />
            <div className="absolute -top-4 -left-4 bg-charcoal px-6 py-4 lg:-top-6 lg:-left-6">
              <p className="font-serif text-3xl text-gold">10+</p>
              <p className="text-xs tracking-wider text-white/70 uppercase">
                Ani de experiență
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm tracking-[0.3em] text-gold uppercase">
              Despre noi
            </p>
            <h2 className="font-serif text-3xl leading-snug text-charcoal sm:text-4xl lg:text-5xl">
              Pasiune pentru design,
              <br />
              <span className="text-gold-dark italic">dedicație pentru detalii</span>
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold" />

            <p className="mt-8 leading-relaxed text-charcoal/70">
              <strong className="text-charcoal">{COMPANY.name}</strong> este o firmă
              specializată în design de interior și exterior în domeniul construcțiilor.
              Cu sediul în stațiunea Mamaia, Constanța, aducem o viziune artistică
              combinată cu funcționalitatea practică în fiecare proiect.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal/70">
              De la concept la execuție, echipa noastră creează spații care reflectă
              personalitatea clienților și depășesc așteptările. Fiecare proiect este
              o poveste unică, sculptată cu atenție la fiecare detaliu.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                { value: "150+", label: "Proiecte finalizate" },
                { value: "100%", label: "Satisfacție clienți" },
                { value: "360°", label: "Design complet" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-serif text-2xl text-gold-dark sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-charcoal/50 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
