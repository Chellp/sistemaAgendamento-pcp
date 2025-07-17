import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//Ícones
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TodayIcon from '@mui/icons-material/Today';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

//Componentes do Projeto
import ThemeToggle from '../utils/ToggleColorMode';

const drawerWidth = 240;

interface SidebarProps {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mode, toggleMode }) => {
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
            {['Agendamento', 'Hoje', 'Essa Semana', 'Esse Mês'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {text === 'Agendamento' && <AddCircleIcon />}
                    {text === 'Hoje' && <TodayIcon />}
                    {text === 'Essa Semana' && <CalendarTodayIcon />}
                    {text === 'Esse Mês' && <EventNoteIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
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
            {['Concluidos', 'Pendentes', 'Cancelados'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
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