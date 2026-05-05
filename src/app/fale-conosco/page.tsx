import { ContactForm } from "@/components/contact-form";
import { FaleConoscoText, InstitutionalTitle } from "@/components/institutional-content";
import { SiteHeader } from "@/components/site-header";

export default function FaleConoscoPage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <InstitutionalTitle before="Fale" after="Conosco" />
        <FaleConoscoText />
        <ContactForm />
      </main>
    </div>
  );
}
