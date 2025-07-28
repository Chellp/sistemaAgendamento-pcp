export interface InterfaceCriarExame {
    boletim_ocorrencia: string,
    tipoExame: 'K001' | 'K002' | 'K004' | 'K0010',
    status: 'PENDENTE' | 'CONCLUIDO' | 'CANCELADO',
    obs: string,
    id_paciente?: number,
};