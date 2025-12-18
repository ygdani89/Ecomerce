import { PrismaClient } from '../generated/prisma/index.js';

declare global {
  // Evita múltiples instancias en desarrollo (hot reload)
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;