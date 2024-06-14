import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import cookie from 'js-cookie';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = (token) => {

    setIsLoggedIn(true);
    cookie.set('token', token, { expires: 1 });
  };

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    cookie.remove('token');
  };

  // Function to check if user has capability
  const userHasCapability = (capability) => {
    return user && user.capabilities && user.capabilities.includes(capability);
  };

  const authContextValue = {
    user,
    isLoggedIn,
    handleLogin,
    handleLogout,
    userHasCapability,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
