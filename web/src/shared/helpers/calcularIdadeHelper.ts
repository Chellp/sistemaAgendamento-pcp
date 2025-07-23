import getDataHora from "./getDataHoraHelper"; const getdatahora = new getDataHora();

export default function calcularIdade(dtNasc: string): number {

    const dt = new Date(dtNasc)
    const diaNasc: number = getdatahora.getDia(dt);
    const mesNasc: number = getdatahora.getMes(dt);
    const anoNasc: number = getdatahora.getAno(dt);


    const hoje = new Date();
    const diaAtual: number = getdatahora.getDia(hoje);
    const mesAtual: number = getdatahora.getMes(hoje);
    const anoAtual: number = getdatahora.getAno(hoje);

    let idade: number = anoAtual - anoNasc;

    if(mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)){
        idade--
    }

    return idade
}