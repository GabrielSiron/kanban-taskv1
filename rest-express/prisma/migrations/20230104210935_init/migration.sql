-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cyclo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "initialDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalDate" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Cyclo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Day" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "cycloId" INTEGER,
    "userId" INTEGER,
    CONSTRAINT "Day_cycloId_fkey" FOREIGN KEY ("cycloId") REFERENCES "Cyclo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Day_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tagId" INTEGER,
    "dayId" INTEGER,
    "userId" INTEGER,
    CONSTRAINT "Task_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Task_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
