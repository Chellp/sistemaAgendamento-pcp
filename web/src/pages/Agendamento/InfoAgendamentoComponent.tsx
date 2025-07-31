import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Box, Typography, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';

//INTERFACES
import type { HandleAgendamentoValues } from '../../models/interfaces/agendamentoComponentsInterface';

export interface InfoAgendamento {
  atendente: string;
  data: string;
  hora: string;
  nome_unidade: string;
  regiao_unidade: string
}

interface InfoAgendamentoModalProps {
  titulo: string;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  dados: HandleAgendamentoValues | null;
  agend?: InfoAgendamento;
  btnConfirmar?: string
}

const InfoAgendamentoComponent: React.FC<InfoAgendamentoModalProps> = ({ titulo, open, onClose, onConfirm, dados, agend, btnConfirmar }) => {

  if(!btnConfirmar){
    btnConfirmar = 'Ok'
  }

  return (
    <Box>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>{titulo}</DialogTitle>
        <DialogContent>
          <Box sx={{ width: '100%', padding: 2 }}>
            <Stack spacing={2}>
              <Typography><strong>Nome Completo:</strong> {dados?.nome || 'Não disponível'}</Typography>
              <Typography><strong>Boletim de Ocorrência:</strong> {dados?.boletim || 'Não disponível'}</Typography>
              <Typography><strong>CPF:</strong> {dados?.cpf || 'Não disponível'}</Typography>
              <Typography><strong>Endereço:</strong> {dados?.endereco || 'Não disponível'}</Typography>
              <Typography><strong>Telefone:</strong> {dados?.telefone || 'Não disponível'}</Typography>
              <Typography><strong>Exame Selecionado:</strong> {dados?.exameSelecionado || 'Não disponível'}</Typography>
              <Typography><strong>Observações:</strong> {dados?.observacoes}</Typography>
              <Typography><strong>Data de Nascimento:</strong> {dados?.dt_nasc || 'Não disponível'}</Typography>
              <Typography><strong>Data e Hora do Exame:</strong> {dados?.data || 'Não disponível'} às {dados?.horario || 'Não disponível'}</Typography>

              {agend && (
                <>
                  <Divider />
                  <Typography variant='h3'><strong>Informações do Agendamento</strong></Typography>

                  <Typography><strong>Data do agendamento: </strong> {agend?.data || 'Não disponível'} às {agend?.hora || 'Não disponível'}</Typography>
                  <Typography><strong>Atendente: </strong> {agend?.atendente || 'Não disponível'}</Typography>
                  <Typography><strong>Unidade do Agendamento: </strong> {agend?.nome_unidade || 'Não disponível'} - {agend?.regiao_unidade || 'Não disponível'}</Typography>
                </>
              )}
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">Cancelar</Button>
          <Button onClick={onConfirm} color="primary">{btnConfirmar}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default InfoAgendamentoComponent;
