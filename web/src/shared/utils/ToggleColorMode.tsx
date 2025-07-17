import React from 'react';
import { Switch, Typography, Box } from '@mui/material';

interface ThemeToggleProps {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ mode, toggleMode }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body1" sx={{ marginRight: 2, fontWeight: 'bold' }}>
        {mode === 'light' ? 'Modo Claro' : 'Modo Escuro'}
      </Typography>
      <Switch checked={mode === 'dark'} onChange={toggleMode} />
    </Box>
  );
};

export default ThemeToggle;