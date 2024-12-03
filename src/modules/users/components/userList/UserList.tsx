// src/modules/user/components/UserList.tsx
import React from 'react';
import { UserListItem } from '../userListItem/UserListItem';
import { useUsers } from '../../hooks/useUsers';

export const UserList: React.FC = () => {
  const { users, error } = useUsers();

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
