import { InterfacePerfil } from "../models/interfaces/InterfacePerfil";


//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);

const bd: string = 'adm';

export class AdmRepository {
    async criar(matricula: string, nome: string, id_unidade: number, status: boolean, tipoPerfil: string = 'ADMINISTRADOR') {
        try {

            if (!matricula || !nome || !id_unidade || !status) {
                throw new Error('Preencha todos os Campos!')
            }

            // criando perfil genérico
            const [result]: InterfacePerfil[] = await db('perfil').insert([
                matricula, nome, id_unidade, status, tipoPerfil
            ]);

            //criando perfil de admnistrador
            const id_perfil: any = result.id;
            let diretorDb: any = await db(bd).insert([id_perfil]);

            return diretorDb.result

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async listarTodos() {
        return await db(bd).select('unidade', 'cod', 'nome', 'tipo_perfil', 'status');
    }

    async listarID(id: number) {
        const adm = await db(bd).where({ id });
        if(!adm) {
            throw new Error(' Administrador não Encontrado!')
        }

        return adm;
    }

    async update(id: number, dados: any) {

        const perfilAdm = await db(bd).where({ id }).first();
        if (!perfilAdm) {
            throw new Error('Perfil de Administrador não Encontrado!')
        }

        const id_Perfil = perfilAdm.id_Perfil;

        const perfil = await db(bd).where('id_perfil', id_Perfil).first();
        if (!perfil) {
            throw new Error('Perfil Principal de Administrador não Encontrado!')
        }

        const atualizacao = {
            nome: dados.nome ?? perfil.nome,
            unidade: dados.unidade ?? perfil.unidade,
            status: dados.status ?? perfil.status
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