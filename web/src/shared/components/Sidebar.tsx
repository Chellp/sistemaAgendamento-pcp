import * as React from 'react';
import {
  Box, Drawer, CssBaseline, Toolbar,
  List, Divider, ListItem, ListItemButton,
  ListItemIcon, ListItemText
} from '@mui/material';

//Ícones
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

//Componentes Internos do Projeto
import ThemeToggle from '../utils/ToggleColorMode';
import { examesInfoLinks } from '../../pages/Exames/examesInfoLinks';
import { agendInfoLinks } from '../../pages/Agendamento/agendInfoLinks';

//Funções
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

interface SidebarProps {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mode, toggleMode }) => {

  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>  {/* Agendamentos */}
            {agendInfoLinks.map(({ nome, link, icone: Icon, el }, index) => (
              <ListItem key={`${el}-${index}`}
                onClick={() => handleClick(link)}
                disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={nome} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>  {/* Exames */}
            <ListItem>
              <ListItemIcon>
                <HealthAndSafetyIcon />
              </ListItemIcon>
              <ListItemText primary="Exames" slotProps={{
                primary: { sx: { fontWeight: 'bold' } }  // Aplica o estilo ao Typography interno
              }} />
            </ListItem>
          </List>
          <List>
            {examesInfoLinks.map(({ nome, link, icone: Icon, el }, index) => (
              <ListItem key={`${el}-${index}`}
                onClick={() => handleClick(link)}
                disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={nome} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <ThemeToggle mode={mode} toggleMode={toggleMode}
          sx={{
            padding: '8px 16px',
            position: 'absolute',
            bottom: '16px',
            width: 'calc(100% - 32px)'
          }} /> {/* Theme Toggle */}
      </Drawer>
    </Box>
  );
}


export default Sidebar;