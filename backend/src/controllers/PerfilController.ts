import { AtendenteRepository } from "../repositories/AtendenteRepository";
import { ExaminadorRepository } from "../repositories/ExaminadorRepository";
import { AdmRepository } from "../repositories/AdmRepository";
import { DiretorRepository } from "../repositories/DiretorRepository";

import { MsgController } from "."; const msg = new MsgController('Paciente');

export class PerfilController {

    perfilRepository: any;

    constructor(perfilRepository: any) {
        this.perfilRepository = perfilRepository
    }

    async criar(req: any, res: any) {
        try {
            const { matricula, nome, status, tipoPerfil, unidade } = req.body;
            await this.perfilRepository.criar(matricula, nome, status, tipoPerfil, unidade)
            res.status(201).json(msg.criado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async listar(req: any, res: any) {
        const lista = await this.perfilRepository.listar()
        res.status(200).json(lista);
    }

    // uso restrito
    async update(req: any, res: any) {
        try {
            const { id, tipoPerfil } = req.params;
            const { nome, status, unidade } = req.body;

            // Validação do tipoPerfil
            const tiposValidos = ['ATENDENTE', 'EXAMINADOR', 'ADMINISTRADOR', 'DIRETOR'];
            if (!tiposValidos.includes(tipoPerfil)) {
                return res.status(400).json({ message: `Tipo de Perfil inválido: ${tipoPerfil}` });
            }

            const dados = {
                nome: nome,
                status: status,
                unidade: unidade
            }

            switch (tipoPerfil) {
                case 'ATENDENTE':
                    const repAtendente = new AtendenteRepository();
                    await repAtendente.update(id, dados);
                    break;

                case 'EXAMINADOR':
                    const repExaminador = new ExaminadorRepository();
                    await repExaminador.update(id, dados);
                    break;

                case 'ADMINISTRADOR':                    
                    const repAdm = new AdmRepository();
                    const adm = await repAdm.update(id, dados);
                    console.log(adm);

                    break;

                case 'DIRETOR':
                    const repDiretor = new DiretorRepository();
                    await repDiretor.update(id, dados);
                    break;

                default:
                    throw new Error(`Tipo de Perfil não encontrado ou inválido: ${tipoPerfil}`)
            }

            res.status(201).json(msg.atualizado())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    // uso restrito
    async deletar(req: any, res: any) {
        try {
            const { id } = req.params;
            await this.perfilRepository.deletar(id)
            res.status(204).json(msg.removido())
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}