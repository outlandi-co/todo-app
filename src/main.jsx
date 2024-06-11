import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Ensure App.jsx exists in the src directory
import SettingsProvider from "./context/Settings.jsx"; // Ensure Settings.jsx exists in src/context
import CounterProvider from "./context/Counter.jsx"; // Ensure Counter.jsx exists in src/context

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </SettingsProvider>
  </React.StrictMode>
);
