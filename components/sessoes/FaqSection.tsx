"use client";

import { useId, useState } from "react";

const perguntas = [
  {
    pergunta: "Preciso saber programar?",
    resposta:
      "Não! A construção de um bom projeto exige times multidisciplinares: desenvolvedores de frontend e backend, designers de UX/UI e pessoas de negócios para apoiar os especialistas em dados. Diferentes habilidades ajudam a transformar uma ideia em uma solução.",
  },
  {
    pergunta: "Como devo formar minha equipe?",
    resposta:
      "As equipes devem ter 4 membros, incluindo pelo menos um Especialista em IA/Dados e um Líder Técnico. Busque pessoas com habilidades complementares para trabalhar na proposta, no desenvolvimento e na apresentação da solução.",
  },
  {
    pergunta: "Quais desafios podemos escolher?",
    resposta:
      "O projeto deve abordar um problema da Amazônia em uma das três trilhas: Bioeconomia e Conservação, Monitoramento Hidrográfico ou Saúde Ribeirinha Isolada.",
  },
  {
    pergunta: "Como funciona a imersão?",
    resposta:
      "A proposta é uma maratona presencial de 72 horas, dedicada ao desenvolvimento e à prototipagem das soluções. As equipes terão acompanhamento de mentores durante as atividades. Os detalhes da edição serão atualizados nesta página.",
  },
  {
    pergunta: "Como funciona a premiação?",
    resposta:
      "A premiação apresentada para a edição é de R$ 150 mil: R$ 80 mil para o primeiro lugar, R$ 50 mil para o segundo e R$ 20 mil para o terceiro, além de mentorias exclusivas com investidores. Consulte as informações atualizadas e o regulamento antes de participar.",
  },
];

export default function FaqSection() {
  const id = useId();

  const [itensAbertos, setItensAbertos] = useState<boolean[]>(() =>
    perguntas.map(() => true)
  );

  const alternarItem = (indice: number) => {
    setItensAbertos((itensAtuais) =>
      itensAtuais.map((aberto, itemIndice) =>
        itemIndice === indice ? !aberto : aberto
      )
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby={`${id}-titulo`}
      className="relative isolate overflow-hidden border-t border-amazon-sand bg-amazon-bg py-16 sm:py-20 lg:py-24"
    >
      {/* Padrão decorativo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1B4332 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 lg:grid-cols-3 lg:gap-16">
        {/* Coluna de apresentação */}
        <div className="lg:col-span-1">
          <div className="mb-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 shrink-0 bg-amazon-primary/50"
            />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-amazon-primary">
              Perguntas frequentes
            </span>
          </div>

          <h2
            id={`${id}-titulo`}
            className="max-w-sm font-serif text-4xl font-normal leading-[1.15] tracking-tight text-amazon-primary sm:text-5xl lg:text-[2.75rem]"
          >
            Antes de começar,
            <br />
            vamos conversar.
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-7 text-amazon-textMuted sm:text-base">
            Reunimos as principais dúvidas para você conhecer a proposta,
            preparar sua equipe e dar os primeiros passos no hackathon.
          </p>

          {/* Aviso */}
          <div className="mt-8 flex max-w-md items-start gap-3 rounded-2xl border border-amazon-sand bg-amazon-muted p-5">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 h-5 w-5 shrink-0 text-amazon-primary"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5" />
              <path d="M12 8h.01" />
            </svg>

            <p className="text-xs leading-6 text-amazon-textMuted sm:text-sm">
              Informações da edição serão atualizadas nesta página.
              Confira também o regulamento antes de concluir sua inscrição.
            </p>
          </div>
        </div>

        {/* Lista de perguntas */}
        <div className="min-w-0 lg:col-span-2">
          {perguntas.map((item, indice) => {
            const aberto = itensAbertos[indice];
            const botaoId = `${id}-pergunta-${indice}`;
            const respostaId = `${id}-resposta-${indice}`;

            return (
              <div
                key={item.pergunta}
                className="border-t border-amazon-primary/15 last:border-b"
              >
                <h3>
                  <button
                    id={botaoId}
                    type="button"
                    aria-expanded={aberto}
                    aria-controls={respostaId}
                    onClick={() => alternarItem(indice)}
                    className="group flex w-full items-start justify-between gap-5 rounded-lg py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amazon-primary sm:py-7"
                  >
                    <span className="text-base font-semibold leading-7 text-amazon-primary sm:text-lg">
                      {item.pergunta}
                    </span>

                    {/* Mais/menos */}
                    <span
                      aria-hidden="true"
                      className="relative mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-amazon-primary"
                    >
                      <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />

                      <span
                        className={`absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                          aberto ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={respostaId}
                  role="region"
                  aria-labelledby={botaoId}
                  aria-hidden={!aberto}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
                    aberto
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-prose pb-7 pr-2 text-sm leading-7 text-amazon-textMuted sm:pr-10 sm:text-base">
                      {item.resposta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}