import { useState, type FormEvent, type ChangeEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { t, i18n } = useTranslation();
  const header = useScrollReveal();
  const formSection = useScrollReveal({ threshold: 0.1 });
  const infoSection = useScrollReveal({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const contactInfo = [
    {
      icon: Mail,
      labelKey: "contact.info.email",
      value: "carreira.roberta@yahoo.com",
      href: "mailto:carreira.roberta@yahoo.com",
    },
    {
      icon: Phone,
      labelKey: "contact.info.phone",
      value: "+351 912 591 952",
      href: "tel:+351912591952",
    },
    {
      icon: MapPin,
      labelKey: "contact.info.location",
      value: t("common.location"),
      href: null,
    },
  ];

  const subjectOptions = [
    { value: "consultoria-familias", labelKey: "contact.form.subjects.familyConsulting" },
    { value: "babysitting", labelKey: "contact.form.subjects.babysitting" },
    { value: "yoga", labelKey: "contact.form.subjects.yoga" },
    { value: "natureza", labelKey: "contact.form.subjects.nature" },
    { value: "experiencias-culturais", labelKey: "contact.form.subjects.cultural" },
    { value: "consultoria-escolas", labelKey: "contact.form.subjects.schoolConsulting" },
    { value: "outro", labelKey: "contact.form.subjects.other" },
  ];

  const getSubjectLabel = (value: string) => {
    const option = subjectOptions.find(opt => opt.value === value);
    return option ? t(option.labelKey) : value;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/carreira.roberta@yahoo.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: getSubjectLabel(formData.subject),
          message: formData.message,
          _subject: `[Montessori All Around] ${getSubjectLabel(formData.subject)} - ${formData.name}`,
          _template: "table",
          _captcha: "false"
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const successMessage: Record<string, string> = {
    pt: "Mensagem enviada com sucesso! Entraremos em contacto brevemente.",
    en: "Message sent successfully! We will get in touch shortly.",
    it: "Messaggio inviato con successo! Ti contatteremo a breve.",
    zh: "信息发送成功！我们将尽快与您联系。",
    es: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
    fr: "Message envoyé avec succès ! Nous vous contacterons bientôt."
  };

  const errorMessage: Record<string, string> = {
    pt: "Erro ao enviar mensagem. Por favor, tente novamente ou contacte-nos diretamente.",
    en: "Error sending message. Please try again or contact us directly.",
    it: "Errore nell'invio del messaggio. Riprova o contattaci direttamente.",
    zh: "发送消息时出错。请重试或直接与我们联系。",
    es: "Error al enviar el mensaje. Por favor, inténtelo de nuevo o contáctenos directamente.",
    fr: "Erreur lors de l'envoi du message. Veuillez réessayer ou nous contacter directement."
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={header.ref}
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 scroll-reveal ${header.isVisible ? "visible" : ""}`}
        >
          <span className="font-inter text-coral uppercase tracking-wider text-sm font-medium">
            {t("contact.tag")}
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            {t("contact.title")}
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div
            ref={formSection.ref}
            className={`bg-bege-fundo rounded-2xl p-5 sm:p-6 md:p-8 order-2 lg:order-1 scroll-reveal-left ${formSection.isVisible ? "visible" : ""}`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-inter text-sm text-cinza-texto mb-2"
                >
                  {t("contact.form.name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("contact.form.namePlaceholder")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-inter text-sm text-cinza-texto mb-2"
                >
                  {t("contact.form.email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-inter text-sm text-cinza-texto mb-2"
                >
                  {t("contact.form.subject")}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                  className="flex h-10 w-full rounded-lg border border-cinza-texto/20 bg-white px-3 py-2 text-base font-inter text-cinza-texto focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">{t("contact.form.subjectPlaceholder")}</option>
                  {subjectOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {t(option.labelKey)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-inter text-sm text-cinza-texto mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                />
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full btn-paint-fill"
              >
                {status === "submitting" ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    {t("common.sending")}
                  </>
                ) : (
                  <>
                    {t("common.sendMessage")}
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>

              {status === "success" && (
                <div className="flex items-center gap-2 p-4 bg-verde-pastel/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-verde-pastel flex-shrink-0" />
                  <p className="text-verde-pastel font-inter text-sm">
                    {successMessage[i18n.language] || successMessage.pt}
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-4 bg-coral/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-coral flex-shrink-0" />
                  <p className="text-coral font-inter text-sm">
                    {errorMessage[i18n.language] || errorMessage.pt}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div
            ref={infoSection.ref}
            className={`flex flex-col justify-center order-1 lg:order-2 scroll-reveal-right ${infoSection.isVisible ? "visible" : ""}`}
          >
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((item) => (
                <div key={item.labelKey} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-azul-suave/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-azul-suave" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-inter text-xs sm:text-sm text-cinza-texto/60 uppercase tracking-wider">
                      {t(item.labelKey)}
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

            {/* Additional Info */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-bege-fundo rounded-xl">
              <h3 className="font-playfair text-lg text-cinza-texto mb-2">
                {t("contact.community.title")}
              </h3>
              <p className="font-inter text-cinza-texto/80 text-xs sm:text-sm leading-relaxed">
                {t("contact.community.description")}
              </p>
            </div>

            {/* Social hint */}
            <div className="mt-4 p-4 sm:p-6 bg-coral/10 rounded-xl">
              <p className="font-inter text-cinza-texto/80 text-xs sm:text-sm leading-relaxed">
                {t("contact.social.hint")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
