import { PerfilRepository } from "./PerfilRepository";
const perfilRepository = new PerfilRepository()
//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'diretor';


export class DiretorRepository {
    async criar(matricula: string, nome: string, id_unidade: number, status: boolean) {
        try {

            if (!matricula || !nome || !id_unidade || !status) {
                throw new Error(`Preencha todos os Campos!
                    matricula: ${matricula}, nome: ${nome}, id_unidade: ${id_unidade}, status: ${status}`)
            }

            const tipo_perfil: string = 'DIRETOR';

            // Criar perfil
            const [id]: number[] = await db('perfil')
                .insert({
                    matricula,
                    nome,
                    unidade: id_unidade,
                    status,
                    tipo_perfil
                });

            // Criar administrador vinculado ao perfil
            await db(bd).insert({ id_perfil: id });

            return { id };
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getID(id_perfil: number) {
        return await db(bd).where({ id_perfil }).first();
    }

    async listar() {
        const lista = await db(bd).select(
            `${bd}.cod`,
            'p.id as idPerfil',
            'p.nome',
            'p.tipo_perfil',
            'p.status'
        )
            .join('perfil as p', 'p.id', `${bd}.id_perfil`);

        return lista
    }

    async update(id: number, dados: any) {
        const perfilDiretor = await this.getID(id);
        if (!perfilDiretor) {
            throw new Error('Perfil de Diretor não Encontrado!');
        }

        //atualizar perfil principal
        await perfilRepository.update(id, dados);
        return await db(bd).select('*').where('id_perfil', id);
    }

    async deletar(id: number) {
        try {
            await db(bd).where('id_perfil', id).delete()
            return await db('perfil').where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Diretor')
        }
    }
}