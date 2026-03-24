import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bege-fundo">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10">
          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-azul-suave/20 rounded-xl">
              <Shield className="w-8 h-8 text-azul-suave" />
            </div>
            <div>
              <h1 className="font-playfair text-3xl sm:text-4xl text-cinza-texto">
                Política de Privacidade
              </h1>
              <p className="text-cinza-texto/60 font-inter text-sm mt-1">
                Última atualização: Março de 2026
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none font-inter text-cinza-texto/80 space-y-8">

            {/* Introdução */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">1. Introdução</h2>
              <p className="leading-relaxed">
                A Montessori All Around ("nós", "nosso" ou "nossa") está comprometida em proteger a privacidade e os dados pessoais de todos os utilizadores do nosso website e serviços. Esta Política de Privacidade explica como recolhemos, utilizamos, armazenamos e protegemos as suas informações pessoais, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) - Regulamento (UE) 2016/679 - e a Lei n.º 58/2019 de 8 de agosto (Lei de Proteção de Dados Pessoais portuguesa).
              </p>
              <p className="leading-relaxed mt-4">
                Ao utilizar o nosso website ou serviços, o utilizador reconhece que leu e compreendeu esta Política de Privacidade.
              </p>
            </section>

            {/* Responsável pelo Tratamento */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">2. Responsável pelo Tratamento de Dados</h2>
              <p className="leading-relaxed">
                O responsável pelo tratamento dos seus dados pessoais é:
              </p>
              <div className="bg-bege-fundo p-4 rounded-xl mt-4">
                <p><strong>Montessori All Around</strong></p>
                <p>Lisboa, Portugal</p>
                <p>Email: contacto@montessoriallaround.pt</p>
                <p>Telefone: +351 912 345 678</p>
              </div>
              <p className="leading-relaxed mt-4">
                Para quaisquer questões relacionadas com a proteção dos seus dados pessoais, pode contactar-nos através do email indicado acima.
              </p>
            </section>

            {/* Dados Recolhidos */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">3. Dados Pessoais que Recolhemos</h2>
              <p className="leading-relaxed">
                Recolhemos os seguintes tipos de dados pessoais:
              </p>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">3.1. Dados fornecidos diretamente pelo utilizador:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dados de identificação:</strong> nome completo</li>
                <li><strong>Dados de contacto:</strong> endereço de email, número de telefone</li>
                <li><strong>Conteúdo de comunicações:</strong> mensagens enviadas através do formulário de contacto</li>
                <li><strong>Dados relativos a crianças:</strong> nome e idade das crianças (apenas quando fornecidos voluntariamente pelos pais/encarregados de educação no âmbito dos nossos serviços)</li>
              </ul>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">3.2. Dados recolhidos automaticamente:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dados técnicos:</strong> endereço IP, tipo de browser, sistema operativo, dispositivo utilizado</li>
                <li><strong>Dados de navegação:</strong> páginas visitadas, tempo de permanência, origem do tráfego</li>
                <li><strong>Cookies e tecnologias similares:</strong> conforme descrito na nossa Política de Cookies</li>
              </ul>
            </section>

            {/* Finalidades */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">4. Finalidades do Tratamento</h2>
              <p className="leading-relaxed">
                Utilizamos os seus dados pessoais para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Responder a pedidos de contacto:</strong> processar e responder às suas mensagens e pedidos de informação</li>
                <li><strong>Prestação de serviços:</strong> gestão de inscrições, turmas, consultorias e formações</li>
                <li><strong>Comunicação:</strong> envio de informações sobre os nossos serviços, novidades e eventos (apenas com o seu consentimento)</li>
                <li><strong>Melhoria do website:</strong> análise estatística para melhorar a experiência do utilizador</li>
                <li><strong>Cumprimento de obrigações legais:</strong> quando exigido por lei ou regulamentos aplicáveis</li>
                <li><strong>Proteção de interesses legítimos:</strong> prevenção de fraudes e segurança do website</li>
              </ul>
            </section>

            {/* Base Legal */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">5. Base Legal para o Tratamento</h2>
              <p className="leading-relaxed">
                O tratamento dos seus dados pessoais baseia-se nas seguintes bases legais, conforme o artigo 6.º do RGPD:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Consentimento (Art. 6.º, n.º 1, al. a)):</strong> quando nos fornece os seus dados através do formulário de contacto ou quando aceita receber comunicações de marketing</li>
                <li><strong>Execução de contrato (Art. 6.º, n.º 1, al. b)):</strong> quando o tratamento é necessário para a prestação dos nossos serviços</li>
                <li><strong>Obrigação legal (Art. 6.º, n.º 1, al. c)):</strong> quando somos obrigados por lei a tratar determinados dados</li>
                <li><strong>Interesses legítimos (Art. 6.º, n.º 1, al. f)):</strong> para fins de segurança, prevenção de fraudes e melhoria dos nossos serviços, desde que não prevaleçam os seus direitos e liberdades fundamentais</li>
              </ul>
            </section>

            {/* Partilha de Dados */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">6. Partilha de Dados Pessoais</h2>
              <p className="leading-relaxed">
                Não vendemos, alugamos ou partilhamos os seus dados pessoais com terceiros para fins de marketing sem o seu consentimento expresso.
              </p>
              <p className="leading-relaxed mt-4">
                Podemos partilhar os seus dados com:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Prestadores de serviços:</strong> empresas que nos auxiliam na prestação dos nossos serviços (ex: alojamento web, email), sempre sob acordos de confidencialidade e proteção de dados</li>
                <li><strong>Autoridades competentes:</strong> quando exigido por lei ou para proteger os nossos direitos legais</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Todos os terceiros com quem partilhamos dados estão obrigados a cumprir o RGPD e a manter a confidencialidade das informações.
              </p>
            </section>

            {/* Transferências Internacionais */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">7. Transferências Internacionais de Dados</h2>
              <p className="leading-relaxed">
                Os seus dados pessoais são principalmente processados e armazenados dentro do Espaço Económico Europeu (EEE).
              </p>
              <p className="leading-relaxed mt-4">
                Caso seja necessário transferir dados para fora do EEE, garantimos que tal transferência é realizada em conformidade com o RGPD, através de:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Decisões de adequação da Comissão Europeia</li>
                <li>Cláusulas contratuais-tipo aprovadas pela Comissão Europeia</li>
                <li>Outros mecanismos legalmente previstos</li>
              </ul>
            </section>

            {/* Retenção de Dados */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">8. Período de Conservação dos Dados</h2>
              <p className="leading-relaxed">
                Conservamos os seus dados pessoais apenas pelo período necessário para cumprir as finalidades para as quais foram recolhidos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Dados de contacto e comunicações:</strong> até 2 anos após o último contacto, salvo se existir uma relação contratual ativa</li>
                <li><strong>Dados contratuais:</strong> durante a vigência do contrato e até 10 anos após o seu término, para cumprimento de obrigações legais</li>
                <li><strong>Dados de faturação:</strong> 10 anos, conforme exigido pela legislação fiscal portuguesa</li>
                <li><strong>Dados de navegação e cookies:</strong> conforme especificado na Política de Cookies</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Após estes períodos, os dados serão eliminados de forma segura ou anonimizados.
              </p>
            </section>

            {/* Direitos dos Titulares */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">9. Os Seus Direitos</h2>
              <p className="leading-relaxed">
                Ao abrigo do RGPD, tem os seguintes direitos relativamente aos seus dados pessoais:
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li>
                  <strong>Direito de acesso (Art. 15.º):</strong> obter confirmação de que os seus dados são tratados e aceder aos mesmos
                </li>
                <li>
                  <strong>Direito de retificação (Art. 16.º):</strong> solicitar a correção de dados inexatos ou incompletos
                </li>
                <li>
                  <strong>Direito ao apagamento (Art. 17.º):</strong> solicitar a eliminação dos seus dados em determinadas circunstâncias ("direito a ser esquecido")
                </li>
                <li>
                  <strong>Direito à limitação do tratamento (Art. 18.º):</strong> solicitar a restrição do tratamento dos seus dados
                </li>
                <li>
                  <strong>Direito à portabilidade (Art. 20.º):</strong> receber os seus dados num formato estruturado e de uso corrente
                </li>
                <li>
                  <strong>Direito de oposição (Art. 21.º):</strong> opor-se ao tratamento dos seus dados para determinadas finalidades
                </li>
                <li>
                  <strong>Direito a retirar o consentimento:</strong> quando o tratamento se baseia no consentimento, pode retirá-lo a qualquer momento
                </li>
                <li>
                  <strong>Direito a apresentar reclamação:</strong> junto da Comissão Nacional de Proteção de Dados (CNPD) - www.cnpd.pt
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                Para exercer qualquer um destes direitos, contacte-nos através de <strong>contacto@montessoriallaround.pt</strong>. Responderemos ao seu pedido no prazo máximo de 30 dias.
              </p>
            </section>

            {/* Segurança */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">10. Segurança dos Dados</h2>
              <p className="leading-relaxed">
                Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Encriptação de dados em trânsito (HTTPS/SSL)</li>
                <li>Acesso restrito aos dados apenas a pessoal autorizado</li>
                <li>Backups regulares e seguros</li>
                <li>Monitorização e auditorias de segurança</li>
                <li>Formação em proteção de dados para colaboradores</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">11. Cookies e Tecnologias Similares</h2>
              <p className="leading-relaxed">
                O nosso website utiliza cookies e tecnologias similares para melhorar a experiência de navegação. Os tipos de cookies utilizados incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do website</li>
                <li><strong>Cookies de desempenho:</strong> ajudam-nos a compreender como os visitantes interagem com o website</li>
                <li><strong>Cookies de funcionalidade:</strong> permitem lembrar as suas preferências</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Pode gerir as suas preferências de cookies através das configurações do seu browser. Note que a desativação de alguns cookies pode afetar a funcionalidade do website.
              </p>
            </section>

            {/* Menores */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">12. Dados de Menores</h2>
              <p className="leading-relaxed">
                Os nossos serviços são dirigidos a adultos (pais, encarregados de educação e educadores). Não recolhemos intencionalmente dados pessoais diretamente de menores de 16 anos.
              </p>
              <p className="leading-relaxed mt-4">
                Quaisquer dados relativos a crianças são fornecidos pelos pais ou encarregados de educação no âmbito da prestação dos nossos serviços educativos, com o seu consentimento expresso.
              </p>
              <p className="leading-relaxed mt-4">
                Se tomarmos conhecimento de que recolhemos inadvertidamente dados de um menor sem o consentimento parental adequado, eliminaremos esses dados imediatamente.
              </p>
            </section>

            {/* Alterações */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">13. Alterações a Esta Política</h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente para refletir alterações nas nossas práticas ou na legislação aplicável.
              </p>
              <p className="leading-relaxed mt-4">
                Quaisquer alterações significativas serão comunicadas através do nosso website ou por email (se tivermos o seu contacto). Recomendamos que reveja esta política regularmente.
              </p>
              <p className="leading-relaxed mt-4">
                A data da última atualização está indicada no início deste documento.
              </p>
            </section>

            {/* Contacto */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">14. Contactos</h2>
              <p className="leading-relaxed">
                Para quaisquer questões sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, contacte-nos:
              </p>
              <div className="bg-bege-fundo p-6 rounded-xl mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-coral" />
                  <span>contacto@montessoriallaround.pt</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-coral" />
                  <span>Assunto: Proteção de Dados Pessoais</span>
                </div>
              </div>
              <p className="leading-relaxed mt-6">
                Pode também apresentar uma reclamação junto da autoridade de controlo competente:
              </p>
              <div className="bg-bege-fundo p-6 rounded-xl mt-4">
                <p><strong>Comissão Nacional de Proteção de Dados (CNPD)</strong></p>
                <p>Av. D. Carlos I, 134 - 1.º</p>
                <p>1200-651 Lisboa</p>
                <p>Website: www.cnpd.pt</p>
              </div>
            </section>

          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-cinza-texto/10 text-center">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar à página inicial
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-cinza-texto py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm font-inter">
            © {new Date().getFullYear()} Montessori All Around. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
