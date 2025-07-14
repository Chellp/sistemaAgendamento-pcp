import { API_URL } from ".";
const ITEM_API = `${API_URL}/api/exame/`;

export default class ExameAPI {
    async criar(boletim_ocorrencia: any, tipo_exame: string, status: boolean, obs: string, id_paciente: number, id_agendamento: number) {
        const response = await fetch(`${ITEM_API}`, {
            method: 'POST',
            body: JSON.stringify({ boletim_ocorrencia, tipo_exame, status, obs, id_paciente, id_agendamento }),
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

    async update(id: number, status: boolean, obs: string) {
        const response = await fetch(`${ITEM_API}${id}`, {
            method: 'PUT',
            body: JSON.stringify({ status, obs }),
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