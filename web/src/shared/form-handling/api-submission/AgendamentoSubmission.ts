import CheckAgendamento from "../form-actions/validators/AgendamentoValidator";

//INTERFACES
import type { HandleAgendamentoValues } from "../../../models/interfaces/agendamentoComponentsInterface";
import type { dadosPacienteInterface } from "../../../models/interfaces/pacienteUserInterface";
import type { InterfaceCriarAgendamento } from "../../../models/interfaces/agendamentoComponentsInterface";


//APIs
import PacienteAPI from "../../services/apis/apiInterna/pacienteAPI";
import AgendamentoAPI from "../../services/apis/apiInterna/agendamentoAPI";

const pacienteAPI = new PacienteAPI();
const agendamentoAPI = new AgendamentoAPI();

export default class AgendamentoSubmission {

    async getAgendamento(agendamento: HandleAgendamentoValues): Promise<number> {

        const validacao = new CheckAgendamento(agendamento);

        if (!validacao.checkAgendamento()) {
            console.error("Erro na validação do agendamento.");

            console.log(validacao.checkAgendamento());


            throw new Error("Campos obrigatórios não preenchidos: getAgendamento()");
        }

        //let idAgendamento: number = -1;
        const idUnidade = 1; // Exemplo de ID da unidade, deve ser dinâmico conforme a necessidade
        const idAtendente = 1; // Exemplo de ID do atendente, deve ser dinâmico conforme a necessidade

        const paciente: dadosPacienteInterface = {
            cpf: agendamento.cpf,
            nome: agendamento.nome,
            genero: agendamento.genero,
            dt_nasc: agendamento.dt_nasc,
            endereco: agendamento.endereco,
            telefone: agendamento.telefone,
            observacao: agendamento.observacoes || '',
        };

        let idPaciente = await this.paciente(paciente);
        console.log(`ID paciente: ${idPaciente}`);


        if (idPaciente === -1) {
            console.error("Erro ao salvar paciente.");
            throw new Error("Erro ao salvar paciente.");
        }

        const dados: InterfaceCriarAgendamento = {
            dt_agendamento: agendamento.data,
            id_paciente: idPaciente,
            id_unidade: idUnidade,
            id_atendente: idAtendente
        };

        const res = await this.agendamento(dados);
        console.log(res);

        return res; // Retorna o ID do agendamento criado


    }

    async agendamento(agendamento: InterfaceCriarAgendamento) {
        try {
            const response = await agendamentoAPI.criar(
                agendamento.dt_agendamento,
                agendamento.id_paciente,
                agendamento.id_atendente,
                agendamento.id_unidade
            )

            if (!response || !response.id) {
                console.log(response);

                throw new Error("Falha ao criar agendamento. Resposta inválida.");
            }

            return response.id
        } catch (error: any) {
            console.log("Erro ao criar paciente:", error);
            return -1
        }
    }

    async paciente(paciente: dadosPacienteInterface) {

        console.log(' ---------- Função Paciente 1 ---------- ');

        try {
            const response = await pacienteAPI.getCPF(paciente.cpf)
            console.log(' ---------- Função Paciente ---------- ');
            console.log(response);


            if (response && response.id) {

                console.log('Paciente encontrado, atualizando...');

                try {
                    const updateResp = await pacienteAPI.update(
                        response.id,
                        paciente.nome,
                        paciente.endereco,
                        paciente.telefone,
                        ''
                    );

                    console.log(updateResp);
                    return updateResp.id; // Retorna o ID do paciente atualizado
                } catch (error: any) {
                    console.error('Erro ao atualizar (principal) paciente:', error);
                    throw new Error(`Erro ao atualizar (principal) paciente: ${error.message}`);
                }
            } else {

                console.log('Paciente não encontrado, criando novo...');
                try {

                    // Cria novo paciente
                    const createResp = await pacienteAPI.criar(paciente);
                    console.log(createResp);
                    return createResp.id;

                } catch (error: any) {
                    console.error('Erro ao atualizar (principal) paciente:', error);
                    throw new Error(`Erro ao atualizar (principal) paciente: ${error.message}`);
                }

            }

        } catch (error: any) {
            console.log("Erro ao criar / atualizar paciente:", error);
            throw new Error(`Erro ao criar / atualizar paciente: ${error.message}`);
            return -1
        }

    }

}