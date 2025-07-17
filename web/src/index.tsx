// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Usando a nova API do React 18+
import App from './App';  // Importando o componente App

// Criando o root do React
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Renderizando o componente principal (App) dentro do root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* document.addEventListener('DOMContentLoaded', async () => {
    navegarPara('/home')
}) */