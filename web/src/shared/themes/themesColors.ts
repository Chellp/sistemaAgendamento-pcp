import { createTheme } from '@mui/material';

// Função para criar o tema, podendo alternar entre light e dark mode
export const createAppTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode, // 'light' ou 'dark'
      primary: {
        main: mode === 'light' ? '#1976d2' : '#90caf9', // Exemplo de cor primária dinâmica
      },
      secondary: {
        main: mode === 'light' ? '#dc004e' : '#f48fb1', // Exemplo de cor secundária dinâmica
      },
      background: {
        default: mode === 'light' ? '#fafafa' : '#121212', // Cor de fundo para modo claro e escuro
        paper: mode === 'light' ? '#ffffff' : '#333333', // Cor de fundo do papel
      },
    },
  });
};