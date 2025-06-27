import { InterfaceCriarPerfil } from "../models/interfaces/InterfacePerfil";
import { InterfaceAdm } from "../models/interfaces/InterfaceAdmR";
import { InterfaceCriarAdm } from "../models/interfaces/InterfaceAdmR";

import { PerfilRepository } from "./PerfiRepository";
const perfilRepository = new PerfilRepository();

//knex
import knex from 'knex';
import knexConfig from "../knexfile";
const db = knex(knexConfig.development);

const bd: string = 'adm'

export class AdmRepository {
    async criar(dadosPerfil: InterfaceCriarAdm) {
        try {
            const perfilBase = perfilRepository.criar(dadosPerfil.dados);
            const [result] = await db(bd).insert([
                (await perfilBase).id
            ]);
            return result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async listar() {
        return await db(bd).select('unidade', 'nome', 'tipo_perfil', 'status');
    }

    async update(id: number) {
        const perfil: InterfaceAdm = await db(bd).where({ id }).first();
        if(!perfil){
            throw new Error('Perfil não Encontrado!')
        }

        const pId = perfil.id;
        const pNome = perfil.dadosPerfil.dados.tipoPerfil;
    }
}