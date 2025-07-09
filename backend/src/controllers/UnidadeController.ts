import { MsgController } from "."; const msg = new MsgController('Unidade');

export class UnidadeController {

    unidadeRepository: any;

    constructor(unidadeRepository: any) {
        this.unidadeRepository = unidadeRepository
    }

    async criar(req: any, res: any) {
        try {
            const { nome, estado, cidade } = req.body;
            await this.unidadeRepository.criar(nome, estado, cidade)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const lista = await this.unidadeRepository.listar()
        res.status(200).json(lista)
    }

    // uso restrito
    async update(req: any, res: any) {
        try {
            const { id } = req.params;
            const { nome, estado, cidade } = req.body;

            const dados = {
                nome: nome,
                estado: estado,
                cidade: cidade
            }

            await this.unidadeRepository.update(id, dados)
            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    // uso restrito
    async deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            await this.unidadeRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}