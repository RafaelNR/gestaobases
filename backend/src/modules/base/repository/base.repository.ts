import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Base, Prisma } from '@generated/prisma/client';
import { CreateBaseRequestDto, UpdateBaseRequestDto } from '../dto/base.dto';

@Injectable()
export class BaseRepository {
  constructor(public prisma: PrismaService) {}

  async findAll(): Promise<Base[]> {
    return this.prisma.base.findMany({
      orderBy: { nome: 'asc' },
    });
  }

  async findOne(id: string): Promise<Base | null> {
    return this.prisma.base.findUnique({
      where: { id },
    });
  }

  async create(data: CreateBaseRequestDto): Promise<Base> {
    return this.prisma.base.create({ data });
  }

  async update(id: string, data: UpdateBaseRequestDto): Promise<Base> {
    return this.prisma.base.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Base> {
    return this.prisma.base.delete({
      where: { id },
    });
  }

  async count(where: Prisma.BaseWhereInput): Promise<number> {
    return this.prisma.base.count({ where });
  }
}
