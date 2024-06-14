// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './site.scss'; // Adjust the path to match your project structure

import Todo from '../src/components/Todo/Todo';
import Header from '../src/components/Header/Header'; // Import your Header component

const App = () => {
  // Example logic to determine openItems
  const openItems = 10; // Replace with your dynamic value or state

  return (
    <Router>
      <Header openItems={openItems} /> {/* Ensure openItems is passed */}
      <Routes>
        <Route path="/" element={<Todo />} />
        {/* Add more routes as needed */}
      </Routes>
      <footer>@2024 Adam Jimenez</footer>
    </Router>
  );
};

export default App;
