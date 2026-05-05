import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const logoPath = join(process.cwd(), "imagem-do-site", "Logo-jornal.png");
  const buffer = await readFile(logoPath);

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
