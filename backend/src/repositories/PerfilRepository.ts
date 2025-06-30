import { InterfacePerfil } from "../models/interfaces/InterfacePerfil";
import { InterfaceInfoPerfil } from "../models/interfaces/InterfacePerfil";

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'perfil'

export class PerfilRepository {
    async criar(dadosPerfil: InterfaceInfoPerfil) {
        try {
            //
            const [result]: InterfacePerfil[] = await db(bd).insert([
                dadosPerfil.matricula,
                dadosPerfil.nome,
                dadosPerfil.unidade,
                dadosPerfil.tipoPerfil
            ]);
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar() {
        return await db(bd).select('unidade', 'id', 'nome', 'tipo_perfil', 'status');
    }

}