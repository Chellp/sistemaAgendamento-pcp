import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("perfil").del();

    // Inserts seed entries
    await knex("perfil").insert([
        // ATENDENTE
        { matricula: 'A1001', nome: 'José Silva', status: true, unidade: 1, tipo_perfil: 'ATENDENTE' },
        { matricula: 'A1002', nome: 'Maria Oliveira', status: true, unidade: 2, tipo_perfil: 'ATENDENTE' },
        { matricula: 'A1003', nome: 'Carlos Souza', status: true, unidade: 3, tipo_perfil: 'ATENDENTE' },
        { matricula: 'A1004', nome: 'Juliana Costa', status: true, unidade: 4, tipo_perfil: 'ATENDENTE' },
        { matricula: 'A1005', nome: 'Ricardo Almeida', status: false, unidade: 5, tipo_perfil: 'ATENDENTE' },

        // EXAMINADOR
        { matricula: 'E2001', nome: 'Tatiane Rocha', status: true, unidade: 1, tipo_perfil: 'EXAMINADOR' },
        { matricula: 'E2002', nome: 'Lucas Ferreira', status: true, unidade: 2, tipo_perfil: 'EXAMINADOR' },
        { matricula: 'E2003', nome: 'Cláudia Oliveira', status: false, unidade: 3, tipo_perfil: 'EXAMINADOR' },
        { matricula: 'E2004', nome: 'Fernanda Pereira', status: true, unidade: 4, tipo_perfil: 'EXAMINADOR' },
        { matricula: 'E2005', nome: 'Paulo Mendes', status: true, unidade: 5, tipo_perfil: 'EXAMINADOR' },

        // ADMINISTRADOR
        { matricula: 'ADM3001', nome: 'Bruno Rodrigues', status: true, unidade: 1, tipo_perfil: 'ADMINISTRADOR' },
        { matricula: 'ADM3002', nome: 'Ana Silva', status: true, unidade: 2, tipo_perfil: 'ADMINISTRADOR' },
        { matricula: 'ADM3003', nome: 'José Santos', status: false, unidade: 3, tipo_perfil: 'ADMINISTRADOR' },
        { matricula: 'ADM3004', nome: 'Gabriel Rocha', status: true, unidade: 4, tipo_perfil: 'ADMINISTRADOR' },
        { matricula: 'ADM3005', nome: 'Amanda Souza', status: true, unidade: 5, tipo_perfil: 'ADMINISTRADOR' },

        // DIRETOR
        { matricula: 'D4001', nome: 'Luciana Silva', status: true, unidade: 1, tipo_perfil: 'DIRETOR' },
        { matricula: 'D4002', nome: 'Eduardo Gomes', status: true, unidade: 2, tipo_perfil: 'DIRETOR' },
        { matricula: 'D4003', nome: 'Raquel Martins', status: false, unidade: 3, tipo_perfil: 'DIRETOR' },
        { matricula: 'D4004', nome: 'Ricardo Lima', status: true, unidade: 4, tipo_perfil: 'DIRETOR' },
        { matricula: 'D4005', nome: 'Tatiane Rocha', status: true, unidade: 5, tipo_perfil: 'DIRETOR' }
    ]);
};
