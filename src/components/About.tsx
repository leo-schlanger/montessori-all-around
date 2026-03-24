import { Heart, BookOpen, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Respeito",
    description: "Cada criança é tratada com dignidade e consideração pelo seu ritmo individual.",
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
    icon: BookOpen,
    title: "Autonomia",
    description: "Encorajamos a independência e a capacidade de fazer escolhas conscientes.",
    color: "text-azul-suave",
    bgColor: "bg-azul-suave/20",
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Criamos um ambiente de colaboração onde todos aprendem juntos.",
    color: "text-verde-pastel",
    bgColor: "bg-verde-pastel/20",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] rounded-2xl bg-gradient-to-br from-azul-suave/30 via-coral/20 to-amarelo/30 overflow-hidden max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-full bg-bege-fundo/50 flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl">👩‍🏫</span>
                  </div>
                  <p className="font-inter text-cinza-texto/60 text-sm">
                    Foto da Educadora
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element - escondido em mobile */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 md:w-32 h-24 md:h-32 bg-amarelo/30 rounded-full -z-10" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-16 md:w-24 h-16 md:h-24 bg-verde-pastel/30 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="font-inter text-coral uppercase tracking-wider text-xs sm:text-sm font-medium">
              Sobre Nós
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
              Uma educadora apaixonada pelo desenvolvimento infantil
            </h2>
            <div className="space-y-4 font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
              <p>
                Com mais de 15 anos de experiência em educação Montessori e
                formação certificada pela Association Montessori Internationale
                (AMI), dedico a minha vida a criar ambientes onde cada criança
                pode desenvolver todo o seu potencial.
              </p>
              <p>
                A minha missão é acompanhar famílias nesta jornada extraordinária,
                oferecendo ferramentas práticas e um olhar atento às necessidades
                únicas de cada criança.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 sm:mt-10 space-y-4">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-3 sm:gap-4">
                  <div className={`p-2.5 sm:p-3 rounded-xl ${value.bgColor} flex-shrink-0`}>
                    <value.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${value.color}`} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-base sm:text-lg text-cinza-texto font-medium">
                      {value.title}
                    </h3>
                    <p className="font-inter text-cinza-texto/70 text-xs sm:text-sm mt-1">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
