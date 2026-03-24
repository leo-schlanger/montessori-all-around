import {
  Users,
  Baby,
  Flower2,
  TreePine,
  Theater,
  School,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Button } from "./ui/Button";

const services = [
  {
    icon: Users,
    title: "Consultoria para Famílias",
    description:
      "Orientação personalizada para pais e cuidadores que desejam implementar a abordagem Montessori em casa.",
    features: [
      "Sessões individuais",
      "Preparação do ambiente doméstico",
      "Estratégias para o dia-a-dia",
      "Acompanhamento contínuo",
    ],
    bgGradient: "from-azul-suave/20 to-azul-suave/5",
    borderColor: "border-t-azul-suave",
    iconBg: "bg-azul-suave",
  },
  {
    icon: Baby,
    title: "Babysitting Educativo",
    description:
      "Cuidado infantil com base nos princípios Montessori, respeitando o ritmo e as necessidades de cada criança.",
    features: [
      "Profissionais formados",
      "Atividades intencionais",
      "Flexibilidade de horários",
      "Ambiente preparado",
    ],
    bgGradient: "from-coral/20 to-coral/5",
    borderColor: "border-t-coral",
    iconBg: "bg-coral",
  },
  {
    icon: Flower2,
    title: "Yoga para Crianças",
    description:
      "Sessões de yoga adaptadas para crianças, promovendo bem-estar físico, emocional e concentração.",
    features: [
      "Grupos por faixa etária",
      "Mindfulness infantil",
      "Movimento consciente",
      "Técnicas de respiração",
    ],
    bgGradient: "from-verde-pastel/20 to-verde-pastel/5",
    borderColor: "border-t-verde-pastel",
    iconBg: "bg-verde-pastel",
  },
  {
    icon: TreePine,
    title: "Programas na Natureza",
    description:
      "Experiências educativas ao ar livre que conectam crianças e famílias com o mundo natural.",
    features: [
      "Exploração sensorial",
      "Educação ambiental",
      "Atividades sazonais",
      "Lisboa e Sintra",
    ],
    bgGradient: "from-verde-pastel/20 to-verde-pastel/5",
    borderColor: "border-t-verde-pastel",
    iconBg: "bg-verde-pastel",
  },
  {
    icon: Theater,
    title: "Experiências Culturais",
    description:
      "Programas que integram arte, música e cultura no desenvolvimento educativo das crianças.",
    features: [
      "Fotografia e pintura",
      "Visitas culturais",
      "Expressão artística",
      "Escultura e criação",
    ],
    bgGradient: "from-amarelo/20 to-amarelo/5",
    borderColor: "border-t-amarelo",
    iconBg: "bg-amarelo",
  },
  {
    icon: School,
    title: "Consultoria para Escolas",
    description:
      "Apoio na criação e desenvolvimento de escolas Montessori, desde a conceção à implementação.",
    features: [
      "Abertura de escolas",
      "Definição pedagógica",
      "Formação de equipas",
      "Acompanhamento contínuo",
    ],
    bgGradient: "from-azul-suave/20 to-azul-suave/5",
    borderColor: "border-t-azul-suave",
    iconBg: "bg-azul-suave",
  },
];

export function Services() {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-inter text-coral uppercase tracking-wider text-xs sm:text-sm font-medium">
            Serviços
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            Como Podemos Ajudar
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            Oferecemos uma variedade de serviços para apoiar crianças, famílias, educadores e comunidades no caminho Montessori.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`border-t-4 ${service.borderColor} bg-gradient-to-b ${service.bgGradient} hover:shadow-lg transition-all duration-300`}
            >
              <CardHeader className="p-5 sm:p-6">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-3 sm:mb-4`}
                >
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-5 sm:p-6 pt-0">
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-inter text-xs sm:text-sm text-cinza-texto/80"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${service.iconBg} flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="w-full justify-between group text-sm"
                  onClick={scrollToContact}
                >
                  Saber mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
