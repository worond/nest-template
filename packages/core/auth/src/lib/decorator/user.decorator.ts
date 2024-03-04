import { User } from '@core/database';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthUser = createParamDecorator(
  (data: keyof User, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest<{ user: User }>().user;
    return data ? user && user[data] : user;
  },
);
