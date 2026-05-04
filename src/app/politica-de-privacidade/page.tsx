import { SiteHeader } from "@/components/site-header";
import Image from "next/image";

const privacySections = [
  "I. Definições",
  "I.1. Para fins de perfeito entendimento desta Política de Privacidade, tem-se que: (a) por “você” e/ou “usuário (s)”, entende-se aqueles que enviam informações, preenchem cadastros ou compartilham conteúdo, por meio do JORNAL MARABÁ; (b) por “dados”, entende-se tudo aquilo que o usuário informar ao JORNAL MARABÁ, seja a respeito dele próprio, seja a respeito de situações, circunstâncias, terceiros, etc., possuindo caráter privado ou não.",
  "II. Coleta e Tratamento dos Dados",
  "II.1. A transmissão ou o envio de dados ao JORNAL MARABÁ é voluntário, podendo ter caráter obrigatório quando o usuário optar por utilizar-se de determinadas ações, conteúdos restritos, produtos e/ou serviços, cujas naturezas não permitam a falta de certos dados.",
  "II.2. Os dados pessoais, prestados por meio do JORNAL MARABÁ são tratados de maneira automatizada, sendo incorporados ao banco de dados eletrônico de que o JORNAL MARABÁ é titular e responsável.",
  "II.3. O JORNAL MARABÁ coleta informações de diversas formas, em áreas distintas e para inúmeras finalidades. Ao assim proceder, oferece aos usuários um maior grau de pessoalidade e segurança, além de viabilizar a troca de informações, tornando o relacionamento, ainda que virtual, mais próximo. Com as informações prestadas tem-se como conhecer quem é o usuário do JORNAL MARABÁ e tornar os conteúdos, ações de interatividade, produtos e serviços mais personalizados e seguros. Os levantamentos de dados prestam-se, igualmente, para caracterizar o perfil dos usuários do JORNAL MARABÁ, junto aos parceiros comerciais do mesmo, os quais fornecem serviços e produtos; patrocinam promoções, eventos; anunciam; ou seja, de alguma forma interagem com os usuários por meio do JORNAL MARABÁ. Por fim, a coleta de dados viabiliza a melhor gestão e administração do JORNAL MARABÁ, a ampliação e melhoramento dos serviços aos usuários, bem como o atendimento às necessidades e sugestões apresentadas por esses últimos.",
  "II.4. Por meio dos dados prestados, o JORNAL MARABÁ fica autorizada a: (a) contatar com os usuários, informando-o sobre novidades, promoções, eventos, etc., por meios tradicionais e/ou eletrônicos; (b) fornecer informações aos usuários, de qualquer natureza (técnicas, operacionais ou comerciais), por meios tradicionais e/ou eletrônicos; (c) autorizar, licenciar e ceder os dados para o proveito de empresas com que o JORNAL MARABÁ mantenha relações comerciais; (d) criar, adaptar e/ou modificar ações, conteúdos, produtos e serviços veiculados no Portal; (e) ofertar produtos e serviços; (f) convidar os usuários a participarem de pesquisas; dentre outras ações que entender como aplicável, para fins de promoção e incremento do Portal.",
  "II.5. As informações, produtos e serviços, aqui alinhados, podem tratar-se de produtos e serviços oferecidos no JORNAL MARABÁ (ou por meio dele) e por terceiros.",
  "III. Da Cessão de Dados",
  "III.1. O JORNAL MARABÁ poderá ceder os dados pessoais cadastrados às empresas com quem mantêm relações societárias ou relações comerciais, sem que isso seja considerado violação à privacidade do usuário. No entanto, o tratamento e o uso desses dados ficam restritos aos termos ora autorizados. O usuário poderá opor-se, a qualquer momento, a cessão dos dados, contatando o JORNAL MARABÁ, pelo contato indicado nesta Política e registrando esta solicitação.",
  "III.2. Havendo solicitação formal, por qualquer autoridade pública, os dados fornecidos serão disponibilizados, na forma previamente cadastrada pelo usuário, independentemente de notificação prévia.",
  "IV. Do Estabelecimento de Vínculo Contratual",
  "IV.1. Em casos específicos, em que há transferência patrimonial, troca de conteúdo, dentre outras hipóteses, ao prestar as informações relativas aos seus dados pessoais, o usuário estabelece vínculo contratual com o JORNAL MARABÁ, regido por esta Política de Privacidade e com os demais termos e condições que regulam o uso do Portal, pelos usuários, no período.",
  "V. Das Seções Condicionadas à Registro Prévio e Chaves de Acesso (Login e Senha)",
  "V.1. Algumas seções do JORNAL MARABÁ podem requerer registro prévio do usuário, ficando o acesso condicionado à utilização de nome (“Login”) e senha, escolhidos e determinados pelo JORNAL MARABÁ. Tal acesso, consequentemente, é pessoal e intransferível, ficando cada usuário registrado responsável pela segurança de seu Login e senha, bem como pelo uso feito sob tais chaves de acesso.",
  "VI. Das Responsabilidades do JORNAL MARABÁ e Limitações Aplicáveis",
  "VI.1. O JORNAL MARABÁ responsabiliza-se por manter os dados salvaguardados e protegidos contra o uso indevido ou divulgação não autorizada, tomando as providências apropriadas para mantê-los em segurança. Na hipótese de vir a ser constatadas situações que possam comprometer ou que efetivamente comprometam a segurança de seu banco de dados, as medidas cabíveis serão tomadas.",
  "VI.2. As informações cadastrais são protegidas por senha, para a segurança e privacidade do usuário. Ademais, os dados fornecidos são tratados automaticamente e guardados em banco de dados eletrônico de titularidade exclusiva do JORNAL MARABÁ.",
  "VI.3. O JORNAL MARABÁ emprega tecnologia que garante a segurança e a proteção dos dados dos usuários e procura adotar medidas adicionais para evitar a perda, mau uso, alteração, acesso não autorizado ou subtração indevida desses dados. Não obstante, o usuário deve estar ciente de que as medidas de segurança relativas à Internet não são integralmente infalíveis.",
  "VI.4. O JORNAL MARABÁ não se responsabiliza por qualquer dano ou prejuízo, de qualquer natureza, que decorra da utilização indevida, fraudulenta ou lesiva que seja dada aos dados, quando o próprio Jornal Marabá não tenha sido a causadora direta e exclusiva do evento que deu causa ao dano ou prejuízo. Da mesma forma, o JORNAL MARABÁ não se responsabiliza por ações de terceiros que ponham em risco ou causem danos à segurança, à armazenagem ou ao tratamento dos dados dos usuários.",
  "VII. Das Responsabilidades do Usuário",
  "VII.1. O usuário garante que os dados transmitidos e enviados ao Portal são verdadeiros e não ferem direitos de terceiros.",
  "VIII. Cookies",
  "VIII.1. O JORNAL MARABÁ informa que, em determinadas páginas, é utilizado o recurso de cookies. Este tipo de aplicação possibilita a personalização dos conteúdos diversos e conhecer o hábito de navegação dos usuários.",
  "VIII.2. Os usuários têm, entretanto, a possibilidade de configurarem seus navegadores para serem avisados, na tela do computador, sobre a recepção dos cookies e para impedirem a instalação no disco rígido. As informações pertinentes a estas configurações estão disponíveis em instruções e manuais do próprio navegador.",
  "VIII.3. Para utilizar o Portal, não é necessário que o usuário permita a recepção de cookies. Porém, esta opção pode oferecer restrições em funcionalidades do Portal.",
  "IX. Das Mudanças na Política de Privacidade",
  "IX.1. O JORNAL MARABÁ reserva-se o direito de modificar a presente Política de Privacidade, hipótese em que publicará as mudanças com uma antecedência razoável à sua colocação em prática, pelo próprio Portal, nos mesmos termos ora efetuados.",
  "IX.2. Sempre será considerado o momento do uso e os termos aplicáveis no período respectivo. É necessário que você esteja sempre a par dos termos de uso e políticas regulatórias aplicáveis pelo JORNAL MARABÁ.",
  "X. Do Caráter Genérico",
  "X.1. A Política de Privacidade aqui informada tem caráter genérico. Certas ações desenvolvidas podem conter condições particulares em relação à proteção dos dados. Desta forma, quando o usuário, ainda que já cadastrado, interessar-se por alguma atividade específica, poderá ter que informar dados adicionais, bem como estar sujeito a termos de contratação ou regulamentos apropriados para a finalidade buscada, os quais podem ser complementares à presente Política de Privacidade.",
  "XI. Contato",
  "XI.1. Se você tem dúvidas, sugestões ou reclamações sobre esta Política de Privacidade ou sobre qualquer outro assunto relacionado ao JORNAL MARABÁ, acione nosso Fale Conosco ou entre em contato através dos telefones informados no Portal.",
  "XII. Das Disposições Gerais",
  "XII.1. Esta Política não se aplica às empresas que anunciam nas áreas de publicidade ou prestam serviços terceirizados a partir do JORNAL MARABÁ, as quais não são consideradas como usuários, nos termos aqui expostos.",
  "XII.2. Nada nesta Política de Privacidade será tido como termo autorizador de direitos sobre os conteúdos que o JORNAL MARABÁ veicula.",
  "XII.3. No caso de você ser menor de 18 (dezoito) anos ou não ser plenamente capaz de contratar, nos termos previstos no Código Civil Brasileiro, você deve, necessariamente, obter a permissão de seus representantes legais (pais ou tutores), os quais serão considerados responsáveis pelos seus atos.",
];

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-2 flex items-center gap-3">
          <h1 className="text-4xl font-bold text-zinc-900">Política de</h1>
          <Image src="/api/assets/logo" alt="Logo" width={34} height={20} className="h-6 w-auto" />
          <h1 className="text-4xl font-bold text-zinc-900">Privacidade</h1>
          <span className="text-sm font-semibold text-red-600">(Arial Rounded MT Bold)</span>
        </div>
        <p className="mb-4 text-sm text-red-600">(Tahoma)</p>
        <div className="space-y-4 rounded border border-zinc-300 bg-white p-6 text-zinc-900" style={{ fontFamily: "Tahoma, Arial, sans-serif" }}>
          <p>
          A Lei Geral de Proteção de Dados (Lei 13.709/2018, “LGPD”), autoriza o tratamento de Dados com base em
          situações legais específicas. Em respeito à legislação, o Jornal Marabá tratará os seus Dados de acordo com as
          seguintes bases legais, conforme o caso concreto: </p>
          <p>
          Consentimento
          <br />
          Quando você concorda com o tratamento dos dados de forma expressa para uma finalidade específica. Nesta
          hipótese, o consentimento poderá ser revogado a qualquer tempo por solicitação de cadastro do Jornal Marabá
          que você tenha (conforme aplicável).
          </p>
          <p>
          Interesse legítimo
          <br />
          Quando o Jornal Marabá e/ou Parceiros têm (em) interesse legítimo na utilização de seus dados, nas hipóteses
          legalmente previstas, sempre respeitados seus direitos fundamentais e sua expectativa legítima.
          </p>
          <p>
          Este website adota a presente Política de Privacidade para fins de regular o tratamento e a proteção dispensados
          <br />
          aos dados pessoais e informações que os usuários venham a prestar, por suas livres e espontâneas vontades, ao
  participarem de certas ações, acessarem a certos conteúdos e/ou contratarem eventuais produtos e serviços, por
          <br />
          meio deste portal de Internet, provido pela agência plena de propaganda Mídia Moderna Comunicação Ltda, pessoa
          <br />
          jurídica de direito privado, doravante referida apenas como “JORNAL MARABÁ”.
          </p>
          <p>
          <br />
          ANTES DE ENVIAR INFORMAÇÕES, PREENCHER CADASTROS OU COMPARTILHAR CONTEÚDOS, POR MEIO DO PORTAL, 
          <br />
          VOCÊ DEVE ESTAR DE ACORDO COM A PRESENTE POLÍTICA DE PRIVACIDADE. 
          <br />
          SE VOCÊ NÃO CONCORDAR COM A PRESENTE POLÍTICA DE PRIVACIDADE, NÃO DEVERÁ DAR CONTINUIDADE À TRANSMISSÃO OU O ENVIO DE DADOS PESSOAIS E DEMAIS INFORMAÇÕES AO JORNAL MARABÁ. A TRANSMISSÃO OU O ENVIO SERÃO CONSIDERADOS 
          COMO ACEITE TOTAL DAS CONDIÇÕES REGULATÓRIAS AQUI DEFINIDAS.
          <br />
          </p>
          {privacySections.map((section) => (
            <p key={section}>{section}</p>
          ))}
        </div>
      </main>
    </div>
  );
}
