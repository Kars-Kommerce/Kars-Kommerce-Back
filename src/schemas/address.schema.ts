import { z } from "zod";
import {
  IAddressRequestProps,
  IAddressResponseProps,
} from "../interfaces/address.interface";

const createAddressRequestSchema = z.object({
  cep: z.string().max(8, "Deve conter no máximo 8 caracteres"),
  state: z.string().max(20, "Deve conter no máximo 20 caracteres"),
  city: z.string().max(50, "Deve conter no máximo 50 caracteres"),
  street: z.string().max(100, "Deve conter no máximo 100 caracteres"),
  number: z.string().max(10, "Deve conter no máximo 10 caracteres"),
  complement: z.string().max(100, "Deve conter no máximo 100 caracteres").nullable(),
});

export const createListAddressResponseSchema = z.object({
  id: z.number().int(),
  cep: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string().nullable(),
  userId: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const retrieveAddresssSchema: z.ZodSchema<IAddressResponseProps[]> =
  z.array(createListAddressResponseSchema);

export const updateAddressRequestSchema = createAddressRequestSchema.partial();

export default createAddressRequestSchema;
