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
import ListExameCollapseComponent from './ListCollapseComponent';
import ButtonEnviarComponent from './ButtonEnviarComponent';


export default function CreateAgendamentoComponent() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <Card variant="outlined" sx={{paddingBottom: '30px'}}>
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
      <Box sx={{
        width: '100%',
        padding: '20px',
        paddingBottom: '0px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 5
      }}>

        <div className='inputArea' style={{
          width: '100%',
          padding: '20px',
          paddingBottom: '0px',
          display: 'flex',
          flexDirection: 'column', // Ajustado para ser válido
          gap: '15px'
        }}>
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

          <ListExameCollapseComponent ></ListExameCollapseComponent>

          <TextField sx={{ width: '100%' }}
            required
            id="outlined"
            label="Observações"
            placeholder="Descrição..."
          />
        </div>

        <DateTimeComponent desc="Horário do Exame"></DateTimeComponent>
      </Box>

      <ButtonEnviarComponent sx={{ width: '20%' }}></ButtonEnviarComponent>

    </Card>
  );
}
