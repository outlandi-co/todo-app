// src/context/Auth/AuthContext.test.jsx
import { render, screen } from '@testing-library/react';
import AuthProvider, { AuthContext } from './AuthProvider';

// eslint-disable-next-line no-undef
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

  // eslint-disable-next-line no-undef
  expect(screen.getByText('Logged Out')).toBeInTheDocument();
});
