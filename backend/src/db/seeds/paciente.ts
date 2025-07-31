import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("paciente").del();

    // Inserts seed entries
    await knex("paciente").insert([
         { id: 1, cpf: '123.456.789-00', nome: 'Ana Silva', dt_nasc: '1990-05-12', genero: 'Feminino', endereco: 'Rua A, 123', telefone: '(11) 98765-4321', observacao: 'Nenhuma' },
        { id: 2, cpf: '987.654.321-00', nome: 'Carlos Souza', dt_nasc: '1985-08-23', genero: 'Masculino', endereco: 'Rua B, 456', telefone: '(21) 91234-5678', observacao: 'Alergia a penicilina' },
        { id: 3, cpf: '111.222.333-44', nome: 'Joana Oliveira', dt_nasc: '2000-12-01', genero: 'Feminino', endereco: 'Rua C, 789', telefone: '(31) 92345-6789', observacao: 'Fumante' },
        { id: 4, cpf: '222.333.444-55', nome: 'Paulo Mendes', dt_nasc: '1992-02-14', genero: 'Masculino', endereco: 'Rua D, 101', telefone: '(41) 93456-7890', observacao: 'Hipertensão' },
        { id: 5, cpf: '333.444.555-66', nome: 'Maria Santos', dt_nasc: '1978-09-30', genero: 'Feminino', endereco: 'Rua E, 202', telefone: '(51) 94567-8901', observacao: 'Diabetes' },
        { id: 6, cpf: '444.555.666-77', nome: 'Felipe Lima', dt_nasc: '1995-03-18', genero: 'Masculino', endereco: 'Rua F, 303', telefone: '(61) 95678-9012', observacao: 'Nenhuma' },
        { id: 7, cpf: '555.666.777-88', nome: 'Juliana Costa', dt_nasc: '1988-04-07', genero: 'Feminino', endereco: 'Rua G, 404', telefone: '(71) 96789-0123', observacao: 'Gravidez em andamento' },
        { id: 8, cpf: '666.777.888-99', nome: 'Ricardo Almeida', dt_nasc: '1990-06-20', genero: 'Masculino', endereco: 'Rua H, 505', telefone: '(81) 97890-1234', observacao: 'Uso contínuo de medicação' },
        { id: 9, cpf: '777.888.999-00', nome: 'Fernanda Pereira', dt_nasc: '1982-11-10', genero: 'Feminino', endereco: 'Rua I, 606', telefone: '(91) 98901-2345', observacao: 'Alergia a pólen' },
        { id: 10, cpf: '888.999.000-11', nome: 'Bruno Rodrigues', dt_nasc: '1994-01-15', genero: 'Masculino', endereco: 'Rua J, 707', telefone: '(91) 91234-5678', observacao: 'Nenhuma' },
        { id: 11, cpf: '999.000.111-22', nome: 'Raquel Martins', dt_nasc: '1993-02-25', genero: 'Feminino', endereco: 'Rua K, 808', telefone: '(11) 92123-4567', observacao: 'Possui histórico de AVC na família' },
        { id: 12, cpf: '000.111.222-33', nome: 'Lucas Ferreira', dt_nasc: '1987-07-19', genero: 'Masculino', endereco: 'Rua L, 909', telefone: '(21) 93456-7890', observacao: 'Nenhuma' },
        { id: 13, cpf: '111.222.333-44', nome: 'Tatiane Rocha', dt_nasc: '1996-09-11', genero: 'Feminino', endereco: 'Rua M, 100', telefone: '(41) 94567-8901', observacao: 'Dor nas costas frequente' },
        { id: 14, cpf: '222.333.444-55', nome: 'Eduardo Gomes', dt_nasc: '1991-01-10', genero: 'Masculino', endereco: 'Rua N, 200', telefone: '(51) 95678-9012', observacao: 'Hipotireoidismo' },
        { id: 15, cpf: '333.444.555-66', nome: 'Amanda Souza', dt_nasc: '1992-05-04', genero: 'Feminino', endereco: 'Rua O, 300', telefone: '(61) 96789-0123', observacao: 'Histórico de câncer na família' },
        { id: 16, cpf: '444.555.666-77', nome: 'José Silva', dt_nasc: '1980-03-09', genero: 'Masculino', endereco: 'Rua P, 400', telefone: '(71) 97890-1234', observacao: 'Nenhuma' },
        { id: 17, cpf: '555.666.777-88', nome: 'Cláudia Oliveira', dt_nasc: '1997-06-18', genero: 'Feminino', endereco: 'Rua Q, 500', telefone: '(81) 98901-2345', observacao: 'Dor de cabeça frequente' },
        { id: 18, cpf: '666.777.888-99', nome: 'Marcos Lima', dt_nasc: '1990-12-25', genero: 'Masculino', endereco: 'Rua R, 600', telefone: '(91) 91234-5678', observacao: 'Nenhuma' },
        { id: 19, cpf: '777.888.999-00', nome: 'Lúcia Costa', dt_nasc: '1985-07-30', genero: 'Feminino', endereco: 'Rua S, 700', telefone: '(11) 92345-6789', observacao: 'Histórico de doença cardíaca' },
        { id: 20, cpf: '888.999.000-11', nome: 'Gabriel Rocha', dt_nasc: '1999-10-22', genero: 'Masculino', endereco: 'Rua T, 800', telefone: '(21) 93456-7890', observacao: 'Nenhuma' }
    ]);
};
