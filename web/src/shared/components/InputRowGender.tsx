import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface InputRowGenderComponentProps {
    generoSelecionado: string; // Prop para armazenar o item selecionado
    onGeneroSelecionado: (item: string) => void; // Função para atualizar o estado no componente pai
}

const InputRowGender: React.FC<InputRowGenderComponentProps> = ({ generoSelecionado, onGeneroSelecionado }) => {
  const [value, setValue] = React.useState(generoSelecionado || '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedGender = event.target.value;
    setValue(selectedGender);
    onGeneroSelecionado(selectedGender);  // Atualiza o estado no componente pai
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gênero</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}
      >
        <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" checked/>
        <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
        <FormControlLabel value="Outro" control={<Radio />} label="Outro" />
      </RadioGroup>
    </FormControl>
  );
}

export default InputRowGender;