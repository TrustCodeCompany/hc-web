import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class GetUserByIdUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.getUserById(id);
    return user;
  }
}
