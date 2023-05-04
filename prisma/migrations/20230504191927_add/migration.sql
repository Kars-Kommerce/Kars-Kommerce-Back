-- DropForeignKey
ALTER TABLE "galery" DROP CONSTRAINT "galery_advertisementId_fkey";

-- AddForeignKey
ALTER TABLE "galery" ADD CONSTRAINT "galery_advertisementId_fkey" FOREIGN KEY ("advertisementId") REFERENCES "advertisement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
