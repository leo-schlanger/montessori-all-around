import { useTranslation } from "react-i18next";
import { LogoIcon } from "./Logo";
import { Button } from "./ui/Button";

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-bege-fundo pt-16 md:pt-20">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hidden sm:block absolute -top-20 -left-20 w-48 md:w-64 h-48 md:h-64 bg-azul-suave/20 rounded-full blur-3xl" />
        <div className="hidden sm:block absolute top-1/4 -right-20 w-60 md:w-80 h-60 md:h-80 bg-coral/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-amarelo/20 rounded-full blur-3xl" />
        <div className="hidden md:block absolute bottom-1/4 right-1/4 w-48 h-48 bg-verde-pastel/25 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <LogoIcon size={80} className="sm:hidden" />
            <LogoIcon size={120} className="hidden sm:block" />
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cinza-texto mb-4 sm:mb-6 leading-tight px-2">
            {t("hero.title")}{" "}
            <span className="text-coral">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="font-inter text-base sm:text-lg md:text-xl text-cinza-texto/80 mb-8 sm:mb-10 max-w-2xl leading-relaxed px-2">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Button
              size="lg"
              onClick={() => scrollToSection("#servicos")}
              className="w-full sm:w-auto"
            >
              {t("hero.discoverServices")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contacto")}
              className="w-full sm:w-auto"
            >
              {t("hero.getInTouch")}
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cinza-texto/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cinza-texto/30 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
