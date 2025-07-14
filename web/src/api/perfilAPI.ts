import { API_URL } from ".";
const ITEM_API = `${API_URL}/api/perfil/`;

export default class PerfilAPI {
    async criar(tipo_perfil: string, perfil: any) {
        const response = await fetch(`${ITEM_API}`, {
            method: 'POST',
            body: JSON.stringify({ tipo_perfil, perfil }),
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

    async update(id: number, nome: string, unidade: number, status: boolean) {
        const response = await fetch(`${ITEM_API}${id}`, {
            method: 'PUT',
            body: JSON.stringify({ nome, unidade, status }),
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