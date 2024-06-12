import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const defaults = {
    showCompleted: false,
    difficulty: 4,
    perPage: 3,
  };

  const [settings, setSettings] = useState(defaults);

  function toggleShowCompleted() {
    setSettings({ ...settings, showCompleted: !settings.showCompleted });
  }

  function setPerPage(value) {
    setSettings({ ...settings, perPage: value });
  }

  const providedValues = { settings, toggleShowCompleted, setPerPage };

  return (
    <SettingsContext.Provider value={providedValues}>
      {props.children}
    </SettingsContext.Provider>
  );
}

// Add prop validation for 'children'
SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsProvider;
