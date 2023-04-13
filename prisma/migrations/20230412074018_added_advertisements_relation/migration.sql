-- CreateTable
CREATE TABLE "advertisement" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "model" VARCHAR(100) NOT NULL,
    "brand" VARCHAR(20) NOT NULL,
    "year" INTEGER NOT NULL,
    "fuel" INTEGER NOT NULL,
    "fuel_type" VARCHAR(20) NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "price" INTEGER NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "advertisement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "advertisement" ADD CONSTRAINT "advertisement_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
