import './App.css';
import React from 'react';
import { StoreProvider } from './store';
import { Router } from './router/Router';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StoreProvider>
  );
};
