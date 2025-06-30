import { InterfaceInfoPerfil } from "../models/interfaces/InterfacePerfil";
import { InterfacePerfil } from "../models/interfaces/InterfacePerfil";
import { InterfaceAtendente } from "../models/interfaces/InterfaceAtendente"; 

import { PerfilRepository } from "./PerfilRepository";
const perfilRepository = new PerfilRepository();

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);

const bd: string = 'atendente';

export class AdmRepository {
    async criar(dadosPerfilAdm: InterfaceAtendente) {
        try {
            let dadosPerfil: InterfaceInfoPerfil = dadosPerfilAdm.dadosPerfil.dados;

            if (dadosPerfil.tipoPerfil !== 'ATENDENTE') {
                throw new Error('Tipo de Perfil não correspondente ao perfil ATENDENTE')
            }

            const perfilBase: InterfacePerfil = await perfilRepository.criar(dadosPerfil);
            const id_perfil = perfilBase.id

            const [result]: InterfacePerfil[] = await db(bd).insert([
                id_perfil
            ]);

            return result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async listar() {
        return await db(bd).select('unidade', 'cod', 'nome', 'tipo_perfil', 'status');
    }

    async update(id: number, dados: InterfaceAtendente) {
        const perfilAtendente: InterfaceAtendente = await db(bd).where({ id }).first();
        if (!perfilAtendente) {
            throw new Error('Perfil de Atendente não Encontrado!')
        }

        const perfilPrincipal: InterfacePerfil = await db(bd).where('id_perfil', id).first();
        if (!perfilPrincipal) { }

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
            throw new Error('Erro ao deletar Atendente')
        }
    }
}