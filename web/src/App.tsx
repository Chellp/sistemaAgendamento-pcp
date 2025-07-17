import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';

import { createAppTheme } from './shared/themes/themesColors';
import Sidebar from './shared/components/Sidebar';  // Importando o Sidebar

const App = () => {
    // Estado para armazenar o modo (light ou dark)
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    // Função para alternar o modo
    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    // Cria o tema com base no estado do modo
    const theme = createAppTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Aplica a base de estilos (global reset e outros) */}
            <Box sx={{ display: 'flex' }}>
                <Sidebar mode={mode} toggleMode={toggleMode}/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;