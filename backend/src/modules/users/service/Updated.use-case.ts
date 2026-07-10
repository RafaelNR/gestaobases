import ValidateError from '@src/common/errors/ValidateError';
import { UpdateUserRequestDto } from '../dto/users.dto';
import { UserService } from '../repository/users.repository';
import { Injectable, Scope } from '@nestjs/common';
import { hashPassword } from '@src/common/helpers/argon';

@Injectable({ scope: Scope.REQUEST })
export class UpdateUsuario {
  constructor(private readonly userService: UserService) {}

  public async exec(dados: UpdateUserRequestDto) {
    const user = dados;

    const userOriginal = await this.userService.user({
      username: user.username,
    });

    if (!userOriginal) throw new ValidateError('Usuário não existe');

    const password =
      user.password === '********' || user.password === '******'
        ? userOriginal.password
        : await hashPassword(user.password);

    return await this.userService.updateUser({
      where: {
        id: userOriginal.id,
      },
      data: {
        ...user,
        password,
      },
    });
  }
}
