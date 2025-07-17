//import React from 'react';
import Sidebar from './shared/components/Sidebar';  // Importando o Sidebar
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

export default function App() {
    return (
        <>
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                </Box>
            </Box>
        </>
    );
}