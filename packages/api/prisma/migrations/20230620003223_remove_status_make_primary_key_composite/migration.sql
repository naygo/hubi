/*
  Warnings:

  - The primary key for the `usersSocials` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `usersSocials` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `usersSocials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "usersSocials" DROP CONSTRAINT "usersSocials_pkey",
DROP COLUMN "id",
DROP COLUMN "status",
ADD CONSTRAINT "usersSocials_pkey" PRIMARY KEY ("userId", "socialId");
