import Box from '@mui/material/Box';

//Componentes Internos do Projeto
import TimerComponent from "./TimerComponent"
import CalendarComponent from './CalendarComponent';

export default function DateTimeComponent() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <TimerComponent></TimerComponent>
            <CalendarComponent></CalendarComponent>
        </Box>
    )
}