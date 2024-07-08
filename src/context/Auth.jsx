// src/Context/Auth.jsx
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = cookie.get('token');
    if (token) {
      setUser(jwtDecode(token));
    }
  }, []);

  const handleLogin = (token) => {
    const decodedUser = jwtDecode(token);
    setUser(decodedUser);
    cookie.set('token', token, { expires: 1 });
  };

  const handleLogout = () => {
    setUser(null);
    cookie.remove('token');
  };

  const userHasCapability = (capability) => {
    return user && user.capabilities && user.capabilities.includes(capability);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout, userHasCapability }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
