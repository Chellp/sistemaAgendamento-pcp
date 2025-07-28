import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Box, Typography, Stack, boxClasses } from '@mui/material';

//INTERFACES
import type { HandleAgendamentoValues } from '../../models/interfaces/agendamentoComponentsInterface';

interface ConfirmAgendamentoModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  dados: HandleAgendamentoValues | null;
}

const ConfirmAgendamentoModal: React.FC<ConfirmAgendamentoModalProps> = ({ open, onClose, onConfirm, dados }) => {
  return (
    <Box>
      <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: 'center' }}>Confirmar Agendamento</DialogTitle>
      <DialogContent>
        <Box sx={{ width: '100%', padding: 2 }}>
          <Stack spacing={2}>
            <Typography><strong>Nome Completo:</strong> {dados?.nome || 'Não disponível'}</Typography>
            <Typography><strong>Boletim de Ocorrência:</strong> {dados?.boletim|| 'Não disponível'}</Typography>
            <Typography><strong>CPF:</strong> {dados?.cpf|| 'Não disponível'}</Typography>
            <Typography><strong>Endereço:</strong> {dados?.endereco|| 'Não disponível'}</Typography>
            <Typography><strong>Telefone:</strong> {dados?.telefone|| 'Não disponível'}</Typography>
            <Typography><strong>Exame Selecionado:</strong> {dados?.exameSelecionado|| 'Não disponível'}</Typography>
            <Typography><strong>Observações:</strong> {dados?.observacoes}</Typography>
            <Typography><strong>Data de Nascimento:</strong> {dados?.dt_nasc|| 'Não disponível'}</Typography>
            <Typography><strong>Data e Hora do Exame:</strong> {dados?.data|| 'Não disponível'} às {dados?.horario || 'Não disponível'}</Typography>
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancelar</Button>
        <Button onClick={onConfirm} color="primary">Confirmar</Button>
      </DialogActions>
    </Dialog>
    </Box>
  );
};

export default ConfirmAgendamentoModal;
