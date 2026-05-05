import Image from "next/image";

const roundedFont = { fontFamily: '"Arial Rounded MT Bold", Arial, Helvetica, sans-serif' };
const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };
const tahomaFont = { fontFamily: "Tahoma, Arial, sans-serif" };

const privacyDetails = [
  { title: "I. Definições" },
  {
    text: "I.1. Para fins de perfeito entendimento desta Política de Privacidade, tem-se que: (a) por “você” e/ou “usuário (s) ”, entende-se aqueles que enviam informações, preenchem cadastros ou compartilham conteúdo, por meio do JORNAL MARABÁ; (b) por “dados”, entende-se tudo aquilo que o usuário informar ao JORNAL MARABÁ, seja a respeito dele próprio, seja a respeito de situações, circunstâncias, terceiros, etc., possuindo caráter privado ou não.",
  },
  { title: "II. Coleta e Tratamento dos Dados" },
  {
    text: "II.1. A transmissão ou o envio de dados ao JORNAL MARABÁ é voluntário, podendo ter caráter obrigatório quando o usuário optar por utilizar-se de determinadas ações, conteúdos restritos, produtos e/ou serviços, cujas naturezas não permitam a falta de certos dados.",
  },
  {
    text: "II.2. Os dados pessoais, prestados por meio do JORNAL MARABÁ são tratados de maneira automatizada, sendo incorporados ao banco de dados eletrônico de que o JORNAL MARABÁ é titular e responsável.",
  },
  {
    text: "II.3. O JORNAL MARABÁ coleta informações de diversas formas, em áreas distintas e para inúmeras finalidades. Ao assim proceder, oferece aos usuários um maior grau de pessoalidade e segurança, além de viabilizar a troca de informações, tornando o relacionamento, ainda que virtual, mais próximo. Com as informações prestadas tem-se como conhecer quem é o usuário do JORNAL MARABÁ e tornar os conteúdos, ações de interatividade, produtos e serviços mais personalizados e seguros. Os levantamentos de dados prestam-se, igualmente, para caracterizar o perfil dos usuários do JORNAL MARABÁ, junto aos parceiros comerciais do mesmo, os quais fornecem serviços e produtos; patrocinam promoções, eventos; anunciam; ou seja, de alguma forma interagem com os usuários por meio do JORNAL MARABÁ. Por fim, a coleta de dados viabiliza a melhor gestão e administração do JORNAL MARABÁ, a ampliação e melhoramento dos serviços aos usuários, bem como o atendimento às necessidades e sugestões apresentadas por esses últimos.",
  },
  {
    text: "II.4. Por meio dos dados prestados, o JORNAL MARABÁ fica autorizada a (a) contatar com os usuários, informando-o sobre novidades, promoções, eventos, etc., por meios tradicionais e/ou eletrônicos; (b) fornecer informações aos usuários, de qualquer natureza (técnicas, operacionais ou comerciais), por meios tradicionais e/ou eletrônicos; (c) autorizar, licenciar e ceder os dados para o proveito de empresas com que o JORNAL MARABÁ mantenha relações comerciais; (d) criar, adaptar e/ou modificar ações, conteúdos, produtos e serviços veiculados no Portal; (e) ofertar produtos e serviços; (f) convidar os usuários a participarem de pesquisas; dentre outras ações que entender como aplicável, para fins de promoção e incremento do Portal.",
  },
  {
    text: "II.5. As informações, produtos e serviços, aqui alinhados, podem tratar-se de produtos e serviços oferecidos no JORNAL MARABÁ (ou por meio dele) e por terceiros.",
  },
  { title: "III. Da Cessão de Dados" },
  {
    text: "III.1. O JORNAL MARABÁ poderá ceder os dados pessoais cadastrados às empresas com quem mantêm relações societárias ou relações comerciais, sem que isso seja considerado violação à privacidade do usuário. No entanto, o tratamento e o uso desses dados ficam restritos aos termos ora autorizados. O usuário poderá opor-se, a qualquer momento, a cessão dos dados, contatando o JORNAL MARABÁ, pelo contato indicado nesta Política e registrando esta solicitação.",
  },
  {
    text: "III.2. Havendo solicitação formal, por qualquer autoridade pública, os dados fornecidos serão disponibilizados, na forma previamente cadastrada pelo usuário, independentemente de notificação prévia.",
  },
  { title: "IV. Do Estabelecimento de Vínculo Contratual" },
  {
    text: "IV.1. Em casos específicos, em que há transferência patrimonial, troca de conteúdo, dentre outras hipóteses, ao prestar as informações relativas aos seus dados pessoais, o usuário estabelece vínculo contratual com o JORNAL MARABÁ, regido por esta Política de Privacidade e com os demais termos e condições que regulam o uso do Portal, pelos usuários, no período.",
  },
  { title: "V. Das Seções Condicionadas à Registro Prévio e Chaves de Acesso (Login e Senha)" },
  {
    text: "V.1. Algumas seções do JORNAL MARABÁ podem requerer registro prévio do usuário, ficando o acesso condicionado à utilização de nome (“Login”) e senha, escolhidos e determinados pelo JORNAL MARABÁ. Tal acesso, consequentemente, é pessoal e intransferível, ficando cada usuário registrado responsável pela segurança de seu Login e senha, bem como pelo uso feito sob tais chaves de acesso.",
  },
  { title: "VI. Das Responsabilidades do JORNAL MARABÁ e Limitações Aplicáveis" },
  {
    text: "VI.1. O JORNAL MARABÁ responsabiliza-se por manter os dados salvaguardados e protegidos Contra o uso indevido ou divulgação não autorizada, tomando as providências apropriadas para mantê-los em segurança. Na hipótese de vir a ser constadas situações que possam comprometer ou que efetivamente comprometam a segurança de seu banco de dados, as medidas cabíveis serão tomadas pela mesma.",
  },
  {
    text: "VI.2. As informações cadastrais são protegidas por senha, para a segurança e privacidade do usuário. Ademais, os dados fornecidos são tratados automaticamente e guardados em banco de dados eletrônico de titularidade exclusiva do JORNAL MARABÁ.",
  },
  {
    text: "VI.3. O JORNAL MARABÁ emprega tecnologia que garante a segurança e a proteção dos dados dos usuários e procura adotar medidas adicionais para evitar a perda, mau uso, alteração, acesso não autorizado ou subtração indevida desses dados. Não obstante, o usuário deve estar ciente de que as medidas de segurança relativas à Internet não são integralmente infalíveis.",
  },
  {
    text: "VI.4. O JORNAL MARABÁ não se responsabiliza por qualquer dano ou prejuízo, de qualquer natureza, que decorra da utilização indevida, fraudulenta ou lesiva que seja dada aos dados, quando o próprio jornal marabá não tenha sido a causadora direta e exclusiva do evento que deu causa ao dano ou prejuízo. Da mesma forma, o JORNAL MARABÁ não se responsabiliza por ações de terceiros que ponham em risco ou causem danos à segurança, à armazenagem ou ao tratamento dos dados dos usuários.",
  },
  { title: "VII. Das Responsabilidades do Usuário" },
  {
    text: "VII.1. O usuário garante que os dados transmitidos e enviados ao Portal são verdadeiros e não ferem direitos de terceiros.",
  },
  { title: "VIII. Cookies" },
  {
    text: "VIII.1. O JORNAL MARABÁ informa que, em determinadas páginas, é utilizado o recurso de cookies. Este tipo de aplicação possibilita a personalização dos conteúdos diversos e conhecer o hábito de navegação dos usuários.",
  },
  {
    text: "VIII.2. Os usuários têm, entretanto, a possibilidade de configurarem seus navegadores para serem avisados, na tela do computador, sobre a recepção dos cookies e para impedirem a instalação no disco rígido. As informações pertinentes as estas configurações estão disponíveis em instruções e manuais do próprio navegador.",
  },
  {
    text: "VIII.3. Para utilizar o Portal, não é necessário que o usuário permita a recepção de cookies. Porém, esta opção pode oferecer restrições em funcionalidades do Portal.",
  },
  { title: "IX. Das Mudanças na Política de Privacidade" },
  {
    text: "IX.1. O JORNAL MARABÁ reserva-se o direito a modificar a presente Política de Privacidade, hipótese em que publicará as mudanças com uma antecedência razoável à sua colocação em prática, pelo próprio Portal, nos mesmos termos ora efetuados.",
  },
  {
    text: "IX.2. Sempre será considerado o momento do uso e os termos aplicáveis no período respectivo. É necessário que você esteja sempre a par dos termos de uso e políticas regulatórias aplicáveis Pelo JORNAL MARABÁ.",
  },
  { title: "X. Do Caráter Genérico" },
  {
    text: "X.1. A Política de Privacidade aqui informada tem caráter genérico. Certas ações desenvolvidas podem conter condições particulares em relação à proteção dos dados. Desta forma, quando o usuário, ainda que já cadastrado, interessar-se por alguma atividade específica, poderá ter que informar dados adicionais, bem como estar sujeito a termos de contratação ou regulamentos apropriados para a finalidade buscada, os quais podem ser complementares à presente Política de Privacidade.",
  },
  { title: "XI. Contato" },
  {
    text: "XI.1. Se você tem dúvidas, sugestões ou reclamações sobre esta Política de Privacidade ou sobre qualquer outro assunto relacionado ao JORNAL MARABÁ, acione nosso Fale Conosco ou entre em contato através dos telefones informados no Portal.",
  },
  { title: "XII. Das Disposições Gerais" },
  {
    text: "XII.1. Esta Política não se aplica às empresas que anunciam nas áreas de publicidade ou prestam serviços terceirizados a partir do JORNAL MARABÁ, as quais não são consideradas como usuários, nos termos aqui expostos.",
  },
  {
    text: "XII.2. Nada nesta Política de Privacidade será tido como termo autorizador de direitos sobre os conteúdos que o JORNAL MARABÁ veicula.",
  },
  {
    text: "XII.3. No caso de você ser menor de 18 (dezoito) anos ou não ser plenamente capaz de contratar, nos termos previstos no Código Civil Brasileiro, você deve, necessariamente, obter a permissão de seus representantes legais (pais ou tutores), os quais serão considerados responsáveis pelos seus atos.",
  },
];

