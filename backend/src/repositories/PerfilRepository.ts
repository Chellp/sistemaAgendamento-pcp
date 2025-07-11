import { IPerfil } from '../controllers/PerfilController';
//knex
import knex from 'knex';
import knexConfig from "../../knexfile";

const db = knex(knexConfig.development);
const bd: string = 'perfil'

export class PerfilRepository {
    async criar(dados: IPerfil, tipo_perfil: string) {
        try {

            if (!dados.matricula || !dados.nome || !dados.id_unidade || !dados.status) {
                throw new Error(`Preencha todos os Campos!
                    matricula: ${dados.matricula}, nome: ${dados.nome}, id_unidade: ${dados.id_unidade}, status: ${dados.status}`)
            }

            const [result] =  await db(bd).insert({
                matricula: dados.matricula,
                nome: dados.nome,
                status: dados.status,
                unidade: dados.id_unidade,
                tipo_perfil
            });

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