import { z } from "zod";
import {
  IAdressRequestProps,
  IAdressResponseProps,
} from "../interfaces/adress.interface";

const createAdressRequestSchema = z.object({
  cep: z.number().max(8, "Deve conter no máximo 8 caracteres"),
  state: z.string().max(20, "Deve conter no máximo 20 caracteres"),
  city: z.string().max(50, "Deve conter no máximo 50 caracteres"),
  street: z.string().max(100, "Deve conter no máximo 100 caracteres"),
  complement: z.string().max(100, "Deve conter no máximo 100 caracteres"),
});

export const createListAdressResponseSchema = z.object({
  id: z.number().int(),
  cep: z.number(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  complement: z.string(),
  authorId: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const retrieveAdresssSchema: z.ZodSchema<IAdressResponseProps[]> =
  z.array(createListAdressResponseSchema);

export const updateAdressRequestSchema = createAdressRequestSchema.partial();

export default createAdressRequestSchema;
