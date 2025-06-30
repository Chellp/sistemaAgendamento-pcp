import { InterfaceInfoPaciente } from "../models/interfaces/InterfacePaciente";
import { InterfacePaciente } from "../models/interfaces/InterfacePaciente";

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'paciente'

export class PacienteRepository {
    async criar(dados: InterfaceInfoPaciente) {
        try {
            const [result] = await db(bd).insert([
                dados.cpf,
                dados.nome,
                dados.dt_nasc,
                dados.genero,
                dados.endereco,
                dados.telefone,
                dados.obs
            ])

            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar() {
        return await db(bd).select('cpf', 'nome', 'genero', 'dt_nasc', 'endereco', 'telefone')
    }

    async update(id: number, dados: InterfacePaciente) {
        const paciente: InterfacePaciente = await db(bd).where({ id }).first();
        if (!paciente) {
            throw new Error('Paciente não Encontrado');
        }

        const dadosPaciente = paciente.dadosPaciente;
        const update = dados.dadosPaciente;

        const updatedPaciente = {
            cpf: update.cpf ?? dadosPaciente.cpf,
            nome: update.nome ?? dadosPaciente.nome,
            dt_nasc: update.dt_nasc ?? dadosPaciente.dt_nasc,
            genero: update.genero ?? dadosPaciente.genero,
            endereco: update.endereco ?? dadosPaciente.endereco,
            telefone: update.telefone ?? dadosPaciente.telefone,
            obs: update.obs ?? dadosPaciente.obs
        }

        return await db(bd).where({ id }).update(updatedPaciente);
    }

    async deletar(id: number) {
        try {
            return await db(bd).where({ id }).delete();
        } catch (error) {
            throw new Error('Erro ao deletar Paciente')
        }
    }
}