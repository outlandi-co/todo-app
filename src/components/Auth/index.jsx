// src/components/Auth/index.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth';

const Auth = ({ capability, children }) => {
  const { user, can } = useContext(AuthContext);

  return user && can(capability) ? children : null;
};

export default Auth;
