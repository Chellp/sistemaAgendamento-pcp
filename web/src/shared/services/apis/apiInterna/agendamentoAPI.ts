import { API_URL } from ".";
const ITEM_API = `${API_URL}/api/agendamento/`;

import type { InterfaceDbAgendamento, dadosCriarAgendInterface } from "../../../../models/interfaces/agendamentoComponentsInterface";

export default class AgendamentoAPI {
    async criar(dados: InterfaceDbAgendamento) {
        const response = await fetch(`${ITEM_API}`, {
            method: 'POST',
            body: JSON.stringify(dados),
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

    async criarAgendamento(dados: dadosCriarAgendInterface) {
        const response = await fetch(`${ITEM_API}criar/`, {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: { 'Content-Type': 'application/json' }
        })
        return response.json();
    }
}