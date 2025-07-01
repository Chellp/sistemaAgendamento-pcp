import { InterfacePerfil } from "./InterfacePerfil";

export interface InterfaceAdm{
    id: number,
    dadosPerfil: InterfacePerfil
}

export interface InterfaceDbAdm{
    id: number,
    id_Perfil: number
}