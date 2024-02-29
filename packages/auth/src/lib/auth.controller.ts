import { User } from '@core/database';
import { Controller, UseGuards, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { Public } from './decorator/public.decorator';
import { AuthUser } from './decorator/user.decorator';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AccessToken } from './interfaces/access-token.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@AuthUser() user: User): Promise<AccessToken> {
    return this.authService.login(user);
  }
}
