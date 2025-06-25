import { InterfaceRegistros } from "../models/interfaces";
import { InterfaceExames, examesDB } from "../models/interfaces/InterfaceExames";
import getDataHora from "../../backend/utils/getDataHora"; const getdatahora = new getDataHora();
import fracionarArray from "../../backend/utils/fracionarArray"; const fracionararray = new fracionarArray();

export default class ExameListaChegada {

    limiteCarregamentoDeExames: number = 10;
    arrayPrincipal: InterfaceRegistros[]
    //data = getdatahora.

    constructor(array: InterfaceRegistros[]) {
        this.arrayPrincipal = array;
    }

    atualizarArray(array: InterfaceRegistros[]): void {
        this.arrayPrincipal = array;
    }

    getInfo(){
        let exames = examesDB.forEach(exame => {
            
        })
    }

    // item individuas do card com o exame
    ItemLista(): string {
        const item: string = `
        <li>
            <p class="hora-nome">13:00 - Nome Completo Paciente</p>
            <div class="genero-idade">
                <p>Gênero: Fem</p>
                <p>Idade: 21 anos</p>
            </div>
            <div class="confirmacao-btns">
                <p>Presença Não Confirmada</p>
                <div class="btns">
                    <button class="confirmacao-btns-abrir">Abrir</button>
                    <button class="confirmacao-btns-confirmar">Confirmar</button>
                </div>
            </div>
        </li>
    `
        return item;
    }

    //configurar um valor limite de agendamentos p/dia e color no parâmetro 'limite'
    AgruparItensLista(limite: number = this.limiteCarregamentoDeExames) {

        const arrayFracionado: InterfaceRegistros[] = fracionararray.fracionarTudo();
        let dadosExame: InterfaceExames

        for (let array in arrayFracionado) {
            
        }

    }

    // cards agrupados em uma ul, com limite de quantidade de carregamento
    //só é chamado quando há algum exame pra ser realizado no dia
    UlExameListaChegada(): string {

        const itens: string = '';
        const lista: string = `<ul class="lista-exames">${itens}</ul>`;

        const data = getdatahora.dataHoraPadrao()
        const el: string = `
        <div class="text-area">
            <h1>Próximos Exames</h1>
            <p>data atual: ${getdatahora.dataHoraFormatoBrasil(data)}</p>
        </div>
        ${lista}
    `;

        return el;

    }

    //add escutadores de evento e rodapé
    ExamesListaChegada() {

    }
}