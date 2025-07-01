import { MsgController } from "."; const msg = new MsgController('Diretor');

export class DiretorController {

    diretorRepository: any;

    constructor(diretorRepository: any) {
        this.diretorRepository = diretorRepository
    }

    criar(req: any, res: any) {
        try {
            const { matricula, nome, unidade, status } = req.body;
            this.diretorRepository.criar({ matricula, nome, unidade, status })
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }

    listar(req: any, res: any) {
        this.diretorRepository.listar()
        res.status(200)
    }

    update(req: any, res: any) {
        try {
            const {id} = req.params;
            const {nome, unidade , status} = req.body;
            const diretor = this.diretorRepository.listarID(id)

            diretor.nome = nome ?? diretor.nome;
            diretor.unidade = unidade ?? diretor.unidade;
            diretor.status = status ?? diretor.status;

            this.diretorRepository(id, diretor)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }

    deletar(req: any, res: any) {
         try {
            const {id} = req.params;
            this.diretorRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error. message)
        }
    }
}