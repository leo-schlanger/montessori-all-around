import { Link, useNavigate } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const quickLinks = [
    { label: t("nav.about"), href: "#sobre" },
    { label: t("nav.methodology"), href: "#metodologia" },
    { label: t("nav.services"), href: "#servicos" },
    { label: t("nav.contact"), href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
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
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-white font-medium mb-4">
              {t("footer.quickLinks")}
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
              {t("footer.legal")}
            </h3>
            <nav className="space-y-2">
              <Link
                to="/politica-privacidade"
                className="block font-inter text-white/70 hover:text-coral transition-colors text-sm py-1"
              >
                {t("footer.privacyPolicy")}
              </Link>
              <Link
                to="/termos-uso"
                className="block font-inter text-white/70 hover:text-coral transition-colors text-sm py-1"
              >
                {t("footer.termsOfUse")}
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-playfair text-white font-medium mb-4">
              {t("footer.followUs")}
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
              {t("common.location")}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="font-inter text-white/50 text-xs sm:text-sm">
              {currentYear} Montessori All Around. {t("common.allRightsReserved")}
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link
                to="/politica-privacidade"
                className="font-inter text-white/50 hover:text-white transition-colors text-xs sm:text-sm"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to="/termos-uso"
                className="font-inter text-white/50 hover:text-white transition-colors text-xs sm:text-sm"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
