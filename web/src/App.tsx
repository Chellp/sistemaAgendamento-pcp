import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

//Componentes do Projeto
import { createAppTheme } from './shared/themes/themesColors';
import Sidebar from './shared/components/Sidebar';
import Header from './shared/components/Header';

const App = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = createAppTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Aplica a base de estilos (global reset e outros) */}
            <Box sx={{ display: 'flex' }}>
                <Header></Header>
                <Sidebar mode={mode} toggleMode={toggleMode} />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Typography sx={{ marginBottom: 2 }}>
                        Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        Consequat mauris nunc congue nisi vitae suscipit.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;