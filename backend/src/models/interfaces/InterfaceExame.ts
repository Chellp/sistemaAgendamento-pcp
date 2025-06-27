import { InterfaceAgendamento } from "./InterfaceAgendamento"
import { InterfaceExaminador } from "./InterfaceExaminador"

export interface InterfaceExame {
    id: string,
    dt_atendimento: Date,
    agendamento: InterfaceAgendamento,
    examinador: InterfaceExaminador,
    dados: InterfaceCriarExame
};

export interface InterfaceCriarExame {
    boletim_ocorrencia: string,
    tipo_exame: 'AD_CAUTELAM' | 'VIOLENCIA_SEXUAL' | 'CORPO_DELITO',
    status: 'PENDENTE' | 'CONCLUIDO' | 'CANCELADO',
    obs: string
};