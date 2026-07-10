import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Prisma } from '@generated/prisma/client';


@Injectable()
export class LogRepository {
  private database: Prisma.LogDelegate;
  constructor(private readonly prisma: PrismaService) {
    this.database = this.prisma.log;
  }

  async findAll(params: { take: number, skip: number, where?: Prisma.LogWhereInput }) {

    return await this.database.findMany({
      where: params.where,
      take: params.take,
      skip: params.skip,
      orderBy: { createdAt: 'desc' },
      omit: {
        id: true,
      }
    });
  }
}
