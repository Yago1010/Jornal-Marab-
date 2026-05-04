import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { NextResponse } from "next/server";

const assetMap: Record<string, string> = {
  logo: "Logo-jornal.png",
  social: "Ícones cabeçalho.png",
  email: "Ícone do e-mail _ cabeçalho.png",
  libras: "Libras.png",
  darkmode: "Dark Mode.png",
  pesquisa: "Fundo e diagramação Pesquisa Popular.png",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ asset: string }> },
) {
  const { asset } = await params;
  const fileName = assetMap[asset];

  if (!fileName) {
    return NextResponse.json({ message: "Asset não encontrado." }, { status: 404 });
  }

  const filePath = join(process.cwd(), "imagem-do-site", fileName);
  const buffer = await readFile(filePath);

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
