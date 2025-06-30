import { InterfaceExame } from "../models/interfaces/InterfaceExame";

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'exame';

export class ExameRepository {
    async criar(dados: InterfaceExame) {
        try {

            const boletim_ocorrencia: string = dados.dados.boletim_ocorrencia;
            const tipo_exame: string = dados.dados.tipo_exame;
            const status: string = dados.dados.status;
            const obs: string = dados.dados.obs;
            const id_paciente: number = dados.id_paciente;


            const [result] = await db(bd).insert([
                boletim_ocorrencia, tipo_exame, status, obs, id_paciente
            ])

            return result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async listar(id: number) {
        return await db(`${bd} as e`)
            .join('paciente as p', 'e.id_paciente', 'p.id')
            .select(
                'boletim_ocorrencia',
                'p.nome as nome_paciente',
                'p.cpf as CPF_paciente',
                'tipo_exame',
                'status',
                'obs',
                )
            .where('e.id', id).first();
    }

    async atualizar(id: number, dados: InterfaceExame) {
        try {
            const exame: InterfaceExame = await db(bd).where({id}).first();
            if(!exame){
                throw new Error('Exame não Encontrado!')
            }

            const dadosInfo = exame.dados;
            const update = dados.dados;

            const updatedExame = {
                agendamento: update.agendamento ?? dadosInfo.agendamento,
                tipo_exame: update.tipo_exame ?? dadosInfo.tipo_exame,
                status: update.status ?? dadosInfo.status,
                dt_atendimento: dados.dt_atendimento ?? exame.dt_atendimento,
            }

            return await db(bd).where({id}).update(updatedExame)

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