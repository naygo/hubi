/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSocials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_genderId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_pronounId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_rankId_fkey";

-- DropForeignKey
ALTER TABLE "UserSocials" DROP CONSTRAINT "UserSocials_socialId_fkey";

-- DropForeignKey
ALTER TABLE "UserSocials" DROP CONSTRAINT "UserSocials_userId_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserSocials";

-- CreateTable
CREATE TABLE "userSocials" (
    "userId" INTEGER NOT NULL,
    "socialId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "userSocials_pkey" PRIMARY KEY ("userId","socialId")
);

-- CreateTable
CREATE TABLE "user" (
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

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "userSocials" ADD CONSTRAINT "userSocials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userSocials" ADD CONSTRAINT "userSocials_socialId_fkey" FOREIGN KEY ("socialId") REFERENCES "socials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_pronounId_fkey" FOREIGN KEY ("pronounId") REFERENCES "pronouns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "ranks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
