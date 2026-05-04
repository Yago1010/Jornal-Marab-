import { z } from "zod";

import { BRAZIL_STATES, COUNCILORS, PARA_CITIES } from "@/lib/content";

const requiredMsg = "Campo obrigatório.";

export const contactSchema = z
  .object({
    name: z.string().min(2, requiredMsg),
    email: z.string().email("E-mail inválido."),
    whatsapp: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    subject: z.enum(["PUBLICIDADE", "SUGERIR_PAUTAS", "FAZER_DENUNCIA", "ELOGIOS"]),
    editorial: z.string().optional(),
    message: z.string().min(10, "Digite ao menos 10 caracteres."),
  })
  .superRefine((value, ctx) => {
    if (value.city && !PARA_CITIES.includes(value.city)) {
      ctx.addIssue({
        code: "custom",
        path: ["city"],
        message: "Município inválido.",
      });
    }

    if (value.state && !BRAZIL_STATES.includes(value.state)) {
      ctx.addIssue({
        code: "custom",
        path: ["state"],
        message: "Estado inválido.",
      });
    }
  });

export const pollSchema = z.object({
  performance: z.enum(["BOM", "RAZOAVEL", "RUIM"]),
  selectedCouncilors: z
    .array(z.string())
    .min(1, "Selecione ao menos 1 vereador.")
    .max(5, "Selecione no máximo 5 vereadores.")
    .refine((list) => list.every((name) => COUNCILORS.includes(name)), {
      message: "Há vereador inválido na seleção.",
    }),
  topCouncilor: z
    .string()
    .refine((value) => COUNCILORS.includes(value), "Selecione um destaque válido."),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type PollInput = z.infer<typeof pollSchema>;
