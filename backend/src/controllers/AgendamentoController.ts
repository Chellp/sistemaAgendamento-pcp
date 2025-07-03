import { MsgController } from "."; const msg = new MsgController('Agendamento')

export class AgendamentoController {

    agendamentoRepository: any;

    constructor(agendamentoRepository: any) {
        this.agendamentoRepository = agendamentoRepository
    }

    criar(req: any, res: any) {
        try {
            const { dt_agendamento, id_paciente, id_atendente, id_unidade } = req.body;
            this.agendamentoRepository.criar( dt_agendamento, id_paciente, id_atendente, id_unidade )
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }

    listar(req: any, res: any) {
        this.agendamentoRepository.listar()
        res.status(200)
    }

    update(req: any, res: any) {
        try {
            const {id} = req.params;
            const {dt_agendamento} = req.body;
            const agendamento = this.agendamentoRepository.listarID(id)

            agendamento.dt_agendamento = dt_agendamento ?? agendamento.dt_agendamento;
            this.agendamentoRepository(id, agendamento)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }

    deletar(req: any, res: any) {
         try {
            const {id} = req.params;
            this.agendamentoRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }
}