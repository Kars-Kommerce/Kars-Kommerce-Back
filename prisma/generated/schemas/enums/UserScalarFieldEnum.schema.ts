import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'username',
  'email',
  'password',
  'cpf',
  'cellphone',
  'birth_date',
  'bio',
  'is_advertiser',
  'created_at',
  'updated_at',
]);
