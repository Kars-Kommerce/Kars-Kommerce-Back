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
  kilometer: z.number().int(),
  fuel: z.number().int(),
  fuel_type: z.string().max(20, "Deve conter no máximo 20 caracteres"),
  is_active: z.boolean(),
  price: z.number().int(),
  cover_image: z.string(),
  galery: z.array(z.string())
});


export const  commentResponseSchema = z.object({
  id: z.number(),
  text: z.string(),
  author: z.object({
    id:z.string(),
    name: z.string(),
  }),
  created_at: z.date()
})

export const commentRequestSchema = z.object({
  text: z.string()
})

export const createListAdvertisementResponseSchema = z.object({
  id: z.number().int(),
  author: z.object({
    id: z.string(),
    name: z.string(),
    bio: z.string().optional(),
    is_advertiser: z.boolean(),
  }),
  title: z.string(),
  description: z.string(),
  model: z.string(),
  brand: z.string(),
  year: z.number().int(),
  kilometer: z.number().int(),
  fuel: z.number().int(),
  fuel_type: z.string(),
  is_active: z.boolean(),
  price: z.number().int(),
  comments:z.array(commentResponseSchema),
  cover_image: z.string(),
  galery: z.array(z.object({image: z.string()})),
  created_at: z.date(),
  updated_at: z.date(),
  
});

export const retrieveAdvertisementsSchema: z.ZodSchema<
  IAdvertisementResponseProps[]
> = z.array(createListAdvertisementResponseSchema);

export const updateAdvertisementRequestSchema =
  createAdvertisementRequestSchema.partial();

export default createAdvertisementRequestSchema;
