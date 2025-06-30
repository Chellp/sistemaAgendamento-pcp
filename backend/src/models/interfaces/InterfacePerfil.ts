export interface InterfacePerfil {
    id: number,
    dados: InterfaceInfoPerfil
}

export interface InterfaceInfoPerfil {
    matricula: string,
    nome: string,
    unidade: number,
    status: boolean,
    tipoPerfil: 'ATENDENTE' | 'EXAMINADOR'| 'ADMINISTRADOR' | 'DIRETOR'
}