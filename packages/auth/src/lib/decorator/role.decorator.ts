import { SetMetadata } from '@nestjs/common';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER',
}

export const ROLE_KEY = 'role';
export const Role = (...role: UserRole[]) => SetMetadata('role', role);
