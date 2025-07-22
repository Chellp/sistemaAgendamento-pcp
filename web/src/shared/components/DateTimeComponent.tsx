import React from 'react';
import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateCalendar } from '@mui/x-date-pickers';
import type { SxProps } from '@mui/system';

export interface DateTimeComponentProps {
    sx?: SxProps;
    desc: string;
    value: {
        date: Dayjs | null;
        time: Dayjs | null;
    };
    onChange: (newValue: { date: Dayjs | null; time: Dayjs | null }) => void;
}

const DateTimeComponent: React.FC<DateTimeComponentProps> = ({ sx, desc, value, onChange }) => {
    const handleDateChange = (newDate: Dayjs | null) => {
        onChange({ ...value, date: newDate });
    };

    const handleTimeChange = (newTime: Dayjs | null) => {
        onChange({ ...value, time: newTime });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, ...sx }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker  sx={{ width: '100%' }}
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