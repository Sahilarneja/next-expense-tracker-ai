import { PrismaClient } from "../app/generated/prisma";

declare global {
  // Prevents multiple instances of PrismaClient in dev
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
