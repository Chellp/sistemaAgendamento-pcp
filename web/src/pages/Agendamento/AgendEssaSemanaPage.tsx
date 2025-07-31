import { Box, Toolbar, Typography } from "@mui/material";

//Componentes Internos do Projeto
import TableAgendamentoComponent from "../../shared/components/Table";
import SelectTableCancelados from "../../shared/components/SelectTable";

const data = [
    {
        boletim: '12345',
        cpf: '123.456.789-00',
        nome: 'João Silva',
        genero: 'Masculino',
        dt_nasc: '1990-05-15',
        observacoes: 'Nenhuma',
        tipoExame: 'Exame de sangue',
        endereco: 'Rua das Flores, 123, São Paulo - SP',
        telefone: '(11) 98765-4321',
        horario: '08:00',
        data: '2025-08-01',
    },
    {
        boletim: '12346',
        cpf: '234.567.890-11',
        nome: 'Maria Oliveira',
        genero: 'Feminino',
        dt_nasc: '1985-02-20',
        observacoes: 'Urgente',
        tipoExame: 'Exame de urina',
        endereco: 'Avenida Brasil, 456, Rio de Janeiro - RJ',
        telefone: '(21) 99876-5432',
        horario: '09:30',
        data: '2025-08-02',
    },
    {
        boletim: '12347',
        cpf: '345.678.901-22',
        nome: 'Carlos Souza',
        genero: 'Masculino',
        dt_nasc: '1987-11-10',
        observacoes: 'Preferência por horário à tarde',
        tipoExame: 'Raio-X',
        endereco: 'Rua das Palmeiras, 789, Belo Horizonte - MG',
        telefone: '(31) 91234-5678',
        horario: '14:00',
        data: '2025-08-03',
    },
    {
        boletim: '12348',
        cpf: '456.789.012-33',
        nome: 'Fernanda Costa',
        genero: 'Feminino',
        dt_nasc: '1992-07-25',
        observacoes: 'Consulta de rotina',
        tipoExame: 'Eletrocardiograma',
        endereco: 'Rua dos Três Irmãos, 123, Curitiba - PR',
        telefone: '(41) 93456-7890',
        horario: '11:00',
        data: '2025-08-04',
    },
    {
        boletim: '12349',
        cpf: '567.890.123-44',
        nome: 'Paulo Santos',
        genero: 'Masculino',
        dt_nasc: '1980-09-30',
        observacoes: 'Necessita de acompanhante',
        tipoExame: 'Tomografia',
        endereco: 'Avenida Paulista, 500, São Paulo - SP',
        telefone: '(11) 92222-3333',
        horario: '16:00',
        data: '2025-08-05',
    },
]


export default function AgendEssaSemanaPage() {
    const tipoPagina =''
    return (
        <>
            <Box sx={{ paddingX: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Toolbar></Toolbar>
                <Typography variant="h4" component="h1">
                    Essa Semana - Todos
                </Typography>
                <TableAgendamentoComponent rows={data} tipoPagina={tipoPagina}></TableAgendamentoComponent>

                <Typography variant="h4" component="h1">
                    Cancelados
                </Typography>
                <SelectTableCancelados />
            </Box>
        </>
    )
}