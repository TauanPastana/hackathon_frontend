"use client";

import Link from "next/link";

export default function CronogramaPage() {
  return (
    <div className="min-h-screen bg-amazon-bg text-amazon-text font-sans selection:bg-amazon-accent/30 flex flex-col">
      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 md:py-16 w-full">
        {/* Cabeçalho da página */}
        <div className="mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amazon-primary bg-amazon-surface px-3 py-1.5 rounded-full border border-amazon-sand">
            Etapas do Processo
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-amazon-primary mt-4 mb-4 tracking-tight">
            Cronograma do Hackathon
          </h1>

          <p className="text-amazon-textMuted text-sm md:text-base max-w-2xl leading-relaxed">
            Acompanhe em detalhes cada etapa da maratona, do início das
            inscrições até o encerramento com a aceleração das ideias
            vencedoras.
          </p>
        </div>

        {/* Banner de status atual */}
        <div className="bg-amazon-primary/5 border border-amazon-primary/20 rounded-2xl p-5 md:p-6 mb-12 flex items-center justify-between gap-5 flex-wrap">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-1.5 w-3 h-3 shrink-0 rounded-full bg-amazon-primary"
            />

            <div>
              <p className="text-sm font-bold text-amazon-primary">
                Inscrições abertas — Etapa 1 ativa!
              </p>

              <p className="text-xs text-amazon-textMuted mt-1 leading-relaxed">
                Garanta a vaga do seu esquadrão antes do encerramento dos
                prazos.
              </p>
            </div>
          </div>

          <Link
            href="/inscricao"
            className="inline-flex items-center justify-center bg-amazon-primary text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-amazon-primaryHover transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amazon-primary"
          >
            Fazer Inscrição &rarr;
          </Link>
        </div>

        {/* Linha do tempo */}
        <div className="relative ml-4 pl-7 md:pl-10 space-y-8 border-l-2 border-amazon-sand">
          {/* Etapa 1: ativa */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-[45px] md:-left-[58px] top-6 w-8 h-8 rounded-full bg-amazon-primary text-white font-extrabold flex items-center justify-center text-sm border-4 border-amazon-bg"
            >
              ✓
            </div>

            <div className="bg-amazon-surface border border-amazon-primary/35 rounded-2xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                <h2 className="text-xl font-bold text-amazon-primary">
                  1. Inscrições de Esquadrões
                </h2>

                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amazon-primary text-white px-2.5 py-1 rounded-full">
                    Etapa Atual
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amazon-primary/10 text-amazon-primary border border-amazon-primary/20 px-2.5 py-1 rounded-full">
                    Em Andamento
                  </span>
                </div>
              </div>

              <p className="text-sm text-amazon-textMuted mb-6 leading-relaxed">
                Período oficial em que os interessados preenchem o
                formulário de participação do hackathon e convidam os
                integrantes para o esquadrão.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs border-t border-amazon-sand pt-4 items-center">
                <div>
                  <span className="text-amazon-textMuted block mb-1">
                    Início
                  </span>

                  <span className="text-amazon-text font-mono font-bold">
                    15/03/2027
                  </span>
                </div>

                <div>
                  <span className="text-amazon-textMuted block mb-1">
                    Término
                  </span>

                  <span className="text-amazon-text font-mono font-bold">
                    10/04/2027
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1 flex sm:justify-end">
                  <Link
                    href="/inscricao"
                    className="inline-flex items-center justify-center bg-amazon-bg hover:bg-amazon-primary hover:text-white text-amazon-primary px-4 py-2.5 rounded-lg font-bold text-xs transition-colors border border-amazon-primary/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amazon-primary"
                  >
                    Garantir Vaga
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Etapa 2 */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-[45px] md:-left-[58px] top-6 w-8 h-8 rounded-full bg-amazon-muted text-amazon-primary font-bold flex items-center justify-center text-sm border-4 border-amazon-bg"
            >
              2
            </div>

            <div className="bg-amazon-surface border border-amazon-sand rounded-2xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                <h2 className="text-lg font-bold text-amazon-primary">
                  2. Seleção e Capacitação
                </h2>

                <span className="text-[10px] font-bold uppercase tracking-wider bg-amazon-muted text-amazon-textMuted border border-amazon-sand px-2.5 py-1 rounded-full">
                  Em Breve
                </span>
              </div>

              <p className="text-sm text-amazon-textMuted mb-5 leading-relaxed">
                Análise técnica inicial dos formulários de submissão e
                oferta de workshops preparatórios sobre modelos de
                Inteligência Artificial para a região.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs border-t border-amazon-sand pt-4">
                <div>
                  <span className="text-amazon-textMuted block mb-1">
                    Início
                  </span>

                  <span className="text-amazon-text font-mono">
                    11/04/2027
                  </span>
                </div>

                <div>
                  <span className="text-amazon-textMuted block mb-1">
                    Término
                  </span>

                  <span className="text-amazon-text font-mono">
                    18/04/2027
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Etapa 3 */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-[45px] md:-left-[58px] top-6 w-8 h-8 rounded-full bg-amazon-muted text-amazon-primary font-bold flex items-center justify-center text-sm border-4 border-amazon-bg"
            >
              3
            </div>

            <div className="bg-amazon-surface border border-amazon-sand rounded-2xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                <h2 className="text-lg font-bold text-amazon-primary">
                  3. Mentoria e Desenvolvimento (Imersão 72h)
                </h2>

                <span className="text-[10px] font-bold uppercase tracking-wider bg-amazon-muted text-amazon-textMuted border border-amazon-sand px-2.5 py-1 rounded-full">
                  Em Breve
                </span>
              </div>

              <p className="text-sm text-amazon-textMuted mb-5 leading-relaxed">
                Maratona intensiva de codificação e prototipagem presencial
                com acompanhamento direto de mentores do setor de dados
                e meio ambiente.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs border-t border-amazon-sand pt-4">
                <div>
                  <span className="text-amazon-textMuted block mb-1">
                    Início
                  </span>

                  <span className="text-amazon-text font-mono">
                    23/04/2027
                  </span>
                </div>

                <div>
                  <span className="text-amazon-textMuted block mb-1">
                    Término
                  </span>

                  <span className="text-amazon-text font-mono">
                    25/04/2027
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Etapa 4 */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-[45px] md:-left-[58px] top-6 w-8 h-8 rounded-full bg-amazon-muted text-amazon-primary font-bold flex items-center justify-center text-sm border-4 border-amazon-bg"
            >
              4
            </div>

            <div className="bg-amazon-surface border border-amazon-sand rounded-2xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                <h2 className="text-lg font-bold text-amazon-primary">
                  4. Avaliação e Premiação
                </h2>

                <span className="text-[10px] font-bold uppercase tracking-wider bg-amazon-muted text-amazon-textMuted border border-amazon-sand px-2.5 py-1 rounded-full">
                  Em Breve
                </span>
              </div>

              <p className="text-sm text-amazon-textMuted mb-5 leading-relaxed">
                Apresentação dos pitches finais para a banca examinadora
                com anúncio dos premiados (R$ 150k no total).
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs border-t border-amazon-sand pt-4">
                <div>
                  <span className="text-amazon-textMuted block mb-1">
                    Data da Banca
                  </span>

                  <span className="text-amazon-text font-mono">
                    26/04/2027
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Etapa 5 */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-[45px] md:-left-[58px] top-6 w-8 h-8 rounded-full bg-amazon-muted text-amazon-primary font-bold flex items-center justify-center text-sm border-4 border-amazon-bg"
            >
              5
            </div>

            <div className="bg-amazon-surface border border-amazon-sand rounded-2xl p-5 md:p-6 shadow-sm">
              <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                <h2 className="text-lg font-bold text-amazon-primary">
                  5. Continuidade Pós-Hackathon
                </h2>

                <span className="text-[10px] font-bold uppercase tracking-wider bg-amazon-muted text-amazon-textMuted border border-amazon-sand px-2.5 py-1 rounded-full">
                  Em Breve
                </span>
              </div>

              <p className="text-sm text-amazon-textMuted mb-5 leading-relaxed">
                Programa de aceleração, incubação das soluções e conexão
                direta das equipes vencedoras com fundos de investimento
                socioambientais.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs border-t border-amazon-sand pt-4">
                <div>
                  <span className="text-amazon-textMuted block mb-1">
                    Previsão
                  </span>

                  <span className="text-amazon-text font-mono">
                    Maio / 2027
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé simplificado */}
      <footer className="w-full border-t border-amazon-sand bg-amazon-surface py-6 px-6 text-center text-xs text-amazon-textMuted">
        © 2027 Hackathon IA Amazônia — Todos os direitos reservados.
      </footer>
    </div>
  );
}