import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function ArrivaList({ data }: { data: any[] }) {
    return (
        <>
            <Typography sx={{textAlign: 'center'}}>
                Quantidade de Exames: {data.length}
            </Typography>
            <Box sx={{ width: '100%', maxHeight: '370px', display: 'flex', gap: 2, flexWrap: 'wrap', overflowY: 'auto' }}>
                {data.map((item) => (
                    <Card key={item.id_agendamento} variant="outlined" sx={{ maxWidth: 360 }}>
                        <Box sx={{ p: 2 }}>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: 'space-between', alignItems: 'center', gap: 5 }}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.nome}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.horario}
                                </Typography>
                            </Stack>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <strong>Gênero: </strong> {item.genero} - <strong>Idade: </strong> {item.idade} anos
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 2 }}>
                            <Typography gutterBottom variant="body2">
                                Tipo Exame
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    color={item.tipoExame === 'CORPO_DELITO' ? 'primary' : 'default'}
                                    label="Corpo Delito" size="small" />
                                <Chip
                                    color={item.tipoExame === 'VIOLENCIA_SEXUAL' ? 'primary' : 'default'}
                                    label="Violência Sexual" size="small" />
                                <Chip
                                    color={item.tipoExame === 'AD_CAUTELAM' ? 'primary' : 'default'}
                                    label="Ad Cautelam" size="small" />
                            </Stack>
                        </Box>
                    </Card>
                ))}
            </Box>
        </>
    );
}