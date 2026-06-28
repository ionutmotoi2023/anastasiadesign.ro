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
        @media (max-width: 768px) {
          .pnrr-top { gap: 16px; padding: 8px 16px; }
          .pnrr-logo-item img { height: 38px !important; max-width: 160px !important; }
          .pnrr-divider { height: 34px; }
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
