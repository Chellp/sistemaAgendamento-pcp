import { MsgController } from "."; const msg = new MsgController('Atendente');

export class AtendenteController {

    atendenteRepository: any;

    constructor(atendenteRepository: any) {
        this.atendenteRepository = atendenteRepository
    }

    criar(req: any, res: any) {
        try {
            const { matricula, nome, unidade, status } = req.body;
            this.atendenteRepository.criar( matricula, nome, unidade, status )
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }

    listar(req: any, res: any) {
        this.atendenteRepository.listar()
        res.status(200)
    }

    update(req: any, res: any) {
        try {
            const {id} = req.params;
            const {nome, unidade , status} = req.body;
            const atendente = this.atendenteRepository.listarID(id)

            atendente.nome = nome ?? atendente.nome;
            atendente.unidade = unidade ?? atendente.unidade;
            atendente.status = status ?? atendente.status;

            this.atendenteRepository(id, atendente)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }

    deletar(req: any, res: any) {
         try {
            const {id} = req.params;
            this.atendenteRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }
}