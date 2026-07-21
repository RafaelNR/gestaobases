import { CreateUserRequestDto } from '../dto/users.dto';
import { UserService } from '../repository/users.repository';
import {
  ConflictException,
  ForbiddenException,
  Injectable,
  Scope,
} from '@nestjs/common';
import { hashPassword } from '@src/common/helpers/argon';
import { IUser } from '@/src/common/decorator/user.decorator';
import { TypeSetor } from '@/src/infra/guard/roles.decorator';

@Injectable({ scope: Scope.REQUEST })
export class CreateUsuario {
  private user!: CreateUserRequestDto;

  constructor(private readonly userService: UserService) {}

  public async exec(Dados: CreateUserRequestDto, user: IUser) {
    this.user = Dados;

    const setor = await this.userService.prisma.setor.findUnique({
      where: {
        id: Dados.setorId,
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

    if (await this.userService.countUserIsExiste(Dados)) {
      throw new ConflictException(
        'Dados unicos de usuário já existe, email, rg ou cpf'
      );
    }

    const newUser = await this.userService.createUser({
      ...this.user,
      password: await hashPassword(this.user.password),
    } as any);

    return newUser;
  }
}
