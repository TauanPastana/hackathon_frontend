"use client";

import { useState, useEffect } from "react";

export default function AccessibilityBar() {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  useEffect(() => {
    if (largeText) {
      document.documentElement.classList.add("large-text");
    } else {
      document.documentElement.classList.remove("large-text");
    }
  }, [largeText]);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 font-sans"
      aria-label="Painel de Acessibilidade"
    >
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Abrir opções de acessibilidade"
        className="w-12 h-12 rounded-full bg-amazon-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-amazon-primary/25 hover:bg-amazon-primaryHover transition-colors border-2 border-white/20"
      >
        ♿
      </button>

      {/* Popover */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-amazon-surface border border-amazon-sand p-4 rounded-2xl shadow-xl w-72 text-amazon-text space-y-3">
          <div className="flex justify-between items-center border-b border-amazon-sand pb-2">
            <h3 className="font-bold text-sm text-amazon-primary">
              Acessibilidade
            </h3>

            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-amazon-textMuted hover:text-amazon-primary transition-colors"
              aria-label="Fechar painel de acessibilidade"
            >
              ✕
            </button>
          </div>

          {/* Alto contraste */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            aria-pressed={highContrast}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold flex justify-between items-center border transition-colors ${
              highContrast
                ? "bg-amazon-earth text-white border-amazon-earth"
                : "bg-amazon-bg text-amazon-textMuted border-amazon-sand hover:border-amazon-primary/40 hover:text-amazon-primary"
            }`}
          >
            <span>Alto contraste</span>
            <span>{highContrast ? "ON" : "OFF"}</span>
          </button>

          {/* Fonte ampliada */}
          <button
            onClick={() => setLargeText(!largeText)}
            aria-pressed={largeText}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold flex justify-between items-center border transition-colors ${
              largeText
                ? "bg-amazon-primary text-white border-amazon-primary"
                : "bg-amazon-bg text-amazon-textMuted border-amazon-sand hover:border-amazon-primary/40 hover:text-amazon-primary"
            }`}
          >
            <span>Tamanho do texto (+20%)</span>
            <span>{largeText ? "ON" : "OFF"}</span>
          </button>
        </div>
      )}
    </div>
  );
}