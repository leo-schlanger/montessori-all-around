import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Mãe do Pedro, 4 anos",
    content:
      "A transformação do Pedro foi incrível. Ele tornou-se mais independente, confiante e curioso. O ambiente da escola é acolhedor e a equipa é extraordinária.",
    avatar: "AS",
    rating: 5,
  },
  {
    name: "Ricardo Santos",
    role: "Pai da Maria, 5 anos",
    content:
      "A consultoria para pais mudou completamente a dinâmica da nossa casa. Aprendemos a respeitar o tempo da Maria e a criar um ambiente que estimula a sua autonomia.",
    avatar: "RS",
    rating: 5,
  },
  {
    name: "Carla Ferreira",
    role: "Educadora de Infância",
    content:
      "O curso de formação Montessori foi revelador. A componente prática é excelente e a formadora transmite não só conhecimento mas também paixão pela educação.",
    avatar: "CF",
    rating: 5,
  },
  {
    name: "Miguel Costa",
    role: "Pai do Tomás, 3 anos",
    content:
      "Escolher esta escola foi a melhor decisão que tomámos. O Tomás adora ir à escola e desenvolveu competências que nunca imaginámos para a idade dele.",
    avatar: "MC",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-bege-fundo">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-inter text-coral uppercase tracking-wider text-sm font-medium">
            Testemunhos
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-cinza-texto mt-3 mb-6">
            O Que Dizem as Famílias
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed">
            Histórias reais de famílias que escolheram o caminho Montessori para
            os seus filhos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300 ${
                index % 2 === 1 ? "md:mt-8" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-coral/30 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amarelo text-amarelo"
                        />
                      ))}
                    </div>
                    <p className="font-inter text-cinza-texto/80 leading-relaxed mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-bege-fundo">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-azul-suave to-verde-pastel flex items-center justify-center">
                        <span className="font-inter text-white text-sm font-medium">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <p className="font-playfair text-cinza-texto font-medium">
                          {testimonial.name}
                        </p>
                        <p className="font-inter text-cinza-texto/60 text-sm">
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
