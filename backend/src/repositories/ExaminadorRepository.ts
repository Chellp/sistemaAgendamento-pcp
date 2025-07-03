import { InterfacePerfil } from "../models/interfaces/InterfacePerfil";
import { PerfilRepository } from "./PerfilRepository";
const perfilRepository = new PerfilRepository()

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'examinador';


export class AdmRepository {
    async criar(matricula: string, nome: string, id_unidade: number, status: boolean, tipoPerfil: string = 'EXAMINADOR') {
        try {

            if (!matricula || !nome || !id_unidade || !status) {
                throw new Error('Preencha todos os Campos!')
            }

            // criando perfil genérico
            const [result]: InterfacePerfil[] = await db('perfil').insert([
                matricula, nome, id_unidade, status, tipoPerfil
            ]);

            //criando perfil de diretor
            const id_perfil: any = result.id;
            let examinadorDb: any = await db(bd).insert([id_perfil])

            return examinadorDb.result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }


    async listar() {
        return await db(bd).select('unidade', 'cod', 'nome', 'tipo_perfil', 'status');
    }

    async update(id: number, dados: any) {
        const perfilExaminador = await db(bd).where({ id }).first();
        if (!perfilExaminador) {
            throw new Error('Perfil de Diretor não Encontrado!');
        }

        //buscar perfil principal
        const id_Perfil = perfilExaminador.id_Perfil;
        const perfil = await perfilRepository.update(id_Perfil, dados);

        //deixar em um único objeto para agrupar os atributos únicos do tipo de perfil (caso necessário)
        const atualizacao = {
            nome: perfil.nome,
            unidade: perfil.unidade,
            status: perfil.status,
            especialidade: dados.especialidade ?? perfilExaminador.especialidade //atributo único dos examinadores
        }

        return await db('perfil').where('id_perfil', id_Perfil).update(atualizacao);
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Examinador')
        }
    }
}