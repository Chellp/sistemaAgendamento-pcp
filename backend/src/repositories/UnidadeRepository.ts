
//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'unidade';

export class UnidadeRepository{
    async criar(nome: any, estado: any, cidade: any){
        try {
            const [result] = await db(bd).insert({
                nome, estado, cidade
            })
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getID(id: number){
        return await db(bd).where({ id }).first();
    }
    
    async listar() {
        return await db(bd).select('nome', 'estado', 'cidade');
    }

    async update(id: number, dados: any) {
        const unidade = await this.getID(id)

        if (!unidade) {
            throw new Error('Unidade não Encontrada');
        }

        const atualizacao = {
            nome: dados.nome ?? unidade.nome,
            estado: dados.estado ?? unidade.estado,
            cidade: dados.cidade ?? unidade.cidade,
        }
        return await db(bd).where({ id }).update(atualizacao);
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Unidade');
        }
    }
}