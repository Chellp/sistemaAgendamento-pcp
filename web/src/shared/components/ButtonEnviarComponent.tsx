import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/system';
import { useTheme } from '@mui/material/styles'; // Importando useTheme


interface ContainedButtonProps {
    sx?: SxProps;
}

const ButtonEnviarComponent: React.FC<ContainedButtonProps> = ({ sx }) => {

        const theme = useTheme();

    return (
        <Stack direction="row" spacing={2} sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Button variant="contained" sx={{...sx, backgroundColor: theme.palette.warning.light, '&:hover': {
            backgroundColor: theme.palette.warning.main // Cor de fundo ao passar o mouse
        }}}>Cancelar</Button>
            <Button variant="contained" sx={{...sx}}>Enviar</Button>
        </Stack>
    );
}

export default ButtonEnviarComponent