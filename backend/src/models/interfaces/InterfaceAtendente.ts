import { InterfacePerfil } from "./InterfacePerfil";
import { InterfaceCriarPerfil } from "./InterfacePerfil";

export interface InterfaceAtendente{
    id: string,
    dadosPerfil: InterfacePerfil
}

export interface InterfaceCriarAtendente{
    dados: InterfaceCriarPerfil
}