import { InterfaceCriarDbAgendamento } from '../models/interfaces/InterfaceAgendamento';

//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'agendamento';

export class AgendamentoRepository {
    async criar(dados: InterfaceCriarDbAgendamento) {
        try {
            const [result] = await db(bd).insert({
                data: dados.data,
                hora: dados.hora,
                id_exame: dados.id_exame,
                id_atendente: dados.id_atendente,
                id_unidade: dados.id_unidade
            })

            return result

        } catch (error: any) {
            console.log('Erro ao criar o agendamento: ', error);
            throw new Error(error.message)
        }
    }

    async getID(id: number) {
        return await db(bd).where({ id }).first();
    }

    async listar() {
        return await db(bd).select('*')
    }

    async update(id: number, dados: any) {
        const agendamento = await db(bd).where({ id }).first()
        if (!agendamento) {
            throw new Error('Agendamento não Encontrado!')
        }

        const atualização = {
            data: dados.data ?? agendamento.data,
            hora: dados.hora ?? agendamento.hora
        }

        return await db(bd).where({ id }).update(atualização)
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error: any) {
            new Error(error.message)
        }
    }

    async getInfoCompletaID(id: number) {
        try {
            const item = await db('agendamento as ag')
                .join('paciente as p', 'ag.id_paciente', '=', 'p.id')
                .join('atendente as a', 'ag.id_atendente', '=', 'a.cod')
                .join('perfil as pf', 'a.id_perfil', '=', 'pf.id')
                .join('unidade as u', 'ag.id_unidade', '=', 'u.id')
                .select(
                    'ag.id as ID',
                    'ag.data as data_agendamento',
                    'ag.hora as hora_agendamento',
                    'p.cpf as cpf',
                    'p.nome as nome_completo',
                    'p.dt_nasc as dt_nasc',
                    'p.genero as genero',
                    'p.telefone as telefone',
                    'p.observacao as observacao',
                    'pf.nome as atendente',
                    'u.nome as unidade')
                .where('ag.id', id);
            return item
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}