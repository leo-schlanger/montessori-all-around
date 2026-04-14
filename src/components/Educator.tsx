import { Award, Globe, GraduationCap, Heart, Languages, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Educator() {
  const { t } = useTranslation();
  const header = useScrollReveal();
  const photoSection = useScrollReveal({ threshold: 0.1 });
  const bioSection = useScrollReveal({ threshold: 0.1 });
  const banner = useScrollReveal();

  const highlights = [
    {
      icon: Award,
      value: "+20",
      labelKey: "educator.highlights.experience",
    },
    {
      icon: Globe,
      value: "4",
      labelKey: "educator.highlights.countries",
    },
    {
      icon: GraduationCap,
      value: "AMS",
      labelKey: "educator.highlights.certification",
    },
    {
      icon: Languages,
      value: "6",
      labelKey: "educator.highlights.languages",
    },
  ];

  const certifications = t("educator.certifications.items", { returnObjects: true }) as string[];
  const expertise = t("educator.expertise.items", { returnObjects: true }) as string[];
  const countries = t("educator.international.countries", { returnObjects: true }) as string[];

  return (
    <section id="educadora" className="py-16 sm:py-20 md:py-28 bg-bege-fundo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={header.ref}
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 scroll-reveal ${header.isVisible ? "visible" : ""}`}
        >
          <span className="font-inter text-coral uppercase tracking-wider text-xs sm:text-sm font-medium">
            {t("educator.tag")}
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            {t("educator.name")}
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            {t("educator.title")}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column - Photo & Highlights */}
          <div
            ref={photoSection.ref}
            className={`space-y-8 scroll-reveal-left ${photoSection.isVisible ? "visible" : ""}`}
          >
            {/* Photo */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-lg">
                <img
                  src="/roberta_carreira_perfil.jpg"
                  alt={t("educator.name")}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <span className="absolute bottom-3 right-4 text-[11px] text-white/80 font-inter tracking-wide drop-shadow-md">
                  Fotografia: Ana Cunha
                </span>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral/20 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-verde-pastel/30 rounded-full -z-10" />
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {highlights.map((item, index) => (
                <div
                  key={item.labelKey}
                  className="bg-white rounded-2xl p-4 text-center card-hover-lift"
                  style={{
                    transition: "opacity 0.5s ease-out, transform 0.3s ease, box-shadow 0.3s ease",
                    transitionDelay: photoSection.isVisible ? `${(index + 1) * 100}ms` : "0ms",
                    opacity: photoSection.isVisible ? 1 : 0,
                    transform: photoSection.isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <item.icon className="w-5 h-5 text-coral mx-auto mb-2" />
                  <p className="font-playfair text-2xl text-cinza-texto font-semibold">
                    {item.value}
                  </p>
                  <p className="font-inter text-cinza-texto/60 text-xs mt-1">
                    {t(item.labelKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bio & Details */}
          <div
            ref={bioSection.ref}
            className={`space-y-8 scroll-reveal-right ${bioSection.isVisible ? "visible" : ""}`}
          >
            {/* Bio */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm card-hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-coral" />
                <h3 className="font-playfair text-xl text-cinza-texto font-medium">
                  {t("educator.profile.title")}
                </h3>
              </div>
              <div className="space-y-4 font-inter text-cinza-texto/80 text-sm sm:text-base leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t("educator.profile.bio1") }} />
                <p dangerouslySetInnerHTML={{ __html: t("educator.profile.bio2") }} />
                <p dangerouslySetInnerHTML={{ __html: t("educator.profile.bio3") }} />
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm card-hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-verde-pastel" />
                <h3 className="font-playfair text-xl text-cinza-texto font-medium">
                  {t("educator.certifications.title")}
                </h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0" />
                    <span className="font-inter text-cinza-texto/80 text-sm sm:text-base">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm card-hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-amarelo" />
                <h3 className="font-playfair text-xl text-cinza-texto font-medium">
                  {t("educator.expertise.title")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-bege-fundo px-3 py-2 rounded-full font-inter text-cinza-texto/80 text-xs sm:text-sm hover:bg-coral/15 hover:text-coral transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* International Experience Banner */}
        <div
          ref={banner.ref}
          className={`mt-12 sm:mt-16 bg-gradient-to-r from-coral/10 via-verde-pastel/10 to-azul-suave/10 rounded-3xl p-6 sm:p-8 text-center scroll-reveal-scale ${banner.isVisible ? "visible" : ""}`}
        >
          <h3 className="font-playfair text-lg sm:text-xl text-cinza-texto mb-3">
            {t("educator.international.title")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {countries.map((country, index) => (
              <div key={index} className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-coral" />
                <span className="font-inter text-cinza-texto/80 text-sm sm:text-base">
                  {country}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 font-inter text-cinza-texto/60 text-sm max-w-2xl mx-auto">
            {t("educator.international.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
