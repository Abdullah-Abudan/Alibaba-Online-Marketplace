import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Theme from './Theme/index'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>
);