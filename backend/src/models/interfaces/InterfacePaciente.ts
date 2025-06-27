export interface InterfacePaciente{
    id: number,
    dados: InterfaceCriarPaciente
}

export interface InterfaceCriarPaciente{
        cpf: string,
        nome: string,
        dt_nasc: Date,
        genero: string,
        endereco: string,
        telefone: string,
        obs: string,
}