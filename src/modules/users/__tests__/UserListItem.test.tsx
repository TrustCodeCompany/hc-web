import { render, screen } from '@testing-library/react';
import { User } from '../entities/User';
import { UserListItem } from '../components/userListItem/UserListItem';

describe('UserListItem', () => {
  it('renders the user name and email correctly', () => {
    // Mock user data
    const user: User = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password',
      role: 'admin',
    };

    // Renderizamos el componente
    render(<UserListItem user={user} />);

    // Verificamos que se muestren correctamente el nombre y el email
    expect(
      screen.getByText('John Doe - john.doe@example.com')
    ).toBeInTheDocument();
  });
});
