import { Eye, Target, Leaf, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Eye,
      titleKey: "about.vision.title",
      descriptionKey: "about.vision.description",
      color: "text-azul-suave",
      bgColor: "bg-azul-suave/20",
    },
    {
      icon: Target,
      titleKey: "about.mission.title",
      descriptionKey: "about.mission.description",
      color: "text-coral",
      bgColor: "bg-coral/10",
    },
    {
      icon: Leaf,
      titleKey: "about.nature.title",
      descriptionKey: "about.nature.description",
      color: "text-verde-pastel",
      bgColor: "bg-verde-pastel/20",
    },
    {
      icon: Palette,
      titleKey: "about.art.title",
      descriptionKey: "about.art.description",
      color: "text-amarelo",
      bgColor: "bg-amarelo/20",
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-inter text-coral uppercase tracking-wider text-xs sm:text-sm font-medium">
            {t("about.tag")}
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            {t("about.title")}
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            {t("about.description")}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.titleKey}
              className="bg-bege-fundo/50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className={`p-3 rounded-xl ${value.bgColor} w-fit mb-4`}>
                <value.icon className={`w-6 h-6 ${value.color}`} />
              </div>
              <h3 className="font-playfair text-xl text-cinza-texto font-medium mb-2">
                {t(value.titleKey)}
              </h3>
              <p className="font-inter text-cinza-texto/70 text-sm leading-relaxed">
                {t(value.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="max-w-2xl mx-auto">
            <p className="font-playfair text-lg sm:text-xl md:text-2xl text-cinza-texto italic leading-relaxed">
              "{t("about.quote")}"
            </p>
            <footer className="mt-3 sm:mt-4 font-inter text-coral font-medium text-sm sm:text-base">
              — {t("about.quoteAuthor")}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
