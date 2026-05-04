import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { contactSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Verifique os dados obrigatórios.",
        errors: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  try {
    await db.contactMessage.create({ data: parsed.data });
    return NextResponse.json({ message: "Mensagem enviada com sucesso." });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientInitializationError) {
      return NextResponse.json(
        { message: "Banco de dados não configurado. Defina DATABASE_URL e rode as migrations." },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Erro interno ao enviar mensagem." }, { status: 500 });
  }
}
