import { CreateUserRequestDto } from '../dto/users.dto';
import { UserService } from '../repository/users.repository';
import { ConflictException, Injectable, Scope } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { hashPassword } from '@src/common/helpers/argon';

@Injectable({ scope: Scope.REQUEST })
export class CreateUsuario {
  private user!: CreateUserRequestDto;

  constructor(private readonly userService: UserService) {}

  public async exec(Dados: CreateUserRequestDto) {
    this.user = Dados;

    if (await this.userService.countUserIsExiste(Dados)) {
      throw new ConflictException(
        'Dados unicos de usuário já existe, email, rg ou cpf'
      );
    }

    const user = await this.userService.createUser({
      ...this.user,
      password: await hashPassword(this.user.password),
    } as any);

    return user;
  }
}
