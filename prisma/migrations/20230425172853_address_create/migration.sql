-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "cep" VARCHAR(100) NOT NULL,
    "state" VARCHAR(20) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "street" VARCHAR(100) NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "address_userId_key" ON "address"("userId");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
