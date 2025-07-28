import { dadosPacienteInterface } from "./InterfacePaciente";
import { InterfaceCriarDbAgendamento } from "./InterfaceAgendamento";
import { InterfaceCriarExame } from "./InterfaceExame";

export interface dadosCriarAgendInterface {
    paciente: dadosPacienteInterface,
    agendamento: InterfaceCriarDbAgendamento,
    exame: InterfaceCriarExame
}
