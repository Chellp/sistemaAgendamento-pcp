import { MsgController } from "."; const msg = new MsgController('Paciente');

export class PacienteController {

    pacienteRepository: any;

    constructor(pacienteRepository: any) {
        this.pacienteRepository = pacienteRepository
    }

    criar(req: any, res: any) {
        try {
            const { cpf, nome, dt_nasc, genero, endereco, telefone, observacao } = req.body;
            this.pacienteRepository.criar(cpf, nome, dt_nasc, genero, endereco, telefone, observacao)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    listar(req: any, res: any) {
        this.pacienteRepository.listar()
        res.status(200)
    }

    update(req: any, res: any) {
        try {
            const { id } = req.params;
            const { nome, endereco, telefone, observacao } = req.body;
            const paciente = this.pacienteRepository.listarID(id)

            paciente.nome = nome ?? paciente.nome;
            paciente.endereco = endereco ?? paciente.endereco;
            paciente.telefone = telefone ?? paciente.telefone;
            paciente.observacao = observacao ?? paciente.observacao;

            this.pacienteRepository(id, paciente)

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            this.pacienteRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}