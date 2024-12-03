import { User } from '../entities/User';

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User>;
  updateUser(user: User): Promise<User>;
}
