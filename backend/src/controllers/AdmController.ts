import { MsgController } from "."; const msg = new MsgController('Admnistrador')

export class AdmController {

    admRepository: any;

    constructor(admRepository: any) {
        this.admRepository = admRepository
    }

    criar(req: any, res: any) {
        try {
            const { matricula, nome, unidade, status } = req.body;
            this.admRepository.criar( matricula, nome, unidade, status )
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }

    listar(req: any, res: any) {
        this.admRepository.listar()
        res.status(200)
    }

    update(req: any, res: any) {
        try {
            const {id} = req.params;
            const {nome, unidade , status} = req.body;
            const adm = this.admRepository.listarID(id)

            adm.nome = nome ?? adm.nome;
            adm.unidade = unidade ?? adm.unidade;
            adm.status = status ?? adm.status;

            this.admRepository(id, adm)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }

    deletar(req: any, res: any) {
         try {
            const {id} = req.params;
            this.admRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }
}