import { InterfacePerfil } from "./InterfacePerfil";
import { InterfaceCriarPerfil } from "./InterfacePerfil";

export interface InterfaceDiretor{
    id: number,
    dadosPerfil: InterfacePerfil
}

export interface InterfaceCriarDiretor{
    dados: InterfaceCriarPerfil
}