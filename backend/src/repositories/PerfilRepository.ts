//knex
import knex from 'knex';
import knexConfig from "../../knexfile";

const db = knex(knexConfig.development);
const bd: string = 'perfil'

export class PerfilRepository {
    async criar(matricula: any, nome: any, unidade: any, status: any, tipoPerfil: any) {
        try {

            console.log(matricula, nome, status, tipoPerfil, unidade);
            

            const tipo_perfil= tipoPerfil;
            console.log(tipo_perfil);
            
            const statusBoolean = status === 'true' || status === true;

            const [result] = await db(bd).insert({
                matricula, 
                nome, 
                status: statusBoolean, 
                tipo_perfil, 
                unidade});
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
    ) {
        try {
            const perfil = await db(bd).where({ id }).first();
            return perfil
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async update(id: number, dados: any) {
        const perfil = await this.getId(id);
        if (!perfil) {
            throw new Error('Perfil não Encontrado');
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
            throw new Error('Erro ao deletar Perfil');
        }
    }

}