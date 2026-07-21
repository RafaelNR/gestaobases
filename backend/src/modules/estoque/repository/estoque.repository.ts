import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';

@Injectable()
export class EstoqueRepository {
  constructor(public readonly prisma: PrismaService) {}
}
