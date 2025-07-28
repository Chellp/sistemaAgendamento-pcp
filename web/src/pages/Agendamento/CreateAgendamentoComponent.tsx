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
import DateTimeComponent from '../../shared/components/DateTimeComponent';
import ListExameCollapseComponent from '../../shared/components/ListCollapseComponent';
import ButtonEnviarComponent from '../../shared/components/ButtonEnviarComponent';
import InputRowGender from '../../shared/components/InputRowGender';
import validateForm from '../../shared/form-handling/form-validators/validarFormulario';
import ConfirmAgendamentoModal from './ConfirmAgendamentoComponent';

//Interfaces
import type { FormErrors } from '../../shared/form-handling/form-validators/validarFormulario';
import type { FormValues } from '../../models/interfaces/agendamentoComponentsInterface';
import type { HandleAgendamentoValues } from '../../models/interfaces/agendamentoComponentsInterface';

//Classes
import FormatarCaracteresHelper from '../../shared/helpers/FormatarCaracteresHelper';
import AgendamentoSubmission from '../../shared/form-handling/api-submission/AgendamentoSubmission';

const formatar = new FormatarCaracteresHelper();
const agendamentoSubmission = new AgendamentoSubmission();


export default function CreateAgendamentoComponent() {

  const [values, setValues] = React.useState<FormValues>({
    boletim: '',
    cpf: '',
    nome: '',
    genero: '',
    dt_nasc: null,
    observacoes: '',
    exameSelecionado: '',
    endereco: '',
    telefone: '',
    horario: null,
    data: null

  });

  const [errors, setErrors] = React.useState<FormErrors>({});

  // Controla a visibilidade da modal
  const [openModal, setOpenModal] = React.useState(false);
  const [modalData, setModalData] = React.useState<HandleAgendamentoValues | null>(null);  // Dados a serem passados para a Modal


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleDateChange(date: Dayjs | null) {
    setValues({ ...values, dt_nasc: date });
  }

  const handleGenderChange = (selectedGenero: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      genero: selectedGenero,
    }));
  };

  function handleItemSelecionado(item: string) {
    setValues({ ...values, exameSelecionado: item }); // Atualiza o estado com o item selecionado
  }

  const handleDateTimeChange = (newValue: { date: Dayjs | null; time: Dayjs | null }) => {
    setValues({
      ...values,
      data: newValue.date,
      horario: newValue.time,
    });
  };

  //Mudar as funções 'handle' para outro arquivo
  //para manter o código mais organizado e limpo


  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const formattedData = values.data ? values.data.format('YYYY-MM-DD') : '';
    const formattedHora = values.horario ? values.horario.format('HH:mm') : '';
    const formattedNascimento = values.dt_nasc ? values.dt_nasc.format('YYYY-MM-DD') : '';
    const formmatteCPF = formatar.removerTodosCaracteresEspeciais(values.cpf);

    const payload: HandleAgendamentoValues = {
      ...values,
      cpf: formmatteCPF,
      data: formattedData,
      horario: formattedHora,
      dt_nasc: formattedNascimento.toString(),
      genero: values.genero || 'Feminino',
    };

    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      //abrir a modal de confirmação passando o payload como props
      setOpenModal(true);
      setModalData(payload); // Salvar os dados no estado local
    }
  };

  // Função chamada ao confirmar o agendamento na modal
  const handleConfirmSubmit = () => {
    if (modalData) {
      // Enviar dados para o backend
      agendamentoSubmission.getAgendamento(modalData)
        .then((idAgendamento) => {
          console.log("Agendamento criado com sucesso:", idAgendamento);
        })
        .catch((error) => {
          console.error("Erro ao criar agendamento:", error);
        });

      setOpenModal(false);  // Fechar a modal
      alert('Agendamento confirmado!');
    }
  };

  // Função chamada ao cancelar a ação na modal
  const handleCancel = () => {
    setOpenModal(false);  // Fechar a modal
  };

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
              id="boletim-outlined-required"
              label="Boletim de Ocorrencia"
              placeholder="12345/2024"
              value={values.boletim}
              onChange={handleChange}
              error={!!errors.boletim}
              helperText={errors.boletim}
            />

            <TextField sx={{ width: '100%' }}
              required
              name='cpf'
              id="cpf-outlined-required"
              label="CPF"
              placeholder="000.000.000-00"
              value={values.cpf}
              onChange={handleChange}
              error={!!errors.cpf}
              helperText={errors.cpf}
            />

            <TextField sx={{ width: '100%' }}
              required
              name='nome'
              id="nome-outlined-required"
              label="Nome Completo"
              placeholder='Nome Completo'
              value={values.nome}
              onChange={handleChange}
              error={!!errors.nome}
              helperText={errors.nome}
            />

            <InputRowGender
              generoSelecionado={values.genero}
              onGeneroSelecionado={handleGenderChange}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  sx={{ width: '100%' }}
                  name='nascimento'
                  label="Nascimento*"
                  value={values.dt_nasc}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      error: !!errors.dt_nasc,
                      helperText: errors.dt_nasc,
                      required: true,
                    }
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <ListExameCollapseComponent
              exameSelecionado={values.exameSelecionado}
              onItemSelecionado={handleItemSelecionado}
            />

            <TextField sx={{ width: '100%' }}
              required
              name='endereco'
              id="endereco-outlined-required"
              label="Endereço..."
              placeholder='Endereço...'
              value={values.endereco}
              onChange={handleChange}
              error={!!errors.endereco}
              helperText={errors.endereco}
            />

            <TextField sx={{ width: '100%' }}
              required
              name='telefone'
              id="telefone-outlined-required"
              label="Telefone"
              placeholder='(00) 00000-0000'
              value={values.telefone}
              onChange={handleChange}
              error={!!errors.telefone}
              helperText={errors.telefone}
            />

            <TextField sx={{ width: '100%' }}
              name='observacoes'
              id="observacoes-outlined"
              label="Observações"
              placeholder="Descrição..."
              value={values.observacoes}
              onChange={handleChange}
            />
          </div>

          <DateTimeComponent sx={{ padding: 2 }}
            desc="Horário do Exame"
            value={{ date: values.data, time: values.horario }}
            onChange={handleDateTimeChange} />
        </Box>

        <ButtonEnviarComponent sx={{ width: '20%' }} />
      </form>

      {/* Modal de confirmação */}
      <ConfirmAgendamentoModal
        open={openModal}
        onClose={handleCancel}
        onConfirm={handleConfirmSubmit}
        dados={modalData}
      />

    </Card>
  );
}
