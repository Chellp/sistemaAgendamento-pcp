import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


//Componentes Internos do Projeto
import DateTimeComponent from './DateTimeComponent';
import ListExameCollapseComponent from './ListCollapseComponent';
import ButtonEnviarComponent from './ButtonEnviarComponent';
import validateForm from '../utils/validarFormulario';
import type { FormValues, FormErrors } from '../utils/validarFormulario';


export default function CreateAgendamentoComponent() {

  const [values, setValues] = React.useState<FormValues>({
    boletim: '',
    nome: '',
    nascimento: null,
    observacoes: '',
    exameSelecionado: ''
  });

  const [errors, setErrors] = React.useState<FormErrors>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleDateChange(date: Dayjs | null) {
    setValues({ ...values, nascimento: date });
  }

  function handleItemSelecionado(item: string) {
    setValues({ ...values, exameSelecionado: item }); // Atualiza o estado com o item selecionado
  }


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Envie os dados para o backend ou prossiga
      console.log(values);

      alert('Formulário válido!');
    }
  }

  return (
    <Card variant="outlined" sx={{ paddingBottom: '30px' }}>
      <form onSubmit={handleSubmit}>
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
          width: '80%',
          margin: '0 auto',
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
              name='boletim'
              id="outlined-required"
              label="Boletim de Ocorrencia"
              placeholder="12345/2024"
              value={values.boletim}
              onChange={handleChange}
            />

            <TextField sx={{ width: '100%' }}
              required
              name='nome'
              id="nome-outlined-required"
              label="Nome Completo"
              placeholder='Nome Completo'
              value={values.nome}
              onChange={handleChange}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  sx={{ width: '100%' }}
                  name='nascimento'
                  label="Nascimento*"
                  value={values.nascimento}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      error: !!errors.nascimento,
                      helperText: errors.nascimento,
                      required: true,
                    }
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <ListExameCollapseComponent
              exameSelecionado={values.exameSelecionado}
              onItemSelecionado={handleItemSelecionado}
            ></ListExameCollapseComponent>

            <TextField sx={{ width: '100%' }}
              required
              name='observacoes'
              id="outlined"
              label="Observações"
              placeholder="Descrição..."
              value={values.observacoes}
              onChange={handleChange}
            />
          </div>

          <DateTimeComponent desc="Horário do Exame"></DateTimeComponent>
        </Box>

        <ButtonEnviarComponent sx={{ width: '20%' }}></ButtonEnviarComponent>
      </form>

    </Card>
  );
}
