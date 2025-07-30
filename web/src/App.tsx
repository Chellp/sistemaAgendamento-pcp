import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

//Componentes Internos do Projeto
import { createAppTheme } from './shared/themes/themesColors';
import AppRoutes from './router';

const App = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = createAppTheme(mode);

    return (
         <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes mode={mode} toggleMode={toggleMode} />
      </BrowserRouter>
    </ThemeProvider>
    );
};

export default App;