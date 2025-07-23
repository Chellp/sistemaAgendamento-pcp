import validarIdadeUtils from "../../../utils/validators/validarIdadeUtils";
import type { HandleAgendamentoValues, FormValuesInterface } from "../../../../models/interfaces/agendamentoComponentsInterface";

export default class CheckAgendamento {

    agendamento: HandleAgendamentoValues;
    values: FormValuesInterface;
    dt_nasc: string = '';
    idade: number = 0;

    constructor(agendamento: HandleAgendamentoValues) {
        this.agendamento = agendamento;
        this.values = agendamento.values;
    }

    checkAgendamento(): boolean {

        if (this.checkCamposObrigatorios() !== '') return false; // Retorna falso se algum campo obrigatório não estiver preenchido

        return true; // Retorna verdadeiro se todos os campos obrigatórios estiverem preenchidos
    }

    checkCamposObrigatorios(): string {
        let response: string = '';
        if (!this.values.boletim) {
            response += " - Boletim do agendamento não informado.";
        } else
        if (!this.values.cpf) {
            response += " - CPF do paciente não informado.";
        }
        if (!this.values.nome) {
            response += " - Nome do paciente não informado.";
        }
        if (!this.values.genero) {
            response += " - Gênero do paciente não informado.";
        }

        if (!this.values.nascimento) {
            response += " - Data de nascimento do paciente não informado.";
        } else if (this.values.nascimento) {
            this.dt_nasc = this.values.nascimento // Converte a data para string ISO
            const idadeResponse = validarIdadeUtils(this.dt_nasc);
            if (idadeResponse !== '') {
                response += idadeResponse; // Adiciona a mensagem de erro de idade se houver
            }
        }

        if (!this.values.exameSelecionado) response += " - Exame selecionado não informado.";
        if (!this.values.endereco) response += " - Endereço do paciente não informado.";
        if (!this.values.telefone) response += " - Telefone do paciente não informado.";
        if (!this.values.data) response += " - Data do agendamento não informada.";
        if (!this.agendamento.horario) response += " - Horário do agendamento não informado.";


        if (response === '') {
            response = 'Campos obrigatórios preenchidos.';
        } else {
            console.log("Campos obrigatórios não preenchidos:");
            console.log(response);
            console.log('-----------------------------');
            console.log(this.agendamento);
        }
        return response;
    }

}