import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string().optional().nullable(),
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    cpf: z.string(),
    cellphone: z.string(),
    birth_date: z.date(),
    bio: z.string(),
    is_advertiser: z.boolean().optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
