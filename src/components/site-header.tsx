"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { NAV_EDITORIAS } from "@/lib/content";

const socialLinks = [
  { label: "WhatsApp", href: "#", src: "/api/assets/whatsapp" },
  { label: "Instagram", href: "#", src: "/api/assets/instagram" },
  { label: "Facebook", href: "#", src: "/api/assets/facebook" },
];

const cambria = { fontFamily: "Cambria, Georgia, serif" };

export function SiteHeader() {
  const [editoriasOpen, setEditoriasOpen] = useState(false);
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

  const closeEditorias = () => {
    setEditoriasOpen(false);
  };

  return (
    <header className="border-b border-zinc-300 bg-white shadow-sm">
      <div className="w-full border-b border-zinc-200 bg-yellow-100">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs">
          <span className="text-zinc-700">Marabá - PA | {currentDate}</span>
          <nav
            className="flex flex-wrap items-center gap-2 sm:gap-3"
            style={cambria}
          >
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
              className="grid h-7 w-7 place-items-center overflow-hidden rounded border border-zinc-300 bg-white p-0.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={22}
                height={22}
                className="h-5 w-5 object-contain"
              />
            </a>
          ))}
          <a
            href="#"
            aria-label="E-mail"
            title="E-mail"
            className="rounded border border-zinc-300 bg-white p-0.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <Image
              src="/api/assets/email"
              alt="Ícone de e-mail"
              width={22}
              height={22}
              className="h-5 w-5"
            />
          </a>
          <a
            href="#"
            aria-label="Libras"
            title="Libras"
            className="rounded border border-zinc-300 bg-white p-0.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            <Image
              src="/api/assets/libras"
              alt="Ícone de Libras"
              width={22}
              height={22}
              className="h-5 w-5"
            />
          </a>
          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex h-8 items-center gap-1 rounded border border-zinc-300 bg-white px-2 py-1 text-[11px] font-semibold text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
            title={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            <Image
              src="/api/assets/darkmode"
              alt="Dark mode"
              width={18}
              height={18}
              className="h-4 w-4"
            />
            <span>{darkMode ? "☀" : "☾"}</span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-0 py-3">
          {/* Logo - Desktop and Mobile */}
          <div className="flex w-full items-center justify-between gap-3 md:justify-center md:gap-0">
            <button
              type="button"
              aria-expanded={editoriasOpen}
              aria-controls="editorias-menu"
              onClick={() => setEditoriasOpen((current) => !current)}
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border border-zinc-300 bg-white text-zinc-900 shadow-sm md:hidden"
              title="Abrir menu"
            >
              <span className="sr-only">Abrir menu</span>
              <span className="flex flex-col gap-1">
                <span className="block h-0.5 w-4 bg-current" />
                <span className="block h-0.5 w-4 bg-current" />
                <span className="block h-0.5 w-4 bg-current" />
              </span>
            </button>
            <Image
              src="/api/assets/logo"
              alt="Jornal Marabá"
              width={520}
              height={120}
              priority
              className="h-auto w-full max-w-[280px] object-contain sm:max-w-[520px]"
            />
          </div>

          {/* Menu de Editorias */}
          <div className="w-full border-t border-zinc-300 pt-2" style={cambria}>
            <nav
              id="editorias-menu"
              className={`${
                editoriasOpen ? "flex" : "hidden"
              } flex-col items-center gap-1.5 text-xs font-semibold md:flex md:flex-row md:flex-wrap md:justify-center md:gap-x-3.5 md:gap-y-1 md:text-sm md:pb-2`}
            >
              {NAV_EDITORIAS.map((item) => (
                <Link
                  key={item}
                  href={item === "Colunistas" ? "#materias" : "#"}
                  onClick={closeEditorias}
                  className="transition hover:text-amber-600"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
