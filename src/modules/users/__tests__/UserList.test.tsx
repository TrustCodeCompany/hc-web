import { render, screen, waitFor } from '@testing-library/react';
import { ApiUserRepository } from '../infrastructure/ApiUserRepository';
import { User } from '../entities/User';
import { UserList } from '../components/userList/UserList';

jest.mock('../infrastructure/ApiUserRepository');

describe('UserList', () => {
  it('renders the list of users correctly', async () => {
    // Mock de datos de usuarios
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'admin',
        password: '123456',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'admin',
        password: '123486',
      },
    ];
    (ApiUserRepository.prototype.getUsers as jest.Mock).mockResolvedValue(
      mockUsers
    );

    // Renderizamos el componente
    render(<UserList />);

    // Verificamos que el título esté presente
    expect(screen.getByText('User List')).toBeInTheDocument();

    // Esperamos que los usuarios se rendericen
    await waitFor(() => {
      expect(
        screen.getByText('John Doe - john.doe@example.com')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Jane Smith - jane.smith@example.com')
      ).toBeInTheDocument();
    });
  });

  // it('displays an error message when fetching users fails', async () => {
  //   // Simulamos un error en el repositorio
  //   (ApiUserRepository.prototype.getUsers as jest.Mock).mockRejectedValue(
  //     new Error('API error')
  //   );

  //   // Renderizamos el componente
  //   render(<UserList />);

  //   // Verificamos que se muestre el mensaje de error
  //   await waitFor(() => {
  //     expect(screen.getByText('Failed to fetch users')).toBeInTheDocument();
  //   });
  // });
});
