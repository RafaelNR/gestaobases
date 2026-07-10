import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { User, Prisma } from '@generated/prisma/client';

@Injectable()
export class UserService {
  constructor(public prisma: PrismaService) {}

  async user(where: Prisma.UserWhereUniqueInput, select?: Prisma.UserSelect) {
    return this.prisma.user.findUnique({
      where,
      include: {
        Setor: true,
        Base: true,
        Cargo: true,
      },
    });
  }

  async users(params: {
    select?: Prisma.UserSelect;
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    omit?: Prisma.UserOmit;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy, select } = params;
    const user = this.prisma.user.findMany({
      select,
      skip,
      take,
      cursor,
      where,
      orderBy,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }
  async updateUser(params: {
    where: Pick<Prisma.UserWhereUniqueInput, 'id'>;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data: {
        ...data,
      },
      where: {
        id: where.id,
      },
    });
  }

  async deleteUser(
    where: Pick<Prisma.UserWhereUniqueInput, 'id'>
  ): Promise<User> {
    return this.prisma.user.update({
      data: {
        active: false,
      },
      where: {
        id: where.id,
      },
    });
  }

  async countUserIsExiste(Dados: { username: string }): Promise<number> {
    return this.prisma.user.count({
      where: {
        username: Dados.username,
      },
    });
  }

  async usersNotificationBySetor(setor: string) {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
      },
      where: {
        Setor: {
          nome: setor,
        },
      },
    });
  }
  async usersNotificationByIds(ids: string[]) {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
      },
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}
