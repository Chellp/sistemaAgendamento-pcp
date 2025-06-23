export interface Exames {
    cod: number,
    nome: string,
    cpf: string,
    dtNasc: string,
    idade: number,
    genero: "M" | "F",
    telefone: string,
    cidade: string,
    estado: string,
    tipoExame: "Violencia Sexual" | "Lesao Corporal" | "Ad Cautelam",
    numeroBoletim: string,
    atendente: string,
    dtAgendada: string,
    status: "Concluido" | "Pendente" | "Cancelado"
    //notificacao: boolean
};

export const examesDB: Exames[] = [
    {
        "cod": 1,
        "nome": "Nome 1",
        "cpf": "012345",
        "dtNasc": "2000-01-01",
        "idade": 23,
        "genero": "F",
        "telefone": "12345",
        "cidade": "Paranagua",
        "estado": "Parana",
        "tipoExame": "Violencia Sexual",
        "numeroBoletim": "12345",
        "atendente": "Nome Atendente 1",
        "dtAgendada": "2000-01-01",
        "status": "Concluido"
    },
    {
        "cod": 2,
        "nome": "Nome 2",
        "cpf": "012348",
        "dtNasc": "2000-01-06",
        "idade": 35,
        "genero": "M",
        "telefone": "123465",
        "cidade": "Matinhos",
        "estado": "Parana",
        "tipoExame": "Ad Cautelam",
        "numeroBoletim": "string",
        "atendente": "string",
        "dtAgendada": "2000-01-06",
        "status": "Pendente"
    },
    {
        "cod": 3,
        "nome": "Nome 3",
        "cpf": "012347",
        "dtNasc": "2000-01-30",
        "idade": 20,
        "genero": "F",
        "telefone": "12345389",
        "cidade": "Guaratuba",
        "estado": "Parana",
        "tipoExame": "Lesao Corporal",
        "numeroBoletim": "string",
        "atendente": "string",
        "dtAgendada": "2000-01-30",
        "status": "Cancelado"
    },
    {
        "cod": 4,
        "nome": "Nome 4",
        "cpf": "012346",
        "dtNasc": "2000-01-01",
        "idade": 18,
        "genero": "M",
        "telefone": "12345878",
        "cidade": "Paranagua",
        "estado": "Parana",
        "tipoExame": "Lesao Corporal",
        "numeroBoletim": "string",
        "atendente": "string",
        "dtAgendada": "2000-01-01",
        "status": "Cancelado"
    }
]