import { MsgController } from "."; const msg = new MsgController('Agendamento')

export class AgendamentoController {

    agendamentoRepository: any;

    constructor(agendamentoRepository: any) {
        this.agendamentoRepository = agendamentoRepository
    }

    async criar(req: any, res: any) {
        try {
            const { data, hora, id_paciente, id_atendente, id_unidade } = req.body;
            await this.agendamentoRepository.criar(data, hora, id_paciente, id_atendente, id_unidade)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const lista = await this.agendamentoRepository.listar()
        res.status(200).json(lista)
    }

    async update(req: any, res: any) {
        try {
            const { id } = req.params;
            const { dt_agendamento } = req.body;

            const dados = { dt_agendamento: dt_agendamento }
            await this.agendamentoRepository.update(id, dados)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            await this.agendamentoRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getInfoCompleta(req: any, res: any){
        try {
            const agendamentos = await this.agendamentoRepository.getInfoCompleta()
            console.log(agendamentos);
            
            res.status(200).json(agendamentos)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async getInfoCompletaID(req: any, res: any){
        try {
            const { id } = req.params;
            const agendamento = await this.agendamentoRepository.getInfoCompletaID(id)
            res.status(200).json(agendamento)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}