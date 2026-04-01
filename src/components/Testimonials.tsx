import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "./ui/Card";

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export function Testimonials() {
  const { t } = useTranslation();

  const testimonials = t("testimonials.items", { returnObjects: true }) as Testimonial[];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-bege-fundo" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
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

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300 ${
                index % 2 === 1 ? "sm:mt-8" : ""
              }`}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-coral/30 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amarelo text-amarelo"
                        />
                      ))}
                    </div>
                    <p className="font-inter text-cinza-texto/80 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
                      "{testimonial.content}"
                    </p>
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
    </section>
  );
}
