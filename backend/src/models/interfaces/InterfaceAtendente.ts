import { InterfacePerfil } from "./InterfacePerfil";

export interface InterfaceAtendente{
    id: number,
    dadosPerfil: InterfacePerfil
}

export interface InterfaceDbAtendente{
    id: number,
    id_Perfil: number
}