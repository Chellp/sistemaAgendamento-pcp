
//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'unidade';

export class UnidadeRepository{
    async criar(dados: any){
        try {

            const nome: string = dados.nome;
            const estado: string = dados.estado;
            const cidade: string= dados.cidade;

            const [result] = await db(bd).insert([
                nome, estado, cidade
            ])

            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}