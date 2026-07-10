import { SetMetadata } from '@nestjs/common';

export const Public = () => SetMetadata('isPublic', true);

// Aceita qualquer tipo de role
export const AllowRolesAuth = () => SetMetadata('AllowRolesAuth', true);
