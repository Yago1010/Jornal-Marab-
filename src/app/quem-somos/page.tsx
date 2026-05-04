import { SiteHeader } from "@/components/site-header";

const quemSomosParagraphs = [
  'Bem-vindo ao Jornal Marabá; muito além de um portal de notícias por reunir informações com responsabilidade e credibilidade, unindo opiniões e fatos com a comunicação verdadeira. Nosso compromisso é informar, inspirar e conectar a CIDADANIA, o COMÉRCIO e as NOTÍCIAS de maneira inovadora para o município de Marabá - "Terra bendita". A Mídia Moderna Comunicação Ltda, nossa agência de propaganda Plena, existe há 32 anos sendo composta por jornalistas apaixonados no ofício da comunicação e por outros profissionais dedicados à excelência da criação, planejamento e execução de campanhas publicitárias diversas.',
  "Com sede no Rio de Janeiro e representatividades em Santa Catarina e São Paulo, iniciamos nova caminhada pela região Norte por Marabá, no ano comemorativo dos 113 anos de emancipação, para em breve expandirmos nossas atividades em comunicação para algumas das 143 cidades paraenses com a mesma operacionalidade aplicada em Marabá: jornal impresso, portal de notícias, rádio e TV online.",
  'Entendemos que o importante não é o ponto de partida, mas sim a caminhada. Fortalecer o desenvolvimento local melhorando condições de cidadania, do comércio e notícias envolve novas ideias e novos ideais com a modernidade, o profissionalismo e a qualidade favoráveis à inclusão em todos os setores e segmentos da sociedade, sem riscos de "vedetismos" ou "travestidas" ações formando falsas opiniões contrárias ao bem-estar da população.',
  'Unir forças e caminhar de mãos dadas viabiliza a qualidade de vida e crescimento socioeconômico de Marabá e de outras cidades do Pará. Fazer dessa "missão dada, missão cumprida" com ordem e progresso à toda região é dever de todos..',
  "CHEGOU UM NOVO TEMPO para a comunicação impressa, digital, radiofônica e televisiva de Marabá, diferenciando einformando com qualidade, ética e respeito ao cidadão e empresariado, abordando conteúdos diversificados em mais de 90% sobre Marabá, para os munícipes, o Brasil e o mundo via internet e distribuídos em 10.000 exemplares GRATUITAMENTE para o comércio, instituições públicas, particulares, condomínios de casas e apartamentos.",
  "Marabá merece QUALIDADE E SEGURANÇA INFORMATIVA de conteúdos essenciais, atuando na principal função da comunicação: a credibilidade de mãos dadas com os esforços voltados ao crescimento social e empreendedor para o município. Respeitar entidades governamentais observando as Leis e regulamentações vigentes, além do Código de Ética dos Jornalistas Brasileiros aprovado no Congresso Nacional dos Jornalistas Profissionais da Associação Brasileira de Imprensa (ABI) permite o livre acesso ao Poder Executivo, Poder Legislativo e Poder Judiciário com os princípios da pluralidade igualitária e sem prejuízos da verdade dos fatos.",
  'Exposições de violência e crimes rotineiramente abordados Por outras mídias ou falsas notícias confundindo e tentando desestabilizar conceitos religiosos, familiares e políticos adotados por bloguinhos de viés políticos e dos likes de tostões visando a monetização ou ações de "jornalZismo" não constarão de leitura . Nossa linha editorial se compõe por FATOS possibilitando a ação e reação de ambos os lados da notícia com o direito de defesa e réplica, construídos na base filosófica de Friedrich Nietzsche: "Contra fatos não restam argumentos"...',
  '-"Sofrimentos"? Só se for de saudades.',
  '-"Matar" ou "morrer"? Só se for de rir!',
  '- "Guerras ou intrigas políticas"? Nem as de travesseiro ou das "alianças de barbante" a fim de prolongar o "poder" e vaidade dos que ocupam cargos eletivos, estando e não sendo "ad aeternum" ("para sempre") nessas funções.',
  'Esquecem do parágrafo único do artigo 1º da Constituição Federal de 1988: "Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição".',
  "MARABÁ É GRANDE, merece respeito e união para maior desenvolvimento de ideais coletivos favorecendo o bem comum de todos. Por isso a comunicação de massa não deve ser aliciadora de ideias e ideais mentirosos e tóxicos para a sociedade honesta e trabalhadora. Depende de NÓS.",
];

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold text-green-700">Quem Somos</h1>
        <div className="space-y-4 rounded border border-zinc-300 bg-white p-6 text-zinc-800" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          {quemSomosParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="font-semibold">Carlos Santos</p>
          <p className="font-semibold">Diretor - Fundador</p>
        </div>
      </main>
    </div>
  );
}
