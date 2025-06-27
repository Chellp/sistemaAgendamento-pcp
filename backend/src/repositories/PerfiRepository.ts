import { InterfacePerfil } from "../models/interfaces/InterfacePerfil";
import { InterfaceCriarPerfil } from "../models/interfaces/InterfacePerfil";

//knex
import knex from 'knex';
import knexConfig from "../knexfile"; 
const db = knex(knexConfig.development); 

export class PerfilRepository{
    async criar(dadosPerfil: InterfaceCriarPerfil){
        try {
           //
            const [result]: InterfacePerfil[] = await db('adm').insert([
                dadosPerfil.matricula,
                dadosPerfil.nome,
                dadosPerfil.unidade,
                dadosPerfil.tipoPerfil
            ]);
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}