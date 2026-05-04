import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";

export default function FaleConoscoPage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-2 text-3xl font-bold text-green-700">Fale Conosco</h1>
        <p className="mb-3 text-zinc-700">
          Aqui você sugere matérias, faz denúncias e elogios para juntos fazermos do Jornal Marabá um veículo de comunicação
          com responsabilidade, credibilidade e participação popular.
        </p>
        <p className="mb-2 text-zinc-700">
          Obtenha informações sobre publicação de anúncios no jornal impresso e no portal, além de serviços de publicidade e
          estruturação de marketing para empresas.
        </p>
        <p className="mb-6 text-sm text-zinc-600">Preencha os campos abaixo para enviar sua mensagem ao setor desejado.</p>
        <ContactForm />
      </main>
    </div>
  );
}
