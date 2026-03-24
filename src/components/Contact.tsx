import { useState, type FormEvent, type ChangeEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@montessoriallaround.pt",
    href: "mailto:contacto@montessoriallaround.pt",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+351 912 345 678",
    href: "tel:+351912345678",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Lisboa, Portugal",
    href: null,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-inter text-coral uppercase tracking-wider text-sm font-medium">
            Contacto
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            Vamos Conversar
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            Tem dúvidas sobre a metodologia Montessori ou os nossos serviços?
            Entre em contacto e teremos todo o gosto em ajudar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-bege-fundo rounded-2xl p-5 sm:p-6 md:p-8 order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-inter text-sm text-cinza-texto mb-2"
                >
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="O seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-inter text-sm text-cinza-texto mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="o.seu@email.pt"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-inter text-sm text-cinza-texto mb-2"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Como podemos ajudar?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  "A enviar..."
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              {isSubmitted && (
                <p className="text-verde-pastel font-inter text-center text-sm sm:text-base">
                  Mensagem enviada com sucesso! Entraremos em contacto brevemente.
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-azul-suave/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-azul-suave" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-inter text-xs sm:text-sm text-cinza-texto/60 uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-playfair text-base sm:text-lg text-cinza-texto hover:text-coral transition-colors break-all sm:break-normal"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-playfair text-base sm:text-lg text-cinza-texto">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Hint */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-bege-fundo rounded-xl">
              <p className="font-inter text-cinza-texto/80 text-xs sm:text-sm leading-relaxed">
                Siga-nos nas redes sociais para dicas diárias sobre educação
                Montessori, atividades para fazer em casa e novidades sobre os
                nossos serviços.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
