import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function envVar(key: string): string | undefined {
  const value = process.env[key];
  if (!value) return undefined;
  return value.trim().replace(/^["']|["']$/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Prea multe cereri. Încercați din nou mai târziu." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message, _gotcha } = body;

    if (_gotcha) {
      console.warn("Contact form: honeypot triggered, skipping send");
      return NextResponse.json({ success: true });
    }

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Numele este obligatoriu (minim 2 caractere)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Adresa de email nu este validă." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Mesajul este obligatoriu (minim 10 caractere)." },
        { status: 400 }
      );
    }

    const smtpHost = envVar("SMTP_HOST");
    const smtpPort = parseInt(envVar("SMTP_PORT") || "587", 10);
    const smtpUser = envVar("SMTP_USER");
    const smtpPass = envVar("SMTP_PASS");
    const smtpFrom = envVar("SMTP_FROM") || "office@anastasiadesign.ro";
    const contactEmail = envVar("CONTACT_EMAIL") || "office@anastasiadesign.ro";

    const placeholderHosts = ["smtp.example.com", "example.com", "localhost"];
    if (
      !smtpHost ||
      !smtpUser ||
      !smtpPass ||
      placeholderHosts.includes(smtpHost.toLowerCase()) ||
      smtpUser === "your-smtp-username" ||
      smtpPass === "your-smtp-password"
    ) {
      console.error("SMTP configuration missing or using placeholder values");
      return NextResponse.json(
        { error: "Serviciul de email nu este configurat corect. Contactați-ne direct la office@anastasiadesign.ro" },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
      tls: {
        minVersion: "TLSv1.2",
        rejectUnauthorized: false,
      },
    });

    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim();
    const sanitizedPhone = phone ? String(phone).trim().slice(0, 20) : "Nespecificat";
    const sanitizedMessage = message.trim().slice(0, 2000);

    console.log(`Contact form: sending email to ${contactEmail} from ${sanitizedEmail}`);

    await transporter.sendMail({
      from: `"ANASTASIA DESIGN Website" <${smtpFrom}>`,
      to: contactEmail,
      replyTo: sanitizedEmail,
      subject: `[Contact Website] Mesaj nou de la ${sanitizedName}`,
      text: [
        `Nume: ${sanitizedName}`,
        `Email: ${sanitizedEmail}`,
        `Telefon: ${sanitizedPhone}`,
        "",
        "Mesaj:",
        sanitizedMessage,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #c9a96e; padding-bottom: 10px;">
            Mesaj nou de pe website
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;">Nume:</td>
              <td style="padding: 8px 0; color: #1a1a1a; font-weight: bold;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Telefon:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${sanitizedPhone}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 20px; background: #f8f6f2; border-left: 3px solid #c9a96e;">
            <p style="color: #666; margin: 0 0 10px;">Mesaj:</p>
            <p style="color: #1a1a1a; margin: 0; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
        </div>
      `,
    });

    console.log(`Contact form: email sent successfully to ${contactEmail}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as { code?: string; message?: string };
    console.error("Contact form error:", err?.code || err?.message || error);

    if (err?.code === "ECONNECTION" || err?.code === "ETIMEDOUT" || err?.code === "ESOCKET") {
      return NextResponse.json(
        {
          error:
            "Nu s-a putut conecta la serverul de email. Verificați setările SMTP sau scrieți-ne la office@anastasiadesign.ro",
        },
        { status: 503 }
      );
    }

    if (err?.code === "EAUTH") {
      return NextResponse.json(
        { error: "Autentificare email eșuată. Verificați utilizatorul și parola SMTP." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Nu am putut trimite mesajul. Încercați din nou sau scrieți-ne la office@anastasiadesign.ro" },
      { status: 500 }
    );
  }
}
