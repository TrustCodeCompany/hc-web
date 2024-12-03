// src/modules/user/components/UserListItem.tsx
import React from 'react';
import { User } from '../../entities/User';

interface UserListItemProps {
  user: User;
}

export const UserListItem: React.FC<UserListItemProps> = ({ user }) => (
  <li>
    {user.name} - {user.email}
  </li>
);
