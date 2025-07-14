import { InterfaceExame } from "../models/interfaces/InterfaceExame";

//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'exame';

export class ExameRepository {
    async criar(boletim_ocorrencia: any, tipo_exame: any, status: any, obs: any, id_paciente: any, id_agendamento: any) {
        try {

            const [result] = await db(bd).insert({
                boletim_ocorrencia, id_paciente, obs, status, tipo_exame, id_agendamento
            })

            return result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async getID(id: number) {
        return await db(bd).where({ id }).first();
    }

    async listar(id: number) {
        return await db(bd).select('*')
    }

    async atualizar(id: number, dados: any) {
        try {
            const exame = await db(bd).where({ id }).first();
            if (!exame) {
                throw new Error('Exame não Encontrado!')
            }

            const updatedExame = {
                status: dados.status ?? exame.status,
                obs: dados.obs ?? exame.obs
            }

            return await db(bd).where({ id }).update(updatedExame)

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Exame')
        }
    }
}