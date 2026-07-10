import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { NotificacoesRepository } from './repository/notification.repository';
import { AuthGuard } from '@src/infra/auth/auth.guard';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { BaseController } from '@src/common/bases/BaseController';
import { Autenticado } from '@src/infra/guard/roles.decorator';

@UseGuards(AuthGuard)
@Controller('notificacoes')
export class NotificacoesController extends BaseController {
  constructor(private readonly repository: NotificacoesRepository) {
    super();
  }

  @Get()
  @Autenticado()
  async findAll(@User() user: IUser) {
    const notificacoes = await this.repository.findByUser(user.id);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: notificacoes,
    });
  }

  // @Get('unread/count')
  // async countUnread(@User() user: IUser) {
  //   const total = await this.repository.countUnread(user.id);

  //   return this.handleSuccessResponse({
  //     code: HttpStatus.OK,
  //     response: total,
  //   });
  // }

  // @Put(':uuid/lida')
  // async markAsRead(@Param('uuid') uuid: string, @User() user: IUser) {
  //   await this.repository.markAsRead(uuid, user.id);
  //   return this.handleSuccessResponse({
  //     code: HttpStatus.OK,
  //   });
  // }

  // @Put('lida/todas')
  // async markAllAsRead(@User() user: IUser) {
  //   await this.repository.markAllAsRead(user.id);
  //   return this.handleSuccessResponse({
  //     code: HttpStatus.OK,
  //   });
  // }

  // @Delete(':uuid')
  // async remove(@Param('uuid') uuid: string, @User() user: IUser) {
  //   await this.repository.remove(uuid, user.id);
  //   return this.handleSuccessResponse({
  //     code: HttpStatus.OK,
  //   });
  // }

  // @Delete('remover/all/my_user')
  // async removeAll(@User() user: IUser) {
  //   await this.repository.removeAll(user.id);
  //   return this.handleSuccessResponse({
  //     code: HttpStatus.OK,
  //   });
  // }
}
