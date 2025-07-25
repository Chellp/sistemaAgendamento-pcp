import { PacienteRepository } from "../repositories/PacienteRepository";
const pacienteRepository = new PacienteRepository()
import { AgendamentoRepository } from "../repositories/AgendamentoRepository";
const agendamentoRepository = new AgendamentoRepository()
import { ExameRepository } from "../repositories/ExameRepository";
const exameRepository = new ExameRepository()

import { dadosCriarAgendInterface } from "../models/interfaces/InterfaceCriarAgendamento";
import { InterfaceCriarExame } from "../models/interfaces/InterfaceExame";
import { InterfaceCriarDbAgendamento } from "../models/interfaces/InterfaceAgendamento";

//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);

export class CriarAgendRepository {

    async criarPaciente(dados: dadosCriarAgendInterface) {
        try {
            const pacienteId = await pacienteRepository.criar(dados.paciente);

            const exame = dados.exame
            const dadosExame: InterfaceCriarExame = {
                boletim_ocorrencia: exame.boletim_ocorrencia,
                tipoExame: exame.tipoExame,
                status: exame.status,
                obs: exame.obs,
                id_paciente: pacienteId,
            }
            const exameId = await exameRepository.criar(dadosExame);

            const ag = dados.agendamento;
            const dadosAgendamento: InterfaceCriarDbAgendamento = {
                dt_criacao: ag.dt_criacao,
                data: ag.data,
                hora: ag.hora,
                id_exame: exameId,
                id_atendente: ag.id_atendente,
                id_unidade: ag.id_unidade
            }

            return await agendamentoRepository.criar(dadosAgendamento)

        } catch (error: any) {
            console.log('Erro ao criar o Agendamento: ', error);
            throw new Error(error.message)
        }
    }

    async updatePaciente(id_paciente: number, dados: dadosCriarAgendInterface) {
        try {
            const dadosPaciente = dados.paciente
            await pacienteRepository.update(id_paciente, dadosPaciente);

            const exame = dados.exame
            const dadosExame: InterfaceCriarExame = {
                boletim_ocorrencia: exame.boletim_ocorrencia,
                tipoExame: exame.tipoExame,
                status: exame.status,
                obs: exame.obs,
                id_paciente: id_paciente,
            }
            const exameId = await exameRepository.criar(dadosExame);

            const ag = dados.agendamento;
            const dadosAgendamento: InterfaceCriarDbAgendamento = {
                dt_criacao: ag.dt_criacao,
                data: ag.data,
                hora: ag.hora,
                id_exame: exameId,
                id_atendente: ag.id_atendente,
                id_unidade: ag.id_unidade
            }

            return await agendamentoRepository.criar(dadosAgendamento)

        } catch (error: any) {
            console.log('Erro ao criar o paciente: ', error);
            throw new Error(error.message)
        }
    }

    async listar() {
        try {
            const item = await db('agendamento as ag')
                .join('paciente as p', 'ag.id_paciente', '=', 'p.id')
                .join('atendente as a', 'ag.id_atendente', '=', 'a.cod')
                .join('perfil as pf', 'a.id_perfil', '=', 'pf.id')
                .join('unidade as u', 'ag.id_unidade', '=', 'u.id')
                .select(
                    'ag.id as ID',
                    'ag.dt_agendamento as data_agendamento',
                    'p.cpf as cpf',
                    'p.nome as nome_completo',
                    'p.dt_nasc as dt_nasc',
                    'p.genero as genero',
                    'p.telefone as telefone',
                    'p.observacao as observacao',
                    'pf.nome as atendente',
                    'u.nome as unidade');
            return item
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


}