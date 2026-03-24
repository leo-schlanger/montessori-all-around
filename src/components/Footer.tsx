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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-cinza-texto py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="sm" showText={false} />
              <div className="flex flex-col">
                <span className="font-playfair font-semibold text-white text-lg leading-tight">
                  Montessori
                </span>
                <span className="font-inter text-white/70 tracking-wider uppercase text-xs">
                  All Around
                </span>
              </div>
            </div>
            <p className="font-inter text-white/70 text-sm leading-relaxed max-w-xs">
              Educação que respeita o ritmo de cada criança, promovendo
              autonomia, curiosidade e amor pela aprendizagem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-white font-medium mb-4">
              Links Rápidos
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block font-inter text-white/70 hover:text-coral transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
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
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-coral transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-white/50 text-sm">
              © {currentYear} Montessori All Around. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-inter text-white/50 hover:text-white transition-colors text-sm"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="font-inter text-white/50 hover:text-white transition-colors text-sm"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
