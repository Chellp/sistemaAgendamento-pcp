import calcularIdade from "../../helpers/calcularIdade";

export default function validarIdadeUtils(dt_nasc: string): string | null {

    let response: string = ''
    dt_nasc = dt_nasc || ''; // Converte a data para string ISO

    function calcIdade(): number {
        try {
            const idade = calcularIdade(dt_nasc);
            return idade;
        } catch (error) {
            console.error("Erro ao calcular a idade:", error);
            return -1; // Retorna -1 em caso de erro  
        }
    }

    if (dt_nasc === '') {
        return " - Data de nascimento do paciente não informada.";
    } else if (dt_nasc) {
        // Verifica se a data de nascimento é válida
        const dataValida = new Date(dt_nasc);
        if (isNaN(dataValida.getTime())) {
            response += " - Data de nascimento do paciente inválida.";
        } else {
            const idade = calcIdade();
            if (idade < 0 || idade > 120) {
                response += ` - Idade inválida: ${idade}. Deve estar entre 0 e 120 anos.`;
            }
        }
    } else {
        response += ` - Data de nascimento do paciente Deve estar no formato ISO: ${dt_nasc}. `;
    }
    return response;
}