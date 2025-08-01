export interface InterfaceCriarExame {
    boletim_ocorrencia: string,
    tipoExame: number
    status: 'PENDENTE' | 'CONCLUIDO' | 'CANCELADO',
    obs: string,
    id_paciente?: number,
};