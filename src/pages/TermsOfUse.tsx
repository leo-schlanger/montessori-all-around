import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ScrollText, Mail, AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { LanguageSelector } from "@/components/LanguageSelector";

export function TermsOfUse() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = getTermsContent(currentLang);

  return (
    <div className="min-h-screen bg-bege-fundo">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{t("common.backToHome")}</span>
            </Button>
          </Link>
          <LanguageSelector />
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 md:p-10">
          {/* Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-8">
            <div className="p-3 bg-coral/20 rounded-xl flex-shrink-0">
              <ScrollText className="w-6 h-6 sm:w-8 sm:h-8 text-coral" />
            </div>
            <div>
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-cinza-texto">
                {content.title}
              </h1>
              <p className="text-cinza-texto/60 font-inter text-sm mt-1">
                {t("common.lastUpdated")}: {t("common.monthYear")}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none font-inter text-cinza-texto/80 space-y-8">
            {content.sections.map((section, index) => (
              <section key={index}>
                <h2 className="font-playfair text-xl sm:text-2xl text-cinza-texto mb-4">
                  {section.title}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <div key={pIndex} className="mt-4">
                    {typeof paragraph === "string" ? (
                      <p className="leading-relaxed">{paragraph}</p>
                    ) : paragraph.type === "list" && paragraph.items ? (
                      <ul className="list-disc pl-6 space-y-2">
                        {paragraph.items.map((item: string, iIndex: number) => (
                          <li key={iIndex}>{item}</li>
                        ))}
                      </ul>
                    ) : paragraph.type === "box" && paragraph.lines ? (
                      <div className="bg-bege-fundo p-4 sm:p-6 rounded-xl space-y-1">
                        {paragraph.lines.map((line: string, lIndex: number) => (
                          <p key={lIndex}>{line}</p>
                        ))}
                      </div>
                    ) : paragraph.type === "warning" && paragraph.text ? (
                      <div className="bg-amarelo/10 border border-amarelo/30 p-4 rounded-xl flex gap-3">
                        <AlertTriangle className="w-5 h-5 text-amarelo flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{paragraph.text}</p>
                      </div>
                    ) : paragraph.type === "contact" && paragraph.email ? (
                      <div className="bg-bege-fundo p-4 sm:p-6 rounded-xl space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-coral flex-shrink-0" />
                          <span className="break-all">{paragraph.email}</span>
                        </div>
                      </div>
                    ) : paragraph.type === "link" && paragraph.href && paragraph.linkText ? (
                      <p className="leading-relaxed">
                        {paragraph.text}{" "}
                        <Link to={paragraph.href} className="text-coral hover:underline">
                          {paragraph.linkText}
                        </Link>
                      </p>
                    ) : null}
                  </div>
                ))}
              </section>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-cinza-texto/10 text-center">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t("common.backToHomePage")}
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-cinza-texto py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm font-inter">
            © {new Date().getFullYear()} Montessori All Around. {t("common.allRightsReserved")}
          </p>
        </div>
      </footer>
    </div>
  );
}

// Terms content by language
function getTermsContent(lang: string) {
  const contents: Record<string, { title: string; sections: Array<{ title: string; content: Array<string | { type: string; items?: string[]; lines?: string[]; text?: string; email?: string; href?: string; linkText?: string }> }> }> = {
    pt: {
      title: "Termos e Condições de Uso",
      sections: [
        {
          title: "1. Disposições Gerais",
          content: [
            "Os presentes Termos e Condições de Uso regulam o acesso e utilização do website da Montessori All Around, bem como a contratação dos serviços por nós disponibilizados.",
            "Ao aceder e utilizar este Website, o utilizador declara ter lido, compreendido e aceite integralmente os presentes Termos."
          ]
        },
        {
          title: "2. Identificação do Prestador",
          content: [
            { type: "box", lines: ["Denominação: Montessori All Around", "Sede: Lisboa, Portugal", "Email: carreira.roberta@yahoo.com", "Telefone: +351 912 345 678"] }
          ]
        },
        {
          title: "3. Serviços",
          content: [
            "A Montessori All Around disponibiliza serviços educativos baseados na metodologia Montessori:",
            { type: "list", items: ["Consultoria para Famílias", "Babysitting Educativo", "Yoga para Crianças", "Programas na Natureza", "Experiências Culturais", "Consultoria para Escolas"] }
          ]
        },
        {
          title: "4. Regras de Utilização",
          content: [
            "O utilizador compromete-se a utilizar o Website de forma lícita, abstendo-se de:",
            { type: "list", items: ["Utilizar o Website para fins ilegais", "Transmitir vírus ou código malicioso", "Tentar aceder a áreas restritas", "Reproduzir conteúdos sem autorização"] }
          ]
        },
        {
          title: "5. Propriedade Intelectual",
          content: [
            "Todos os conteúdos presentes no Website, incluindo textos, imagens, logótipos e design, são propriedade da Montessori All Around ou dos seus licenciantes, estando protegidos pelas leis de propriedade intelectual."
          ]
        },
        {
          title: "6. Proteção de Dados",
          content: [
            { type: "link", text: "O tratamento de dados pessoais rege-se pela nossa", href: "/politica-privacidade", linkText: "Política de Privacidade" }
          ]
        },
        {
          title: "7. Lei Aplicável",
          content: [
            "Os presentes Termos são regidos pela lei portuguesa. Para a resolução de quaisquer litígios, será competente o foro da comarca de Lisboa."
          ]
        },
        {
          title: "8. Contactos",
          content: [
            "Para questões sobre estes Termos:",
            { type: "contact", email: "carreira.roberta@yahoo.com" }
          ]
        }
      ]
    },
    en: {
      title: "Terms and Conditions of Use",
      sections: [
        {
          title: "1. General Provisions",
          content: [
            "These Terms and Conditions of Use govern access to and use of the Montessori All Around website, as well as the contracting of services we provide.",
            "By accessing and using this Website, the user declares that they have read, understood and fully accepted these Terms."
          ]
        },
        {
          title: "2. Service Provider Identification",
          content: [
            { type: "box", lines: ["Name: Montessori All Around", "Headquarters: Lisbon, Portugal", "Email: carreira.roberta@yahoo.com", "Phone: +351 912 345 678"] }
          ]
        },
        {
          title: "3. Services",
          content: [
            "Montessori All Around provides educational services based on the Montessori methodology:",
            { type: "list", items: ["Family Consulting", "Educational Babysitting", "Children's Yoga", "Nature Programs", "Cultural Experiences", "School Consulting"] }
          ]
        },
        {
          title: "4. Usage Rules",
          content: [
            "The user agrees to use the Website lawfully, refraining from:",
            { type: "list", items: ["Using the Website for illegal purposes", "Transmitting viruses or malicious code", "Attempting to access restricted areas", "Reproducing content without authorization"] }
          ]
        },
        {
          title: "5. Intellectual Property",
          content: [
            "All content on the Website, including texts, images, logos and design, is the property of Montessori All Around or its licensors, and is protected by intellectual property laws."
          ]
        },
        {
          title: "6. Data Protection",
          content: [
            { type: "link", text: "The processing of personal data is governed by our", href: "/politica-privacidade", linkText: "Privacy Policy" }
          ]
        },
        {
          title: "7. Applicable Law",
          content: [
            "These Terms are governed by Portuguese law. For the resolution of any disputes, the courts of Lisbon shall have jurisdiction."
          ]
        },
        {
          title: "8. Contact",
          content: [
            "For questions about these Terms:",
            { type: "contact", email: "carreira.roberta@yahoo.com" }
          ]
        }
      ]
    },
    it: {
      title: "Termini e Condizioni d'Uso",
      sections: [
        {
          title: "1. Disposizioni Generali",
          content: [
            "I presenti Termini e Condizioni d'Uso regolano l'accesso e l'utilizzo del sito web di Montessori All Around, nonché la contrattazione dei servizi da noi forniti.",
            "Accedendo e utilizzando questo Sito Web, l'utente dichiara di aver letto, compreso e accettato integralmente i presenti Termini."
          ]
        },
        {
          title: "2. Identificazione del Fornitore",
          content: [
            { type: "box", lines: ["Denominazione: Montessori All Around", "Sede: Lisbona, Portogallo", "Email: carreira.roberta@yahoo.com", "Telefono: +351 912 345 678"] }
          ]
        },
        {
          title: "3. Servizi",
          content: [
            "Montessori All Around fornisce servizi educativi basati sulla metodologia Montessori:",
            { type: "list", items: ["Consulenza per Famiglie", "Babysitting Educativo", "Yoga per Bambini", "Programmi nella Natura", "Esperienze Culturali", "Consulenza per Scuole"] }
          ]
        },
        {
          title: "4. Regole di Utilizzo",
          content: [
            "L'utente si impegna a utilizzare il Sito Web in modo lecito, astenendosi dal:",
            { type: "list", items: ["Utilizzare il Sito Web per scopi illegali", "Trasmettere virus o codice malevolo", "Tentare di accedere ad aree riservate", "Riprodurre contenuti senza autorizzazione"] }
          ]
        },
        {
          title: "5. Proprietà Intellettuale",
          content: [
            "Tutti i contenuti presenti sul Sito Web, inclusi testi, immagini, loghi e design, sono di proprietà di Montessori All Around o dei suoi licenziatari, e sono protetti dalle leggi sulla proprietà intellettuale."
          ]
        },
        {
          title: "6. Protezione dei Dati",
          content: [
            { type: "link", text: "Il trattamento dei dati personali è regolato dalla nostra", href: "/politica-privacidade", linkText: "Informativa sulla Privacy" }
          ]
        },
        {
          title: "7. Legge Applicabile",
          content: [
            "I presenti Termini sono regolati dalla legge portoghese. Per la risoluzione di eventuali controversie, sarà competente il foro di Lisbona."
          ]
        },
        {
          title: "8. Contatti",
          content: [
            "Per domande su questi Termini:",
            { type: "contact", email: "carreira.roberta@yahoo.com" }
          ]
        }
      ]
    },
    zh: {
      title: "使用条款",
      sections: [
        {
          title: "1. 一般规定",
          content: [
            "本使用条款规定了对 Montessori All Around 网站的访问和使用，以及我们提供的服务的签约。",
            "通过访问和使用本网站，用户声明已阅读、理解并完全接受本条款。"
          ]
        },
        {
          title: "2. 服务提供商信息",
          content: [
            { type: "box", lines: ["名称：Montessori All Around", "总部：葡萄牙里斯本", "邮箱：carreira.roberta@yahoo.com", "电话：+351 912 345 678"] }
          ]
        },
        {
          title: "3. 服务",
          content: [
            "Montessori All Around 提供基于蒙台梭利教育法的教育服务：",
            { type: "list", items: ["家庭咨询", "教育式托儿", "儿童瑜伽", "自然项目", "文化体验", "学校咨询"] }
          ]
        },
        {
          title: "4. 使用规则",
          content: [
            "用户同意合法使用本网站，避免：",
            { type: "list", items: ["将网站用于非法目的", "传输病毒或恶意代码", "试图访问受限区域", "未经授权复制内容"] }
          ]
        },
        {
          title: "5. 知识产权",
          content: [
            "网站上的所有内容，包括文字、图片、标志和设计，均为 Montessori All Around 或其许可方的财产，受知识产权法保护。"
          ]
        },
        {
          title: "6. 数据保护",
          content: [
            { type: "link", text: "个人数据的处理受我们的", href: "/politica-privacidade", linkText: "隐私政策" }
          ]
        },
        {
          title: "7. 适用法律",
          content: [
            "本条款受葡萄牙法律管辖。对于任何争议的解决，里斯本法院具有管辖权。"
          ]
        },
        {
          title: "8. 联系方式",
          content: [
            "有关本条款的问题：",
            { type: "contact", email: "carreira.roberta@yahoo.com" }
          ]
        }
      ]
    },
    es: {
      title: "Términos y Condiciones de Uso",
      sections: [
        {
          title: "1. Disposiciones Generales",
          content: [
            "Los presentes Términos y Condiciones de Uso regulan el acceso y uso del sitio web de Montessori All Around, así como la contratación de los servicios que proporcionamos.",
            "Al acceder y utilizar este Sitio Web, el usuario declara haber leído, comprendido y aceptado íntegramente los presentes Términos."
          ]
        },
        {
          title: "2. Identificación del Proveedor",
          content: [
            { type: "box", lines: ["Denominación: Montessori All Around", "Sede: Lisboa, Portugal", "Email: carreira.roberta@yahoo.com", "Teléfono: +351 912 345 678"] }
          ]
        },
        {
          title: "3. Servicios",
          content: [
            "Montessori All Around proporciona servicios educativos basados en la metodología Montessori:",
            { type: "list", items: ["Consultoría para Familias", "Cuidado Infantil Educativo", "Yoga para Niños", "Programas en la Naturaleza", "Experiencias Culturales", "Consultoría para Escuelas"] }
          ]
        },
        {
          title: "4. Reglas de Uso",
          content: [
            "El usuario se compromete a utilizar el Sitio Web de forma lícita, absteniéndose de:",
            { type: "list", items: ["Utilizar el Sitio Web para fines ilegales", "Transmitir virus o código malicioso", "Intentar acceder a áreas restringidas", "Reproducir contenidos sin autorización"] }
          ]
        },
        {
          title: "5. Propiedad Intelectual",
          content: [
            "Todo el contenido presente en el Sitio Web, incluyendo textos, imágenes, logotipos y diseño, es propiedad de Montessori All Around o de sus licenciantes, y está protegido por las leyes de propiedad intelectual."
          ]
        },
        {
          title: "6. Protección de Datos",
          content: [
            { type: "link", text: "El tratamiento de datos personales se rige por nuestra", href: "/politica-privacidade", linkText: "Política de Privacidad" }
          ]
        },
        {
          title: "7. Ley Aplicable",
          content: [
            "Los presentes Términos se rigen por la ley portuguesa. Para la resolución de cualquier controversia, serán competentes los tribunales de Lisboa."
          ]
        },
        {
          title: "8. Contacto",
          content: [
            "Para preguntas sobre estos Términos:",
            { type: "contact", email: "carreira.roberta@yahoo.com" }
          ]
        }
      ]
    },
    fr: {
      title: "Conditions Générales d'Utilisation",
      sections: [
        {
          title: "1. Dispositions Générales",
          content: [
            "Les présentes Conditions Générales d'Utilisation régissent l'accès et l'utilisation du site web de Montessori All Around, ainsi que la souscription aux services que nous fournissons.",
            "En accédant et en utilisant ce Site Web, l'utilisateur déclare avoir lu, compris et accepté intégralement les présentes Conditions."
          ]
        },
        {
          title: "2. Identification du Prestataire",
          content: [
            { type: "box", lines: ["Dénomination : Montessori All Around", "Siège : Lisbonne, Portugal", "Email : carreira.roberta@yahoo.com", "Téléphone : +351 912 345 678"] }
          ]
        },
        {
          title: "3. Services",
          content: [
            "Montessori All Around fournit des services éducatifs basés sur la méthodologie Montessori :",
            { type: "list", items: ["Conseil aux Familles", "Garde d'Enfants Éducative", "Yoga pour Enfants", "Programmes Nature", "Expériences Culturelles", "Conseil aux Écoles"] }
          ]
        },
        {
          title: "4. Règles d'Utilisation",
          content: [
            "L'utilisateur s'engage à utiliser le Site Web de manière licite, en s'abstenant de :",
            { type: "list", items: ["Utiliser le Site Web à des fins illégales", "Transmettre des virus ou du code malveillant", "Tenter d'accéder à des zones restreintes", "Reproduire du contenu sans autorisation"] }
          ]
        },
        {
          title: "5. Propriété Intellectuelle",
          content: [
            "Tout le contenu présent sur le Site Web, y compris les textes, images, logos et design, est la propriété de Montessori All Around ou de ses concédants de licence, et est protégé par les lois sur la propriété intellectuelle."
          ]
        },
        {
          title: "6. Protection des Données",
          content: [
            { type: "link", text: "Le traitement des données personnelles est régi par notre", href: "/politica-privacidade", linkText: "Politique de Confidentialité" }
          ]
        },
        {
          title: "7. Loi Applicable",
          content: [
            "Les présentes Conditions sont régies par le droit portugais. Pour la résolution de tout litige, les tribunaux de Lisbonne seront compétents."
          ]
        },
        {
          title: "8. Contact",
          content: [
            "Pour toute question concernant ces Conditions :",
            { type: "contact", email: "carreira.roberta@yahoo.com" }
          ]
        }
      ]
    }
  };

  return contents[lang] || contents.pt;
}
