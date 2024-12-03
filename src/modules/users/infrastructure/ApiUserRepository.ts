import axios from 'axios';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';
import { ApiUserAdapter } from '../adapters/ApiUserAdapter';

export class ApiUserRepository implements UserRepository {
  // defino la url de la api
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/users';

  async getUsers(): Promise<User[]> {
    const response = await axios.get(this.baseUrl);
    return response.data.map((u: any) => ApiUserAdapter.toUser(u));
  }

  async getUserById(id: string): Promise<User> {
    const response = await axios.get(`${this.baseUrl}/${id}`);
    return ApiUserAdapter.toUser(response.data);
  }

  async updateUser(user: User): Promise<User> {
    const response = await axios.put(`${this.baseUrl}/${user.id}`, user);
    return ApiUserAdapter.toUser(response.data);
  }
}
