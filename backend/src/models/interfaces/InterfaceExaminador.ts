import { InterfacePerfil } from "./InterfacePerfil"
import { InterfaceCriarPerfil } from "./InterfacePerfil"

export interface InterfaceExaminador{
    cod: number,
    dadosPerfil: InterfacePerfil,
    dados: InterfaceCriarExaminador
}

export interface InterfaceCriarExaminador{
    especialidade: string,
    dadosPerfi: InterfaceCriarPerfil
}