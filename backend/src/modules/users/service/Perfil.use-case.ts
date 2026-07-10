import { UpdatePerfilRequestDto } from '../dto/users.dto';
import { UserService } from '../repository/users.repository';
import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { hashPassword } from '@src/common/helpers/argon';

@Injectable({ scope: Scope.REQUEST })
export class UpdatePerfil {
  constructor(private readonly userService: UserService) {}

  public async exec(dado: UpdatePerfilRequestDto) {
    const dbUser = await this.userService.user({
      id: dado.id,
    });

    if (!dbUser) {
      throw new HttpException('Perfil não existe.', HttpStatus.FORBIDDEN);
    }

    const password =
      dado.password === '******'
        ? dado.password
        : await hashPassword(dado.password);

    await this.userService.updateUser({
      where: {
        id: dbUser.id,
      },
      data: {
        ...dado,
        password,
      },
    });

    return await this.userService.user({ id: dbUser.id });
  }
}
