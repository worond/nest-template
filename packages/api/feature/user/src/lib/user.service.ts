import { User, UserRepository } from '@core/database';
import { Injectable } from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from '@shared/dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  create(data: UserCreateDto): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneByOrFail({ id });
  }

  update(id: number, data: UserUpdateDto): Promise<User> {
    return this.userRepository.findOneByOrFail({ id });
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.userRepository.delete({ id });
    return res.affected ? true : false;
  }
}
