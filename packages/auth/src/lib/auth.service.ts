import { User } from '@core/database';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AccessToken } from './interfaces/access-token.interface';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: User): Promise<AccessToken> {
    const payload = { sub: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
