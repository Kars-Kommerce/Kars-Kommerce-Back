/*
  Warnings:

  - Added the required column `cover_image` to the `advertisement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kilometer` to the `advertisement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_advertisementId_fkey";

-- AlterTable
ALTER TABLE "advertisement" ADD COLUMN     "cover_image" TEXT NOT NULL,
ADD COLUMN     "kilometer" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "galery" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "advertisementId" INTEGER NOT NULL,

    CONSTRAINT "galery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_advertisementId_fkey" FOREIGN KEY ("advertisementId") REFERENCES "advertisement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "galery" ADD CONSTRAINT "galery_advertisementId_fkey" FOREIGN KEY ("advertisementId") REFERENCES "advertisement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
