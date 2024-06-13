// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from '../src/components/Todo/Todo';
import Settings from '../src/context/Settings';
import Header from '../src/components/Header/Header';
import SettingsProvider from '../src/context/Settings';

const App = () => {
  return (
    <SettingsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <footer>@2024 Qilin Xie</footer>
      </Router>
    </SettingsProvider>
  );
};

export default App;
