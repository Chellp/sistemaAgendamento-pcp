import { MsgController } from "."; const msg = new MsgController('Exame')

export class ExameController {

    exameRepository: any;

    constructor(exameRepository: any) {
        this.exameRepository = exameRepository
    }

    async criar(req: any, res: any) {
        try {
            const { boletim_ocorrencia, tipo_exame, status, obs, id_paciente, id_agendamento } = req.body;
            await this.exameRepository.criar( boletim_ocorrencia, tipo_exame, status, obs, id_paciente, id_agendamento )
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const lista = await this.exameRepository.listar()
        res.status(200).json(lista)
    }

    async update(req: any, res: any) {
        try {
            const { id } = req.params;
            const { status, obs } = req.body;
            
            const dados = {
                status: status,
                obs: obs
            }

            await this.exameRepository(id, dados)
            res.status(201).json(msg.atualizado())

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            await this.exameRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}