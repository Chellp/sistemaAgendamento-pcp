import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//Componentes Internos do Projeto
import CreateAgendamentoComponent from "../shared/components/CreateAgendamentoComponent";

export default function CriarAgendamentoPage() {
    return (
        <>  
            <Toolbar></Toolbar>
            <Typography>
                Data: 01/01/2025 - 13:30
            </Typography>
            <CreateAgendamentoComponent></CreateAgendamentoComponent>
        </>
    )
}