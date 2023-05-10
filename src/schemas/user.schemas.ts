import { z } from "zod";
import {
  IUserRequestProps,
  IUserResponseProps,
} from "../interfaces/user.interfaces";
import moment from "moment";
import { createListAdvertisementResponseSchema } from "./ads.schema";

const createUserRequestSchema = z.object({
  name: z.string().max(50, "Deve conter no máximo 50 caracteres"),
  username: z.string().max(30, "Deve conter no máximo 30 caracteres"),
  email: z.string().email("Deve ser um email válido"),
  password: z.string().max(120, "Máximo de 120 caracteres"),
  cpf: z.string().regex(/^\d{11}$/, "Deve conter 11 números"),
  cellphone: z
    .string()
    .min(10)
    .max(11)
    .regex(/^\d{10,11}$/, "Deve conter entre 10 a 11 números"),
  birth_date: z
    .string()
    .regex(
      /^(0[1-9]|[12]\d|3[01])([-\/])(0[1-9]|1[0-2])\2(\d{4})$/g,
      "Insira uma data válida no formato DD-MM-YYYY"
    )
    .transform((val) => moment(val, "DD-MM-YYYY").toISOString())
    .refine((val) => moment(val).isValid(), "Insira uma data válida"),
  bio: z.string().max(500).optional().nullable(),
  is_advertiser: z.boolean().optional(),
});

export const createListUserResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  cellphone: z.string(),
  birth_date: z.date(),
  bio: z.string().optional().nullable(),
  is_advertiser: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
  ads: z.array(createListAdvertisementResponseSchema.omit({ author: true })),
});

export const retrieveUsersSchema: z.ZodSchema<IUserResponseProps[]> = z.array(
  createListUserResponseSchema
);

export const updateUserRequestSchama = createListUserResponseSchema
  .omit({
    cpf: true,
    ads: true,
  })
  .partial();

export default createUserRequestSchema;
