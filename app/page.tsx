"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-amazon-bg text-amazon-text font-sans selection:bg-amazon-accent/30 flex flex-col overflow-x-hidden">
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{ backgroundImage: "url('/floresta.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-amazon-bg/40 via-amazon-bg/80 to-amazon-bg"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-24 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-amazon-primary/15 bg-amazon-surface text-amazon-primary text-xs font-semibold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amazon-accent"></span>
              Inteligência Artificial na Amazônia
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-amazon-primary leading-tight tracking-tight mb-8">
              Hackathon <span className="text-amazon-primaryHover">IA 2027</span>
            </h1>

            <p className="text-base md:text-xl text-amazon-textMuted max-w-2xl mb-10 leading-relaxed">
              Três dias de imersão para construir soluções tecnológicas que enfrentam os desafios reais da região amazônica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <Link
                href="/inscricao"
                className="bg-amazon-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-amazon-primaryHover transition-colors shadow-lg shadow-amazon-primary/20"
              >
                Inicializar imersão
              </Link>

              <Link
                href="/cronograma"
                className="bg-amazon-surface border border-amazon-sand text-amazon-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-amazon-muted transition-colors"
              >
                Ver cronograma →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-20 w-full border-t border-amazon-sand pt-12">
              <div>
                <span className="text-3xl md:text-4xl font-extrabold text-amazon-primary block mb-1">
                  72h
                </span>
                <span className="text-xs text-amazon-textMuted uppercase tracking-wider">
                  de maratona presencial
                </span>
              </div>

              <div>
                <span className="text-3xl md:text-4xl font-extrabold text-amazon-earth block mb-1">
                  R$ 150k
                </span>
                <span className="text-xs text-amazon-textMuted uppercase tracking-wider">
                  em prêmios e aceleração
                </span>
              </div>

              <div>
                <span className="text-3xl md:text-4xl font-extrabold text-amazon-primary block mb-1">
                  Belém
                </span>
                <span className="text-xs text-amazon-textMuted uppercase tracking-wider">
                  edição 2027
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE O EVENTO */}
        <section id="sobre" className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amazon-primary bg-amazon-surface px-3 py-1 rounded-full border border-amazon-sand">
                A grande maratona
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-amazon-primary mt-4 mb-6">
                Tecnologia de ponta a serviço da maior biodiversidade do planeta.
              </h2>

              <p className="text-amazon-textMuted leading-relaxed mb-6">
                O Hackathon IA Amazônia 2027 reúne desenvolvedores, cientistas de dados, designers e especialistas em meio ambiente para responder a questões críticas da região socioambiental.
              </p>

              <p className="text-amazon-textMuted leading-relaxed">
                As equipes terão acesso a dados de satélite, modelos pré-treinados de linguagem e suporte contínuo de mentores especializados durante todas as etapas.
              </p>
            </div>

            <div className="bg-amazon-surface border border-amazon-sand rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-amazon-primary mb-4">
                Por que participar?
              </h3>

              <ul className="space-y-4 text-sm text-amazon-textMuted">
                <li className="flex items-start gap-3">
                  <span className="text-amazon-primary font-bold">✓</span>
                  <span>
                    <strong className="text-amazon-text">Mentoria direta:</strong> apoio de profissionais da AWS, Google Cloud e pesquisadores da UFPA/INPA.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-amazon-primary font-bold">✓</span>
                  <span>
                    <strong className="text-amazon-text">Conexão com investidores:</strong> apresente seu MVP diretamente para fundos de impacto.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-amazon-primary font-bold">✓</span>
                  <span>
                    <strong className="text-amazon-text">Certificação oficial:</strong> válido como horas complementares de extensão acadêmica.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* DESAFIOS ODS */}
        <section id="desafios" className="bg-amazon-surface-muted py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amazon-primary bg-amazon-surface px-3 py-1 rounded-full border border-amazon-sand">
                Eixos temáticos
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-amazon-primary mt-4">
                Desafios regionais (ODS)
              </h2>

              <p className="text-amazon-textMuted text-sm mt-2">
                Escolha uma das trilhas e aplique Inteligência Artificial para gerar soluções reais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-amazon-surface border border-amazon-sand rounded-3xl p-6 shadow-sm hover:border-amazon-primary/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-amazon-primary/10 text-amazon-primary flex items-center justify-center text-2xl mb-4">
                  🌱
                </div>

                <h3 className="text-xl font-bold text-amazon-primary mb-2 group-hover:text-amazon-primaryHover transition-colors">
                  Bioeconomia e Conservação
                </h3>

                <p className="text-sm text-amazon-textMuted leading-relaxed">
                  Algoritmos preditivos para rastreamento de desmatamento ilegal e mapeamento da biodiversidade da flora local.
                </p>
              </div>

              <div className="bg-amazon-surface border border-amazon-sand rounded-3xl p-6 shadow-sm hover:border-amazon-primary/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-amazon-primary/10 text-amazon-primary flex items-center justify-center text-2xl mb-4">
                  💧
                </div>

                <h3 className="text-xl font-bold text-amazon-primary mb-2 group-hover:text-amazon-primaryHover transition-colors">
                  Monitoramento Hidrográfico
                </h3>

                <p className="text-sm text-amazon-textMuted leading-relaxed">
                  Previsão de cheias e secas extremas na bacia amazônica utilizando dados telemétricos e sensores IoT de baixo custo.
                </p>
              </div>

              <div className="bg-amazon-surface border border-amazon-sand rounded-3xl p-6 shadow-sm hover:border-amazon-primary/30 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-amazon-primary/10 text-amazon-primary flex items-center justify-center text-2xl mb-4">
                  🏥
                </div>

                <h3 className="text-xl font-bold text-amazon-primary mb-2 group-hover:text-amazon-primaryHover transition-colors">
                  Saúde Ribeirinha Isolada
                </h3>

                <p className="text-sm text-amazon-textMuted leading-relaxed">
                  Triagem médica assistida por IA offline para diagnóstico precoce em comunidades remotas e sem conectividade contínua.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-amazon-primary text-white pt-16 pb-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/15">
                📜
              </span>
              Regras do jogo
            </h3>

            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-2">
                <span className="text-amazon-accent mt-1">▹</span>
                <p>
                  <strong className="text-white">Formação:</strong> equipes de 4 membros, exigindo pelo menos um Especialista em IA/Dados e um Líder Técnico.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-amazon-accent mt-1">▹</span>
                <p>
                  <strong className="text-white">Foco regional:</strong> o projeto deve solucionar um problema da Amazônia: Bioeconomia, Monitoramento Hidrográfico ou Saúde Ribeirinha.
                </p>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-amazon-accent mt-1">▹</span>
                <p>
                  <strong className="text-white">Critérios:</strong> avaliação focada em inovação tecnológica, viabilidade offline, UX/UI e impacto social.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/15">
                🔒
              </span>
              Privacidade (LGPD)
            </h3>

            <div className="space-y-4 text-sm text-white/75">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <strong className="text-white block mb-1">Coleta de dados</strong>
                <p>
                  Os dados coletados serão armazenados com segurança e utilizados exclusivamente para comunicação, credenciamento e emissão de certificados do Hackathon IA 2027.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <strong className="text-white block mb-1">Propriedade intelectual</strong>
                <p>
                  O código-fonte e os direitos do MVP gerado durante as 72h de maratona pertencerão inteiramente às equipes desenvolvedoras.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/15">
                ❓
              </span>
              Dúvidas frequentes
            </h3>

            <div className="space-y-3">
              <details className="group bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-medium text-white text-sm">
                  Preciso ser um gênio da IA?
                  <span className="transition group-open:rotate-180 text-amazon-accent">▼</span>
                </summary>

                <p className="text-white/75 text-sm mt-3 leading-relaxed">
                  Não! A construção de um bom projeto exige times multidisciplinares: devs, designers de UX/UI e negócios para apoiar os especialistas em dados.
                </p>
              </details>

              <details className="group bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-medium text-white text-sm">
                  O evento é 100% presencial?
                  <span className="transition group-open:rotate-180 text-amazon-accent">▼</span>
                </summary>

                <p className="text-white/75 text-sm mt-3 leading-relaxed">
                  Sim. A edição de 2027 será uma imersão presencial de 72h em Manaus, com infraestrutura de acampamento e internet de alta velocidade.
                </p>
              </details>

              <details className="group bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-medium text-white text-sm">
                  Como funciona a premiação?
                  <span className="transition group-open:rotate-180 text-amazon-accent">▼</span>
                </summary>

                <p className="text-white/75 text-sm mt-3 leading-relaxed">
                  O prêmio de R$ 150k será dividido: R$ 80k para o 1º lugar, R$ 50k para o 2º lugar e R$ 20k para o 3º lugar, além de mentorias exclusivas com investidores.
                </p>
              </details>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/60">
          <p>© 2027 Sistema Curupira - Hackathon IA Amazônia. Todos os direitos reservados.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-amazon-accent transition-colors">
              Termos de uso
            </a>

            <a href="#" className="hover:text-amazon-accent transition-colors">
              Política de cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}