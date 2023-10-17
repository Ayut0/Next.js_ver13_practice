import { PrismaClient } from "@prisma/client";

// initialize a single prisma client instance
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Using ReturnType we can infer the return type of a function, prismaClientSingleton
type PrismaClientSIngleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSIngleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
