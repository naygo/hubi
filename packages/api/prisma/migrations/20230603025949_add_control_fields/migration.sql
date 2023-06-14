/*
  Warnings:

  - Added the required column `createdAt` to the `usersSocials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `usersSocials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usersSocials" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" INTEGER NOT NULL;
