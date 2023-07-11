/*
  Warnings:

  - Added the required column `order` to the `ranks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ranks" ADD COLUMN     "order" INTEGER NOT NULL;
