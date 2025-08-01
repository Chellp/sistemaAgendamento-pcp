import { MsgController } from "."; const msg = new MsgController('Paciente');
import { dadosPacienteInterface, dadosUpdatePacienteInterface } from "../models/interfaces/InterfacePaciente";

export class PacienteController {

    pacienteRepository: any;

    constructor(pacienteRepository: any) {
        this.pacienteRepository = pacienteRepository
    }

    async criar(req: any, res: any) {
        try {
            const dados:dadosPacienteInterface = req.body;
            const paciente = await this.pacienteRepository.criar(dados)
            //alert(msg.criado())
            res.status(201).json(paciente)
        } catch (error: any) {
            console.log('Erro ao criar o paciente: ', error);
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const lista = await this.pacienteRepository.listar()
        res.status(200).json(lista)
    }

    async getID(req: any, res: any) {
        const { id } = req.params;
        console.log('paciente: entrou no getID com id:', id);
        const paciente = await this.pacienteRepository.getID(id);
        res.status(200).json(paciente);
    }

    async getCPF(req: any, res: any) {
        const { cpf } = req.params;
        try {
            console.log('entrou no getCPF com cpf:', cpf);
            const paciente = await this.pacienteRepository.getCPF(cpf);
            console.log(paciente);


            if (!paciente.ok) {
                res.status(500).json(paciente)
                throw new Error(`Erro ao buscar CPF: ${paciente.status} ${paciente.statusText}`);
            }
            res.status(200).json(paciente);

        } catch (error: any) {
            return res.status(500).json({ error: 'Erro interno no servidor', message: error.message });
        }
    }

    async update(req: any, res: any) {
        try {
            const { id } = req.params;
            const dados: dadosUpdatePacienteInterface = req.body;
            await this.pacienteRepository.update(id, dados);
            
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