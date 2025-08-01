import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import type { dadosCriarAgendInterface } from '../../models/interfaces/agendamentoComponentsInterface';
import calcularIdade from '../helpers/calcularIdadeHelper';

export default function ArrivaList({ data }: { data: dadosCriarAgendInterface[] }) {
    return (
        <>
            <Typography sx={{ textAlign: 'center' }}>
                Quantidade de Exames: {data.length}
            </Typography>
            <Box sx={{ width: '100%', maxHeight: '370px', display: 'flex', gap: 2, flexWrap: 'wrap', overflowY: 'auto' }}>
                {data.map((item) => (
                    <Card key={item.agendamento.id} variant="outlined" sx={{ maxWidth: 360 }}>
                        <Box sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: 'space-between', alignItems: 'center', gap: 5 }}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.paciente.nome}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.agendamento.hora}
                                </Typography>
                            </Stack>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <strong>Gênero: </strong> {item.paciente.genero} - <strong>Idade: </strong> {calcularIdade(item.paciente.dt_nasc)} anos
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 2}}>
                            <Typography gutterBottom variant="body2" >
                                Tipo Exame
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'start'}}>
                                <Chip
                                    color={item.exame.tipoExame == 1 ? 'primary' : 'default'}
                                    label="Lesão Corporal" size="small" />
                                <Chip
                                    color={item.exame.tipoExame === 2 ? 'primary' : 'default'}
                                    label="Ad Cautelam" size="small" />
                                <Chip
                                    color={item.exame.tipoExame === 3 ? 'primary' : 'default'}
                                    label="Verificação de Violência Sexual" size="small" />
                                <Chip
                                    color={item.exame.tipoExame === 4 ? 'primary' : 'default'}
                                    label="Sanidade física (retorno)" size="small" />
                            </Stack>
                        </Box>
                    </Card>
                ))}
            </Box>
        </>
    );
}