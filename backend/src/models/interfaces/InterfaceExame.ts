import { InterfaceExaminador } from "./InterfaceExaminador"

export interface InterfaceExame {
    id: string,
    dt_atendimento: Date,
    examinador: InterfaceExaminador,
    id_paciente: number,
    dados: InterfaceInfoExame
};

export interface InterfaceInfoExame {
    boletim_ocorrencia: string,
    tipoExame: 'K001' | 'K002' | 'K004' | 'K0010',
    status: 'PENDENTE' | 'CONCLUIDO' | 'CANCELADO',
    obs: string
};

export interface InterfaceCriarExame {
    boletim_ocorrencia: string,
    tipoExame: 'K001' | 'K002' | 'K004' | 'K0010',
    status: 'PENDENTE' | 'CONCLUIDO' | 'CANCELADO',
    obs: string,
    id_paciente: number,
};