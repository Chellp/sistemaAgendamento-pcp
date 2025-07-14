//import PerfilAPI from "./perfilAPI"; const perfilAPI = new PerfilAPI();
// REDIRECIONAR PARA O PERFIL PRINCIPAL

import { API_URL } from ".";
const ITEM_API = `${API_URL}/api/unidade/`;

export default class UnidadeAPI {
    async criar(nome: string, estado: string, cidade: string) {
        const response = await fetch(`${ITEM_API}`, {
            method: 'POST',
            body: JSON.stringify({ nome, estado, cidade }),
            headers: { 'Content-Type': 'application/json' }
        })
        return response.json();
    }

    async listar() {
        const response = await fetch(`${ITEM_API}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        return response.json();
    }

    async getId(id: number) {
        const response = await fetch(`${ITEM_API}${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        return response.json();
    }

    async update(id: number, nome: string, estado: string, cidade: string) {
        const response = await fetch(`${ITEM_API}${id}`, {
            method: 'PUT',
            body: JSON.stringify({ nome, estado, cidade }),
            headers: { 'Content-Type': 'application/json' }
        })
        return response.json();
    }

    async deletar(id: number) {
        const response = await fetch(`${ITEM_API}${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        return response.json();
    }
}