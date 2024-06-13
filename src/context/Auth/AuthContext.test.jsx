// src/context/Auth/AuthContext.test.jsx
import { render, screen } from '@testing-library/react';
import AuthProvider, { AuthContext } from './index';

test('provides user context', () => {
  render(
    <AuthProvider>
      <AuthContext.Consumer>
        {({ user }) => (
          <span>{user ? 'Logged In' : 'Logged Out'}</span>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );

  expect(screen.getByText('Logged Out')).toBeInTheDocument();
});
