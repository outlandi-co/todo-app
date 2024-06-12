import { useContext } from 'react'

import { SettingsContext } from './context/Settings.jsx';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import Counter from './context/Counter.jsx';


function App() {

  const settings = useContext(SettingsContext);

  return (
    <>
      <div id="app" className={settings.mode}>
        <Header />
        <Counter />
        <Footer />
      </div>
    </>
  )
}

export default App