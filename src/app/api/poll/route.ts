import { Prisma } from "@prisma/client";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { pollSchema } from "@/lib/validators";

const SESSION_COOKIE = "jornal_maraba_poll_session";

export async function GET() {
  try {
    const total = await db.pollVote.count();
    const byPerformance = await db.pollVote.groupBy({
      by: ["performance"],
      _count: true,
    });

    return NextResponse.json({ total, byPerformance });
  } catch {
    return NextResponse.json({ message: "Banco de dados não configurado." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = pollSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Dados da enquete inválidos.",
        errors: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const cookieStore = await cookies();
  const existingSession = cookieStore.get(SESSION_COOKIE)?.value;
  const sessionKey = existingSession ?? crypto.randomUUID();

  try {
    await db.pollVote.create({
      data: {
        ...parsed.data,
        sessionKey,
      },
    });

    if (!existingSession) {
      cookieStore.set(SESSION_COOKIE, sessionKey, {
        maxAge: 60 * 60 * 24 * 365,
        httpOnly: true,
        sameSite: "lax",
      });
    }

    return NextResponse.json({ message: "Voto registrado com sucesso." });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientInitializationError) {
      return NextResponse.json(
        { message: "Banco de dados não configurado. Defina DATABASE_URL e rode as migrations." },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Erro interno ao registrar voto." }, { status: 500 });
  }
}
