const COLORS = {
  charcoal: "#1a1a1a",
  charcoalLight: "#2d2d2d",
  gold: "#c9a96e",
  goldDark: "#a88b4a",
  cream: "#f8f6f2",
  creamDark: "#ede9e1",
  white: "#ffffff",
  muted: "#6b6b6b",
} as const;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function buildContactEmailHtml(data: ContactEmailData): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const message = escapeHtml(data.message);

  return `<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mesaj nou — ANASTASIA DESIGN</title>
</head>
<body style="margin:0;padding:0;background-color:${COLORS.creamDark};font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.creamDark};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:${COLORS.white};border-radius:2px;overflow:hidden;box-shadow:0 4px 24px rgba(26,26,26,0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color:${COLORS.charcoal};padding:36px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-family:Georgia,'Times New Roman',serif;font-size:11px;letter-spacing:0.35em;color:${COLORS.gold};text-transform:uppercase;">
                Formular Contact
              </p>
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:400;color:${COLORS.white};letter-spacing:0.08em;">
                ANASTASIA <span style="color:${COLORS.gold};font-style:italic;">DESIGN</span>
              </h1>
              <p style="margin:10px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.2em;color:rgba(255,255,255,0.45);text-transform:uppercase;">
                Design Interior &amp; Exterior
              </p>
              <table role="presentation" width="48" cellpadding="0" cellspacing="0" align="center" style="margin:20px auto 0;">
                <tr><td style="height:2px;background-color:${COLORS.gold};"></td></tr>
              </table>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:32px 40px 8px;background-color:${COLORS.cream};">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:${COLORS.charcoal};">
                Ai primit un <strong style="color:${COLORS.goldDark};">mesaj nou</strong> de pe website-ul anastasiadesign.ro.
              </p>
            </td>
          </tr>

          <!-- Contact details -->
          <tr>
            <td style="padding:16px 40px 32px;background-color:${COLORS.cream};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.white};border:1px solid ${COLORS.creamDark};border-radius:2px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid ${COLORS.creamDark};">
                          <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.15em;color:${COLORS.muted};text-transform:uppercase;">Nume</p>
                          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:17px;color:${COLORS.charcoal};">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid ${COLORS.creamDark};">
                          <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.15em;color:${COLORS.muted};text-transform:uppercase;">Email</p>
                          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;">
                            <a href="mailto:${email}" style="color:${COLORS.goldDark};text-decoration:none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;">
                          <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.15em;color:${COLORS.muted};text-transform:uppercase;">Telefon</p>
                          <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:${COLORS.charcoal};">${phone}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:0 40px 36px;background-color:${COLORS.cream};">
              <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:10px;letter-spacing:0.15em;color:${COLORS.muted};text-transform:uppercase;">Mesaj</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:24px 28px;background-color:${COLORS.white};border-left:3px solid ${COLORS.gold};border-radius:0 2px 2px 0;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.7;color:${COLORS.charcoal};white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 40px 36px;background-color:${COLORS.cream};text-align:center;">
              <a href="mailto:${email}?subject=Re: Cerere ANASTASIA DESIGN"
                 style="display:inline-block;padding:14px 32px;background-color:${COLORS.gold};color:${COLORS.charcoal};font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;letter-spacing:0.12em;text-decoration:none;text-transform:uppercase;border-radius:2px;">
                Răspunde clientului
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:${COLORS.charcoal};padding:28px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:14px;color:${COLORS.white};letter-spacing:0.06em;">
                ANASTASIA <span style="color:${COLORS.gold};">DESIGN</span>
              </p>
              <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:rgba(255,255,255,0.35);">
                ANASTASIA DESIGN SRL &middot; Constanța, Mamaia
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;">
                <a href="mailto:office@anastasiadesign.ro" style="color:${COLORS.gold};text-decoration:none;opacity:0.8;">office@anastasiadesign.ro</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactEmailText(data: ContactEmailData): string {
  return [
    "═══════════════════════════════════════",
    "  ANASTASIA DESIGN — Mesaj nou website",
    "═══════════════════════════════════════",
    "",
    `Nume:    ${data.name}`,
    `Email:   ${data.email}`,
    `Telefon: ${data.phone}`,
    "",
    "── Mesaj ──────────────────────────────",
    data.message,
    "",
    "───────────────────────────────────────",
    "ANASTASIA DESIGN SRL",
    "office@anastasiadesign.ro",
  ].join("\n");
}
