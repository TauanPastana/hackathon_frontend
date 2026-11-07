type Sponsor = {
  id: string;
  nome: string;
  logo?: string;
};

type SponsorCategory = {
  id: string;
  rotulo: string;
  descricao: string;
  destaque: "principal" | "secundario" | "padrao" | "compacto";
  patrocinadores: Sponsor[];
};

const categorias: SponsorCategory[] = [
  {
    id: "apresentacao",
    rotulo: "Apresentado por",
    descricao: "Patrocinador de apresentação",
    destaque: "principal",
    patrocinadores: [
      {
        id: "apresentacao-1",
        nome: "Patrocinador de apresentação a confirmar",
      },
    ],
  },
  {
    id: "talentos",
    rotulo: "Parceiro de talentos",
    descricao: "Parceiro de talentos",
    destaque: "secundario",
    patrocinadores: [
      {
        id: "talentos-1",
        nome: "Parceiro de talentos a confirmar",
      },
    ],
  },
  {
    id: "patrocinio",
    rotulo: "Patrocínio",
    descricao: "Patrocinadores",
    destaque: "padrao",
    patrocinadores: [
      { id: "patrocinio-1", nome: "Patrocinador 1 a confirmar" },
      { id: "patrocinio-2", nome: "Patrocinador 2 a confirmar" },
      { id: "patrocinio-3", nome: "Patrocinador 3 a confirmar" },
    ],
  },
  {
    id: "apoio",
    rotulo: "Com apoio de",
    descricao: "Apoiadores",
    destaque: "compacto",
    patrocinadores: [
      { id: "apoio-1", nome: "Apoiador 1 a confirmar" },
      { id: "apoio-2", nome: "Apoiador 2 a confirmar" },
      { id: "apoio-3", nome: "Apoiador 3 a confirmar" },
      { id: "apoio-4", nome: "Apoiador 4 a confirmar" },
      { id: "apoio-5", nome: "Apoiador 5 a confirmar" },
    ],
  },
  {
    id: "parceiros-anuais",
    rotulo: "Parceiros anuais do hackathon",
    descricao: "Parceiros anuais",
    destaque: "compacto",
    patrocinadores: [
      { id: "anual-1", nome: "Parceiro anual 1 a confirmar" },
      { id: "anual-2", nome: "Parceiro anual 2 a confirmar" },
      { id: "anual-3", nome: "Parceiro anual 3 a confirmar" },
      { id: "anual-4", nome: "Parceiro anual 4 a confirmar" },
      { id: "anual-5", nome: "Parceiro anual 5 a confirmar" },
    ],
  },
];

function obterClassesGrade(quantidade: number) {
  if (quantidade === 1) {
    return "grid-cols-1";
  }

  if (quantidade === 3) {
    return "grid-cols-2 md:grid-cols-3";
  }

  return "grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
}

function obterClassesCelula(
  destaque: SponsorCategory["destaque"]
) {
  switch (destaque) {
    case "principal":
      return "min-h-44 sm:min-h-52 lg:min-h-56";

    case "secundario":
      return "min-h-36 sm:min-h-40 lg:min-h-44";

    case "padrao":
      return "min-h-32 lg:min-h-40";

    default:
      return "min-h-28 lg:min-h-32";
  }
}

function obterClassesLogo(
  destaque: SponsorCategory["destaque"]
) {
  switch (destaque) {
    case "principal":
      return "max-h-20 max-w-64 sm:max-h-24 sm:max-w-80";

    case "secundario":
      return "max-h-16 max-w-56 sm:max-h-20 sm:max-w-64";

    case "padrao":
      return "max-h-14 max-w-40";

    default:
      return "max-h-12 max-w-28";
  }
}

type SponsorsSectionProps = {
  contatoPatrocinioHref?: string;
};

