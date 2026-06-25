"use client";

import { useState, FormEvent } from "react";
import { COMPANY } from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      _gotcha: formData.get("_gotcha") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(20_000),
      });

      let data: { error?: string; success?: boolean } = {};
      try {
        data = await res.json();
      } catch {
        throw new Error("Răspuns invalid de la server. Încercați din nou.");
      }

      if (!res.ok) {
        throw new Error(data.error || "A apărut o eroare. Încercați din nou.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      if (err instanceof DOMException && err.name === "TimeoutError") {
        setErrorMessage(
          "Cererea a durat prea mult. Încercați din nou sau scrieți-ne la office@anastasiadesign.ro"
        );
      } else {
        setErrorMessage(
          err instanceof Error ? err.message : "A apărut o eroare. Încercați din nou."
        );
      }
    }
  }

  return (
    <section id="contact" className="section-padding bg-charcoal">
      <div className="container-max">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm tracking-[0.3em] text-gold uppercase">
              Contact
            </p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
              Hai să discutăm
              <br />
              <span className="text-gold italic">despre proiectul tău</span>
            </h2>
            <div className="mt-4 h-1 w-16 bg-gold" />
            <p className="mt-8 leading-relaxed text-white/60">
              Completează formularul și te vom contacta în cel mai scurt timp
              pentru o consultație gratuită.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Adresă</p>
                  <p className="mt-1 text-sm text-white/60">{COMPANY.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-1 text-sm text-gold transition-colors hover:text-gold-light"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-gold">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Date firmă</p>
                  <p className="mt-1 text-sm text-white/60">CIF: {COMPANY.cif}</p>
                  <p className="text-sm text-white/60">Reg. Com.: {COMPANY.regCom}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-white/10 bg-charcoal-light p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                  <svg
                    className="h-8 w-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-white">Mulțumim!</h3>
                <p className="mt-3 max-w-sm text-white/60">
                  Mesajul tău a fost trimis cu succes. Te vom contacta în curând.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm tracking-wide text-gold transition-colors hover:text-gold-light"
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-white/70">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      minLength={2}
                      maxLength={100}
                      className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-gold focus:outline-none"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-gold focus:outline-none"
                      placeholder="email@exemplu.ro"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm text-white/70">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength={20}
                    className="w-full rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-gold focus:outline-none"
                    placeholder="07xx xxx xxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    minLength={10}
                    maxLength={2000}
                    className="w-full resize-none rounded-sm border border-white/10 bg-charcoal px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-gold focus:outline-none"
                    placeholder="Descrie-ne proiectul tău..."
                  />
                </div>

                {/* Honeypot anti-spam — must stay empty */}
                <div
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>

                {status === "error" && (
                  <div className="rounded-sm border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    <p>{errorMessage}</p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="mt-2 inline-block text-gold underline-offset-2 hover:underline"
                    >
                      Trimite email direct →
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-sm bg-gold px-8 py-4 text-sm font-medium tracking-widest text-charcoal uppercase transition-all hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? "Se trimite..." : "Trimite mesajul"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
