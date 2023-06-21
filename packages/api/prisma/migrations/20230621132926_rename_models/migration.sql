/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usersSocials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_genderId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_pronounId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_rankId_fkey";

-- DropForeignKey
ALTER TABLE "usersSocials" DROP CONSTRAINT "usersSocials_socialId_fkey";

-- DropForeignKey
ALTER TABLE "usersSocials" DROP CONSTRAINT "usersSocials_userId_fkey";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "usersSocials";

-- CreateTable
CREATE TABLE "UserSocials" (
    "userId" INTEGER NOT NULL,
    "socialId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSocials_pkey" PRIMARY KEY ("userId","socialId")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dateBirth" TIMESTAMP(3) NOT NULL,
    "genderId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "howDidKnowHubi" TEXT NOT NULL,
    "timeInCommunity" TEXT NOT NULL,
    "pronounId" INTEGER NOT NULL,
    "riotId" TEXT NOT NULL,
    "rankId" INTEGER NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserSocials" ADD CONSTRAINT "UserSocials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSocials" ADD CONSTRAINT "UserSocials_socialId_fkey" FOREIGN KEY ("socialId") REFERENCES "socials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pronounId_fkey" FOREIGN KEY ("pronounId") REFERENCES "pronouns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "ranks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
