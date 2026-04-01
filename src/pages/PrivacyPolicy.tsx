import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Mail, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { LanguageSelector } from "@/components/LanguageSelector";

export function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Content sections by language
  const content = getPrivacyContent(currentLang);

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
            <div className="p-3 bg-azul-suave/20 rounded-xl flex-shrink-0">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-azul-suave" />
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
                    ) : paragraph.type === "contact" ? (
                      <div className="bg-bege-fundo p-4 sm:p-6 rounded-xl space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-coral flex-shrink-0" />
                          <span className="break-all">{paragraph.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-coral flex-shrink-0" />
                          <span>{paragraph.subject}</span>
                        </div>
                      </div>
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

// Privacy content by language
function getPrivacyContent(lang: string) {
  const contents: Record<string, { title: string; sections: Array<{ title: string; content: Array<string | { type: string; items?: string[]; lines?: string[]; email?: string; subject?: string }> }> }> = {
    pt: {
      title: "Política de Privacidade",
      sections: [
        {
          title: "1. Introdução",
          content: [
            "A Montessori All Around está comprometida em proteger a privacidade e os dados pessoais de todos os utilizadores do nosso website e serviços. Esta Política de Privacidade explica como recolhemos, utilizamos, armazenamos e protegemos as suas informações pessoais, em conformidade com o RGPD.",
            "Ao utilizar o nosso website ou serviços, o utilizador reconhece que leu e compreendeu esta Política de Privacidade."
          ]
        },
        {
          title: "2. Responsável pelo Tratamento",
          content: [
            "O responsável pelo tratamento dos seus dados pessoais é:",
            { type: "box", lines: ["Montessori All Around", "Lisboa, Portugal", "Email: contacto@montessoriallaround.pt", "Telefone: +351 912 345 678"] }
          ]
        },
        {
          title: "3. Dados Recolhidos",
          content: [
            "Recolhemos os seguintes tipos de dados pessoais:",
            { type: "list", items: ["Dados de identificação: nome completo", "Dados de contacto: email, telefone", "Conteúdo de comunicações através do formulário", "Dados técnicos: IP, browser, dispositivo", "Dados de navegação: páginas visitadas"] }
          ]
        },
        {
          title: "4. Finalidades do Tratamento",
          content: [
            "Utilizamos os seus dados para:",
            { type: "list", items: ["Responder a pedidos de contacto", "Prestação de serviços educativos", "Comunicação sobre novidades e eventos", "Melhoria do website", "Cumprimento de obrigações legais"] }
          ]
        },
        {
          title: "5. Os Seus Direitos",
          content: [
            "Ao abrigo do RGPD, tem os seguintes direitos:",
            { type: "list", items: ["Direito de acesso aos seus dados", "Direito de retificação", "Direito ao apagamento", "Direito à portabilidade", "Direito de oposição", "Direito a retirar o consentimento"] },
            "Para exercer estes direitos, contacte-nos através de contacto@montessoriallaround.pt."
          ]
        },
        {
          title: "6. Contactos",
          content: [
            "Para questões sobre proteção de dados:",
            { type: "contact", email: "contacto@montessoriallaround.pt", subject: "Assunto: Proteção de Dados Pessoais" }
          ]
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Introduction",
          content: [
            "Montessori All Around is committed to protecting the privacy and personal data of all users of our website and services. This Privacy Policy explains how we collect, use, store and protect your personal information, in compliance with GDPR.",
            "By using our website or services, you acknowledge that you have read and understood this Privacy Policy."
          ]
        },
        {
          title: "2. Data Controller",
          content: [
            "The data controller for your personal data is:",
            { type: "box", lines: ["Montessori All Around", "Lisbon, Portugal", "Email: contacto@montessoriallaround.pt", "Phone: +351 912 345 678"] }
          ]
        },
        {
          title: "3. Data Collected",
          content: [
            "We collect the following types of personal data:",
            { type: "list", items: ["Identification data: full name", "Contact data: email, phone", "Communication content through the form", "Technical data: IP, browser, device", "Navigation data: pages visited"] }
          ]
        },
        {
          title: "4. Processing Purposes",
          content: [
            "We use your data for:",
            { type: "list", items: ["Responding to contact requests", "Providing educational services", "Communication about news and events", "Website improvement", "Compliance with legal obligations"] }
          ]
        },
        {
          title: "5. Your Rights",
          content: [
            "Under GDPR, you have the following rights:",
            { type: "list", items: ["Right to access your data", "Right to rectification", "Right to erasure", "Right to data portability", "Right to object", "Right to withdraw consent"] },
            "To exercise these rights, contact us at contacto@montessoriallaround.pt."
          ]
        },
        {
          title: "6. Contact",
          content: [
            "For data protection questions:",
            { type: "contact", email: "contacto@montessoriallaround.pt", subject: "Subject: Personal Data Protection" }
          ]
        }
      ]
    },
    it: {
      title: "Informativa sulla Privacy",
      sections: [
        {
          title: "1. Introduzione",
          content: [
            "Montessori All Around si impegna a proteggere la privacy e i dati personali di tutti gli utenti del nostro sito web e servizi. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, memorizziamo e proteggiamo le vostre informazioni personali, in conformità con il GDPR.",
            "Utilizzando il nostro sito web o servizi, riconoscete di aver letto e compreso questa Informativa sulla Privacy."
          ]
        },
        {
          title: "2. Titolare del Trattamento",
          content: [
            "Il titolare del trattamento dei vostri dati personali è:",
            { type: "box", lines: ["Montessori All Around", "Lisbona, Portogallo", "Email: contacto@montessoriallaround.pt", "Telefono: +351 912 345 678"] }
          ]
        },
        {
          title: "3. Dati Raccolti",
          content: [
            "Raccogliamo i seguenti tipi di dati personali:",
            { type: "list", items: ["Dati identificativi: nome completo", "Dati di contatto: email, telefono", "Contenuto delle comunicazioni tramite il modulo", "Dati tecnici: IP, browser, dispositivo", "Dati di navigazione: pagine visitate"] }
          ]
        },
        {
          title: "4. Finalità del Trattamento",
          content: [
            "Utilizziamo i vostri dati per:",
            { type: "list", items: ["Rispondere alle richieste di contatto", "Fornire servizi educativi", "Comunicazione su novità ed eventi", "Miglioramento del sito web", "Adempimento degli obblighi legali"] }
          ]
        },
        {
          title: "5. I Vostri Diritti",
          content: [
            "Ai sensi del GDPR, avete i seguenti diritti:",
            { type: "list", items: ["Diritto di accesso ai vostri dati", "Diritto di rettifica", "Diritto alla cancellazione", "Diritto alla portabilità dei dati", "Diritto di opposizione", "Diritto di revocare il consenso"] },
            "Per esercitare questi diritti, contattateci all'indirizzo contacto@montessoriallaround.pt."
          ]
        },
        {
          title: "6. Contatti",
          content: [
            "Per domande sulla protezione dei dati:",
            { type: "contact", email: "contacto@montessoriallaround.pt", subject: "Oggetto: Protezione dei Dati Personali" }
          ]
        }
      ]
    },
    zh: {
      title: "隐私政策",
      sections: [
        {
          title: "1. 简介",
          content: [
            "Montessori All Around 致力于保护我们网站和服务的所有用户的隐私和个人数据。本隐私政策解释了我们如何根据 GDPR 收集、使用、存储和保护您的个人信息。",
            "使用我们的网站或服务，即表示您承认已阅读并理解本隐私政策。"
          ]
        },
        {
          title: "2. 数据控制者",
          content: [
            "您个人数据的数据控制者是：",
            { type: "box", lines: ["Montessori All Around", "葡萄牙里斯本", "邮箱: contacto@montessoriallaround.pt", "电话: +351 912 345 678"] }
          ]
        },
        {
          title: "3. 收集的数据",
          content: [
            "我们收集以下类型的个人数据：",
            { type: "list", items: ["身份数据：全名", "联系数据：电子邮件、电话", "通过表单进行的通信内容", "技术数据：IP、浏览器、设备", "导航数据：访问的页面"] }
          ]
        },
        {
          title: "4. 处理目的",
          content: [
            "我们将您的数据用于：",
            { type: "list", items: ["回复联系请求", "提供教育服务", "关于新闻和活动的沟通", "网站改进", "遵守法律义务"] }
          ]
        },
        {
          title: "5. 您的权利",
          content: [
            "根据 GDPR，您拥有以下权利：",
            { type: "list", items: ["访问您数据的权利", "更正权", "删除权", "数据可移植性权利", "反对权", "撤回同意的权利"] },
            "要行使这些权利，请通过 contacto@montessoriallaround.pt 与我们联系。"
          ]
        },
        {
          title: "6. 联系方式",
          content: [
            "有关数据保护问题：",
            { type: "contact", email: "contacto@montessoriallaround.pt", subject: "主题：个人数据保护" }
          ]
        }
      ]
    },
    es: {
      title: "Política de Privacidad",
      sections: [
        {
          title: "1. Introducción",
          content: [
            "Montessori All Around está comprometido con la protección de la privacidad y los datos personales de todos los usuarios de nuestro sitio web y servicios. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos su información personal, en cumplimiento con el RGPD.",
            "Al utilizar nuestro sitio web o servicios, usted reconoce que ha leído y comprendido esta Política de Privacidad."
          ]
        },
        {
          title: "2. Responsable del Tratamiento",
          content: [
            "El responsable del tratamiento de sus datos personales es:",
            { type: "box", lines: ["Montessori All Around", "Lisboa, Portugal", "Email: contacto@montessoriallaround.pt", "Teléfono: +351 912 345 678"] }
          ]
        },
        {
          title: "3. Datos Recopilados",
          content: [
            "Recopilamos los siguientes tipos de datos personales:",
            { type: "list", items: ["Datos de identificación: nombre completo", "Datos de contacto: email, teléfono", "Contenido de comunicaciones a través del formulario", "Datos técnicos: IP, navegador, dispositivo", "Datos de navegación: páginas visitadas"] }
          ]
        },
        {
          title: "4. Finalidades del Tratamiento",
          content: [
            "Utilizamos sus datos para:",
            { type: "list", items: ["Responder a solicitudes de contacto", "Prestación de servicios educativos", "Comunicación sobre novedades y eventos", "Mejora del sitio web", "Cumplimiento de obligaciones legales"] }
          ]
        },
        {
          title: "5. Sus Derechos",
          content: [
            "Bajo el RGPD, tiene los siguientes derechos:",
            { type: "list", items: ["Derecho de acceso a sus datos", "Derecho de rectificación", "Derecho de supresión", "Derecho a la portabilidad de datos", "Derecho de oposición", "Derecho a retirar el consentimiento"] },
            "Para ejercer estos derechos, contáctenos en contacto@montessoriallaround.pt."
          ]
        },
        {
          title: "6. Contacto",
          content: [
            "Para preguntas sobre protección de datos:",
            { type: "contact", email: "contacto@montessoriallaround.pt", subject: "Asunto: Protección de Datos Personales" }
          ]
        }
      ]
    },
    fr: {
      title: "Politique de Confidentialité",
      sections: [
        {
          title: "1. Introduction",
          content: [
            "Montessori All Around s'engage à protéger la vie privée et les données personnelles de tous les utilisateurs de notre site web et services. Cette Politique de Confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles, conformément au RGPD.",
            "En utilisant notre site web ou nos services, vous reconnaissez avoir lu et compris cette Politique de Confidentialité."
          ]
        },
        {
          title: "2. Responsable du Traitement",
          content: [
            "Le responsable du traitement de vos données personnelles est :",
            { type: "box", lines: ["Montessori All Around", "Lisbonne, Portugal", "Email : contacto@montessoriallaround.pt", "Téléphone : +351 912 345 678"] }
          ]
        },
        {
          title: "3. Données Collectées",
          content: [
            "Nous collectons les types de données personnelles suivants :",
            { type: "list", items: ["Données d'identification : nom complet", "Données de contact : email, téléphone", "Contenu des communications via le formulaire", "Données techniques : IP, navigateur, appareil", "Données de navigation : pages visitées"] }
          ]
        },
        {
          title: "4. Finalités du Traitement",
          content: [
            "Nous utilisons vos données pour :",
            { type: "list", items: ["Répondre aux demandes de contact", "Fournir des services éducatifs", "Communication sur les actualités et événements", "Amélioration du site web", "Respect des obligations légales"] }
          ]
        },
        {
          title: "5. Vos Droits",
          content: [
            "En vertu du RGPD, vous disposez des droits suivants :",
            { type: "list", items: ["Droit d'accès à vos données", "Droit de rectification", "Droit à l'effacement", "Droit à la portabilité des données", "Droit d'opposition", "Droit de retirer votre consentement"] },
            "Pour exercer ces droits, contactez-nous à contacto@montessoriallaround.pt."
          ]
        },
        {
          title: "6. Contact",
          content: [
            "Pour les questions relatives à la protection des données :",
            { type: "contact", email: "contacto@montessoriallaround.pt", subject: "Objet : Protection des Données Personnelles" }
          ]
        }
      ]
    }
  };

  return contents[lang] || contents.pt;
}
