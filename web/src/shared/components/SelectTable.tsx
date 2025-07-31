import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'boletim', headerName: 'Boletim', width: 80 },
  { field: 'data_hora', headerName: 'Data / Hora', width: 180 },
  { field: 'nome', headerName: 'Nome', width: 130 },
  { field: 'cpf', headerName: 'CPF', width: 130 },
  { field: 'exame', headerName: 'Exame', width: 180 }
];

const rows = [
  { id: 1, boletim: '12345', data_hora: '2025-08-01 08:00', nome: 'Jon Snow', cpf: '123.456.789-00', exame: 'Exame de sangue' },
  { id: 2, boletim: '12346', data_hora: '2025-08-01 09:00', nome: 'Cersei Lannister', cpf: '234.567.890-11', exame: 'Raio-X' },
  { id: 3, boletim: '12347', data_hora: '2025-08-02 10:30', nome: 'Jaime Lannister', cpf: '345.678.901-22', exame: 'Eletrocardiograma' },
  { id: 4, boletim: '12348', data_hora: '2025-08-02 11:45', nome: 'Arya Stark', cpf: '456.789.012-33', exame: 'Ultrassom' },
  { id: 5, boletim: '12349', data_hora: '2025-08-03 14:00', nome: 'Daenerys Targaryen', cpf: '567.890.123-44', exame: 'Tomografia' },
  { id: 6, boletim: '12350', data_hora: '2025-08-03 16:15', nome: 'Melisandre', cpf: '678.901.234-55', exame: 'Ressonância magnética' },
  { id: 7, boletim: '12351', data_hora: '2025-08-04 09:30', nome: 'Ferrara Clifford', cpf: '789.012.345-66', exame: 'Exame de sangue' },
  { id: 8, boletim: '12352', data_hora: '2025-08-04 11:00', nome: 'Rossini Frances', cpf: '890.123.456-77', exame: 'Raio-X' },
  { id: 9, boletim: '12353', data_hora: '2025-08-05 08:30', nome: 'Harvey Roxie', cpf: '901.234.567-88', exame: 'Exame de urina' }
];

const paginationModel = { page: 0, pageSize: 20 };

export default function SelectTableCancelados() {
  return (
    <Paper sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
