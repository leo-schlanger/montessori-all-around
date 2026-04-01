import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "A Educadora", href: "#educadora" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-bege-fundo shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center">
              <Logo size="sm" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-cinza-texto hover:text-coral transition-colors font-inter text-sm tracking-wide"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection("#contacto")}>
                Agendar Conversa
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-cinza-texto z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Fullscreen Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-bege-fundo"
          style={{ paddingTop: "64px" }}
        >
          <nav className="h-full flex flex-col px-6 py-8">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-cinza-texto hover:text-coral hover:bg-white/50 transition-colors font-inter text-xl py-4 px-4 text-left rounded-xl"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-8 px-4">
              <Button
                onClick={() => scrollToSection("#contacto")}
                className="w-full text-lg py-6"
                size="lg"
              >
                Agendar Conversa
              </Button>
            </div>

            {/* Info adicional */}
            <div className="mt-auto px-4 py-6 border-t border-cinza-texto/10">
              <p className="text-cinza-texto/60 text-sm font-inter text-center">
                Montessori All Around
              </p>
              <p className="text-cinza-texto/40 text-xs font-inter text-center mt-1">
                Lisboa, Portugal
              </p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
