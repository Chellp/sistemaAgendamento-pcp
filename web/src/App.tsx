import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';

//Componentes Internos do Projeto
import { createAppTheme } from './shared/themes/themesColors';
import Sidebar from './shared/components/Sidebar';
import Header from './shared/components/Header';

//import AgendamentoPrincipalPage from './pages/AgendamentoPrincipalPage';
import CriarAgendamentoPage from './pages/criarAgendamentoPage';

const App = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = createAppTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Aplica a base de estilos (global reset e outros) */}
            <Box sx={{ display: 'flex'}}>
                <Header></Header>
                <Sidebar mode={mode} toggleMode={toggleMode} />
                <Box component="main" sx={{ maxHeight: '100vh' ,flexGrow: 1, p: 3, overflowY: 'auto' }}>
                    <CriarAgendamentoPage></CriarAgendamentoPage>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;