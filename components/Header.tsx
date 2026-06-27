"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-charcoal/95 shadow-lg backdrop-blur-md"
          : "bg-charcoal/95 backdrop-blur-md"
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex flex-col">
          <span className="font-serif text-lg font-semibold tracking-wider text-white sm:text-xl">
            ANASTASIA
          </span>
          <span className="text-[10px] tracking-[0.3em] text-gold uppercase sm:text-xs">
            Design
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-gold px-5 py-2.5 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-gold-light"
          >
            Contactează-ne
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-charcoal transition-all duration-300 md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-serif text-2xl text-white transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 rounded-sm bg-gold px-8 py-3 font-medium text-charcoal"
          >
            Contactează-ne
          </a>
        </nav>
      </div>
    </header>
  );
}
