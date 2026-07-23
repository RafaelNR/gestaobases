import ValidateError from '@src/common/errors/ValidateError';
import { UpdateUserRequestDto } from '../dto/users.dto';
import { UserService } from '../repository/users.repository';
import { ForbiddenException, Injectable, Scope } from '@nestjs/common';
import { hashPassword } from '@src/common/helpers/argon';
import { IUseCase } from '@/src/common/bases/BaseUse-Case';
import { IUser } from '@/src/common/decorator/user.decorator';
import { TypeSetor } from '@/src/infra/guard/roles.decorator';

@Injectable({ scope: Scope.REQUEST })
export class UpdateUsuario {
  constructor(private readonly userService: UserService) {}

  public async exec(dados: UpdateUserRequestDto, user: IUser) {
    const userOriginal = await this.userService.user({
      id: dados.id,
    });

    if (!userOriginal) throw new ValidateError('Usuário não existe');

    const setor = await this.userService.prisma.setor.findUnique({
      where: {
        id: dados.setorId,
      },
    });

    if (
      user.setor !== TypeSetor.Administrador &&
      setor?.nome === 'Administrador'
    ) {
      throw new ForbiddenException(
        'Usuário não tem permissão para esse setor.'
      );
    }

    const password =
      dados.password === '********' || dados.password === '******'
        ? userOriginal.password
        : await hashPassword(dados.password);

    return await this.userService.updateUser({
      where: {
        id: userOriginal.id,
      },
      data: {
        ...dados,
        password,
      },
    });
  }
}
