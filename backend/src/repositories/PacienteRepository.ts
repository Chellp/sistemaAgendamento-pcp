//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'paciente'


export class PacienteRepository {
    async criar(cpf: any, nome: any, dt_nasc: any, genero: any, endereco: any, telefone: any, observacao: any) {
        try {

            const [result] = await db(bd).insert([cpf, nome, dt_nasc, genero, endereco, telefone, observacao
            ])

            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar() {
        return await db(bd).select('cpf', 'nome', 'genero', 'dt_nasc', 'endereco', 'telefone')
    }

    async update(id: number, dados: any) {
        const paciente = await db(bd).where({ id }).first();
        if (!paciente) {
            throw new Error('Paciente não Encontrado');
        }

        const atualizacao = {
            nome: dados.nome ?? paciente.nome,
            endereco: dados.endereco ?? paciente.endereco,
            telefone: dados.telefone ?? paciente.telefone,
            observacao: dados.observacao ?? paciente.observacao
        }

        return await db(bd).where({ id }).update(atualizacao);
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Paciente')
        }
    }
}