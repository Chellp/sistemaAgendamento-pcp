import { MsgController } from "."; const msg = new MsgController('Exame')

export class ExameController {

    exameRepository: any;

    constructor(exameRepository: any) {
        this.exameRepository = exameRepository
    }

    criar(req: any, res: any) {
        try {
            const { boletim_ocorrencia, tipo_exame, status, obs, id_paciente } = req.body;
            this.exameRepository.criar( boletim_ocorrencia, tipo_exame, status, obs, id_paciente )
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    listar(req: any, res: any) {
        this.exameRepository.listar()
        res.status(200)
    }

    update(req: any, res: any) {
        try {
            const { id } = req.params;
            const { dt_agendamento } = req.body;
            const exame = this.exameRepository.listarID(id)

            exame.dt_agendamento = dt_agendamento ?? exame.dt_agendamento;

            this.exameRepository(id, exame)

            //mudar data agendamento

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            this.exameRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}