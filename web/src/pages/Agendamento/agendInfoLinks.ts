import type { EstruturaItemLista } from "../Exames/examesInfoLinks"
import TodayIcon from '@mui/icons-material/Today';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const agendInfoLinks: EstruturaItemLista[] = [
    {
        nome: 'Agendar',
        link: '/agendamentos/novo-agendamento',
        icone: AddCircleIcon,
        el: 'agendamentos_todos'
    },
    {
        //Todos os exames realizados, cancelados e pendentes, organizados de acordo com a última atualizacao
        nome: 'Todos',
        link: '/agendamentos/todos',
        icone: TodayIcon,
        el: 'agendamentos_todos'
    },
    {
        nome: 'Essa Semana',
        link: '/agendamentos/essa-semana',
        icone: CalendarTodayIcon,
        el: 'agendamentos_essa-semana'
    },
    {
        nome: 'Esse Mês',
        link: '/agendamentos/esse-mes',
        icone: EventNoteIcon,
        el: 'agendamentos_esse-mes'
    }
    
]