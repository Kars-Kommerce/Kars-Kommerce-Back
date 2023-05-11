/*
  Warnings:

  - You are about to drop the column `fuel_type` on the `advertisement` table. All the data in the column will be lost.
  - Added the required column `fipe` to the `advertisement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "advertisement" DROP COLUMN "fuel_type",
ADD COLUMN     "fipe" INTEGER NOT NULL,
ALTER COLUMN "fuel" SET DATA TYPE TEXT;
