// import React from 'react';
import { AppProvider } from './context';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <AppProvider>
    <App />
  </AppProvider>
)
