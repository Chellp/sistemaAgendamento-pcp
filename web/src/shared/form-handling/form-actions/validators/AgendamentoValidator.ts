import validarIdadeUtils from "../../../utils/validators/validarIdadeUtils";
import type { HandleAgendamentoValues, } from "../../../../models/interfaces/agendamentoComponentsInterface";

export default class CheckAgendamento {

    agendamento: HandleAgendamentoValues;
    dt_nasc: string = '';
    idade: number = 0;

    constructor(agendamento: HandleAgendamentoValues) {
        this.agendamento = agendamento;
    }

    checkAgendamento(): boolean {
        if (!this.checkCamposObrigatorios()) return false; 
        return true; // Retorna verdadeiro se todos os campos obrigatórios estiverem preenchidos
    }

    checkCamposObrigatorios(): boolean {
        let response: string = '';

        if (!this.agendamento.dt_nasc) {
            response += " - Data de nascimento do paciente não informado.";
        } else if (this.agendamento.dt_nasc) {
            this.dt_nasc = this.agendamento.dt_nasc // Converte a data para string ISO
            const idadeResponse = validarIdadeUtils(this.dt_nasc);
            if (idadeResponse !== '') {
                response += idadeResponse; // Adiciona a mensagem de erro de idade se houver
            }
        }

        console.log(response);

        if (response === ''){
            console.log('Formulário válido:');
            
            return true;
        } else {
            console.log("Campos obrigatórios não preenchidos:");
            console.log(response);
            console.log('-----------------------------');
            console.log(this.agendamento);
            return false;
        }
    }

}