import { Award, Globe, GraduationCap, Heart, Languages, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Award,
    value: "+20",
    label: "Anos de Experiência",
  },
  {
    icon: Globe,
    value: "4",
    label: "Países",
  },
  {
    icon: GraduationCap,
    value: "AMS",
    label: "Certificação Montessori",
  },
  {
    icon: Languages,
    value: "6",
    label: "Idiomas",
  },
];

const certifications = [
  "Certificação American Montessori Society (AMS/MACTE)",
  "Montessori Orientation AMI - Infant & Toddler",
  "Professora de Yoga & Mindfulness para Crianças",
  "Licenciatura em Belas-Artes com Distinção",
];

const expertise = [
  "Educação Montessori (Bebés, Toddlers e Early Childhood)",
  "Liderança Pedagógica e Gestão de Equipas",
  "Educação Bilingue e Comunicação Multicultural",
  "Integração de Arte, Yoga e Movimento",
  "Aprendizagem na Natureza",
  "Comunicação com Famílias e Workshops",
];

export function Educator() {
  return (
    <section id="educadora" className="py-16 sm:py-20 md:py-28 bg-bege-fundo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="font-inter text-coral uppercase tracking-wider text-xs sm:text-sm font-medium">
            A Educadora
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto mt-3 mb-4 sm:mb-6">
            Roberta Carreira
          </h2>
          <p className="font-inter text-cinza-texto/80 leading-relaxed text-sm sm:text-base">
            Educadora Montessori Internacional e Líder Pedagógica
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column - Photo & Highlights */}
          <div className="space-y-8">
            {/* Photo */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-lg">
                <img
                  src="/roberta_carreira_perfil.jpg"
                  alt="Roberta Carreira - Educadora Montessori Internacional com mais de 20 anos de experiência"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-coral/20 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-verde-pastel/30 rounded-full -z-10" />
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <item.icon className="w-5 h-5 text-coral mx-auto mb-2" />
                  <p className="font-playfair text-2xl text-cinza-texto font-semibold">
                    {item.value}
                  </p>
                  <p className="font-inter text-cinza-texto/60 text-xs mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bio & Details */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-coral" />
                <h3 className="font-playfair text-xl text-cinza-texto font-medium">
                  Perfil Profissional
                </h3>
              </div>
              <div className="space-y-4 font-inter text-cinza-texto/80 text-sm sm:text-base leading-relaxed">
                <p>
                  Sou uma educadora Montessori internacional com mais de <strong>20 anos de experiência</strong> em
                  educação de infância, tendo trabalhado em <strong>Portugal, China, Itália e Estados Unidos</strong>.
                </p>
                <p>
                  A minha jornada inclui a liderança e desenvolvimento de ambientes Montessori de elevada qualidade
                  para crianças dos <strong>6 meses aos 7 anos</strong>, sempre com um forte enfoque na autonomia,
                  desenvolvimento emocional, criatividade e excelência educativa.
                </p>
                <p>
                  Combino a pedagogia Montessori com a minha formação em <strong>Belas-Artes</strong>,
                  <strong>Yoga para crianças</strong> e uma profunda ligação com a natureza, criando experiências
                  educativas verdadeiramente holísticas.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-verde-pastel" />
                <h3 className="font-playfair text-xl text-cinza-texto font-medium">
                  Formação e Certificações
                </h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-coral rounded-full mt-2 flex-shrink-0" />
                    <span className="font-inter text-cinza-texto/80 text-sm sm:text-base">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expertise */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-amarelo" />
                <h3 className="font-playfair text-xl text-cinza-texto font-medium">
                  Competências
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="bg-bege-fundo px-3 py-2 rounded-full font-inter text-cinza-texto/80 text-xs sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* International Experience Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-coral/10 via-verde-pastel/10 to-azul-suave/10 rounded-3xl p-6 sm:p-8 text-center">
          <h3 className="font-playfair text-lg sm:text-xl text-cinza-texto mb-3">
            Experiência Internacional
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {["Portugal", "China", "Itália", "Estados Unidos"].map((country) => (
              <div key={country} className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-coral" />
                <span className="font-inter text-cinza-texto/80 text-sm sm:text-base">
                  {country}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 font-inter text-cinza-texto/60 text-sm max-w-2xl mx-auto">
            Incluindo escolas de referência como Montessori School of Shanghai, The Little Oaks Montessori,
            Boundless Life e Nido Montessori Lisboa.
          </p>
        </div>
      </div>
    </section>
  );
}
