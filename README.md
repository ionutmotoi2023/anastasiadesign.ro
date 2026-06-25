# ANASTASIA DESIGN — Website

Site de prezentare modern pentru **ANASTASIA DESIGN SRL** — design interior și exterior în construcții.

## Tehnologii

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Nodemailer (formular contact via SMTP)

## Dezvoltare locală

```bash
npm install
cp .env.example .env.local
# Editează .env.local cu datele SMTP
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Variabile de mediu (Railway)

| Variabilă | Descriere |
|---|---|
| `SMTP_HOST` | Server SMTP (ex: `smtp.gmail.com`) |
| `SMTP_PORT` | Port SMTP (de obicei `587`) |
| `SMTP_USER` | Utilizator SMTP |
| `SMTP_PASS` | Parolă SMTP |
| `SMTP_FROM` | Adresa expeditor (`office@anastasiadesign.ro`) |
| `CONTACT_EMAIL` | Destinatar mesaje (`office@anastasiadesign.ro`) |

## Deploy Railway

Push pe branch-ul `main` declanșează deploy automat.

```bash
npm run build
npm run start
```

## Structură

- `app/` — pagini și API routes
- `components/` — componente UI
- `lib/constants.ts` — date firmă
