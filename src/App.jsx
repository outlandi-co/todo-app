// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import AuthProvider from './context/Auth';
import Todo from './components/Todo/Todo';

const App = () => {
  return (
    <AuthProvider>
      <Todo />
    </AuthProvider>
  );
};

export default App;
