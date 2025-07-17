import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//Ícones
import TodayIcon from '@mui/icons-material/Today';       // Ícone para "Hoje"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Ícone para "Essa Semana"
import EventNoteIcon from '@mui/icons-material/EventNote'; // Ícone para "Esse Mês"
import AddCircleIcon from '@mui/icons-material/AddCircle'; // Ícone para "+ Agendamento"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

//Componentes do Projeto
import ThemeToggle from '../utils/ToggleColorMode';
import Header from './Header';

const drawerWidth = 240;

interface SidebarProps {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ mode, toggleMode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header></Header>
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
          <List>
            {['Agendamento', 'Hoje', 'Essa Semana', 'Esse Mês'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* Ícones personalizados para cada item */}
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
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
  );
}


export default Sidebar;