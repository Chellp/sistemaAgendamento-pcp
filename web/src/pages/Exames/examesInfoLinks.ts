import React from 'react'; // Import necessário para React.ReactNode
import MailIcon from '@mui/icons-material/Mail';

export interface EstruturaItemLista {
    nome: string,
    link: string,
    icone: React.ElementType,
    el: string
}

export const examesInfoLinks: EstruturaItemLista[] = [
    {
        nome: 'Todos',
        link: '/exames/todos',
        icone: MailIcon,
        el: 'exames_todos'
    },
    {
        nome: 'Concluidos',
        link: '/exames/concluidos',
        icone: MailIcon,
        el: 'exames_concluidos'
    },
    {
        nome: 'Pendentes',
        link: '/exames/pendentes',
        icone: MailIcon,
        el: 'exames_pendentes'
    },
    {
        nome: 'Cancelados',
        link: '/exames/cancelados',
        icone: MailIcon,
        el: 'exames_cancelados'
    },
    
]