import * as React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';

export interface CalendarComponentProps {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
        <DemoItem label={'Data Prevista'}>
          <DateCalendar
            value={value} // Passa o valor atual do calendário
            onChange={onChange} // Passa a função que atualiza o valor do calendário
            views={['day']}  // Define que apenas a visualização de dias será exibida
            disablePast // Desabilita a seleção de datas passadas
            sx={{ width: '100%' }} // Define a largura do calendário
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default CalendarComponent;