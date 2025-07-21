import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import type { SxProps } from '@mui/system';
import { useTheme } from '@mui/material/styles'; // Importando useTheme
import type { Theme } from '@mui/material/styles';


interface ListCollapseComponentProps {
    sx?: SxProps<Theme>; // Aqui está o tipo para o sx
}

//Componentes Internos do Projeto


const ListExameCollapseComponent: React.FC<ListCollapseComponentProps> = ({ sx }) => {

    const [open, setOpen] = React.useState(true);
    const theme = useTheme();

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{
                width: '100%',
                bgcolor: 'transparent',
                transition: 'background-color 0.3s ease',
                ...sx,
                border: '1px solid gray'
            }}
            component="ul"
        >
            <ListItemButton onClick={handleClick} sx={{ maxHeight: 64, paddingY: 0 }}>
                <ListItemText primary="Tipo de Exame" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4, marginTop: 2 }}>
                        <ListItemText primary="Corpo Delito" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4, marginTop: 2 }}>
                        <ListItemText primary="Violência Sexual" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4, marginTop: 2 }}>
                        <ListItemText primary="Ad Cautelam" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}

export default ListExameCollapseComponent;