/*
  Warnings:

  - You are about to alter the column `cellphone` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "cellphone" SET DATA TYPE VARCHAR(11);
