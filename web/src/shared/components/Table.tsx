import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Componentes Internos do Projeto
import type { RowDataAgendamentoTable } from '../../models/interfaces/agendamentoComponentsInterface';

interface TableAgendamentoComponentProps {
  rows: RowDataAgendamentoTable[];
  tipoPagina: '' | 'concluido' | 'pendente' | 'cancelado';
}

export default function TableAgendamentoComponent({ rows, tipoPagina }: TableAgendamentoComponentProps) {

  switch (tipoPagina) {
    case 'concluido':
      
      break;
  
    default:
      break;
  }

  return (
    <TableContainer component={Paper} sx={{ marginY: 4}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horário</TableCell>
            <TableCell align="right">Nome Completo</TableCell>
            <TableCell align="right">CPF</TableCell>
            <TableCell align="right">Exame</TableCell>
            <TableCell align="right">Gênero</TableCell>
            <TableCell align="right">Confirmar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.horario}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.horario}
              </TableCell>
              <TableCell align="right">{row.nome}</TableCell>
              <TableCell align="right">{row.cpf}</TableCell>
              <TableCell align="right">{row.tipoExame}</TableCell>
              <TableCell align="right">{row.genero}</TableCell>
              <TableCell align="right">{row.genero}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}