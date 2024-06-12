// App.jsx
import React from 'react';
import { MantineProvider } from '@mantine/core';
import SettingsProvider from '../src/context/Settings';
import Todo from '../src/components/Todo';
// Import MantineButton component if it exists
// import MantineButton from './components/Todo/MantineComponents/MantineButton'; 
import '@mantine/core/styles.css';
import '../src/site.scss';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <MantineProvider>
          <div>
            <h1>Customized Mantine Button</h1>
            {/* Render MantineButton if imported */}
            {/* {MantineButton && <MantineButton
              variant="filled"
              color="teal"
              size="lg"
              radius="md"
              label="Click me"
            />} */}
          </div>
          <Todo />
        </MantineProvider>
      </SettingsProvider>
    );
  }
}
