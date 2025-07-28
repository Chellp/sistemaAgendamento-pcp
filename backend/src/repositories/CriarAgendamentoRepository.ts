//CLASSES
import getDataHora from "../utils/getDataHora";
const dataHora = new getDataHora()
import { PacienteRepository } from "../repositories/PacienteRepository";
const pacienteRepository = new PacienteRepository()
import { AgendamentoRepository } from "../repositories/AgendamentoRepository";
const agendamentoRepository = new AgendamentoRepository()
import { ExameRepository } from "../repositories/ExameRepository";
const exameRepository = new ExameRepository()

//INTERFACES
import { dadosCriarAgendInterface } from "../models/interfaces/InterfaceCriarAgendamento";
import { InterfaceCriarExame } from "../models/interfaces/InterfaceExame";
import { InterfaceCriarDbAgendamento } from "../models/interfaces/InterfaceAgendamento";

//knex
import knex from 'knex';
import knexConfig from "../../knexfile";
const db = knex(knexConfig.development);

export class CriarAgendRepository {

    //função que verifica a existência do paciente a partir do númEro de CPF e retorna um boleano
    async verificarPaciente(cpf: string) {
        const resp = await pacienteRepository.getCPF(cpf);
        console.log(resp);
        if (resp) return resp;
        return;
    }

    async criar(dados: dadosCriarAgendInterface) {

        //Verificar a existencia do paciente
        const verificacao = await this.verificarPaciente(dados.paciente.cpf)

        //Se o paciente existir ele os dados serão atualizados, caso contrário será criado um novo paciente
        if (verificacao) {
            const resp = await this.updatePaciente(verificacao, dados);
            return resp;
        }
        else {
            const resp = await this.criarPaciente(dados);
            return resp;
        }
    }

    //Cria um novo agendamento a partir de um paciente não registrado
    async criarPaciente(dados: dadosCriarAgendInterface) {
        try {
            //criando paciente e retornando o 'id'
            const pacienteId = await pacienteRepository.criar(dados.paciente);

            //indexando o paciente criado ao exame
            const dadosExame: InterfaceCriarExame = {
                ...dados.exame,
                status: 'PENDENTE',
                id_paciente: pacienteId
            }
            //criando exame e retornando o 'id'
            const exameId = await exameRepository.criar(dadosExame);

            //gravando a data de criação no servidor
            const dt_criacao = dataHora.dataHoraUTC()

            //indexando a 'dt_criacao' e o exame ao agendamento
            const dadosAgendamento: InterfaceCriarDbAgendamento = {
                ...dados.agendamento,
                dt_criacao: dt_criacao,
                id_exame: exameId,
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