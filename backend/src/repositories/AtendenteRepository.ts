import { InterfacePerfil } from "../models/interfaces/InterfacePerfil";

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);

const bd: string = 'atendente';

export class AdmRepository {
    async criar(matricula: string, nome: string, id_unidade: number, status: boolean, tipoPerfil: string = 'ATENDENTE') {
        try {

            if (!matricula || !nome || !id_unidade || !status) {
                throw new Error('Preencha todos os Campos!')
            }

            // criando perfil genérico
            const [result]: InterfacePerfil[] = await db('perfil').insert([
                matricula, nome, id_unidade, status, tipoPerfil
            ]);

            //criando perfil de atendente
            const id_perfil: any = result.id;
            let atendenteDb: any = await db(bd).insert([id_perfil])

            return atendenteDb.result

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async listar() {
        return await db(bd).select('unidade', 'cod', 'nome', 'tipo_perfil', 'status');
    }

    async update(id: number, dados: any) {
        const perfilAtendente = await db(bd).where({ id }).first();
        if (!perfilAtendente) {
            throw new Error('Perfil de Atendente não Encontrado!')
        }

        const id_Perfil = perfilAtendente.id_Perfil;

        const perfil = await db(bd).where('id_perfil', id_Perfil).first();
        if (!perfil) { 
            throw new Error('Perfil Principal de Atendente não Encontrado!')
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
            throw new Error('Erro ao deletar Atendente')
        }
    }
}