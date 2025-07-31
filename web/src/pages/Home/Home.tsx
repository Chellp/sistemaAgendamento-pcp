import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

//Componentes Internos do Projeto
import { createDataAgendTable } from '../../models/interfaces/agendamentoComponentsInterface';
import TableAgendamentoComponent from "../../shared/components/Table";
import ArrivaList from "../../shared/components/ArrivaList";
import type { RowDataAgendamentoTable } from '../../models/interfaces/agendamentoComponentsInterface';
import InfoAgendamentoComponent from '../Agendamento/InfoAgendamentoComponent';


const data: RowDataAgendamentoTable[] = [
    createDataAgendTable('A001', '13:00', 'VIOLENCIA_SEXUAL', '123.456.789-00', 'João Silva', 'M', '29', 'pendente'),
    createDataAgendTable('A002', '13:00', 'AD_CAUTELAM', '234.567.890-11', 'Maria Oliveira', 'F', '29', 'pendente'),
    createDataAgendTable('A003', '13:00', 'CORPO_DELITO', '345.678.901-22', 'Carlos Pereira', 'M', '29', 'pendente'),
    createDataAgendTable('A0041', '13:00', 'AD_CAUTELAM', '456.789.012-33', 'Ana Souza', 'F', '29', 'pendente'),
    createDataAgendTable('A0031', '13:00', 'CORPO_DELITO', '345.678.901-22', 'Carlos Pereira', 'M', '29', 'pendente'),
    createDataAgendTable('A00421', '13:00', 'AD_CAUTELAM', '456.789.012-33', 'Ana Souza', 'F', '29', 'pendente'),
    createDataAgendTable('A0011', '13:00', 'VIOLENCIA_SEXUAL', '123.456.789-00', 'João Silva', 'M', '29', 'pendente'),
    createDataAgendTable('A0022', '13:00', 'AD_CAUTELAM', '234.567.890-11', 'Maria Oliveira', 'F', '29', 'pendente'),
    createDataAgendTable('A0032', '13:00', 'CORPO_DELITO', '345.678.901-22', 'Carlos Pereira', 'M', '29', 'pendente'),
    createDataAgendTable('A0042', '13:00', 'AD_CAUTELAM', '456.789.012-33', 'Ana Souza', 'F', '29', 'pendente'),
    createDataAgendTable('A0033', '13:00', 'CORPO_DELITO', '345.678.901-22', 'Carlos Pereira', 'M', '29', 'pendente'),
    createDataAgendTable('A0043', '13:00', 'AD_CAUTELAM', '456.789.012-33', 'Ana Souza', 'F', '29', 'pendente')
];

export default function AgendamentoPrincipalPage() {
    const tipoPagina = '';

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