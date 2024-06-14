// src/context/Settings.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const defaults = {
    showCompleted: false,
    difficulty: 4,
    perPage: 3,
  };

  const [settings, setSettings] = useState(defaults);

  const toggleShowCompleted = () => {
    setSettings((prevSettings) => ({ ...prevSettings, showCompleted: !prevSettings.showCompleted }));
  };

  const setPerPage = (value) => {
    setSettings((prevSettings) => ({ ...prevSettings, perPage: value }));
  };

  const providedValues = { settings, toggleShowCompleted, setPerPage };

  return (
    <SettingsContext.Provider value={providedValues}>
      {children}
    </SettingsContext.Provider>
  );
};

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsProvider;
