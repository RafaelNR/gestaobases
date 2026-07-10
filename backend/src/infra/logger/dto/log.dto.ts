import { Log, User } from '@generated/prisma/client';
import { logCreateSchema } from '../validation/log.schema';
import { createZodDto } from '@anatine/zod-nestjs';

export class logCreateSchemaDto extends createZodDto(logCreateSchema) {}

export type logDto = Log & { User: Pick<User, 'username'> };
