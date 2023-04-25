import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './components/App/App';
import { ThemeProvider } from "./components/Global/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
