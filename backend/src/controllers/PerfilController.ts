import { AdmRepository } from '../repositories/AdmRepository'; const admRepository = new AdmRepository();
import { AtendenteRepository } from '../repositories/AtendenteRepository'; const atendenteRepository = new AtendenteRepository();
import { DiretorRepository } from '../repositories/DiretorRepository'; const diretorRepository = new DiretorRepository();
import { ExaminadorRepository } from '../repositories/ExaminadorRepository'; const examinadorRepository = new ExaminadorRepository();

// Tipo para validar a requisição
export interface IPerfil {
  matricula: number;
  nome: string;
  status: boolean;
  id_unidade: number;
}

interface Requisicao {
  dados: {
    tipo_perfil: string;
    perfil: IPerfil;
    add?: any
  };
}


import { MsgController } from "."; const msg = new MsgController('Perfil');

export class PerfilController {

    perfilRepository: any;

    constructor(perfilRepository: any) {
        this.perfilRepository = perfilRepository
    }

    async criar(req: any, res: any) {
        try {
            const { tipo_perfil, perfil, add }: Requisicao['dados'] = req.body.dados;
            const dados = perfil
            

            if (tipo_perfil === "DIRETOR") {
                /* const perfil = await diretorRepository.criar(dados, tipo_perfil)
                console.log(perfil); */
                await diretorRepository.criar(dados, tipo_perfil);

            } else if (tipo_perfil === "EXAMINADOR") {
                /* const perfil = await examinadorRepository.criar(dados, tipo_perfil, add)
                console.log(perfil); */
                await examinadorRepository.criar(dados, tipo_perfil, add);

            } else if (tipo_perfil === "ADMINISTRADOR") {
                /* const perfil = await admRepository.criar(dados, tipo_perfil);
                console.log(perfil); */
                await admRepository.criar(dados, tipo_perfil);

            } else if (tipo_perfil === "ATENDENTE") {
                /* const perfil = await atendenteRepository.criar(dados, tipo_perfil)
                console.log(perfil); */
                await atendenteRepository.criar(dados, tipo_perfil)

            } else {
                throw new Error(`Tipo de Perfil Inválido: ${tipo_perfil}`)
            }

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
                    await atendenteRepository.update(id, dados);
                    break;

                case 'EXAMINADOR':
                    await examinadorRepository.update(id, dados);
                    break;

                case 'ADMINISTRADOR':
                    const adm = await admRepository.update(id, dados);
                    console.log(adm);

                    break;

                case 'DIRETOR':
                    await diretorRepository.update(id, dados);
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