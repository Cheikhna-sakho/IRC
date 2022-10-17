import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';
import { CommadeContextProvider } from './contexts/CommandContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <CommadeContextProvider>
        <App />
      </CommadeContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);

reportWebVitals();