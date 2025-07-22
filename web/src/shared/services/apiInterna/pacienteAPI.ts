import { API_URL } from ".";
const ITEM_API = `${API_URL}/api/paciente/`;

export default class PacienteAPI {
    async criar(cpf: string, nome: string, dt_nasc: any, genero: string, endereco: string, telefone: string, observacao: string) {
        const response = await fetch(`${ITEM_API}`, {
            method: 'POST',
            body: JSON.stringify({ cpf, nome, dt_nasc, genero, endereco, telefone, observacao }),
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

    async update(id: number, nome: string, endereco: string, telefone: string, observacao: string) {
        const response = await fetch(`${ITEM_API}${id}`, {
            method: 'PUT',
            body: JSON.stringify({ nome, endereco, telefone, observacao }),
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