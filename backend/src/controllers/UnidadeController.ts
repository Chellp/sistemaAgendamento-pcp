import { MsgController } from "."; const msg = new MsgController('Unidade');

export class UnidadeController {

    unidadeRepository: any;

    constructor(unidadeRepository: any) {
        this.unidadeRepository = unidadeRepository
    }

    criar(req: any, res: any) {
        try {
            const { matricula, nome, unidade, tipoPerfil } = req.body;
            this.unidadeRepository.criar(matricula, nome, unidade, tipoPerfil)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    listar(req: any, res: any) {
        this.unidadeRepository.listar()
        res.status(200)
    }

    // uso restrito
    update(req: any, res: any) {
        try {
            const { id } = req.params;
            const { nome, estado, cidade} = req.body;
            const unidade = this.unidadeRepository.listarID(id)

            unidade.nome = nome ?? unidade.nome;
            unidade.estado = estado ?? unidade.estado;
            unidade.cidade = cidade ?? unidade.cidade;

            this.unidadeRepository(id, unidade)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    // uso restrito
    deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            this.unidadeRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}