import { User } from '../entities/User';

export class ApiUserAdapter {
  static toUser(apiData: any): User {
    return {
      id: apiData.id,
      name: apiData.name,
      email: apiData.email,
      password: apiData.password,
      role: apiData.role,
      avatar: apiData.avatar,
    };
  }
}