export function InstitutionalTitle({ before, after }: { before: string; after: string }) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 text-3xl font-bold text-zinc-900 sm:text-4xl" style={roundedFont}>
      <h1>{before}</h1>
      <Image src="/api/assets/logoTrace" alt="" width={54} height={28} className="h-7 w-auto sm:h-8" />
      <h1>{after}</h1>
    </div>
  );
}

export function QuemSomosText({ framed = true }: { framed?: boolean }) {
  const className = framed
    ? "space-y-4 rounded border border-zinc-300 bg-white p-6 text-left leading-snug text-zinc-900"
    : "space-y-4 text-left leading-snug text-zinc-800";

  return (
    <div className={className} style={arialFont}>
      <p>
        Bem-vindo ao Jornal Marabá; muito além de um portal de notícias por reunir informações com responsabilidade e
        credibilidade, unindo opiniões e fatos com a comunicação verdadeira.
      </p>
      <p>
        Nosso compromisso é informar, inspirar e conectar a CIDADANIA, o COMÉRCIO e as NOTÍCIAS de maneira inovadora
        para o município de Marabá - “Terra bendita”.
      </p>
      <p>
        A Mídia Moderna Comunicação Ltda, nossa agência de propaganda Plena, existe há 32 anos sendo composta por
        jornalistas apaixonados no ofício da comunicação e por outros profissionais dedicados à excelência da criação,
        planejamento e execução de campanhas publicitárias diversas.
      </p>
      <p>
        Com sede no Rio de Janeiro e representatividades em Santa Catarina e São Paulo, iniciamos nova caminhada pela
        região Norte por Marabá, no ano comemorativo dos 113 anos de emancipação, para em breve expandirmos nossas
        atividades em comunicação para algumas das 143 cidades paraenses com a mesma operacionalidade aplicada em Marabá:
        jornal impresso, portal de notícias, rádio e TV online.
      </p>
      <p>Entendemos que o importante não é o ponto de partida, mas sim a caminhada.</p>
      <p>
        Fortalecer o desenvolvimento local melhorando condições de cidadania, do comércio e notícias envolve novas ideias
        e novos ideais com a modernidade, o profissionalismo e a qualidade favoráveis à inclusão em todos os setores e
        segmentos da sociedade, sem riscos de “vedetismos” ou “travestidas” ações formando falsas opiniões contrárias ao
        bem-estar da população.
      </p>
      <p>
        Unir forças e caminhar de mãos dadas viabiliza a qualidade de vida e crescimento socioeconômico de Marabá e de
        outras cidades do Pará. Fazer dessa “missão dada, missão cumprida” com ordem e progresso à toda região é dever
        de todos..
      </p>
      <p>
        CHEGOU UM NOVO TEMPO para a comunicação impressa, digital, radiofônica e televisiva de Marabá, diferenciando
        einformando com qualidade, ética e respeito ao cidadão e empresariado, abordando conteúdos diversificados em mais
        de 90% sobre Marabá, para os munícipes, o Brasil e o mundo via internet e distribuídos em 10.000 exemplares
        GRATUITAMENTE para o comércio, instituições públicas, particulares, condomínios de casas e apartamentos.
      </p>
      <p>
        Marabá merece QUALIDADE E SEGURANÇA INFORMATIVA de conteúdos essenciais, atuando na principal função da
        comunicação: a credibilidade de mãos dadas com os esforços voltados ao crescimento social e empreendedor para o
        município.
      </p>
      <p>
        Respeitar entidades governamentais observando as Leis e regulamentações vigentes, além do Código de Ética dos
        Jornalistas Brasileiros aprovado no Congresso Nacional dos Jornalistas Profissionais da Associação Brasileira de
        Imprensa (ABI) permite o livre acesso ao Poder Executivo, Poder Legislativo e Poder Judiciário com os princípios
        da pluralidade igualitária e sem prejuízos da verdade dos fatos.
      </p>
      <p>
        Exposições de violência e crimes rotineiramente abordados Por outras mídias ou falsas notícias confundindo e
        tentando desestabilizar conceitos religiosos, familiares e políticos adotados por bloguinhos de viés políticos e
        dos likes de tostões visando a monetização ou ações de “jornalZismo” não constarão de leitura .
      </p>
      <p>
        Nossa linha editorial se compõe por FATOS possibilitando a ação e reação de ambos os lados da notícia com o
        direito de defesa e réplica, construídos na base filosófica de Friedrich Nietzsche: “Contra fatos não restam
        argumentos”...
      </p>
      <p>-“Sofrimentos”?</p>
      <p>Só se for de saudades.</p>
      <p>-“Matar” ou “morrer”?</p>
      <p>Só se for de rir!</p>
      <p>- “Guerras ou intrigas políticas”?</p>
      <p>
        Nem as de travesseiro ou das “alianças de barbante“ a fim de prolongar o “poder” e vaidade dos que ocupam cargos
        eletivos, estando e não sendo “ad aeternum” (“para sempre”) nessas funções.
      </p>
      <p>Esquecem do parágrafo único do artigo 1º da Constituição Federal de 1988:</p>
      <p>
        “Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta
        Constituição”.
      </p>
      <p>
        MARABÁ É GRANDE, merece respeito e união para maior desenvolvimento de ideais coletivos favorecendo o bem comum
        de todos. Por isso a comunicação de massa não deve ser aliciadora de ideias e ideais mentirosos e tóxicos para a
        sociedade honesta e trabalhadora.
      </p>
      <p>Depende de NÓS.</p>
      <p style={{ fontFamily: "Garamond, Georgia, serif" }}>Carlos Santos</p>
      <p style={{ fontFamily: "Calibri, Arial, Helvetica, sans-serif" }}>Diretor - Fundador</p>
    </div>
  );
}

