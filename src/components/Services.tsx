import { GraduationCap, Users, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Button } from "./ui/Button";

const services = [
  {
    icon: GraduationCap,
    title: "Turmas Montessori",
    description:
      "Ambiente preparado para crianças dos 3 aos 6 anos, com materiais autênticos e educadores certificados. Grupos pequenos para atenção individualizada.",
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
      "Orientação personalizada para aplicar os princípios Montessori em casa. Sessões individuais ou workshops em grupo para famílias.",
    features: [
      "Sessões online ou presenciais",
      "Preparação do ambiente doméstico",
      "Estratégias para desafios do dia-a-dia",
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
      "Cursos e workshops para profissionais de educação que desejam integrar a filosofia Montessori na sua prática pedagógica.",
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
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-inter text-coral uppercase tracking-wider text-sm font-medium">
            Serviços
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-cinza-texto mt-3 mb-6">
            Como Podemos Ajudar
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed">
            Oferecemos diferentes formas de apoio para crianças, famílias e
            profissionais que desejam seguir o caminho Montessori.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`border-t-4 ${service.borderColor} bg-gradient-to-b ${service.bgGradient} hover:shadow-lg transition-all duration-300`}
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 font-inter text-sm text-cinza-texto/80"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${service.iconBg}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="w-full justify-between group"
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
