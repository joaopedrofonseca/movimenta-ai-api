import { PrismaClient } from '@prisma/client';
export var prisma;
export function connectDb() {
    prisma = new PrismaClient();
}
