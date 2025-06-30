export interface InterfacePaciente {
    id: number,
    dadosPaciente: InterfaceInfoPaciente
}

export interface InterfaceInfoPaciente {
    cpf: string,
    nome: string,
    dt_nasc: Date,
    genero: string,
    endereco: string,
    telefone: string,
    obs: string,
}