import React from 'react';
import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateCalendar } from '@mui/x-date-pickers';

export interface DateTimeComponentProps {
    desc: string;
    value: {
        date: Dayjs | null;
        time: Dayjs | null;
    };
    onChange: (newValue: { date: Dayjs | null; time: Dayjs | null }) => void;
}

const DateTimeComponent: React.FC<DateTimeComponentProps> = ({ desc, value, onChange }) => {
    const handleDateChange = (newDate: Dayjs | null) => {
        onChange({ ...value, date: newDate });
    };

    const handleTimeChange = (newTime: Dayjs | null) => {
        onChange({ ...value, time: newTime });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker
                        label={desc}
                        value={value.time}
                        onChange={handleTimeChange}
                    />
                </DemoContainer>

                <DemoContainer components={['DateCalendar']}>
                    <DemoItem label={'Data Prevista'}>
                        <DateCalendar
                            value={value.date} // Passa o valor atual do calendário
                            onChange={handleDateChange} // Passa a função que atualiza o valor do calendário
                            views={['day']}  // Define que apenas a visualização de dias será exibida
                            disablePast // Desabilita a seleção de datas passadas
                            sx={{ width: '100%' }} // Define a largura do calendário
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </Box>
    );
};

export default DateTimeComponent;