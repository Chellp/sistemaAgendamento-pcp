export interface InterfaceSecretario {
    cod: number,
    nome: string,
    unidade: string,
    ativo: boolean
} 

export const secretariosDB: InterfaceSecretario[] = [
    {
        "cod": 1,
        "nome": "Nme Sec 1",
        "unidade": "PCP - Paranaguá",
        "ativo": true
    },
    {
        "cod": 2,
        "nome": "Nme Sec 2",
        "unidade": "PCP - Paranaguá",
        "ativo": true
    },
    {
        "cod": 3,
        "nome": "Nme Sec 3",
        "unidade": "PCP - Paranaguá",
        "ativo": false
    },
    {
        "cod": 4,
        "nome": "Nme Sec 4",
        "unidade": "PCP - Paranaguá",
        "ativo": false
    },
    {
        "cod": 5,
        "nome": "Nme Sec 5",
        "unidade": "PCP - Paranaguá",
        "ativo": true
    },

]