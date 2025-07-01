

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'agendamento';

export class AgendamentoRepository{
    async criar(dt_agendamento: any, id_paciente: any, id_atendente: any, id_unidade: any){
        try {
            const [ result ] = await db(bd).insert([
                dt_agendamento, id_paciente, id_atendente, id_unidade
            ])

            return result
            
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(){
        await db(bd).select(
                        'dt_agendamento as Data',
                        'p.nome as Paciente',
                        'a.nome as Atendente',
                        'u.nome as Unidade')
        .join('paciente as p', 'p.id', `${db}.id_paciente`)
        .join('atendente as a', 'a.id', `${db}.atendente`)
        .join('unidade as u', 'u.id', `${db}.unidade`)
    }

    async update(id: number, dados: any){
        const agendamento = await db(bd).where({id}).first()
        if(!agendamento){
            throw new Error('Agendamento não Encontrado!')
        }

        const atualização = {
            dt_agendamento: dados.dt_agendamento ?? agendamento.dt_agendamento
        }

        return await db(bd).where({id}).update(atualização)
    }

    async delete(id: number){
        try {
            return await db(bd).where({id}).delete();
        } catch (error: any) {
            new Error(error.message)
        }
    }
    
}