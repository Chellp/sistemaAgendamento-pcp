export interface InterfacePaciente {
    id: number,
    dadosPaciente: dadosPacienteInterface
}

export interface dadosPacienteInterface {
    cpf: string,
    nome: string,
    dt_nasc: string,
    genero: string,
    endereco: string,
    telefone: string,
    observacao: string,
}

export interface dadosUpdatePacienteInterface {
    nome: string,
    genero: string,
    endereco: string,
    telefone: string,
    observacao: string,
}


export interface InterfaceDbPaciente {
    id: number,
    cpf: string,
    nome: string,
    dt_nasc: Date,
    genero: string,
    endereco: string,
    telefone: string,
    observacao: string,
}