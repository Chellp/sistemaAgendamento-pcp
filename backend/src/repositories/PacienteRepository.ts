
//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'paciente'

export class PacienteRepository {
    async criar(cpf: string, nome: string, dt_nasc: string, genero: string, endereco: string, telefone: string, observacao: string) {
        console.log('Teste Criar Paciente Repository');
        try {
            const [result] = await db(bd).insert({
                cpf, nome, dt_nasc, genero, endereco, telefone, observacao
            })
            console.log(result);
            return result
        } catch (error: any) {
            console.log('Erro no ao Criar Paciente - repository: ', error);
            throw new Error(error.message)
        }
    }

    async getID(id: number) {
        return await db(bd).where({ id }).first();
    }

    async getCPF(cpf: string) {
        return await db(bd).where({ cpf }).first();
    }

    async listar() {
        return await db(bd).select('id', 'cpf', 'nome', 'genero', 'dt_nasc', 'endereco', 'telefone', 'observacao')
    }

    async update(id: number, dados: any) {
        const paciente = await this.getID(id);

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