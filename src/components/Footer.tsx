import { Link, useNavigate } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    // Se estamos numa página diferente, volta para home primeiro
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-cinza-texto py-10 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <Logo size="sm" showText={false} />
              <div className="flex flex-col">
                <span className="font-playfair font-semibold text-white text-lg leading-tight">
                  Montessori
                </span>
                <span className="font-inter text-white/70 tracking-wider uppercase text-xs">
                  All Around
                </span>
              </div>
            </Link>
            <p className="font-inter text-white/70 text-sm leading-relaxed max-w-xs">
              Projeto educativo holístico que une pedagogia Montessori, arte, natureza e desenvolvimento humano.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-white font-medium mb-4">
              Links Rápidos
            </h3>
            <nav className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-inter text-white/70 hover:text-coral transition-colors text-sm text-left py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-playfair text-white font-medium mb-4">
              Legal
            </h3>
            <nav className="space-y-2">
              <Link
                to="/politica-privacidade"
                className="block font-inter text-white/70 hover:text-coral transition-colors text-sm py-1"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-uso"
                className="block font-inter text-white/70 hover:text-coral transition-colors text-sm py-1"
              >
                Termos de Uso
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-playfair text-white font-medium mb-4">
              Siga-nos
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-coral transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <p className="font-inter text-white/50 text-xs mt-4">
              Lisboa e Sintra, Portugal
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="font-inter text-white/50 text-xs sm:text-sm">
              © {currentYear} Montessori All Around. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link
                to="/politica-privacidade"
                className="font-inter text-white/50 hover:text-white transition-colors text-xs sm:text-sm"
              >
                Privacidade
              </Link>
              <Link
                to="/termos-uso"
                className="font-inter text-white/50 hover:text-white transition-colors text-xs sm:text-sm"
              >
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
