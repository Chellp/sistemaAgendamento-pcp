import Box from '@mui/material/Box';

//Componentes Internos do Projeto
import TimerComponent from "./TimerComponent"
import CalendarComponent from './CalendarComponent';
import type { TimerComponentProps } from './TimerComponent';

const DateTimeComponent: React.FC<TimerComponentProps> = ({ desc }) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <TimerComponent desc={desc} ></TimerComponent>
            <CalendarComponent></CalendarComponent>
        </Box>
    )
}

export default DateTimeComponent;