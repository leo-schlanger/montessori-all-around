import { Logo } from "./Logo";
import { Button } from "./ui/Button";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bege-fundo">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-azul-suave/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-coral/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-amarelo/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-verde-pastel/25 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Logo size="xl" showText={false} />
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cinza-texto mb-6 leading-tight">
            Educação que respeita o{" "}
            <span className="text-coral">ritmo de cada criança</span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-cinza-texto/80 mb-10 max-w-2xl leading-relaxed">
            Na Montessori All Around, acreditamos que cada criança é única.
            Oferecemos um ambiente preparado onde a curiosidade natural
            floresce e a aprendizagem acontece de forma orgânica e respeitosa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollToSection("#sobre")}>
              Conhecer mais
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contacto")}
            >
              Agendar conversa
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cinza-texto/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cinza-texto/30 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
