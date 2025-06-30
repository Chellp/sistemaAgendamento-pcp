import { InterfaceAgendamento } from "./InterfaceAgendamento"
import { InterfaceExaminador } from "./InterfaceExaminador"

export interface InterfaceExame {
    id: string,
    dt_atendimento: Date,
    examinador: InterfaceExaminador,
    id_paciente: number,
    dados: InterfaceInfoExame
};

export interface InterfaceInfoExame {
    agendamento: InterfaceAgendamento,
    boletim_ocorrencia: string,
    tipo_exame: 'AD_CAUTELAM' | 'VIOLENCIA_SEXUAL' | 'CORPO_DELITO',
    status: 'PENDENTE' | 'CONCLUIDO' | 'CANCELADO',
    obs: string
};