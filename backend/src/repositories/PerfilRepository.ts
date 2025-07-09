import { InterfacePerfil } from "../models/interfaces/InterfacePerfil";
import { InterfaceInfoPerfil } from "../models/interfaces/InterfacePerfil";

//knex
import knex from 'knex';
import knexConfig from "../../knexfile";

const db = knex(knexConfig.development);
const bd: string = 'perfil'

export class PerfilRepository {
    async criar(matricula: any, nome: any, unidade: any, tipoPerfil: any) {
        try {
            const [result] = await db(bd).insert([matricula, nome, unidade, tipoPerfil]);
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar() {
        return await db(bd).select('unidade', 'id', 'nome', 'tipo_perfil', 'status');
    }

    async getId(
        id: number,
        nomeTabela: 'atendente' | 'examinador' | 'adm' | 'diretor'
    ) {
        try {
            const perfil = await db(nomeTabela).select('id_perfil').where({ id }).first();
            return perfil
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async update(id: number, dados: any) {
        const perfil = await db(bd).where({ id }).first();
        if (!perfil) {
            throw new Error('Perfil não Encontrado');
        }

        const atualizacao = {
            nome: dados.nome ?? perfil.nome,
            unidade: dados.unidade ?? perfil.unidade,
            status: dados.status ?? perfil.status,
        }

        //const result = await db(bd).where({ id }).update(atualizacao);
        return atualizacao
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Perfil');
        }
    }

}