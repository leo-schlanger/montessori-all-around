const pillars = [
  {
    title: "Ambiente Preparado",
    description:
      "Um espaço cuidadosamente organizado que convida à exploração independente e ao desenvolvimento natural.",
    color: "bg-azul-suave",
    number: "01",
  },
  {
    title: "Materiais Sensoriais",
    description:
      "Materiais concretos e autocorretivos que permitem à criança aprender através dos sentidos.",
    color: "bg-coral",
    number: "02",
  },
  {
    title: "Educador como Guia",
    description:
      "O adulto observa, orienta e facilita, respeitando o tempo e os interesses de cada criança.",
    color: "bg-amarelo",
    number: "03",
  },
  {
    title: "Liberdade com Limites",
    description:
      "A criança escolhe as suas atividades dentro de um ambiente estruturado e seguro.",
    color: "bg-verde-pastel",
    number: "04",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="py-16 sm:py-20 md:py-28 bg-bege-fundo">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-inter text-coral uppercase tracking-wider text-xs sm:text-sm font-medium">
            O Método
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            A Abordagem Montessori
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            Desenvolvida pela Dra. Maria Montessori há mais de 100 anos, esta
            abordagem científica à educação baseia-se na observação do
            desenvolvimento natural da criança e no respeito pelo seu potencial
            inato.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${pillar.color} rounded-xl flex items-center justify-center`}
                >
                  <span className="font-playfair text-white font-bold text-base sm:text-lg">
                    {pillar.number}
                  </span>
                </div>
              </div>
              <h3 className="font-playfair text-lg sm:text-xl text-cinza-texto mb-2 sm:mb-3">
                {pillar.title}
              </h3>
              <p className="font-inter text-cinza-texto/70 text-xs sm:text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <blockquote className="max-w-2xl mx-auto">
            <p className="font-playfair text-lg sm:text-xl md:text-2xl text-cinza-texto italic leading-relaxed">
              "A criança não é um vaso a ser enchido, mas uma fonte a ser
              libertada."
            </p>
            <footer className="mt-3 sm:mt-4 font-inter text-coral font-medium text-sm sm:text-base">
              — Maria Montessori
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
