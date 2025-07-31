import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Paper } from '@mui/material';

//Componentes Internos do Projeto
import type { RowDataAgendamentoTable } from '../../models/interfaces/agendamentoComponentsInterface';
import InfoAgendamentoComponent from '../../pages/Agendamento/InfoAgendamentoComponent';

//Interfaces
import type { HandleAgendamentoValues } from '../../models/interfaces/agendamentoComponentsInterface';


interface TableAgendamentoComponentProps {
  rows: RowDataAgendamentoTable[] | any;
  tipoPagina: '' | 'concluido' | 'pendente' | 'cancelado';
  header?: string[],
  status?: boolean,
  btnConfirmar?: boolean
}

export const headerPadrao = ['Horário', 'Nome Completo', 'CPF', 'Exame', 'Gênero']

export default function TableAgendamentoComponent({ rows, header, status = false, btnConfirmar = false }: TableAgendamentoComponentProps) {

  let headerTable: string[] = []
  if (!header) {
    headerTable = headerPadrao
  } else {
    headerTable = header
  }

  // Controla a visibilidade da modal
  const [openModal, setOpenModal] = React.useState(false);
  const [modalData, setModalData] = React.useState<HandleAgendamentoValues | null>(null);  // Dados a serem passados para a Modal

  // Função chamada ao clicar para abrir a modal
  const handleConfirm = () => {
    setOpenModal(true);  // Abrir a modal
  }

  // Função chamada ao cancelar a ação na modal
  const handleCancel = () => {
    setOpenModal(false);  // Fechar a modal
  };


  return (
    <>
      <TableContainer component={Paper} sx={{ marginY: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headerTable.map((item, index) => (
                <TableCell key={index} align={index === 0 ? 'left' : 'right'}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row.id_agendamento}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 }, '&:hover': {
                    backgroundColor: (theme) => theme.palette.action.hover,
                    cursor: 'pointer'
                  }
                }}

                onClick ={() => {
                  setModalData(row)
                }
                }
              >
                <TableCell component="th" scope="row">
                  {row.horario}
                </TableCell>
                <TableCell align="right">{row.nome}</TableCell>
                <TableCell align="right">{row.cpf}</TableCell>
                <TableCell align="right">{row.tipoExame}</TableCell>
                <TableCell align="right">{row.genero}</TableCell>

                {status && (
                  <TableCell align="right">
                    <Button variant="contained" size="small">{row.status}</Button>
                  </TableCell>
                )}

                {btnConfirmar && (
                  <TableCell align="right">
                    <Button variant="contained" size="small">Confirmar</Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      {/* Modal de visualização */}
      <InfoAgendamentoComponent
        titulo='Confirmar Agendamento'
        open={openModal}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        dados={modalData}
      />
    </>
  );
}