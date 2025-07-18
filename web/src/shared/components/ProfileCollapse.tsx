import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

//Componentes Internos do Projeto
import { useTheme } from '@mui/material/styles'; // Importando useTheme


export default function ProfileCollapse() {

    const [open, setOpen] = React.useState(true);
    const theme = useTheme();

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 200,
                bgcolor: open ? 'transparent' :
                    theme.palette.mode === 'dark' ? '#454545' : theme.palette.primary.main,
                position: 'absolute',
                top: '8px',
                right: 24,
                transition: 'background-color 0.3s ease'
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton onClick={handleClick} sx={{ maxHeight: 64, paddingY: 0 }}>
                <Avatar alt="Perfil" src="/static/images/avatar/1.jpg" sx={{ paddingY: 0, marginRight: 2, width: 30, height: 30 }}/>
                <ListItemText primary="Perfil" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4, marginTop: 2 }}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sair" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}