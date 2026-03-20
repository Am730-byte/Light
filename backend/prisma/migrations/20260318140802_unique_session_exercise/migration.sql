/*
  Warnings:

  - A unique constraint covering the columns `[sessionId,exerciseId]` on the table `SessionExercise` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SessionExercise_sessionId_exerciseId_key" ON "SessionExercise"("sessionId", "exerciseId");
