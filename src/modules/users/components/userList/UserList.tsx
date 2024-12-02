// src/modules/user/components/UserList.tsx
import { useState, useEffect } from 'react';
import { User } from '../../entities/User';
import { ApiUserRepository } from '../../infrastructure/ApiUserRepository';

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const userRepository = new ApiUserRepository();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await userRepository.getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
