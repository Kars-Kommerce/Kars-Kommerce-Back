import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereUniqueInput> = z
  .object({
    id: z.string().uuid().optional(),
    username: z.string().optional(),
    email: z.string().email().optional(),
    cpf: z.string().optional(),
    cellphone: z.string().optional(),
  })
  .strict();

export const UserWhereUniqueInputObjectSchema = Schema;
