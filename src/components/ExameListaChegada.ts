import { InterfaceRegistros } from "../models/interfaces";
import getDataHora from "../utils/getDataHora"; const getdatahora = new getDataHora();

export default class ExameListaChegada {

    limiteCarregamentoDeExames: number = 50;

    // item individuas do card com o exame
    ItemLista() {
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
    AgruparItensLista(limite: number = this.limiteCarregamentoDeExames, array: InterfaceRegistros[]) {
        

        let count: number = 0;

        //

        while (count <= array.length){

        }
    }

    // cards agrupados em uma ul, com limite de quantidade de carregamento
    //só é chamado quando há algum exame pra ser realizado no dia
    UlExameListaChegada() {

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