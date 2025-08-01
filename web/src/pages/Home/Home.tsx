import { useEffect, useState } from 'react'; import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

//Componentes Internos do Projeto
import TableAgendamentoComponent from "../../shared/components/Table";
import ArrivaList from "../../shared/components/ArrivaList";
import AgendClass from '../../models/Class/AgendClass';
const agend = new AgendClass()
import type { dadosCriarAgendInterface } from '../../models/interfaces/agendamentoComponentsInterface';


export default function AgendamentoPrincipalPage() {
    const [data, setData] = useState<dadosCriarAgendInterface[]>([]); // Estado para armazenar os dados
    const tipoPagina = '';

    useEffect(() => {
        // Função assíncrona para buscar os dados
        const fetchData = async () => {
            try {
                const response = await agend.todosExamesExtendido();
                setData(response);  // Atualiza o estado com os dados recebidos
            } catch (error) {
                console.error('Erro ao buscar Exames: ', error);
            }
        };

        fetchData();  // Chama a função para buscar os dados 
    }, []);  // O useEffect roda apenas uma vez quando o componente é montado 

    console.log(data[2]);
    
    return (
        <Box sx={{ paddingX: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Toolbar></Toolbar>
            <Typography variant="h4" component="h1">
                Ordem de Chegada
            </Typography>
            <ArrivaList data={data}></ArrivaList>
            <TableAgendamentoComponent rows={data} tipoPagina={tipoPagina}></TableAgendamentoComponent>
        </Box>
    )
} 