export function FaleConoscoText() {
  return (
    <div className="mb-6 space-y-3 text-left leading-snug text-zinc-800" style={roundedFont}>
      <p>
        Aqui você sugere matérias, faz denúncias e elogios para juntos fazermos do digital Jornal Marabá e do impresso
        Jornal da Cidade Marabá os veículos de comunicação com responsabilidade, credibilidade e principalmente sua
        participação!
      </p>
      <p>Obtenha informações também sobre:</p>
      <p>- Publicação de anúncios no jornal impresso JORNAL DA CIDADE MARABÁ;</p>
      <p>- Publicação de anúncios no portal de notícias JORNAL MARABÁ</p>
      <p>- Anúncios no Instagram e Facebook do Jornal Marabá;</p>
      <p>- Produção de Panfletos para a DISTRIBUIÇÃO GRATUITA.</p>
      <p>
        Os panfletos serão encartados no Jornal da Cidade Marabá para distribuição nos condomínios e comércios da cidade,
        nos 10.000 exemplares.
      </p>
      <p>
        Obtenha todo tipo de serviço publicitário e estruturação do marketing para empresas, desde o cartão de visitas
        impresso ou digital, mídias ao ar livre, anúncios nas rádios e TVs à nível local, regional e nacional, além das
        estratégias estruturais à palestras empresariais, assessoria e treinamento para diretórios políticos e
        pré-candidatos as eleições do município, estado e governo federal.
      </p>
    </div>
  );
}

