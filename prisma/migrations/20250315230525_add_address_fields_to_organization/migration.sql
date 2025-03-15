/*
  Warnings:

  - Added the required column `city` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "city" VARCHAR(50) NOT NULL,
ADD COLUMN     "complement" TEXT,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "state" VARCHAR(2) NOT NULL;
