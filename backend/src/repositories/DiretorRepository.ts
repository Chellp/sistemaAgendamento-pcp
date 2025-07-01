import { InterfaceInfoPerfil } from "../models/interfaces/InterfacePerfil";
import { InterfacePerfil } from "../models/interfaces/InterfacePerfil";
import { InterfaceDiretor } from "../models/interfaces/InterfaceDiretor";
import { InterfaceDbDiretor } from "../models/interfaces/InterfaceDiretor";

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'diretor';

export class DiretorRepository {
    async criar(matricula: string, nome: string, id_unidade: number, status: boolean, tipoPerfil: string = 'DIRETOR') {
        try {

             if (!matricula || !nome || !id_unidade || !status) {
                throw new Error('Preencha todos os Campos!')
            }

            // criando perfil genérico
            const [result]: InterfacePerfil[] = await db('perfil').insert([
                matricula, nome, id_unidade, status, tipoPerfil
            ]);

            //criando perfil de diretor
            const id_perfil:any = result.id;
            let diretorDb: any = await db(bd).insert([ id_perfil ])

            return diretorDb.result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async listar() {
        return await db(bd).select('unidade', 'cod', 'nome', 'tipo_perfil', 'status');
    }

    async update(id: number, dados: any) {
        const perfilDiretor = await db(bd).where({ id }).first();
        if (!perfilDiretor) {
            throw new Error('Perfil de Diretor não Encontrado!');
        }

        const id_Perfil = perfilDiretor.id_Perfil;

        const perfil = await db(bd).where('id_perfil', id_Perfil).first();
        if (!perfil) { 
            throw new Error('Perfil Principal do Diretor não Encontrado!');
         }

        const atualizacao = {
            nome: dados.nome ?? perfil.nome,
            unidade: dados.unidade ?? perfil.unidade,
            status: dados.status ?? perfil.status,
        }

        return await db(bd).where({ id }).update(atualizacao);
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Diretor')
        }
    }
}