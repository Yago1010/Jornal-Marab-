import { SiteHeader } from "@/components/site-header";

const roundedFont = { fontFamily: '"Arial Rounded MT Bold", Arial, Helvetica, sans-serif' };
const arialFont = { fontFamily: "Arial, Helvetica, sans-serif" };
const timesFont = { fontFamily: '"Times New Roman", Times, serif' };
const calibriFont = { fontFamily: "Calibri, Arial, Helvetica, sans-serif" };

export default function DaRedacaoPage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold text-zinc-900" style={roundedFont}>
          Da Redação
        </h1>
        <p className="mt-3 text-sm text-zinc-700" style={timesFont}>
          Prefeito Toni Cunha parabeniza o fundador e diretor Carlos Santos pelo lançamento editorial enaltecendo as
          ações de cidadania, ao comércio e nas notícias sobre Marabá.
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-zinc-900" style={arialFont}>
          Novos veículos de comunicação são acolhidos e recebidos pelo Poder Executivo e Poder Legislativo
        </h2>
        <p className="mt-2 text-sm text-zinc-600" style={calibriFont}>
          Por: Victor Hugo
        </p>

        <article className="mt-6 space-y-5 rounded border border-zinc-300 bg-white p-6 text-left leading-snug text-zinc-900" style={arialFont}>
          <p>
            Nas comemorações dos 113 anos da emancipação sociopolítica de Marabá em 5 de abril marcando nova fases de
            mudanças e desenvolvimento para 2026, o lançamento do impresso JORNAL DA CIDADE MARABÁ e o portal de notícias
            JORNAL MARABÁ são acolhidos e recebidos por integrantes do Poder Executivo e Poder Legislativo municipal em
            nome da população, desejando sucesso na caminhada e cooperação nas informações marcando as transformações de
            NOVAS IDEIAS e NOVOS IDEAIS fortalecendo a CIDADANIA, ao COMÉRCIO e as NOTÍCIAS para ENFIM UM ANO NOVO!
          </p>

          <blockquote className="border-l-4 border-green-700 pl-4 italic" style={timesFont}>
            <p>
              “A função do gestor público envolve responsabilidades, capacidade e liderança beneficiando cidadãos e a
              busca constante de melhorias no espaço territorial, abrangendo diversas frentes de trabalho desenvolvendo
              toda cidade. Esse compromisso com o progresso e bem-estar pode e deve somar com a participação de todos.
            </p>
            <p>
              Faço votos para que os novos veículos de comunicação adotando o nome de Marabá ofereçam o jornalismo com
              responsabilidade e seriedade das notícias compondo a verdade dos fatos unindo a população com as ações e
              notícias do Poder Executivo e Poder Legislativo direcionados às necessidades e ao alcance do melhor para
              nossa Marabá, Terra bendita.
            </p>
            <p>
              Nos 113º anos da emancipação sociopolítica, necessidades e soluções sejam reveladas e avancem para a zona
              rural e urbana, fortalecendo a sociedade civil e empresarial, divulgadas pelo jornalismo de ações em apoio
              ao crescimento da ordem, progresso e desenvolvimento local.
            </p>
            <p>E pega subindo que descendo é contramão”.</p>
          </blockquote>

          <p className="italic" style={timesFont}>
            Antonio Carlos Cunha Sá, o popular “Toni Cunha”, é Delegado da Polícia Federal, filiado ao Partido Liberal
            (PL), ex-deputado estadual e atual prefeito do Município de Marabá.
          </p>

          <blockquote className="border-l-4 border-green-700 pl-4" style={arialFont}>
            “O nosso município necessita fortalecer as pautas do desenvolvimento sustentável, inclusão social, apoio à
            infraestrutura, defesa aos direitos dos povos originários e população vulnerável em cada edição do Jornal da
            Cidade Marabá impresso e do online Jornal Marabá, formando opiniões úteis e benéficas ao bem-estar da
            sociedade”.
          </blockquote>

          <p className="italic" style={timesFont}>
            Ubirajara Nazareno Sompré - Membro da Comunidade Indígena Gavião Pakatejé e vereador (MDB)
          </p>

          <blockquote className="border-l-4 border-green-700 pl-4" style={arialFont}>
            Cada página do impresso Jornal da Cidade Marabá e Online Jornal Marabá favoreçam os conteúdos de interesse
            social, cultural, de geração de empregos e renda, além de matérias abordando a saúde e educação para o
            desenvolvimento de todos. Somar, cooperar com o povo, o Poder Legislativo e continuidade das melhorias do
            trabalho do nosso prefeito Toni Cunha e as ações das secretarias de governo ajuda no caminhar juntos, unindo
            informações e valores. Vamos pra cima!”.
          </blockquote>

          <p>Marcos Andrade - Vereador (PSD)</p>

          <blockquote className="border-l-4 border-green-700 pl-4" style={arialFont}>
            “A trajetória de ambos veículos de comunicação marque o compromisso favorecendo lutas e conquistas de
            inúmeras famílias, trabalhadores e donas de casa honestas, e olhar especial por todas as comunidades
            ribeirinhas e ao núcleo São Felix revelando a dignidade e o respeito em todos os assuntos envolvendo pessoas,
            o comércio e necessidades, favorecendo a renovação de esperanças por dias melhores. Seja o Jornal da cidade
            marabá e o Jornal Marabá a voz da população somadas ao profissionalismo de uma imprensa livre, responsável e
            alternativa chegando à Marabá”.
          </blockquote>

          <p>Márcio do São Félix - Vereador (PSDB)</p>

          <blockquote className="border-l-4 border-green-700 pl-4" style={arialFont}>
            “A cidade cresce e renova ares de empreendedorismo com investimentos e a determinação de gente disposta em
            fazer a diferença, favorecendo o progresso e bem-estar da coletividade, incentivando o desenvolvimento de
            ideias para o crescimento das classes sociais e empresariais, revelando potenciais investimentos. Seja o papel
            do Jornal da Cidade Marabá e do portal de notícias Jornal Marabá a representatividade benéfica da sociedade,
            cobrindo, cobrando e favorecendo melhorias que Marabá precisa e merece para dias melhores”.
          </blockquote>

          <p>Jocenilson Silva Souza - Vereador (PRD)</p>

          <blockquote className="border-l-4 border-green-700 pl-4" style={arialFont}>
            “Minhas boas-vindas ao Jornal da Cidade Marabá e portal de notícias Jornal Marabá representem o desejo de
            sucesso e durabilidade para a comunicação, em nossa cidade. Todo trabalho bem desenvolvido com conteúdo
            escrito, falado, televisivo e das redes sociais importam para a boa formação de opiniões cooperando de maneira
            saudável e responsável para o debate de opiniões, discursões, entendimentos e compreensão, em suas pautas e
            matérias influenciadoras. Haja o desenvolvimento empresarial e fortalecimento do saber e conhecer marabaense
            com valor das notícias ao povo”.
          </blockquote>

          <p>Vanda Américo - União Brasil</p>
        </article>
      </main>
    </div>
  );
}
