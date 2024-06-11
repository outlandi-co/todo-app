import React, { useContext } from 'react'; // Import React
import { SettingsContext } from './context/Settings.jsx'; // Import SettingsContext
import { Button } from '@mantine/core'; // Import Mantine components
import Header from './components/Header.jsx'; // Import Header component
import Footer from './components/Footer.jsx'; // Import Footer component
import Counter from './context/Counter.jsx'; // Import Counter component

function App() {
  const settings = useContext(SettingsContext); // Use SettingsContext

  return (
    <>
      <div id="app" className={settings.mode}>
        <Header />

        {/* Mantine Button component */}
        <Button variant="filled">Hello Mantine!</Button>

        <Counter />
        <Footer />
      </div>
    </>
  );
}

export default App;