export default function SponsorsSection({
  contatoPatrocinioHref,
}: SponsorsSectionProps) {
  const classesBotao =
    "inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-amazon-primary px-5 py-3 text-sm font-semibold transition-colors sm:w-auto";

  return (
    <section
      id="patrocinadores"
      aria-labelledby="patrocinadores-titulo"
      className="border-t border-amazon-sand bg-amazon-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Cabeçalho */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-amazon-primary/50"
              />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-amazon-primary">
                Nosso agradecimento
              </span>
            </div>

            <h2
              id="patrocinadores-titulo"
              className="font-serif text-4xl font-normal leading-tight tracking-tight text-amazon-primary sm:text-5xl"
            >
              Nossos patrocinadores
            </h2>
          </div>

          <div className="flex w-full flex-col items-start gap-2 sm:w-auto">
            {contatoPatrocinioHref ? (
              <a
                href={contatoPatrocinioHref}
                className={`${classesBotao} bg-amazon-primary text-white hover:bg-amazon-primaryHover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amazon-primary`}
              >
                Seja um patrocinador
                <span aria-hidden="true">&rarr;</span>
              </a>
            ) : (
              <>
                <button
                  type="button"
                  disabled
                  aria-describedby="patrocinio-contato-aviso"
                  className={`${classesBotao} cursor-not-allowed bg-amazon-muted text-amazon-primary/60`}
                >
                  Seja um patrocinador
                  <span aria-hidden="true">&rarr;</span>
                </button>

                <p
                  id="patrocinio-contato-aviso"
                  className="text-xs text-amazon-textMuted"
                >
                  Canal de contato em breve.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Grade de patrocinadores */}
        <div className="overflow-hidden rounded-2xl border border-amazon-sand bg-amazon-surface">
          {categorias.map((categoria) => {
            const tituloId = `patrocinadores-${categoria.id}`;

            return (
              <div
                key={categoria.id}
                role="group"
                aria-labelledby={tituloId}
                className="grid grid-cols-1 border-b border-amazon-sand last:border-b-0 lg:grid-cols-[200px_minmax(0,1fr)]"
              >
                {/* Rótulo lateral / título no mobile */}
                <div className="bg-amazon-muted/40 px-5 py-5 lg:border-r lg:border-amazon-sand lg:px-6 lg:py-7">
                  <h3
                    id={tituloId}
                    className="max-w-44 text-xs font-medium uppercase leading-6 tracking-[0.14em] text-amazon-textMuted"
                  >
                    {categoria.rotulo}
                  </h3>
                </div>

                {/* Logos */}
                <div
                  className={`grid min-w-0 gap-4 p-5 lg:gap-0 lg:p-0 ${obterClassesGrade(
                    categoria.patrocinadores.length
                  )}`}
                >
                  {categoria.patrocinadores.map(
                    (patrocinador, indice) => (
                      <div
                        key={patrocinador.id}
                        className={`flex min-w-0 items-center justify-center px-4 py-6 ${
                          indice > 0
                            ? "lg:border-l lg:border-amazon-sand"
                            : ""
                        } ${obterClassesCelula(categoria.destaque)}`}
                      >
                        {patrocinador.logo ? (
                          // Logos ficam em /public e usam tamanho natural.
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={patrocinador.logo}
                            alt={patrocinador.nome}
                            loading="lazy"
                            decoding="async"
                            className={`h-auto w-auto max-w-full object-contain ${obterClassesLogo(
                              categoria.destaque
                            )}`}
                          />
                        ) : (
                          <div
                            role="img"
                            aria-label={patrocinador.nome}
                            className="flex flex-col items-center gap-3 text-center"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 40 40"
                              fill="none"
                              className={`text-amazon-primary/35 ${
                                categoria.destaque === "principal"
                                  ? "h-12 w-12"
                                  : "h-9 w-9"
                              }`}
                            >
                              <rect
                                x="5"
                                y="5"
                                width="30"
                                height="30"
                                rx="8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              />

                              <path
                                d="M13 26 20 14l7 12H13Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                            </svg>

                            <span className="text-xs font-medium text-amazon-textMuted">
                              Logo a confirmar
                            </span>
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-xs leading-6 text-amazon-textMuted">
          Espaços ilustrativos para apresentação do layout. Marcas e
          categorias serão atualizadas após confirmação.
        </p>
      </div>
    </section>
  );
}