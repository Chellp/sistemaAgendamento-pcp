import { MsgController } from "."; const msg = new MsgController('Examinador');

export class ExaminadorController {

    examinadorRepository: any;

    constructor(examinadorRepository: any) {
        this.examinadorRepository = examinadorRepository
    }

    async criar(req: any, res: any) {
        try {
            const { tipo_perfil, perfil, add } = req.body.dados;
            await this.examinadorRepository.criar(perfil, tipo_perfil, add)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const lista = await this.examinadorRepository.listar()
        res.status(200).json(lista)
    }

    async update(req: any, res: any) {
        try {
            const { id } = req.params;
            const { nome, unidade, status, especialidade } = req.body;

            const dados = {
                nome: nome,
                unidade: unidade,
                status: status,
                especialidade: especialidade
            }
            await this.examinadorRepository.update(id, dados)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            await this.examinadorRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}