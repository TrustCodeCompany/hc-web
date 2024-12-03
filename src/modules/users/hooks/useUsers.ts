// src/modules/user/hooks/useUsers.ts
import { useState, useEffect } from 'react';
import { User } from '../entities/User';
import { ApiUserRepository } from '../infrastructure/ApiUserRepository';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const userRepository = new ApiUserRepository();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await userRepository.getUsers();
        setUsers(usersData);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  return { users, error };
};
