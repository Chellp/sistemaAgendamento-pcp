import { API_URL } from ".";
const ITEM_API = `${API_URL}/api/agendamento/`;

export default class AgendamentoAPI {
    async criar(dt_agendamento: string, id_paciente: number, id_atendente: number, id_unidade: number) {
        const response = await fetch(`${ITEM_API}`, {
            method: 'POST',
            body: JSON.stringify({ dt_agendamento, id_paciente, id_atendente, id_unidade }),
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

    async update(id: number, dt_agendamento: any) {
        const response = await fetch(`${ITEM_API}${id}`, {
            method: 'PUT',
            body: JSON.stringify({ dt_agendamento }),
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

    async getInfoCompleta() {
    const response = await fetch(`${ITEM_API}info`, {
        headers: { 'Content-Type': 'application/json' }
    })
    return response.json();
}

    async getInfoCompletaID(id: number) {
    const response = await fetch(`${ITEM_API}info/${id}`, {
        headers: { 'Content-Type': 'application/json' }
    })
    return response.json();
}
}