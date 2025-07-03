import { MsgController } from "."; const msg = new MsgController('Paciente');

export class PerfilController {

    perfilRepository: any;

    constructor(perfilRepository: any) {
        this.perfilRepository = perfilRepository
    }

    criar(req: any, res: any) {
        try {
            const { matricula, nome, unidade, tipoPerfil } = req.body;
            this.perfilRepository.criar( matricula, nome, unidade, tipoPerfil )
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    listar(req: any, res: any) {
        this.perfilRepository.listar()
        res.status(200)
    }

    // uso restrito
    update(req: any, res: any) {
        try {
            const { id } = req.params;
            const { nome, endereco, telefone, observacao } = req.body;
            const perfi = this.perfilRepository.listarID(id)

            perfi.nome = nome ?? perfi.nome;
            perfi.endereco = endereco ?? perfi.endereco;
            perfi.telefone = telefone ?? perfi.telefone;
            perfi.observacao = observacao ?? perfi.observacao;

            this.perfilRepository(id, perfi)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    // uso restrito
    deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            this.perfilRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}