import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class UpdateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private userRepository: UserRepository) {}

  async execute(user: User): Promise<User> {
    return await this.userRepository.updateUser(user);
  }
}
