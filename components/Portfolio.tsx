const projects = [
  {
    title: "Apartament Premium",
    category: "Design Interior",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    title: "Vilă Modernă",
    category: "Design Exterior",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Living Contemporan",
    category: "Design Interior",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    title: "Terasă & Grădină",
    category: "Design Exterior",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    title: "Bucătărie Elegantă",
    category: "Design Interior",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    title: "Fațadă Arhitecturală",
    category: "Design Exterior",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  },
];

export default function Portfolio() {
  return (
    <section id="portofoliu" className="section-padding bg-cream-dark">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-gold uppercase">
            Portofoliu
          </p>
          <h2 className="font-serif text-3xl text-charcoal sm:text-4xl lg:text-5xl">
            Proiecte selectate
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-gold" />
          <p className="mt-6 text-charcoal/60">
            O selecție din proiectele noastre — fiecare spațiu, o operă de artă
            funcțională.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute right-0 bottom-0 left-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-xs tracking-[0.2em] text-gold uppercase">
                  {project.category}
                </p>
                <h3 className="mt-1 font-serif text-xl text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded-sm border border-charcoal/20 px-8 py-3 text-sm tracking-widest text-charcoal uppercase transition-all hover:border-gold hover:text-gold-dark"
          >
            Discută proiectul tău
          </a>
        </div>
      </div>
    </section>
  );
}
