import React from 'react';
import { Switch, Typography, Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/system'; // Importando o tipo SxProps

interface ThemeToggleProps {
  mode: 'light' | 'dark';
  toggleMode: () => void;
  sx?: SxProps<Theme>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ mode, toggleMode, sx }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...sx }}>
      <Typography variant="body1" sx={{ marginRight: 2, fontWeight: 'bold' }}>
        {mode === 'light' ? 'Modo Claro' : 'Modo Escuro'}
      </Typography>
      <Switch checked={mode === 'dark'} onChange={toggleMode} />
    </Box>
  );
};

export default ThemeToggle;