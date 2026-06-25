import { COMPANY } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-charcoal py-12">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg tracking-wider text-white">
              ANASTASIA
              <span className="text-gold"> DESIGN</span>
            </p>
            <p className="mt-1 text-xs tracking-[0.2em] text-white/40 uppercase">
              {COMPANY.tagline}
            </p>
          </div>

          <div className="text-center text-xs leading-relaxed text-white/40 md:text-right">
            <p>{COMPANY.name}</p>
            <p>CIF: {COMPANY.cif}</p>
            <p>Reg. Com.: {COMPANY.regCom}</p>
            <p className="mt-1 max-w-xs">{COMPANY.address}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            © {year} {COMPANY.shortName}. Toate drepturile rezervate.
          </p>
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-xs text-gold/70 transition-colors hover:text-gold"
          >
            {COMPANY.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
