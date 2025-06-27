export interface InterfacePerfil {
    id: number,
    tipoPerfil: number,
    dados: InterfaceCriarPerfil,
    status: boolean
}

export interface InterfaceCriarPerfil {
    matricula: string,
    nome: string,
    unidade: number
    tipoPerfil: 'ATENDENTE' | 'EXAMINADOR'| 'ADMINISTRADOR' | 'DIRETOR',
}