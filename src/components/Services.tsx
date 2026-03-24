import { GraduationCap, Users, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Button } from "./ui/Button";

const services = [
  {
    icon: GraduationCap,
    title: "Turmas Montessori",
    description:
      "Ambiente preparado para crianças dos 3 aos 6 anos, com materiais autênticos e educadores certificados.",
    features: [
      "Grupos de 12 a 15 crianças",
      "Período da manhã ou tarde",
      "Acompanhamento individual",
      "Relatórios de desenvolvimento",
    ],
    bgGradient: "from-azul-suave/20 to-azul-suave/5",
    borderColor: "border-t-azul-suave",
    iconBg: "bg-azul-suave",
  },
  {
    icon: Users,
    title: "Consultoria para Pais",
    description:
      "Orientação personalizada para aplicar os princípios Montessori em casa. Sessões individuais ou workshops.",
    features: [
      "Sessões online ou presenciais",
      "Preparação do ambiente doméstico",
      "Estratégias para o dia-a-dia",
      "Suporte contínuo",
    ],
    bgGradient: "from-coral/20 to-coral/5",
    borderColor: "border-t-coral",
    iconBg: "bg-coral",
  },
  {
    icon: BookOpen,
    title: "Formação para Educadores",
    description:
      "Cursos e workshops para profissionais que desejam integrar a filosofia Montessori na prática.",
    features: [
      "Certificação reconhecida",
      "Componente teórica e prática",
      "Materiais de apoio incluídos",
      "Comunidade de prática",
    ],
    bgGradient: "from-verde-pastel/20 to-verde-pastel/5",
    borderColor: "border-t-verde-pastel",
    iconBg: "bg-verde-pastel",
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
            Oferecemos diferentes formas de apoio para crianças, famílias e
            profissionais que desejam seguir o caminho Montessori.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-5 sm:p-6 pt-0">
                <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
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
