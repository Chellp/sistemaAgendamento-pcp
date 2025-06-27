import { InterfacePerfil } from "./InterfacePerfil";
import { InterfaceCriarPerfil } from "./InterfacePerfil";

export interface InterfaceAdm{
    id: string,
    dadosPerfil: InterfacePerfil
}

export interface InterfaceCriarAdm{
    dados: InterfaceCriarPerfil
}