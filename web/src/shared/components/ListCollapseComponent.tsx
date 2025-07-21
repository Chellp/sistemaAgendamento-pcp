import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import type { SxProps } from '@mui/system';


//Componentes Internos do Projeto

interface ListCollapseComponentProps {
    sx?: SxProps; // Aqui está o tipo para o sx
    exameSelecionado: string; // Prop para armazenar o item selecionado
    onItemSelecionado: (item: string) => void; // Função para atualizar o estado no componente pai
}

const ListExameCollapseComponent: React.FC<ListCollapseComponentProps> = ({ sx, exameSelecionado, onItemSelecionado }) => {

    const [open, setOpen] = React.useState(true);


    const handleClick = () => {
        setOpen(!open);
    };

    const handleItemClick = (item: string) => {
        onItemSelecionado(item); // Chama a função para atualizar o estado no componente pai
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
                <ListItemText primary={exameSelecionado || "Tipo de Exame"} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {['Corpo Delito', 'Violência Sexual', 'Ad Cautelam'].map((item) => (
                        <ListItemButton
                            key={item}
                            sx={{ pl: 4, marginTop: 2 }}
                            onClick={() => {
                                handleItemClick(item)
                                setOpen(!open); // Alterna o estado de abertura do colapso
                            }} // Marca ou desmarca o item
                        >
                            <ListItemText primary={item} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </List>
    );
}

//jogar lista e as em um array para facilitar a manipulação

export default ListExameCollapseComponent;