import { Eye, Target, Leaf, Palette } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Visão",
    description: "Contribuir para uma cultura educativa mais consciente, onde crianças e adultos crescem em ambientes respeitadores e inspiradores.",
    color: "text-azul-suave",
    bgColor: "bg-azul-suave/20",
  },
  {
    icon: Target,
    title: "Missão",
    description: "Apoiar o desenvolvimento integral da criança e orientar adultos no seu papel enquanto guias da infância.",
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
    icon: Leaf,
    title: "Natureza",
    description: "Programas que conectam crianças e famílias com o mundo natural, promovendo experiências ao ar livre.",
    color: "text-verde-pastel",
    bgColor: "bg-verde-pastel/20",
  },
  {
    icon: Palette,
    title: "Arte",
    description: "Fotografia, pintura e escultura como parte essencial do desenvolvimento humano e educativo.",
    color: "text-amarelo",
    bgColor: "bg-amarelo/20",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-inter text-coral uppercase tracking-wider text-xs sm:text-sm font-medium">
            Sobre Nós
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            Educação consciente e integrada
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            A Montessori All Around é um projeto educativo que une pedagogia Montessori, arte, natureza e desenvolvimento humano para apoiar crianças, famílias, educadores e comunidades.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-bege-fundo/50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className={`p-3 rounded-xl ${value.bgColor} w-fit mb-4`}>
                <value.icon className={`w-6 h-6 ${value.color}`} />
              </div>
              <h3 className="font-playfair text-xl text-cinza-texto font-medium mb-2">
                {value.title}
              </h3>
              <p className="font-inter text-cinza-texto/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="max-w-2xl mx-auto">
            <p className="font-playfair text-lg sm:text-xl md:text-2xl text-cinza-texto italic leading-relaxed">
              "A educação é um processo natural que se desenvolve espontaneamente no ser humano."
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
