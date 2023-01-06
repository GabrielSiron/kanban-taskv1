/*
  Warnings:

  - You are about to drop the `Cyclo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cyclo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Cycle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "initialDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalDate" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Cycle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Day" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "cycloId" INTEGER,
    "userId" INTEGER,
    CONSTRAINT "Day_cycloId_fkey" FOREIGN KEY ("cycloId") REFERENCES "Cycle" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Day_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Day" ("cycloId", "date", "id", "title", "userId") SELECT "cycloId", "date", "id", "title", "userId" FROM "Day";
DROP TABLE "Day";
ALTER TABLE "new_Day" RENAME TO "Day";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