export function PoliticaPrivacidadeText() {
  return (
    <div className="space-y-4 rounded border border-zinc-300 bg-white p-6 text-left leading-snug text-zinc-900" style={tahomaFont}>
      <p>
        A Lei Geral de Proteção de Dados (Lei 13.709/2018, “LGPD”), autoriza o tratamento de Dados com base em situações
        legais específicas. Em respeito à legislação, o Jornal Marabá tratará os seus Dados de acordo com as seguintes
        bases legais, conforme o caso concreto:
      </p>
      <p>Consentimento</p>
      <p>
        Quando você concorda com o tratamento dos dados de forma expressa para uma finalidade específica. Nesta hipótese,
        o consentimento poderá ser revogado a qualquer tempo por solicitação de cadastro do Jornal Marabá que você tenha
        (conforme aplicável).
      </p>
      <p>Interesse legítimo</p>
      <p>
        Quando o Jornal Marabá e/ou Parceiros têm (em) interesse legítimo na utilização de seus dados, nas hipóteses
        legalmente previstas, sempre respeitados seus direitos fundamentais e sua expectativa legítima.
      </p>
      <p>
        Este website adota a presente Política de Privacidade para fins de regular o tratamento e a proteção dispensados
        aos dados pessoais e informações que os usuários venham a prestar, por suas livres e espontâneas vontades, ao
        participarem de certas ações, acessarem a certos conteúdos e/ou contratarem eventuais produtos e serviços, por
        meio deste portal de Internet, provido pela agência plena de propaganda Mídia Moderna Comunicação Ltda, pessoa
        jurídica de direito privado, doravante referida apenas como “JORNAL MARABÁ”.
      </p>
      <p>
        ANTES DE ENVIAR INFORMAÇÕES, PREENCHER CADASTROS OU COMPARTILHAR CONTEÚDOS, POR MEIO DO PORTAL, VOCÊ DEVE ESTAR
        DE ACORDO COM A PRESENTE POLÍTICA DE PRIVACIDADE. SE VOCÊ NÃO CONCORDAR COM A PRESENTE POLÍTICA DE PRIVACIDADE,
        NÃO DEVERÁ DAR CONTINUIDADE À TRANSMISSÃO OU O ENVIO DE DADOS PESSOAIS E DEMAIS INFORMAÇÕES AO JORNAL MARABÁ. A
        TRANSMISSÃO OU O ENVIO SERÃO CONSIDERADOS COMO ACEITE TOTAL DAS CONDIÇÕES REGULATÓRIAS AQUI DEFINIDAS.
      </p>
      {privacyDetails.map((item, index) =>
        item.title ? (
          <p key={`${item.title}-${index}`} className="font-semibold">
            {item.title}
          </p>
        ) : (
          <p key={`${item.text}-${index}`}>{item.text}</p>
        ),
      )}
    </div>
  );
}
