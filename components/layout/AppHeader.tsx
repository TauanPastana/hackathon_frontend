"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, getUser, type Usuario } from "@/lib/api";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/cronograma", label: "Cronograma" },
  { href: "/#desafios", label: "Desafios" },
];

export default function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    setUsuario(getUser());
    setCarregando(false);
  }, [pathname]);

  useEffect(() => {
    setMenuAberto(false);
  }, [pathname]);

  useEffect(() => {
    const atualizarSessao = () => {
      setUsuario(getUser());
    };

    window.addEventListener("storage", atualizarSessao);

    return () => {
      window.removeEventListener("storage", atualizarSessao);
    };
  }, []);

  const ehOrganizador =
    usuario?.papel === "ORGANIZADOR" ||
    usuario?.papel === "COMITE_CIENTIFICO" ||
    usuario?.papel === "COMITE_TECNICO" ||
    usuario?.papel === "DEV";

  const sair = () => {
    auth.logout();
    setUsuario(null);
    setMenuAberto(false);
    router.push("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-amazon-bg/90 backdrop-blur-md border-b border-amazon-sand">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 rounded-xl bg-amazon-primary flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
            IA
          </div>

          <span className="text-amazon-primary font-bold tracking-widest text-sm uppercase">
            Hackathon Amazônia
          </span>
        </Link>

        {/* Navegação principal — desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8 text-sm font-medium"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors ${
                  isActive
                    ? "text-amazon-primary font-semibold"
                    : "text-amazon-textMuted hover:text-amazon-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Ações e botão do menu mobile */}
        <div className="flex items-center gap-3">
          {/* Ações — desktop */}
          <div className="hidden md:flex items-center gap-3">
            {carregando ? (
              <div className="w-32 h-9 rounded-lg bg-amazon-muted animate-pulse" />
            ) : usuario ? (
              <>
                <Link
                  href={ehOrganizador ? "/admin" : "/inscricao"}
                  className="inline-flex items-center rounded-lg bg-amazon-primary px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-amazon-primaryHover"
                >
                  {ehOrganizador ? "Painel" : "Minha Equipe"}
                </Link>

                <button
                  type="button"
                  onClick={sair}
                  className="inline-flex items-center rounded-lg border border-amazon-sand bg-amazon-surface px-4 py-2 text-xs font-semibold text-amazon-textMuted transition-colors hover:border-amazon-danger/40 hover:text-amazon-danger"
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-semibold text-amazon-textMuted hover:text-amazon-primary transition-colors"
                >
                  Entrar
                </Link>

                <Link
                  href="/login?aba=cadastro"
                  className="bg-amazon-primary text-white px-5 py-2 rounded-lg font-bold text-xs hover:bg-amazon-primaryHover transition-colors"
                >
                  Criar conta
                </Link>
              </>
            )}
          </div>

          {/* Botão do menu mobile */}
          <button
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-amazon-sand bg-amazon-surface text-amazon-textMuted hover:text-amazon-primary hover:bg-amazon-muted transition-colors"
          >
            {menuAberto ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div
          id="menu-mobile"
          className="md:hidden border-t border-amazon-sand bg-amazon-bg/95 backdrop-blur-xl"
        >
          <nav
            aria-label="Navegação mobile"
            className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuAberto(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-amazon-primary/10 text-amazon-primary"
                      : "text-amazon-textMuted hover:bg-amazon-muted hover:text-amazon-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-3 pt-3 border-t border-amazon-sand flex flex-col gap-2">
              {carregando ? null : usuario ? (
                <>
                  <Link
                    href={ehOrganizador ? "/admin" : "/inscricao"}
                    onClick={() => setMenuAberto(false)}
                    className="rounded-lg bg-amazon-primary px-4 py-3 text-sm font-bold text-white hover:bg-amazon-primaryHover transition-colors"
                  >
                    {ehOrganizador ? "Painel" : "Minha Equipe"}
                  </Link>

                  <button
                    type="button"
                    onClick={sair}
                    className="rounded-lg border border-amazon-sand bg-amazon-surface px-4 py-3 text-sm font-semibold text-amazon-textMuted hover:border-amazon-danger/40 hover:text-amazon-danger transition-colors"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMenuAberto(false)}
                    className="rounded-lg border border-amazon-sand bg-amazon-surface px-4 py-3 text-sm font-semibold text-amazon-textMuted hover:bg-amazon-muted hover:text-amazon-primary transition-colors"
                  >
                    Entrar
                  </Link>

                  <Link
                    href="/login?aba=cadastro"
                    onClick={() => setMenuAberto(false)}
                    className="rounded-lg bg-amazon-primary px-4 py-3 text-sm font-bold text-white hover:bg-amazon-primaryHover transition-colors"
                  >
                    Criar conta
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}