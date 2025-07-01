import { InterfaceInfoPaciente } from "../models/interfaces/InterfacePaciente";
import { InterfacePaciente } from "../models/interfaces/InterfacePaciente";
import { InterfaceDbPaciente } from "../models/interfaces/InterfacePaciente";

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);
const bd: string = 'paciente'

export class PacienteRepository {
    async criar(dados: InterfaceInfoPaciente) {
        try {

            const cpf = dados.cpf;
            const nome = dados.nome;
            const dt_nasc = dados.dt_nasc;
            const genero = dados.genero;
            const endereco = dados.endereco;
            const telefone = dados.telefone;
            const observacao = dados.observacao;

            const [result] = await db(bd).insert([ cpf, nome, dt_nasc, genero, endereco, telefone, observacao
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
        const paciente: InterfaceDbPaciente = await db(bd).where({ id }).first();
        if (!paciente) {
            throw new Error('Paciente não Encontrado');
        }

        const dadosPaciente = paciente;
        const update = dados.dadosPaciente;

        const updatedPaciente = {
            cpf: update.cpf ?? dadosPaciente.cpf,
            nome: update.nome ?? dadosPaciente.nome,
            dt_nasc: update.dt_nasc ?? dadosPaciente.dt_nasc,
            genero: update.genero ?? dadosPaciente.genero,
            endereco: update.endereco ?? dadosPaciente.endereco,
            telefone: update.telefone ?? dadosPaciente.telefone,
            obs: update.observacao ?? dadosPaciente.observacao
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