import { MsgController } from "."; const msg = new MsgController('Paciente');

export class PacienteController {

    pacienteRepository: any;

    constructor(pacienteRepository: any) {
        this.pacienteRepository = pacienteRepository
    }

    async criar(req: any, res: any) {

        console.log('Teste Criar Paciente Controller');

        try {
            const { cpf, nome, dt_nasc, genero, endereco, telefone, observacao } = req.body;

            console.log(cpf, nome, dt_nasc, genero, endereco, telefone, observacao);

            const paciente = await this.pacienteRepository.criar(cpf, nome, dt_nasc, genero, endereco, telefone, observacao)
            alert(msg.criado())
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
        console.log('entrou no getID com id:', id);
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
                //console.log(`Erro ao buscar CPF: ${paciente.status} ${paciente.statusText}`);
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