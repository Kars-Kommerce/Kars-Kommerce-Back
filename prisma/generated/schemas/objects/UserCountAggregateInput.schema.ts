import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    username: z.literal(true).optional(),
    email: z.literal(true).optional(),
    password: z.literal(true).optional(),
    cpf: z.literal(true).optional(),
    cellphone: z.literal(true).optional(),
    birth_date: z.literal(true).optional(),
    bio: z.literal(true).optional(),
    is_advertiser: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    updated_at: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UserCountAggregateInputObjectSchema = Schema;