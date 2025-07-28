import { API_URL } from ".";
const ITEM_API = `${API_URL}/api/paciente/`;

import type { dadosPacienteInterface } from "../../../../models/interfaces/pacienteUserInterface";

export default class PacienteAPI {

    async criar(dados: dadosPacienteInterface) {

        console.log('Teste Criar Paciente API');
        

        console.log(dados);
        
        try {
            const response = await fetch(`${ITEM_API}`, {
                method: 'POST',
                body: JSON.stringify(dados),
                headers: { 'Content-Type': 'application/json' }
            })
            // Verificar se a resposta é bem-sucedida (status 200)
            if (!response.ok) {
                console.log(`Erro ao buscar CPF: ${response.status} ${response.statusText}`);
                throw new Error(`Erro ao buscar CPF: ${response.status} ${response.statusText}`);
            }

            // Verificar se o corpo da resposta está vazio
            const responseBody = await response.text();  // Obtém o corpo como texto
            if (!responseBody) {
                console.log('Resposta vazia do servidor');
                throw new Error('Resposta vazia do servidor');
            }

            // Agora, vamos tentar parsear o corpo da resposta como JSON
            const data = JSON.parse(responseBody);

            console.log('Resposta do servidor (dados do CPF):', data);
            return data;
        } catch (error: any) {
            console.error('Error fetching Paciente:', error);
            throw new Error(error.message);
        }
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

    async getCPF(cpf: string) {

         console.log('Teste Capturar Paciente API');

        const url = `${ITEM_API}cpf/${cpf}`;
        try {
            const response = await fetch(url, {
                headers: { 'Content-Type': 'application/json' }
            });

            // Verificar se a resposta é bem-sucedida (status 200)
            if (!response.ok) {
                console.log(`Erro ao buscar CPF: ${response.status} ${response.statusText}`);
                throw new Error(`Erro ao buscar CPF: ${response.status} ${response.statusText}`);
            }

            // Verificar se o corpo da resposta está vazio
            const responseBody = await response.text();  // Obtém o corpo como texto
            if (!responseBody) {
                console.log('Resposta vazia do servidor');
                throw new Error('Resposta vazia do servidor');
            }

            // Agora, vamos tentar parsear o corpo da resposta como JSON
            const data = JSON.parse(responseBody);

            console.log('Resposta do servidor (dados do CPF):', data);
            return data;

        } catch (error: any) {
            console.error('Error fetching getCPF:', error);
            throw new Error(error.message);  // Propaga o erro para a camada superior
        }
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