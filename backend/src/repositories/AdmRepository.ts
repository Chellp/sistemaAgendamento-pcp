import { InterfacePerfil } from "../models/interfaces/InterfacePerfil";
import { PerfilRepository } from "./PerfilRepository";
const perfilRepository = new PerfilRepository()

//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);

const bd: string = 'adm';

export class AdmRepository {
    async criar(matricula: string, nome: string, id_unidade: number, status: boolean) {
        try {

            if (!matricula || !nome || !id_unidade || !status) {
                throw new Error(`Preencha todos os Campos!
                    matricula: ${matricula}, nome: ${nome}, id_unidade: ${id_unidade}, status: ${status}`)
            }

            const tipo_perfil: string = 'ADMINISTRADOR'

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
    
    async getID(id: number) {
        return await db(bd).where({ id }).first();
    }

    async listar() {
        return await db(bd).select(
            'u.nome',
            `${bd}.cod`,
            'p.nome',
            'p.tipo_perfil',
            'p.status'
        )
            .join('perfil as p', 'p.id', `${bd}.id_perfil`)
            .join('unidade as u', 'u.id', `p.unidade`);
    }

    async update(id: number, dados: any) {

        const perfilAdm = await db(bd).where({ id }).first();
        if (!perfilAdm) {
            throw new Error('Perfil de Administrador não Encontrado!')
        }

        //buscar perfil principal
        const id_Perfil = perfilAdm.id_Perfil;
        const perfil = await perfilRepository.update(id_Perfil, dados);

        //deixar em um único objeto para agrupar os atributos únicos do tipo de perfil (caso necessário)
        const atualizacao = {
            nome: perfil.nome,
            unidade: perfil.unidade,
            status: perfil.status,
        }

        return await db('perfil').where('id_perfil', id_Perfil).update(atualizacao);
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Administrador')
        }
    }
}