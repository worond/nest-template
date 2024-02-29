import { User, UserRepository } from '@core/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneByOrFail({ id });
  }
}
