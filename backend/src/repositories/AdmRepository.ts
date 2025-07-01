import { InterfaceInfoPerfil } from "../models/interfaces/InterfacePerfil";
import { InterfacePerfil } from "../models/interfaces/InterfacePerfil";
import { InterfaceAdm } from "../models/interfaces/InterfaceAdmR";
import { InterfaceDbAdm } from "../models/interfaces/InterfaceAdmR";

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);

const bd: string = 'adm';

export class AdmRepository {
    async criar(dadosPerfilAdm: InterfaceAdm) {
        try {
            const dadosPerfil: InterfaceInfoPerfil = dadosPerfilAdm.dadosPerfil.dados;

            if (dadosPerfil.tipoPerfil !== 'ADMINISTRADOR') {
                throw new Error('Tipo de Perfil não correspondente ao perfil ADMINISTRADOR')
            }

            const matricula = dadosPerfil.matricula
            const nome = dadosPerfil.nome
            const unidade = dadosPerfil.unidade
            const status = dadosPerfil.status

            const [result]: InterfacePerfil[] = await db('perfil').insert([
                matricula, nome, unidade, status
            ]);

            const id_perfil: any = result.id;
            let diretorDb: any = await db(bd).insert([id_perfil]);

            return diretorDb.result

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async listar() {
        return await db(bd).select('unidade', 'cod', 'nome', 'tipo_perfil', 'status');
    }

    async update(id: number, dados: InterfaceAdm) {
        const perfilAdm: InterfaceDbAdm = await db(bd).where({ id }).first();
        if (!perfilAdm) {
            throw new Error('Perfil de Administrador não Encontrado!')
        }

        const id_Perfil = perfilAdm.id_Perfil;

        const perfilPrincipal: InterfacePerfil = await db(bd).where('id_perfil', id_Perfil).first();
        if (!perfilPrincipal) {
            throw new Error('Perfil Principal de Administrador não Encontrado!')
        }

        const dadosInfo = perfilPrincipal.dados;
        const update = dados.dadosPerfil.dados;

        const atualizacao = {
            nome: update.nome ?? dadosInfo.nome,
            unidade: update.unidade ?? dadosInfo.unidade,
            status: update.status ?? dadosInfo.status
        }

        return await db(bd).where({ id }).update(atualizacao);
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Administrador')
        }
    }
}