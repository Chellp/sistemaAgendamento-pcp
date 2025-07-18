import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function CalendarComponent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
        <DemoItem label={'Data Prevista'}>
          <DateCalendar views={['day']} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}