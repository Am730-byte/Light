/*
  Warnings:

  - The values [Barbell,Dumbbell,Machine] on the enum `EquipmentType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `type` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `primarymuscle` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourcetype` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('image', 'video', 'None');

-- AlterEnum
BEGIN;
CREATE TYPE "EquipmentType_new" AS ENUM ('BARBELL', 'DUMBBELL', 'MACHINE', 'RESISTANCE_BAND', 'NONE', 'OTHER', 'SUSPENSION');
ALTER TABLE "Exercise" ALTER COLUMN "equipment" TYPE "EquipmentType_new" USING ("equipment"::text::"EquipmentType_new");
ALTER TYPE "EquipmentType" RENAME TO "EquipmentType_old";
ALTER TYPE "EquipmentType_new" RENAME TO "EquipmentType";
DROP TYPE "public"."EquipmentType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "type",
ADD COLUMN     "primarymuscle" TEXT NOT NULL,
ADD COLUMN     "secondarymuscle" TEXT[],
ADD COLUMN     "source" TEXT,
ADD COLUMN     "sourcetype" "SourceType" NOT NULL;

-- DropEnum
DROP TYPE "ExerciseType";
