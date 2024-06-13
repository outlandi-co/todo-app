// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
import { decode as jwt_decode } from 'jwt-decode'; // eslint-disable-next-line no-unused-vars
import cookie from 'js-cookie';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = (token) => {
    const decodedToken = jwt_decode(token);
    setUser(decodedToken);
    setIsLoggedIn(true);
    cookie.set('token', token, { expires: 1 }); // Example: Store token in cookie
  };

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    cookie.remove('token'); // Example: Remove token from cookie
  };

  // Function to check if user has capability
  const userHasCapability = (capability) => {
    // Example logic: Check if user has capability based on their role or permissions
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

export default AuthProvider;
