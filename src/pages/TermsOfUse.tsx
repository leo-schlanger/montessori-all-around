import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ScrollText, Mail, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function TermsOfUse() {
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
            <div className="p-3 bg-coral/20 rounded-xl">
              <ScrollText className="w-8 h-8 text-coral" />
            </div>
            <div>
              <h1 className="font-playfair text-3xl sm:text-4xl text-cinza-texto">
                Termos e Condições de Uso
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
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">1. Disposições Gerais</h2>
              <p className="leading-relaxed">
                Os presentes Termos e Condições de Uso ("Termos") regulam o acesso e utilização do website da Montessori All Around, acessível em projeto-montessori.vercel.app ("Website"), bem como a contratação dos serviços por nós disponibilizados.
              </p>
              <p className="leading-relaxed mt-4">
                Ao aceder e utilizar este Website, o utilizador declara ter lido, compreendido e aceite integralmente os presentes Termos. Se não concordar com alguma disposição, deverá abster-se de utilizar o Website.
              </p>
              <p className="leading-relaxed mt-4">
                A Montessori All Around reserva-se o direito de alterar estes Termos a qualquer momento, sendo as alterações eficazes após a sua publicação no Website.
              </p>
            </section>

            {/* Identificação */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">2. Identificação do Prestador</h2>
              <div className="bg-bege-fundo p-4 rounded-xl">
                <p><strong>Denominação:</strong> Montessori All Around</p>
                <p><strong>Sede:</strong> Lisboa, Portugal</p>
                <p><strong>Email:</strong> contacto@montessoriallaround.pt</p>
                <p><strong>Telefone:</strong> +351 912 345 678</p>
              </div>
            </section>

            {/* Serviços */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">3. Descrição dos Serviços</h2>
              <p className="leading-relaxed">
                A Montessori All Around disponibiliza os seguintes serviços educativos baseados na metodologia Montessori:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Turmas Montessori:</strong> programa educativo para crianças dos 3 aos 6 anos, em ambiente preparado com materiais autênticos e educadores certificados</li>
                <li><strong>Consultoria para Pais:</strong> orientação personalizada para implementação dos princípios Montessori no ambiente doméstico</li>
                <li><strong>Formação para Educadores:</strong> cursos e workshops para profissionais de educação</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Os detalhes específicos de cada serviço, incluindo preços, horários e condições particulares, são comunicados mediante pedido de informação ou no momento da contratação.
              </p>
            </section>

            {/* Utilização do Website */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">4. Regras de Utilização do Website</h2>
              <p className="leading-relaxed">
                O utilizador compromete-se a utilizar o Website de forma lícita, diligente e de boa-fé, abstendo-se de:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Utilizar o Website para fins ilegais ou não autorizados</li>
                <li>Transmitir vírus, malware ou qualquer código malicioso</li>
                <li>Tentar aceder a áreas restritas do Website sem autorização</li>
                <li>Interferir com o funcionamento normal do Website</li>
                <li>Recolher dados de outros utilizadores sem consentimento</li>
                <li>Reproduzir, copiar ou distribuir conteúdos do Website sem autorização</li>
                <li>Utilizar o Website para envio de spam ou comunicações não solicitadas</li>
                <li>Praticar qualquer ato que possa danificar a reputação da Montessori All Around</li>
              </ul>
            </section>

            {/* Formulário de Contacto */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">5. Formulário de Contacto</h2>
              <p className="leading-relaxed">
                O Website disponibiliza um formulário de contacto para pedidos de informação. Ao submeter o formulário, o utilizador:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Garante que os dados fornecidos são verdadeiros, atuais e completos</li>
                <li>Autoriza o tratamento dos dados para resposta ao seu pedido, nos termos da Política de Privacidade</li>
                <li>Compreende que a resposta será enviada para o email indicado</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Não garantimos um prazo específico de resposta, embora nos esforcemos por responder no mais curto espaço de tempo possível.
              </p>
            </section>

            {/* Contratação de Serviços */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">6. Contratação de Serviços</h2>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">6.1. Processo de Contratação</h3>
              <p className="leading-relaxed">
                A contratação de serviços realiza-se através de:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-4">
                <li>Pedido de informação através do formulário de contacto ou email</li>
                <li>Agendamento de reunião presencial ou online para apresentação detalhada</li>
                <li>Formalização através de contrato escrito específico para cada serviço</li>
                <li>Pagamento conforme condições acordadas</li>
              </ol>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">6.2. Preços e Pagamento</h3>
              <p className="leading-relaxed">
                Os preços dos serviços são comunicados individualmente e incluem IVA à taxa legal em vigor, quando aplicável. As condições de pagamento são estabelecidas no contrato específico de cada serviço.
              </p>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">6.3. Direito de Livre Resolução</h3>
              <p className="leading-relaxed">
                Nos termos do Decreto-Lei n.º 24/2014, o consumidor tem direito a resolver o contrato no prazo de 14 dias a contar da data de celebração, sem necessidade de indicar qualquer motivo e sem incorrer em quaisquer custos, salvo as exceções legalmente previstas.
              </p>
              <p className="leading-relaxed mt-4">
                Este direito não se aplica a serviços já integralmente prestados quando a execução tenha começado com o consentimento prévio e expresso do consumidor e o reconhecimento de que perde o direito de livre resolução.
              </p>
            </section>

            {/* Propriedade Intelectual */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">7. Propriedade Intelectual</h2>
              <p className="leading-relaxed">
                Todos os conteúdos presentes no Website, incluindo mas não se limitando a textos, imagens, logótipos, gráficos, ícones, fotografias, vídeos, software e design, são propriedade da Montessori All Around ou dos seus licenciantes, estando protegidos pelas leis portuguesas e europeias de propriedade intelectual.
              </p>
              <p className="leading-relaxed mt-4">
                É expressamente proibido, sem autorização prévia e por escrito:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Reproduzir, copiar ou duplicar qualquer conteúdo do Website</li>
                <li>Modificar, adaptar ou criar obras derivadas</li>
                <li>Distribuir, publicar ou transmitir os conteúdos</li>
                <li>Utilizar os conteúdos para fins comerciais</li>
                <li>Remover avisos de direitos de autor ou propriedade</li>
              </ul>
              <p className="leading-relaxed mt-4">
                A utilização do Website não confere ao utilizador qualquer direito de propriedade intelectual sobre os seus conteúdos.
              </p>
            </section>

            {/* Limitação de Responsabilidade */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">8. Limitação de Responsabilidade</h2>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">8.1. Conteúdos Informativos</h3>
              <p className="leading-relaxed">
                Os conteúdos do Website têm caráter meramente informativo sobre a metodologia Montessori e os nossos serviços. Não constituem aconselhamento educativo, médico ou psicológico individualizado.
              </p>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">8.2. Disponibilidade do Website</h3>
              <p className="leading-relaxed">
                Não garantimos que o Website estará disponível de forma ininterrupta ou livre de erros. Reservamo-nos o direito de suspender, modificar ou descontinuar o Website a qualquer momento, sem aviso prévio.
              </p>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">8.3. Links Externos</h3>
              <p className="leading-relaxed">
                O Website pode conter links para websites de terceiros. Não nos responsabilizamos pelo conteúdo, políticas de privacidade ou práticas desses websites.
              </p>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">8.4. Exclusão de Responsabilidade</h3>
              <p className="leading-relaxed">
                Na máxima extensão permitida por lei, a Montessori All Around não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes da utilização ou impossibilidade de utilização do Website.
              </p>
            </section>

            {/* Proteção de Dados */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">9. Proteção de Dados Pessoais</h2>
              <p className="leading-relaxed">
                O tratamento de dados pessoais realizado através do Website rege-se pela nossa{" "}
                <Link to="/politica-privacidade" className="text-coral hover:underline">
                  Política de Privacidade
                </Link>
                , que constitui parte integrante dos presentes Termos.
              </p>
              <p className="leading-relaxed mt-4">
                Cumprimos integralmente o Regulamento Geral sobre a Proteção de Dados (RGPD) e a legislação portuguesa de proteção de dados.
              </p>
            </section>

            {/* Reclamações */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">10. Reclamações e Resolução de Litígios</h2>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">10.1. Reclamações</h3>
              <p className="leading-relaxed">
                Quaisquer reclamações relativas aos nossos serviços ou ao Website devem ser dirigidas por escrito para contacto@montessoriallaround.pt. Comprometemo-nos a analisar e responder no prazo de 15 dias úteis.
              </p>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">10.2. Livro de Reclamações</h3>
              <p className="leading-relaxed">
                Disponibilizamos o Livro de Reclamações Eletrónico, acessível em{" "}
                <a
                  href="https://www.livroreclamacoes.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline"
                >
                  www.livroreclamacoes.pt
                </a>
              </p>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">10.3. Resolução Alternativa de Litígios</h3>
              <p className="leading-relaxed">
                Em caso de litígio de consumo, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo. Informações disponíveis em{" "}
                <a
                  href="https://www.consumidor.gov.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline"
                >
                  www.consumidor.gov.pt
                </a>
              </p>

              <div className="bg-amarelo/10 border border-amarelo/30 p-4 rounded-xl mt-4 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amarelo flex-shrink-0 mt-0.5" />
                <p className="text-sm">
                  <strong>Plataforma ODR:</strong> Para litígios relacionados com contratos celebrados online, pode utilizar a Plataforma de Resolução de Litígios em Linha da UE:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral hover:underline"
                  >
                    ec.europa.eu/consumers/odr
                  </a>
                </p>
              </div>
            </section>

            {/* Lei Aplicável */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">11. Lei Aplicável e Foro Competente</h2>
              <p className="leading-relaxed">
                Os presentes Termos são regidos pela lei portuguesa.
              </p>
              <p className="leading-relaxed mt-4">
                Para a resolução de quaisquer litígios emergentes da interpretação ou execução dos presentes Termos, será competente o foro da comarca de Lisboa, com expressa renúncia a qualquer outro, sem prejuízo das normas legais imperativas relativas à competência territorial em matéria de direitos dos consumidores.
              </p>
            </section>

            {/* Disposições Finais */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">12. Disposições Finais</h2>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">12.1. Invalidade Parcial</h3>
              <p className="leading-relaxed">
                Se qualquer disposição dos presentes Termos for considerada inválida ou inexequível, as restantes disposições manter-se-ão em pleno vigor e efeito.
              </p>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">12.2. Renúncia</h3>
              <p className="leading-relaxed">
                O facto de a Montessori All Around não exercer ou fazer cumprir qualquer direito ou disposição dos presentes Termos não constitui uma renúncia a esse direito ou disposição.
              </p>

              <h3 className="font-playfair text-xl text-cinza-texto mt-6 mb-3">12.3. Acordo Integral</h3>
              <p className="leading-relaxed">
                Os presentes Termos, juntamente com a Política de Privacidade, constituem o acordo integral entre o utilizador e a Montessori All Around relativamente à utilização do Website.
              </p>
            </section>

            {/* Contacto */}
            <section>
              <h2 className="font-playfair text-2xl text-cinza-texto mb-4">13. Contactos</h2>
              <p className="leading-relaxed">
                Para quaisquer questões sobre estes Termos e Condições, contacte-nos:
              </p>
              <div className="bg-bege-fundo p-6 rounded-xl mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-coral" />
                  <span>contacto@montessoriallaround.pt</span>
                </div>
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
