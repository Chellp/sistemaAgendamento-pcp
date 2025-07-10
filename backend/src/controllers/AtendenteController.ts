import { MsgController } from "."; const msg = new MsgController('Atendente');

export class AtendenteController {

    atendenteRepository: any;

    constructor(atendenteRepository: any) {
        this.atendenteRepository = atendenteRepository
    }

    async criar(req: any, res: any) {
        try {
            const { matricula, nome, id_unidade, status } = req.body;
            await this.atendenteRepository.criar(matricula, nome, id_unidade, status)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const lista = await this.atendenteRepository.listar()
        res.status(200).json(lista);
    }

    async update(req: any, res: any) {
        try {
            const { id } = req.params;
            const { nome, unidade, status } = req.body;

            const dados = {
                nome: nome,
                unidade: unidade,
                status: status
            }
            await this.atendenteRepository.update(id, dados)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            await this.atendenteRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}