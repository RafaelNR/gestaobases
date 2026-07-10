import type { PrismaService } from '@src/infra/database/prisma/prisma.service';

// fora da classe, derive os tipos a partir da instância
export type DbClient = PrismaService['db'];

// tipo da transaction (client dentro do callback de $transaction)
export type Trx = Omit<
  PrismaClient<never, undefined, DefaultArgs>,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$extends'
>;
