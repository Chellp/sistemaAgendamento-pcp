import { InterfaceExame } from "../models/interfaces/InterfaceExame";
import { InterfaceCriarExame } from "../models/interfaces/InterfaceExame";

//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'exame';

export class ExameRepository {
    async criar(dados: InterfaceCriarExame) {
        try {

            const [result] = await db(bd).insert({
                boletim_ocorrencia: dados.boletim_ocorrencia,
                id_paciente: dados.id_paciente,
                obs: dados.obs,
                status: dados.status,
                tipoExame: dados.tipoExame,
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


    async concluir(id: number, examinador: number, dt_atendimento: string) {
        try {
            const exame = await db(bd).where({ id }).first();
            await db(bd).where({ id }).update({
                status: 'CONCLUIDO'
            })
            const conclusao = await db('conclusaoExame').insert({
                dt_atendimento: dt_atendimento,
                id_exame: exame.id,
                id_examinador: examinador
            })

            return conclusao;

        } catch (error: any) {
            new Error(error.message)
        }
    }
}
