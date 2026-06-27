// PNRR Banner - Obligatoriu conform Manual de Identitate Vizuala PNRR
// Logos: extrase din documentul oficial MFE - Manual_Identitate_Vizuala_PNRR.pdf

import Image from "next/image";

export default function PnrrBanner() {
  return (
    <div
      id="pnrr-banner"
      style={{ background: "#ffffff", borderBottom: "3px solid #003DA5", position: "relative", zIndex: 1100 }}
    >
      {/* Top: cele 3 sigle oficiale */}
      <div className="pnrr-top">
        {/* 1. Logo UE + NextGenerationEU - SIGLA ORIGINALA OFICIALA */}
        <div className="pnrr-logo-item">
          <Image
            src="/logo-eu-nextgenerationeu.jpeg"
            alt="Finanțat de Uniunea Europeană NextGenerationEU"
            width={260}
            height={58}
            style={{ height: "58px", width: "auto", objectFit: "contain" }}
            priority
          />
        </div>

        <div className="pnrr-divider" />

        {/* 2. Sigla Guvernului Romaniei - SIGLA ORIGINALA OFICIALA */}
        <div className="pnrr-logo-item">
          <Image
            src="/logo-guvernul-romaniei.jpeg"
            alt="Guvernul României"
            width={58}
            height={58}
            style={{ height: "58px", width: "58px", objectFit: "contain" }}
            priority
          />
        </div>

        <div className="pnrr-divider" />

        {/* 3. Logo PNRR - SIGLA ORIGINALA OFICIALA */}
        <div className="pnrr-logo-item">
          <Image
            src="/logo-pnrr.jpeg"
            alt="Planul Național de Redresare și Reziliență - PNRR"
            width={220}
            height={58}
            style={{ height: "58px", width: "auto", objectFit: "contain" }}
            priority
          />
        </div>
      </div>

      {/* Bottom: texte obligatorii + linkuri */}
      <div className="pnrr-bottom">
        <div className="pnrr-bottom-inner">
          <p className="pnrr-slogan">
            PNRR. Finanțat de Uniunea Europeană – UrmătoareaGenerațieUE
          </p>
          <p className="pnrr-disclaimer">
            Conținutul acestui material nu reprezintă în mod obligatoriu poziția
            oficială a Uniunii Europene sau a Guvernului României.
          </p>
          <div className="pnrr-links">
            <a
              href="https://mfe.gov.ro/pnrr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 mfe.gov.ro/pnrr
            </a>
            <span className="pnrr-sep">|</span>
            <a
              href="https://www.facebook.com/PNRROficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              📘 facebook.com/PNRROficial
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .pnrr-top {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          flex-wrap: wrap;
          padding: 10px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .pnrr-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .pnrr-divider {
          width: 1px;
          height: 46px;
          background: #cccccc;
          flex-shrink: 0;
        }
        .pnrr-bottom {
          background: #003DA5;
          padding: 7px 24px;
          text-align: center;
        }
        .pnrr-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .pnrr-slogan {
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          margin: 0 0 2px;
          font-family: Arial, sans-serif;
          letter-spacing: 0.2px;
        }
        .pnrr-disclaimer {
          color: rgba(255,255,255,0.78);
          font-size: 0.70rem;
          font-style: italic;
          margin: 0 0 5px;
          font-family: Arial, sans-serif;
          line-height: 1.4;
        }
        .pnrr-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .pnrr-links a {
          color: #FFD700;
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          font-family: Arial, sans-serif;
          transition: opacity 0.2s;
        }
        .pnrr-links a:hover { opacity: 0.8; text-decoration: underline; }
        .pnrr-sep { color: rgba(255,255,255,0.3); font-size: 0.75rem; }
        @media (max-width: 768px) {
          .pnrr-top { gap: 16px; padding: 8px 16px; }
          .pnrr-logo-item img { height: 38px !important; max-width: 160px !important; }
          .pnrr-divider { height: 34px; }
          .pnrr-slogan { font-size: 0.72rem; }
          .pnrr-disclaimer { font-size: 0.65rem; }
          .pnrr-links a { font-size: 0.68rem; }
        }
        @media (max-width: 480px) {
          .pnrr-divider { display: none; }
          .pnrr-top { gap: 12px; }
          .pnrr-logo-item img { height: 30px !important; max-width: 110px !important; }
        }
      `}</style>
    </div>
  );
}
