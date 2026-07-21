import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
//* DTO
import {
  CreateUserRequestDto,
  UpdateUserRequestDto,
  UpdatePerfilRequestDto,
} from './dto/users.dto';

//* TYPES
import { User, IUser } from '@src/common/decorator/user.decorator';
import { UserService } from './repository/users.repository';
import { CreateUsuario } from './service/Created.use-case';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import {
  Autenticado,
  Cargo,
  Setor,
  TypeCargo,
  TypeSetor,
} from '@src/infra/guard/roles.decorator';
import { exclude } from '@src/common/helpers/functions';

//* USE-CASE
import { UpdateUsuario } from './service/Updated.use-case';
import { UpdatePerfil } from './service/Perfil.use-case';
import { LogService } from '../../infra/logger/repository/log.repository';

@Controller('usuarios')
export class UserController extends BaseController {
  constructor(
    private readonly userService: UserService,
    private readonly logService: LogService,
    private readonly createUseBase: CreateUsuario,
    private readonly updateUseCase: UpdateUsuario,
    private readonly perfilUseCase: UpdatePerfil
  ) {
    super();
  }

  // ----- GET (/usuarios) - Administrador ----

  @Get()
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async findAll(): Promise<IResponse<any>> {
    const users = await this.userService.users({
      take: 200,
      orderBy: { nome: 'asc' },
      select: {
        id: true,
        nome: true,
        username: true,
        email: true,
        telefone: true,
        active: true,
        baseId: true,
        setorId: true,
        cargoId: true,
        created_at: true,
        updated_at: true,
        Base: {
          select: {
            nome: true,
          },
        },
        Setor: {
          select: {
            nomeVisivel: true,
          },
        },
        Cargo: {
          select: {
            nomeVisivel: true,
          },
        },
      },
    });

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: users,
    });
  }

  // ----- GET (/usuarios/cargo/:cargo) - Administrador ----

  @Get('cargo/:cargo')
  @Setor([
    TypeSetor.Administrador,
    TypeSetor.Farmacia,
    TypeSetor.CME,
    TypeSetor.Almoxarifado,
  ])
  async findAllByCargo(
    @Param() { cargo }: { cargo: string }
  ): Promise<IResponse<any>> {
    const users = await this.userService.users({
      take: 200,
      orderBy: { nome: 'asc' },
      select: {
        id: true,
        nome: true,
        username: true,
        email: true,
        telefone: true,
        active: true,
        baseId: true,
        setorId: true,
        cargoId: true,
        created_at: true,
        updated_at: true,
        Base: {
          select: {
            nome: true,
          },
        },
        Setor: {
          select: {
            nomeVisivel: true,
          },
        },
        Cargo: {
          select: {
            nomeVisivel: true,
          },
        },
      },
      where: {
        Cargo: {
          nomeVisivel: cargo,
        },
      },
    });

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: users,
    });
  }

  // ----- GET (/usuarios/cargo/:cargo/base/:baseId) - Administrador ----

  @Get('cargo/:cargo/base/:baseId')
  @Setor([
    TypeSetor.Administrador,
    TypeSetor.Farmacia,
    TypeSetor.CME,
    TypeSetor.Almoxarifado,
  ])
  async findAllByCargoAndBase(
    @Param() { cargo }: { cargo: string },
    @Param() { baseId }: { baseId: string }
  ): Promise<IResponse<any>> {
    const users = await this.userService.users({
      take: 200,
      orderBy: { nome: 'asc' },
      select: {
        id: true,
        nome: true,
        username: true,
        email: true,
        telefone: true,
        active: true,
        baseId: true,
        setorId: true,
        cargoId: true,
        created_at: true,
        updated_at: true,
        Base: {
          select: {
            nome: true,
          },
        },
        Setor: {
          select: {
            nomeVisivel: true,
          },
        },
        Cargo: {
          select: {
            nomeVisivel: true,
          },
        },
      },
      where: {
        baseId: baseId,
        AND: {
          Cargo: {
            nomeVisivel: cargo,
          },
        },
      },
    });

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: users,
    });
  }

  // ----- GET (/usuarios/:uuid) - Administrador ----

  @Get(':uuid')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async findOne(@Param() { uuid }: { uuid: string }): Promise<IResponse<any>> {
    if (!uuid)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const user = await this.userService.user({ id: uuid });

    if (!user)
      throw new HttpException('Usuário não existe', HttpStatus.FORBIDDEN);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: user,
    });
  }

  // ----- POST (/usuarios) - Administrador ----

  @Post()
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async create(
    @User() user: IUser,
    @Body() createUserRequestDto: CreateUserRequestDto
  ): Promise<IResponse<any>> {
    const newUser = await this.createUseBase.exec(createUserRequestDto, user);

    this.logService.created({
      mensagem: `Usuário criado pelo usuario ${user.nome}`,
      artefato: newUser.id,
      modulo: 'User',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: newUser,
    });
  }

  // ----- PUT (/usuarios/:id) - Administrador ----

  @Put(':id')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async update(
    @User() user: IUser,
    @Param('id') id: string,
    @Body() updateUserRequestDto: UpdateUserRequestDto
  ): Promise<IResponse<any>> {
    if (!id || id !== updateUserRequestDto.id)
      throw new HttpException('Dados não são validos.', HttpStatus.FORBIDDEN);

    // TODO update use case
    const newUser = await this.updateUseCase.exec(updateUserRequestDto, user);

    this.logService.updated({
      mensagem: `Usuário atualizado pelo usuario ${user.nome}`,
      artefato: newUser.id,
      modulo: 'User',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: newUser,
    });
  }

  // ----- PUT (/usuarios/perfil/:id) - Autenticado ----

  @Put('perfil/:id')
  @Autenticado()
  async updatePerfil(
    @User() user: IUser,
    @Param('id') id: string,
    @Body() updatePerfilRequestDto: UpdatePerfilRequestDto
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Dados não são validos.', HttpStatus.FORBIDDEN);

    if (id !== user.id) {
      throw new HttpException(
        'Usuário não tem permissão.',
        HttpStatus.FORBIDDEN
      );
    }

    // TODO update use case
    const perfil = await this.perfilUseCase.exec(updatePerfilRequestDto);

    if (!perfil) {
      throw new HttpException('Perfil não existe.', HttpStatus.FORBIDDEN);
    }

    this.logService.updated({
      mensagem: `Usuário ${user.nome}, atualizou seu perfil`,
      artefato: perfil.id,
      modulo: 'User',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: perfil,
    });
  }

  // ----- DELETE (/usuarios/:id) - Administrador ----

  @Delete(':id')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async remove(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const dbUser = await this.userService.user({ id });

    if (!dbUser)
      throw new HttpException('Usuário não existe.', HttpStatus.NOT_FOUND);

    await this.userService.updateUser({
      data: { active: false },
      where: { id },
    });

    this.logService.disabled({
      mensagem: `Usuário ${user.nome} desativou o usuário ${dbUser.nome}`,
      artefato: dbUser.id,
      modulo: 'User',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
    });
  }

  // ----- PUT (/usuarios/bloquear/:id) - Administrador ----

  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  @Put('bloquear/:id')
  async bloquearUsuario(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    const dbUser = await this.userService.user({
      id,
    });

    if (!dbUser) {
      throw new HttpException('Usuário não existe.', HttpStatus.NOT_FOUND);
    }

    await this.userService.updateUser({
      data: {
        active: false,
      },
      where: {
        id,
      },
    });

    this.logService.disabled({
      mensagem: `Usuário ${user.nome}, fez o bloqueio do usuario ${dbUser.nome}`,
      artefato: dbUser.id,
      modulo: 'User',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
    });
  }
}
