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
      {/* Gooey SVG Filter - makes blobs merge like watercolor */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Animated morphing blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ filter: 'url(#goo)' }}>
        {/* Top-left: azul suave blob */}
        <div
          className="hidden sm:block absolute -top-16 -left-16 w-56 md:w-72 lg:w-80 h-56 md:h-72 lg:h-80 bg-azul-suave/25 animate-blob animate-float"
        />
        {/* Top-right: coral blob */}
        <div
          className="hidden sm:block absolute top-1/4 -right-16 w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 bg-coral/20 animate-blob-slow animate-float-slow blob-delay-2 float-delay-2"
        />
        {/* Bottom-left: amarelo blob */}
        <div
          className="absolute -bottom-24 left-[10%] w-72 md:w-96 lg:w-[28rem] h-72 md:h-96 lg:h-[28rem] bg-amarelo/25 animate-blob animate-float blob-delay-4 float-delay-3"
        />
        {/* Bottom-right: verde pastel blob */}
        <div
          className="hidden md:block absolute bottom-[15%] right-[15%] w-48 lg:w-64 h-48 lg:h-64 bg-verde-pastel/30 animate-blob-slow animate-float-slow blob-delay-6 float-delay-5"
        />
        {/* Extra small accent blob - coral */}
        <div
          className="hidden lg:block absolute top-[15%] left-[30%] w-32 h-32 bg-coral/15 animate-blob animate-float blob-delay-2 float-delay-3"
        />
        {/* Extra small accent blob - azul */}
        <div
          className="hidden lg:block absolute bottom-[30%] left-[5%] w-24 h-24 bg-azul-suave/20 animate-blob-slow animate-float blob-delay-6 float-delay-5"
        />
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo - animated entrance */}
          <div className="mb-6 sm:mb-8 opacity-0 animate-scale-in hero-delay-1">
            <LogoIcon size={80} className="sm:hidden" />
            <LogoIcon size={120} className="hidden sm:block" />
          </div>

          {/* Title - animated entrance */}
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cinza-texto mb-4 sm:mb-6 leading-tight px-2 opacity-0 animate-fade-up hero-delay-2">
            {t("hero.title")}{" "}
            <span className="text-coral">{t("hero.titleHighlight")}</span>
          </h1>

          {/* Subtitle - animated entrance */}
          <p className="font-inter text-base sm:text-lg md:text-xl text-cinza-texto/80 mb-8 sm:mb-10 max-w-2xl leading-relaxed px-2 opacity-0 animate-fade-up hero-delay-3">
            {t("hero.subtitle")}
          </p>

          {/* Buttons - animated entrance */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 opacity-0 animate-fade-up hero-delay-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#servicos")}
              className="w-full sm:w-auto btn-paint-fill"
            >
              {t("hero.discoverServices")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contacto")}
              className="w-full sm:w-auto btn-paint-fill"
            >
              {t("hero.getInTouch")}
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDelay: '1.4s' }}>
            <div className="w-6 h-10 border-2 border-cinza-texto/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cinza-texto/30 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
