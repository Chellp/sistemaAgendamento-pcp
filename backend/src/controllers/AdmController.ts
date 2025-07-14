import { MsgController } from "."; const msg = new MsgController('Administrador')

export class AdmController {

    private admRepository: any;

    constructor(admRepository: any) {
        this.admRepository = admRepository
    }

    async criar(req: any, res: any) {
        try {
            const { tipo_perfil, perfil } = req.body.dados;
            await this.admRepository.criar(perfil, tipo_perfil)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const lista = await this.admRepository.listar()
        res.status(200).json(lista)
    }

    async getID(req: any, res: any) {
        const { id } = req.params;
        await this.admRepository.getID(id)
        res.status(200)
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
            await this.admRepository.update(id, dados)
            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            await this.admRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}