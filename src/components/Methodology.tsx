import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Methodology() {
  const { t } = useTranslation();
  const header = useScrollReveal();
  const pillarsRef = useScrollReveal({ threshold: 0.1 });
  const quote = useScrollReveal();

  const pillars = [
    {
      titleKey: "methodology.pillars.montessori.title",
      descriptionKey: "methodology.pillars.montessori.description",
      color: "bg-azul-suave",
      number: "01",
    },
    {
      titleKey: "methodology.pillars.art.title",
      descriptionKey: "methodology.pillars.art.description",
      color: "bg-coral",
      number: "02",
    },
    {
      titleKey: "methodology.pillars.nature.title",
      descriptionKey: "methodology.pillars.nature.description",
      color: "bg-verde-pastel",
      number: "03",
    },
    {
      titleKey: "methodology.pillars.community.title",
      descriptionKey: "methodology.pillars.community.description",
      color: "bg-amarelo",
      number: "04",
    },
  ];

  return (
    <section id="metodologia" className="py-16 sm:py-20 md:py-28 bg-bege-fundo">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 scroll-reveal ${header.isVisible ? "visible" : ""}`}
        >
          <span className="font-inter text-coral uppercase tracking-wider text-xs sm:text-sm font-medium">
            {t("methodology.tag")}
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            {t("methodology.title")}
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            {t("methodology.description")}
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          ref={pillarsRef.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {pillars.map((pillar, index) => (
            <div
              key={pillar.titleKey}
              className="bg-white rounded-2xl p-5 sm:p-6 card-hover-lift"
              style={{
                transition: "opacity 0.6s ease-out, transform 0.3s ease, box-shadow 0.3s ease",
                transitionDelay: pillarsRef.isVisible ? `${index * 120}ms` : "0ms",
                opacity: pillarsRef.isVisible ? 1 : 0,
                transform: pillarsRef.isVisible ? "translateY(0)" : "translateY(25px)",
              }}
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
                {t(pillar.titleKey)}
              </h3>
              <p className="font-inter text-cinza-texto/70 text-xs sm:text-sm leading-relaxed">
                {t(pillar.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div
          ref={quote.ref}
          className={`mt-12 sm:mt-16 text-center px-4 scroll-reveal-scale ${quote.isVisible ? "visible" : ""}`}
        >
          <blockquote className="max-w-2xl mx-auto">
            <p className="font-playfair text-lg sm:text-xl md:text-2xl text-cinza-texto italic leading-relaxed">
              "{t("methodology.quote")}"
            </p>
            <footer className="mt-3 sm:mt-4 font-inter text-coral font-medium text-sm sm:text-base">
              — {t("methodology.quoteAuthor")}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
