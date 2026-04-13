import { useState, useEffect } from "react";
import { Star, Quote, BadgeCheck, FileText, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "./ui/Card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  fullContent?: string;
  date?: string;
  verified?: boolean;
}

function LetterModal({
  testimonial,
  onClose,
  labels,
}: {
  testimonial: Testimonial;
  onClose: () => void;
  labels: { fullLetter: string; verified: string; close: string };
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={labels.fullLetter}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-bege-fundo px-5 sm:px-8 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-coral" />
            <h3 className="font-playfair text-cinza-texto text-base sm:text-lg font-medium">
              {labels.fullLetter}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-bege-fundo transition-colors"
            aria-label={labels.close}
          >
            <X className="w-5 h-5 text-cinza-texto/60" />
          </button>
        </div>

        <div className="px-5 sm:px-8 py-6 sm:py-8">
          {testimonial.date && (
            <p className="font-inter text-cinza-texto/50 text-xs sm:text-sm mb-4">
              {testimonial.date}
            </p>
          )}
          <div className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base space-y-4">
            {testimonial.fullContent?.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-bege-fundo">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-azul-suave to-verde-pastel flex items-center justify-center flex-shrink-0">
              <span className="font-inter text-white text-sm font-medium">
                {testimonial.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-playfair text-cinza-texto font-medium text-sm sm:text-base">
                {testimonial.name}
              </p>
              <p className="font-inter text-cinza-texto/60 text-xs sm:text-sm">
                {testimonial.role}
              </p>
            </div>
            {testimonial.verified && (
              <BadgeCheck className="w-5 h-5 text-azul-suave ml-auto flex-shrink-0" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useTranslation();
  const header = useScrollReveal();
  const grid = useScrollReveal({ threshold: 0.1 });
  const [openLetter, setOpenLetter] = useState<number | null>(null);

  const testimonials = t("testimonials.items", { returnObjects: true }) as Testimonial[];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const modalLabels = {
    fullLetter: t("testimonials.fullLetter"),
    verified: t("testimonials.verified"),
    close: t("testimonials.close"),
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-bege-fundo" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 scroll-reveal ${header.isVisible ? "visible" : ""}`}
        >
          <span className="font-inter text-coral uppercase tracking-wider text-xs sm:text-sm font-medium">
            {t("testimonials.tag")}
          </span>
          <h2 id="testimonials-title" className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            {t("testimonials.description")}
          </p>
        </div>

        <div
          ref={grid.ref}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-none card-hover-lift"
              style={{
                transition: "opacity 0.6s ease-out, transform 0.3s ease, box-shadow 0.3s ease",
                transitionDelay: grid.isVisible ? `${index * 150}ms` : "0ms",
                opacity: grid.isVisible ? 1 : 0,
                transform: grid.isVisible ? "translateY(0)" : "translateY(25px)",
              }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-coral/30 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amarelo text-amarelo"
                          />
                        ))}
                      </div>
                      {testimonial.verified && (
                        <span className="inline-flex items-center gap-1 text-azul-suave text-[10px] sm:text-xs font-medium font-inter">
                          <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {t("testimonials.verified")}
                        </span>
                      )}
                    </div>
                    <p className="font-inter text-cinza-texto/80 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
                      "{testimonial.quote}"
                    </p>
                    {testimonial.fullContent && (
                      <button
                        onClick={() => setOpenLetter(index)}
                        className="font-inter text-coral hover:text-coral/80 text-xs sm:text-sm font-medium transition-colors mb-3 sm:mb-4 flex items-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        {t("testimonials.readMore")}
                      </button>
                    )}
                    <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-bege-fundo">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-azul-suave to-verde-pastel flex items-center justify-center flex-shrink-0">
                        <span className="font-inter text-white text-xs sm:text-sm font-medium">
                          {getInitials(testimonial.name)}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-playfair text-cinza-texto font-medium text-sm sm:text-base truncate">
                          {testimonial.name}
                        </p>
                        <p className="font-inter text-cinza-texto/60 text-xs sm:text-sm truncate">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {openLetter !== null && testimonials[openLetter] && (
        <LetterModal
          testimonial={testimonials[openLetter]}
          onClose={() => setOpenLetter(null)}
          labels={modalLabels}
        />
      )}
    </section>
  );
}
