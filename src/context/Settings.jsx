import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [title, setTitle] = useState('Context API');
  const [mode, setMode] = useState('light');

  function toggleMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <SettingsContext.Provider value={{ title, setTitle, mode, toggleMode }}>
      {props.children}
    </SettingsContext.Provider>
  );
}

// PropTypes validation
SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsProvider;
