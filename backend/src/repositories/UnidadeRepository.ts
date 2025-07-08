
//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'unidade';

export class UnidadeRepository{
    async criar(nome: any, estado: any, cidade: any){
        try {
            const [result] = await db(bd).insert([
                nome, estado, cidade
            ])
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    
    async listar() {
        return await db(bd).select('nome', 'estado', 'cidade');
    }

    async update(id: number, dados: any) {
        const perfil = await db(bd).where({ id }).first();
        if (!perfil) {
            throw new Error('Unidade não Encontrada');
        }

        const atualizacao = {
            nome: dados.nome ?? perfil.nome,
            estado: dados.estado ?? perfil.estado,
            cidade: dados.cidade ?? perfil.cidade,
        }

        return await db(bd).where({ id }).update(atualizacao);
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Perfil');
        }
    }
}