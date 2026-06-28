import { COMPANY } from "@/lib/constants";
import MadeBy from "@/components/MadeBy";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal">
      <div className="border-t border-white/10 py-12">
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
      </div>
      <MadeBy />
      {/* PNRR footer bar - obligatoriu conform MIV PNRR */}
      <div style={{ background: "#003DA5", padding: "10px 24px", textAlign: "center", borderRadius: "10px 10px 0 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ color: "#ffffff", fontSize: "0.82rem", fontWeight: 700, margin: "0 0 2px", fontFamily: "Arial, sans-serif", letterSpacing: "0.2px" }}>
            PNRR. Finanțat de Uniunea Europeană – UrmătoareaGenerațieUE
          </p>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.70rem", fontStyle: "italic", margin: "0 0 5px", fontFamily: "Arial, sans-serif", lineHeight: 1.4 }}>
            Conținutul acestui material nu reprezintă în mod obligatoriu poziția oficială a Uniunii Europene sau a Guvernului României.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <a href="https://mfe.gov.ro/pnrr/" target="_blank" rel="noopener noreferrer"
              style={{ color: "#FFD700", fontSize: "0.75rem", fontWeight: 600, textDecoration: "none", fontFamily: "Arial, sans-serif" }}>
              🌐 mfe.gov.ro/pnrr
            </a>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
            <a href="https://www.facebook.com/PNRROficial" target="_blank" rel="noopener noreferrer"
              style={{ color: "#FFD700", fontSize: "0.75rem", fontWeight: 600, textDecoration: "none", fontFamily: "Arial, sans-serif" }}>
              📘 facebook.com/PNRROficial
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
