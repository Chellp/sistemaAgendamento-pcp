export interface InterfacePaciente {
    id: number,
    dados: dadosPacienteInterface
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

export interface InterfaceDbPaciente {
    id: number,
    cpf: string,
    nome: string,
    dt_nasc: string,
    genero: string,
    endereco: string,
    telefone: string,
    observacao: string,
}