import {
  Users,
  Baby,
  Flower2,
  TreePine,
  Theater,
  School,
  ArrowRight
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/Card";
import { Button } from "./ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Services() {
  const { t } = useTranslation();
  const header = useScrollReveal();
  const grid = useScrollReveal({ threshold: 0.05 });

  const services = [
    {
      icon: Users,
      titleKey: "services.familyConsulting.title",
      descriptionKey: "services.familyConsulting.description",
      featuresKey: "services.familyConsulting.features",
      bgGradient: "from-azul-suave/20 to-azul-suave/5",
      borderColor: "border-t-azul-suave",
      iconBg: "bg-azul-suave",
    },
    {
      icon: Baby,
      titleKey: "services.babysitting.title",
      descriptionKey: "services.babysitting.description",
      featuresKey: "services.babysitting.features",
      bgGradient: "from-coral/20 to-coral/5",
      borderColor: "border-t-coral",
      iconBg: "bg-coral",
    },
    {
      icon: Flower2,
      titleKey: "services.yoga.title",
      descriptionKey: "services.yoga.description",
      featuresKey: "services.yoga.features",
      bgGradient: "from-verde-pastel/20 to-verde-pastel/5",
      borderColor: "border-t-verde-pastel",
      iconBg: "bg-verde-pastel",
    },
    {
      icon: TreePine,
      titleKey: "services.nature.title",
      descriptionKey: "services.nature.description",
      featuresKey: "services.nature.features",
      bgGradient: "from-verde-pastel/20 to-verde-pastel/5",
      borderColor: "border-t-verde-pastel",
      iconBg: "bg-verde-pastel",
    },
    {
      icon: Theater,
      titleKey: "services.cultural.title",
      descriptionKey: "services.cultural.description",
      featuresKey: "services.cultural.features",
      bgGradient: "from-amarelo/20 to-amarelo/5",
      borderColor: "border-t-amarelo",
      iconBg: "bg-amarelo",
    },
    {
      icon: School,
      titleKey: "services.schoolConsulting.title",
      descriptionKey: "services.schoolConsulting.description",
      featuresKey: "services.schoolConsulting.features",
      bgGradient: "from-azul-suave/20 to-azul-suave/5",
      borderColor: "border-t-azul-suave",
      iconBg: "bg-azul-suave",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 scroll-reveal ${header.isVisible ? "visible" : ""}`}
        >
          <span className="font-inter text-coral uppercase tracking-wider text-xs sm:text-sm font-medium">
            {t("services.tag")}
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            {t("services.title")}
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={grid.ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const features = t(service.featuresKey, { returnObjects: true }) as string[];
            return (
              <Card
                key={service.titleKey}
                className={`border-t-4 ${service.borderColor} bg-gradient-to-b ${service.bgGradient} card-hover-lift`}
                style={{
                  transition: "opacity 0.6s ease-out, transform 0.3s ease, box-shadow 0.3s ease",
                  transitionDelay: grid.isVisible ? `${index * 100}ms` : "0ms",
                  opacity: grid.isVisible ? 1 : 0,
                  transform: grid.isVisible ? "translateY(0)" : "translateY(30px)",
                }}
              >
                <CardHeader className="p-5 sm:p-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-3 sm:mb-4`}
                  >
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{t(service.titleKey)}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{t(service.descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent className="p-5 sm:p-6 pt-0">
                  <ul className="space-y-2 mb-5">
                    {features.map((feature, i) => (
                      <li
                        key={i}
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
                    {t("common.learnMore")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
