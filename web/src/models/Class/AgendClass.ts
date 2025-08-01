//Componentes Internos do Projeto
import AgendamentoAPI from "../../shared/services/apis/apiInterna/agendamentoAPI";
const api = new AgendamentoAPI()
import getDataHora from "../../shared/helpers/getDataHoraHelper";
const getdatahora = new getDataHora();

import ExamesClass from "./ExamesClass";
const examesClass = new ExamesClass()
import PacienteClass from "./PacienteClass";
const pacienteClass = new PacienteClass()

import type { dadosCriarAgendInterface } from "../interfaces/agendamentoComponentsInterface";

export default class AgendClass {
    async todosExames() {
        return await api.listar()
    }

    async todosExamesExtendido() {

        const agend = await api.listar()  
        let data: dadosCriarAgendInterface[] = []

        await Promise.all(
            agend.map(async (i: any) => {
                const exameID = i.id_exame;
                const exame = await examesClass.exameID(exameID);

                const pacienteID = exame.id_paciente;
                const paciente = await pacienteClass.pacienteID(pacienteID)

                let item: dadosCriarAgendInterface = {
                    paciente: paciente,
                    agendamento: i,
                    exame: exame
                }
                data.push(item)
            })
        )
        return data
    }

    async examesData(data: string) {

    }

    async examesHoje() {
        const data = await this.examesData(getdatahora.dataFormatada(new Date()));
    }

    async aualizarStatus(status: string) {

    }
}