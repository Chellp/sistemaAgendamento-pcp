import { dadosCriarAgendInterface } from '../models/interfaces/InterfaceCriarAgendamento';

export class CriarAgendController {

    criarAgendRepository: any;

    constructor(criarAgendRepository: any) {
        this.criarAgendRepository = criarAgendRepository
    }

    async criarPaciente(req: any, res: any) {
        const dados: dadosCriarAgendInterface = req.body;
        const paciente = await this.criarAgendRepository.criarPaciente(dados)
        res.status(201).json(paciente)
    }

    async updatePaciente(req: any, res: any) {
        const { dados } = req.body;
        const { id_paciente } = req.params;
        const paciente = await this.criarAgendRepository.updatePaciente(id_paciente, dados)
        res.status(201).json(paciente)
    }


}