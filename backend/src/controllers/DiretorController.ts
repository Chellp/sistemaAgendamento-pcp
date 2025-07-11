import { MsgController } from "."; const msg = new MsgController('Diretor');

export class DiretorController {

    diretorRepository: any;

    constructor(diretorRepository: any) {
        this.diretorRepository = diretorRepository
    }

    async criar(req: any, res: any) {
        try {
            const { tipo_perfil, perfil } = req.body.dados;
            await this.diretorRepository.criar(perfil, tipo_perfil)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const lista = await this.diretorRepository.listar()
        res.status(200).json(lista)
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
            await this.diretorRepository.update(id, dados)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            await this.diretorRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}