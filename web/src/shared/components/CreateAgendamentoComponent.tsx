import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


//Componentes Internos do Projeto
import DateTimeComponent from './DateTimeComponent';
import ListCollapseComponent from './ListCollapseComponent';


export default function CreateAgendamentoComponent() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <Card variant="outlined">
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h2" component="h1" sx={{ width: '100%', textAlign: 'center' }}>
            Novo Agendamento
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Box sx={{ width: '100%', p: 2, paddingX: 5, display: 'flex', justifyContent: 'space-around', gap: 2 }}>
        <div className='inputArea'>
          <TextField sx={{ width: '100%' }}
            required
            id="outlined-required"
            label="Boletim de Ocorrencia"
            placeholder="12345/2024"
          />

          <TextField sx={{ width: '100%' }}
            required
            id="nome-outlined-required"
            label="Nome Completo"
            placeholder='Nome Completo'
          />



          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                sx={{ width: '100%' }}
                label="Nascimento*"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        <ListCollapseComponent ></ListCollapseComponent>
        </div>
        <DateTimeComponent></DateTimeComponent>

      </Box>
    </Card>
  );
}
