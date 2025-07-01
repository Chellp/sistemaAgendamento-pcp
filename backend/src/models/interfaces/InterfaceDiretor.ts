import { InterfacePerfil } from "./InterfacePerfil";

export interface InterfaceDiretor{
    id: number,
    dadosPerfil: InterfacePerfil
}

export interface InterfaceDbDiretor{
    id: number,
    id_Perfil: number;
}