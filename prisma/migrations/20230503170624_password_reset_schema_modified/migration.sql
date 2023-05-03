/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `password_reset_request` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "password_reset_request_userId_key" ON "password_reset_request"("userId");
