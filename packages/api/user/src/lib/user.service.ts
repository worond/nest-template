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

  async update(id: number, data: UserUpdateDto): Promise<User> {
    const user = await this.findOne(id);
    return this.userRepository.save(this.userRepository.merge(user, data));
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.userRepository.delete({ id });
    return res.affected ? true : false;
  }
}
