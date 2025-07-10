import { PerfilRepository } from "./PerfilRepository";
const perfilRepository = new PerfilRepository()

//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'examinador';


export class ExaminadorRepository {
    async criar(matricula: string, nome: string, id_unidade: number, status: boolean, especialidade: string) {
        try {

            if (!matricula || !nome || !id_unidade || !status) {
                throw new Error(`Preencha todos os Campos!
                    matricula: ${matricula}, nome: ${nome}, id_unidade: ${id_unidade}, status: ${status}`)
            }

            const tipo_perfil: string = 'EXAMINADOR';

            // Criar perfil
            const [id] = await db('perfil') //substituir pela função de criar perfil do perfilRepository
                .insert({
                    matricula,
                    nome,
                    unidade: id_unidade,
                    status,
                    tipo_perfil,
                });

            // Criar administrador vinculado ao perfil
            await db(bd).insert({ id_perfil: id, especialidade });

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
            'p.status',
            `${bd}.especialidade as especialidade`
        )
            .join('perfil as p', 'p.id', `${bd}.id_perfil`);

        return lista
    }

    async update(id: number, dados: any) {
        const perfilExaminador = await this.getID(id);
        if (!perfilExaminador) {
            throw new Error('Perfil de Diretor não Encontrado!');
        }

        if (dados.especialidade) {
            await db(bd).where('id_perfil', id).update({ especialidade: dados.especialidade });
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
            throw new Error('Erro ao deletar Examinador')
        }
    }
}