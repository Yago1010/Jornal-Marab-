"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { NAV_EDITORIAS } from "@/lib/content";

const socialLinks = [
  { label: "WhatsApp", href: "#", position: "0% 50%" },
  { label: "Instagram", href: "#", position: "50% 50%" },
  { label: "Facebook", href: "#", position: "100% 50%" },
];

export function SiteHeader() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const currentDate = useMemo(
    () =>
      new Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date()),
    [],
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((current) => !current);
  };

  return (
    <header className="border-b border-zinc-300 bg-white shadow-sm">
      <div className="w-full border-b border-zinc-200 bg-yellow-100">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs">
          <span className="text-zinc-700">Marabá - PA | {currentDate}</span>
          <nav className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link href="#topo" className="hover:underline">
              Home
            </Link>
            <Link href="#quem-somos" className="hover:underline">
              Quem Somos
            </Link>
            <Link href="#fale-conosco" className="hover:underline">
              Fale Conosco
            </Link>
            <Link href="#politica-de-privacidade" className="hover:underline">
              Política de Privacidade
            </Link>
          </nav>
        </div>
      </div>

      <div className="w-full border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className="h-7 w-7 overflow-hidden rounded border border-zinc-300 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <span
                className="block h-full w-full"
                style={{
                  backgroundImage: "url('/api/assets/social')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "300% 100%",
                  backgroundPosition: item.position,
                }}
              />
            </a>
          ))}
          <a
            href="#"
            aria-label="E-mail"
            title="E-mail"
            className="rounded border border-zinc-300 bg-white p-0.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <Image src="/api/assets/email" alt="Ícone de e-mail" width={22} height={22} className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Libras"
            title="Libras"
            className="rounded border border-zinc-300 bg-white p-0.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <Image src="/api/assets/libras" alt="Ícone de Libras" width={22} height={22} className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex h-8 items-center gap-1 rounded border border-zinc-300 bg-white px-2 py-1 text-[11px] font-semibold text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            title={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            <Image src="/api/assets/darkmode" alt="Dark mode" width={18} height={18} className="h-4 w-4" />
            <span>{darkMode ? "☀" : "🌙"}</span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">

        <div className="flex flex-col items-center gap-3 py-5">
          <div className="flex items-center gap-2 sm:gap-3">
            <h1 className="text-4xl font-bold text-green-700 sm:text-5xl md:text-6xl">Jornal</h1>
            <Image src="/api/assets/logo" alt="Logo Jornal Marabá" width={108} height={60} className="h-12 w-auto md:h-14" />
            <h1 className="text-4xl font-bold text-green-700 sm:text-5xl md:text-6xl">Marabá</h1>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-y border-zinc-300 py-2 text-xs font-semibold sm:text-sm">
            {NAV_EDITORIAS.map((item) => (
              <span key={item} className="after:mx-2 after:content-['-'] last:after:content-['']">
                <Link href={item === "Colunistas" ? "#materias" : "#"}>{item}</Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
