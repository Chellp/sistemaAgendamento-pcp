import { MsgController } from "."; const msg = new MsgController('Examinador');

export class ExaminadorController {

    examinadorRepository: any;

    constructor(examinadorRepository: any) {
        this.examinadorRepository = examinadorRepository
    }

    criar(req: any, res: any) {
        try {
            const { matricula, nome, unidade, status } = req.body;
            this.examinadorRepository.criar( matricula, nome, unidade, status )
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }

    listar(req: any, res: any) {
        this.examinadorRepository.listar()
        res.status(200)
    }

    update(req: any, res: any) {
        try {
            const {id} = req.params;
            const {nome, unidade , status} = req.body;
            const examinador = this.examinadorRepository.listarID(id)

            examinador.nome = nome ?? examinador.nome;
            examinador.unidade = unidade ?? examinador.unidade;
            examinador.status = status ?? examinador.status;

            this.examinadorRepository(id, examinador)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }

    deletar(req: any, res: any) {
         try {
            const {id} = req.params;
            this.examinadorRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }
}