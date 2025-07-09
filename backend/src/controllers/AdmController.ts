import { MsgController } from "."; const msg = new MsgController('Admnistrador')

export class AdmController {

    private admRepository: any;

    constructor(admRepository: any) {
        this.admRepository = admRepository
    }

    async criar(req: any, res: any) {
        try {
            const { matricula, nome, id_unidade, status } = req.body;
            await this.admRepository.criar(matricula, nome, id_unidade, status)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const adms = await this.admRepository.listar()
        console.log(adms);
        
        res.status(200).json(adms)
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
            const adm = await this.admRepository.listarID(id)

            adm.nome = nome ?? adm.nome;
            adm.unidade = unidade ?? adm.unidade;
            adm.status = status ?? adm.status;

            await this.admRepository.update(id, adm)

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