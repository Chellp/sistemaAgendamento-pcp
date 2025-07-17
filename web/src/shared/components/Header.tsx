import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';

import ProfileCollapse from './ProfileCollapse';

const Header = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , overflowY: 'visible',  maxHeight: 64}}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mx: 2 }}>
                        <img src="/assets/img/logo.png" alt="Logo" style={{ width: 30, height: 30 }} />
                    </IconButton>
                    Sistema de Agendamento
                </Typography>
                <ProfileCollapse></ProfileCollapse>
            </Toolbar>
        </AppBar>
    )
}

export default Header