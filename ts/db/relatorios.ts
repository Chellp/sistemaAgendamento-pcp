export interface Relatorio {

    codRelatorio: string,
    dataHora: string,
    data: string,
    hora: string,
    tipo: "diario" | "semanal" | "mensal" | "anual",
    link: string
}

export const relatoriosDB: Relatorio[] = [
    {
        "codRelatorio": "0123",
        "dataHora": "2025-01-01T12:00:00-03:00",
        "data": "2025-01-01",
        "hora": "12:00",
        "tipo": "diario",
        "link": " "
    },
    {
        "codRelatorio": "0124",
        "dataHora": "2025-01-01T16:00:00-03:00",
        "data": "2025-01-01",
        "hora": "16:00",
        "tipo": "semanal",
        "link": " "
    },
    {
        "codRelatorio": "0125",
        "dataHora": "2025-01-05T12:00:00-03:00",
        "data": "2025-01-05",
        "hora": "12:00",
        "tipo": "mensal",
        "link": " "
    },
    {
        "codRelatorio": "0126",
        "dataHora": "2025-01-06T12:00:00-03:00",
        "data": "2025-01-06",
        "hora": "12:00",
        "tipo": "anual",
        "link": " "
    }
]