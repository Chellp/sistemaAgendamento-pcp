import { MsgController } from "."; const msg = new MsgController('Paciente');

export class PacienteController {

    pacienteRepository: any;

    constructor(pacienteRepository: any) {
        this.pacienteRepository = pacienteRepository
    }

    async criar(req: any, res: any) {
        try {
            const { cpf, nome, dt_nasc, genero, endereco, telefone, observacao } = req.body;
            await this.pacienteRepository.criar(cpf, nome, dt_nasc, genero, endereco, telefone, observacao)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const lista = await this.pacienteRepository.listar()
        res.status(200).json(lista)
    }

    async update(req: any, res: any) {
        try {
            const { id } = req.params;
            const { nome, endereco, telefone, observacao } = req.body;

            const dados = {
                nome: nome,
                endereco: endereco,
                telefone: telefone,
                observacao: observacao
            }

            await this.pacienteRepository.update(id, dados)
            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            await this.pacienteRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}