import { z } from "zod";
import {
  IAdvertisementRequestProps,
  IAdvertisementResponseProps,
} from "../interfaces/ads.interface";

const createAdvertisementRequestSchema = z.object({
  title: z.string().max(100, "Deve conter no máximo 100 caracteres"),
  description: z.string().max(1000, "Deve conter no máximo 1000 caracteres"),
  model: z.string().max(100, "Deve conter no máximo 100 caracteres"),
  brand: z.string().max(20, "Deve conter no máximo 20 caracteres"),
  year: z.number().int(),
  fuel: z.number().int(),
  fuel_type: z.string().max(20, "Deve conter no máximo 20 caracteres"),
  is_active: z.boolean(),
  price: z.number().int(),
});

export const createListAdvertisementResponseSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  model: z.string(),
  brand: z.string(),
  year: z.number().int(),
  fuel: z.number().int(),
  fuel_type: z.string(),
  is_active: z.boolean(),
  price: z.number().int(),
  authorId: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const retrieveAdvertisementsSchema: z.ZodSchema<IAdvertisementResponseProps[]> = z.array(
  createListAdvertisementResponseSchema
);

export const updateAdvertisementRequestSchema = createAdvertisementRequestSchema.partial();

export default createAdvertisementRequestSchema;
